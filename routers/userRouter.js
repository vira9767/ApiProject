import express from 'express'
import { createUser ,loginUser,updateUser} from '../controller/userController.js';
let userRouter = express.Router()


userRouter.post('/createuser',createUser)
userRouter.post('/loginuser',loginUser)
userRouter.post('/updateuser',updateUser)

export  default userRouter;