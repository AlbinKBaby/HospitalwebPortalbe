
const mongoose = require('mongoose')

// User Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    email: {
        type: String
    },
    mobileNumber: {
        type: Number
    },
    location: {
        type: String
    },
    course: {
        type: String
    }
})

// Medical Test Schema
const medicalTestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    testCode: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true,
        enum: ['Hematology', 'Radiology', 'Cardiology', 'Pathology', 'Microbiology', 'Biochemistry', 'Endocrinology', 'Immunology']
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        required: true,
        enum: ['Available', 'Limited Availability', 'Unavailable', 'Discontinued'],
        default: 'Available'
    },
    createdBy: {
        type: String,
        required: true,
        default: 'admin'
    },
    approvalStatus: {
        type: String,
        required: true,
        enum: ['Pending Approval', 'Approved', 'Rejected'],
        default: 'Pending Approval'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    approvedDate: {
        type: Date,
        default: null
    },
    approvedBy: {
        type: String,
        default: null
    },
    rejectionReason: {
        type: String,
        default: null
    }
})

// connect schema with collection
const users = mongoose.model("users", userSchema)
const medicalTests = mongoose.model("medicaltests", medicalTestSchema)

module.exports = { users, medicalTests }