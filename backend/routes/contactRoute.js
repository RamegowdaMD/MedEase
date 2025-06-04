import express from 'express';
import {submitContactForm} from '../controllers/contactController.js';


const contactRouter = express.Router();

contactRouter.post('/submsg',submitContactForm);

export default contactRouter;

