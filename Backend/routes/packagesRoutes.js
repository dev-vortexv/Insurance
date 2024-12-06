import { Router } from "express";
import Package from "../controllers/packages";
import auth from "../middlewares/auth";
const router = Router();

router.get("/list", auth, Package.getList);
router.post("/add", auth, Package.add);
router.put("/edit/:id", auth, Package.edit);
router.delete("/delete/:id", auth, Package.deleteData);

export default router;
