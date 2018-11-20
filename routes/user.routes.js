const userController = require('./../controllers/userController');
const { catchErrors } = require('./../handlers/errorHandlers');

const userRoutes = router => {
  // get
  router.get('/login', userController.loginForm);
  router.get('/register', userController.registerForm);
  //post
  // router.post('/login', )
  router.post('/register', userController.validateRegister);

};

module.exports = userRoutes;
