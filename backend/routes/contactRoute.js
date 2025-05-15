import express from 'express';
import {submitContactForm} from '../controllers/contactController.js';

import authUser  from '../middleware/auth.js'; 


const contactRouter = express.Router();

contactRouter.post('/submsg',submitContactForm);


export default contactRouter;

