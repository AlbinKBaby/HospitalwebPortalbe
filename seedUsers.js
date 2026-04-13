// const mongoose = require('mongoose');
// require('dotenv').config();
// const bcrypt = require('bcryptjs');
// const { users } = require('./schema'); // adjust path if needed

// mongoose.connect(process.env.CONNECTION_STRING)
//   .then(() => console.log("DB Connected"))
//   .catch(err => console.log(err));

// const seedUsers = async () => {
//   try {
//     // 🔐 Hash passwords
//     const adminPass = await bcrypt.hash("admin123", 10);
//     const supervisorPass = await bcrypt.hash("super123", 10);

//     // ❌ Avoid duplicate users
//     const adminExists = await users.findOne({ username: "admin" });
//     const supervisorExists = await users.findOne({ username: "supervisor" });

//     if (!adminExists) {
//       await users.create({
//         username: "admin",
//         passwordHash: adminPass,
//         role: "admin"
//       });
//       console.log("✅ Admin created");
//     } else {
//       console.log("⚠️ Admin already exists");
//     }

//     if (!supervisorExists) {
//       await users.create({
//         username: "supervisor",
//         passwordHash: supervisorPass,
//         role: "supervisor"
//       });
//       console.log("✅ Supervisor created");
//     } else {
//       console.log("⚠️ Supervisor already exists");
//     }

//     process.exit();
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

// seedUsers();