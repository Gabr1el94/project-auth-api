import {Router} from 'express';

import authMiddlewares from './middlewares/authMiddlewares';

import UserController from './controllers/UserController'
import AuthController from './controllers/AuthController'

const router = Router();

router.post('/user',UserController.store);
router.post('/authUser',authMiddlewares, AuthController.auth);

export default router;