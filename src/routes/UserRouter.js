const express = require('express');
const routes = express.Router();
const userController = require('../contronllers/UserController');
const { authMiddleware, authUserMiddleware } = require('../middleware/authMiddleware');
const { authUserMiddlewareNoneToken } = require('../middleware/authMiddleware');
const uploadFileMiddleware = require('../middleware/fileUpload');

//[POST] http://localhost:3001/api/user/signup
routes.post('/signup', userController.createUser);

//[POST] http://localhost:3001/api/user/login
routes.post('/login', userController.loginUser);

//[POST] http://localhost:3001/api/user/logout
routes.post('/logout', userController.logoutUser);

//[PUT] http://localhost:3001/api/user/updateUser/:id
// routes.put('/updateUser/:id', authUserMiddleware, userController.updateUser);
routes.put('/updateUser/:id', userController.updateUser);

//[DELETE] http://localhost:3001/api/user/deleteUser/:id
routes.delete('/deleteUser/:id', authMiddleware, userController.deleteUser);

//[GET] http://localhost:3001/api/user/getAllUser
routes.get('/getAllUser', authMiddleware, userController.getAllUser);

//[GET] http://localhost:3001/api/user/getDetailsUser/:id
routes.get('/getDetails/:id', authUserMiddleware, userController.getDetailsUser);

//localhost:3001/api/user/refreshToken
routes.post('/refreshToken', userController.refreshToken);

//localhost:3001/api/user/uploadAvatar
routes.post('/uploadAvatar', uploadFileMiddleware.single('file'), userController.uploadAvatar);

//[GET] http://localhost:3001/api/user/getAllFiend/:id
routes.get('/getAllFiend/:id', userController.getAllFriend);
//[GET] http://localhost:3001/api/user/getDetailsByPhone/:phone
routes.get('/getDetailsByPhone/:phone',userController.getDetailByPhone)


module.exports = routes;
