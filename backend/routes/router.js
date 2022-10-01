import express from 'express';
import { checkoout, verify } from '../controller/PayCont.js';
const router =express.Router();

router.route('/pay').post(checkoout)
router.route('/verify').post(verify)
export default router
