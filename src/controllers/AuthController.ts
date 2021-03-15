import bcrypt  from 'bcryptjs';
import { Request, Response } from "express"; 
import { getRepository } from "typeorm";
import User from "../models/User";
import jwt from 'jsonwebtoken';

class AuthController{
    async auth(req:Request, res:Response){
       const repository = getRepository(User);
       const {email, password} = req.body;

       const user = await repository.findOne({where: {email}});

       if (!user) {
           return res.sendStatus(401);
       }

       const isValidPassword = await bcrypt.compare(password,user.password);

       if (!isValidPassword) {
           return res.sendStatus(401)
       }

       const token = jwt.sign({id:user.id},'secret',{expiresIn:'1d'})
       var userResult = {id:user.id,email:user.email} ;
       
       return res.json({
           userResult,
           token
       })
    }
}

export default new AuthController();