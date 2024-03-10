import { Router } from "express";
import { DoctorValidation } from "./validation";
import { DoctorController } from "./controller";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();
const { ZCreateADoctor } = DoctorValidation;
const { createADoctor } = DoctorController;

router.post("/", validateRequest(ZCreateADoctor), createADoctor);

export const DoctorRoutes = router;
