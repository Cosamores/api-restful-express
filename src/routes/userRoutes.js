import express from 'express';
import listUser from '../controllers/user/listUser.js';
import editUser from '../controllers/user/editUser.js';
import createUser from '../controllers/user/createUser.js'
import userById from '../controllers/user/userById.js';

const router = express.Router();

  router.post('/', createUser)
  router.get('/', listUser)
  router.get('/:id:', userById)
  router.put('/:id', editUser)
  
export default router;
