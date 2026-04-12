const { users } = require('../schema')

exports.addUser = async (req, res) => {
    console.log("Inside add user controller")
    console.log(req.body)

    try {
        const newUser = new users(req.body)
        await newUser.save()
        res.status(201).json({ message: "User added successfully", user: newUser })
    } catch (error) {
        console.error("Error adding user:", error)
        res.status(500).json({ message: "Failed to add user", error: error.message })
    }
}