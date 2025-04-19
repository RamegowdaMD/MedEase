import express from "express";
import authUser  from "../middleware/auth.js";
// import { adminAuth } from "../middleware/adminAuth.js";

import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  userOrders,
  allOrders,
  updateStatus,
} from "../controllers/orderController.js";


const orderRouter = express.Router();

//admin feature
orderRouter.post("/status", updateStatus);
orderRouter.post("/list", allOrders);

//payment feature

orderRouter.post('/place', authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

//user feature
orderRouter.post("/userorders", authUser, userOrders);


export default orderRouter;
