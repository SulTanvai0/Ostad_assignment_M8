const express = require('express');
const router = express.Router();
//---------------------
const userController = require('../Controllers/userController');
const subAdminController = require('../Controllers/subAdminController');
const postController = require('../Controllers/postController');
const adminController = require('../Controllers/adminController');
//blogController apis 
router.get('/blogController/heading' , userController.headingData);
router.get('/blogController/sideNav' , userController.sideNavData);
router.get('/blogController/home' , userController.homeData);
router.get('/blogController/footer' , userController.footerData);

//commentController apis 
router.get('/commentController/heading' ,subAdminController.headingData );
router.get('/commentController/sideNav' , subAdminController.sideNavData);
router.get('/commentController/home' , subAdminController.homeData);
router.get('/commentController/footer' , subAdminController.footerData);



//portfolioController apis 
router.get('/portfolioController/heading' ,postController.headingData );
router.get('/portfolioController/sideNav' , postController.sideNavData);
router.get('/portfolioController/home' , postController.homeData);
router.get('/portfolioController/footer' , postController.footerData);

//productController apis 
router.get('/productController/heading' ,adminController.headingData );
router.get('/productController/sideNav' , adminController.sideNavData);
router.get('/productController/home' , adminController.homeData);
router.get('/productController/footer' , adminController.footerData);

module.exports  = router ;