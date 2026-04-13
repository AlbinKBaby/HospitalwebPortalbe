const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { users } = require('../schema');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await users.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

     const isMatch = await bcrypt.compare(password, user.passwordHash);
    console.log("Match:", isMatch); // 👈 debug

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      role: user.role
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};