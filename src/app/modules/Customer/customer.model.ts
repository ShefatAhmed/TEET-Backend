import { Schema, model } from "mongoose";
import { CustomerModel, TCustomer, TUserName } from "./customer.interface";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    trim: true,
    maxlength: [20, "Name can not be more than 20 characters"],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Last Name is required"],
    maxlength: [20, "Name can not be more than 20 characters"],
  },
});

const customerSchema = new Schema<TCustomer, CustomerModel>({
  name: {
    type: userNameSchema,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  contactNo: { type: String, required: [true, "Contact number is required"] },
});

export const Customer = model<TCustomer, CustomerModel>(
  "Customer",
  customerSchema
);
