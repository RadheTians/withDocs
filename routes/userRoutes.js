const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const doctorController = require('./../controllers/doctorController');
const clinicController = require('./../controllers/clinicController');
const collegeController = require('./../controllers/collegeController');
const patientController = require('./../controllers/patientController');
const imageController = require('./../controllers/imageController');
const appointmentController = require('./../controllers/appointmentController');
const feedbackController = require('./../controllers/feedbackController');
const personalizationController = require('./../controllers/personalizationController');
const specialitiesController = require('./../controllers/specialitiesController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
//router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', userController.getMe, userController.getUser);
router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);

//router.use(authController.restrictTo('admin'));

router
  .route('/alldoctors')
  .get(doctorController.getAllDocProfile);

router
  .route('/doctor/')
  .get(doctorController.getDoctor)
  .post(doctorController.createDocProfile)
  .patch(doctorController.updateDocProfile);

router
  .route('/workinghours/')
  .get(clinicController.checkClinic);
  
router
  .route('/patient')
  .get(patientController.getAllPatientProfile)
  .post(patientController.createPatientProfile);


router
  .route('/patient/:id')
  .get(patientController.getPatient)
  .patch(patientController.updatePatientProfile);


router.get('/clinic',clinicController.getClinic);
router.post('/clinic',clinicController.createClinicProfile);
router.patch('/clinic',clinicController.updateClinicProfile);



router.post('/college',collegeController.createCollegeName);
router.post('/degree',collegeController.createDegree);
router.post('/education',collegeController.getCollegeAndDegree);

router
  .route('/membership')
  .get(collegeController.getMemberships)
  .post(collegeController.createMembership);

router
  .route('/specialitie')
  .post(specialitiesController.getSpecialities);

router.post('/primaryspecialitie',specialitiesController.createPrimarySpeciality);
router.post('/createClinicIssues',specialitiesController.createClinicIssues);

router
  .route('/image')
  .get(imageController.getImage)
  .post(imageController.uploadImage);

router
  .route('/appointment')
  .post(appointmentController.bookAppointment)
  .put(appointmentController.fatchAppointment);

router
  .route('/search/')
  .get(userController.getUser);


router
  .route('/feedback/')
  .get(feedbackController.getFeedback)
  .post(feedbackController.createFeedback)
  .patch(feedbackController.updateFeedback)  
  .delete(feedbackController.deleteFeedback)  

router
  .route('/feedback/reply/')
  .get(feedbackController.getReply)
  .post(feedbackController.createReply)
  .patch(feedbackController.updateReply)  
  .delete(feedbackController.deleteReply)
   

router
  .route('/feedback/reaction/')
  .post(feedbackController.postReaction)  

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.get('/trending',personalizationController.personalSearch);

module.exports = router;