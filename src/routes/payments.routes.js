import { Router } from "express";
import { createOrder, receiveWebhook } from "../controllers/payments.controller.js";

const router = Router()

router.post('/create-order', createOrder);

router.get('/success', (req,res)=> res.send('success'));

router.get('/failure', (req,res)=> res.send('success'));

router.get('/pending', (req,res)=> res.send('success'));


router.post('/webhook', receiveWebhook);


export default router