import {Router} from 'express';

import UserController from './controllers/UserController'

const router = Router();

router.post('/user',UserController.store);

export default router;