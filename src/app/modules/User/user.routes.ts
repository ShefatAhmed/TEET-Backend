import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post("/create-customer", UserControllers.createCustomer);

export const UserRoutes = router;