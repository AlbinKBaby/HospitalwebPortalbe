const { medicalTests } = require('../schema')

// Add new medical test
exports.addMedicalTest = async (req, res) => {
    console.log("Inside add medical test controller")
    console.log(req.body)

    try {
        const newTest = new medicalTests(req.body)
        await newTest.save()
        res.status(201).json({ message: "Medical test added successfully", test: newTest })
    } catch (error) {
        console.error("Error adding medical test:", error)
        res.status(500).json({ message: "Failed to add medical test", error: error.message })
    }
}

// Get all medical tests
exports.getAllMedicalTests = async (req, res) => {
    console.log("Inside get all medical tests controller")

    try {
        const tests = await medicalTests.find()
        res.status(200).json(tests)
    } catch (error) {
        console.error("Error fetching medical tests:", error)
        res.status(500).json({ message: "Failed to fetch medical tests", error: error.message })
    }
}

// Get medical test by ID
exports.getMedicalTestById = async (req, res) => {
    console.log("Inside get medical test by ID controller")

    try {
        const test = await medicalTests.findById(req.params.id)
        if (!test) {
            return res.status(404).json({ message: "Medical test not found" })
        }
        res.status(200).json(test)
    } catch (error) {
        console.error("Error fetching medical test:", error)
        res.status(500).json({ message: "Failed to fetch medical test", error: error.message })
    }
}

// Update medical test
exports.updateMedicalTest = async (req, res) => {
    console.log("Inside update medical test controller")

    try {
        const updatedTest = await medicalTests.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
        if (!updatedTest) {
            return res.status(404).json({ message: "Medical test not found" })
        }
        res.status(200).json({ message: "Medical test updated successfully", test: updatedTest })
    } catch (error) {
        console.error("Error updating medical test:", error)
        res.status(500).json({ message: "Failed to update medical test", error: error.message })
    }
}

// Delete medical test
exports.deleteMedicalTest = async (req, res) => {
    console.log("Inside delete medical test controller")

    try {
        const deletedTest = await medicalTests.findByIdAndDelete(req.params.id)
        if (!deletedTest) {
            return res.status(404).json({ message: "Medical test not found" })
        }
        res.status(200).json({ message: "Medical test deleted successfully" })
    } catch (error) {
        console.error("Error deleting medical test:", error)
        res.status(500).json({ message: "Failed to delete medical test", error: error.message })
    }
}

// Approve medical test
exports.approveMedicalTest = async (req, res) => {
    console.log("Inside approve medical test controller")

    try {
        const { approvedBy } = req.body
        const updatedTest = await medicalTests.findByIdAndUpdate(
            req.params.id,
            {
                approvalStatus: 'Approved',
                approvedDate: new Date(),
                approvedBy: approvedBy || 'supervisor',
                rejectionReason: null
            },
            { new: true }
        )
        if (!updatedTest) {
            return res.status(404).json({ message: "Medical test not found" })
        }
        res.status(200).json({ message: "Medical test approved successfully", test: updatedTest })
    } catch (error) {
        console.error("Error approving medical test:", error)
        res.status(500).json({ message: "Failed to approve medical test", error: error.message })
    }
}

// Reject medical test
exports.rejectMedicalTest = async (req, res) => {
    console.log("Inside reject medical test controller")

    try {
        const { rejectionReason } = req.body
        const updatedTest = await medicalTests.findByIdAndUpdate(
            req.params.id,
            {
                approvalStatus: 'Rejected',
                rejectionReason: rejectionReason,
                approvedDate: null,
                approvedBy: null
            },
            { new: true }
        )
        if (!updatedTest) {
            return res.status(404).json({ message: "Medical test not found" })
        }
        res.status(200).json({ message: "Medical test rejected successfully", test: updatedTest })
    } catch (error) {
        console.error("Error rejecting medical test:", error)
        res.status(500).json({ message: "Failed to reject medical test", error: error.message })
    }
}