import { registerUser, getUsers } from "./services.js";
import express from "express";
const router = express.Router();
import { validateSchema } from "../../middlewares/schemaValidation.js";
import { userSchema } from "../../validations/authValidation.js";
import {
  getCollection,
  getAllCollections,
  createNewCollection,
  addNewCollectionItem,
} from "./servicesCollections.js";
import {
  deleteUsers,
  blockUsers,
  unblockUsers,
} from "./servicesAdminActions.js";
router.get("/", getUsers);

router.post("/register", validateSchema(userSchema), registerUser);

router.get("/collections/getone/:id", getCollection);
router.get("/collections/all", getAllCollections);
router.post("/collections/add", createNewCollection);
router.post("/collections/additem", addNewCollectionItem);

router.post("/delete", deleteUsers);
router.post("/unblock", unblockUsers);
router.post("/block", blockUsers);
export { router as usersRouter };