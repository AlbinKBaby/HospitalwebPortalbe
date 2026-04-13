// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const { users } = require('./schema'); // adjust path if needed

// mongoose.connect('mongodb://127.0.0.1:27017/yourDBname')
//   .then(() => console.log("DB Connected"))
//   .catch(err => console.log(err));

// const resetPassword = async () => {
//   const hash = await bcrypt.hash("super123", 10);

//   await users.updateOne(
//     { username: "supervisor" }, // 🔁 change if different username
//     { $set: { passwordHash: hash } }
//   );

//   console.log("✅ Supervisor password updated to super123");
//   process.exit();
// };

// resetPassword();