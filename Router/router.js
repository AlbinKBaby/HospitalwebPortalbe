const express = require('express')
const router = new express.Router()
const userController =  require('../Controller/userController')
const medicalTestController = require('../Controller/medicalTestController')

// User routes
router.post('/user/add', userController.addUser)

// Medical Test routes
router.post('/medical-tests', medicalTestController.addMedicalTest)
router.get('/medical-tests', medicalTestController.getAllMedicalTests)
router.get('/medical-tests/:id', medicalTestController.getMedicalTestById)
router.put('/medical-tests/:id', medicalTestController.updateMedicalTest)
router.delete('/medical-tests/:id', medicalTestController.deleteMedicalTest)
router.put('/medical-tests/:id/approve', medicalTestController.approveMedicalTest)
router.put('/medical-tests/:id/reject', medicalTestController.rejectMedicalTest)

module.exports = router