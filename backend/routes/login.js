import express from "express";
const router = express.Router();
import { loginUser } from "../controllers/loginController.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { userSchema } from "../validations/authValidation.js";
router.post("/", validateSchema(userSchema), loginUser);

export default router;
