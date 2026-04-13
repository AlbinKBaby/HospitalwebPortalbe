// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const { users } = require('./schema'); // adjust path if needed

// // 🔗 connect DB (use your connection string)
// mongoose.connect('mongodb://127.0.0.1:27017/yourDBname')
//   .then(() => console.log("DB Connected"))
//   .catch(err => console.log(err));

// const resetPassword = async () => {
//   const hash = await bcrypt.hash("admin123", 10);

//   await users.updateOne(
//     { username: "admin" },
//     { $set: { passwordHash: hash } }
//   );

//   console.log("✅ Password updated to admin123");
//   process.exit();
// };

// resetPassword();