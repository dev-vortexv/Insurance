import { Router } from "express";
import Payment from "../controllers/payments";
import auth from "../middlewares/auth";
const router = Router();

router.get("/list", auth, Payment.getPayment);
router.get("/totalPayment", auth, Payment.getTotalPayment);
router.post("/add", auth, Payment.add);
router.put("/edit/:id", auth, Payment.edit);
router.delete("/delete/:id", auth, Payment.deleteData);

export default router;
