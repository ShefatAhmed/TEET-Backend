import bcrypt from "bcrypt";
import httpStatus from "http-status";
import mongoose from "mongoose";
import { TUser } from "./user.interface";
import { TCustomer } from "../Customer/customer.interface";
import { User } from "./user.model";
import { Customer } from "../Customer/customer.model";
import AppError from "../../errors/AppError";

const createCustomerIntoDB = async (password: string, payload: TCustomer) => {
  const hashedPassword = await bcrypt.hash(password || "123456abcd", 10);

  const userData: Partial<TUser> = {
    password: hashedPassword,
    role: "customer",
    email: payload.email,
  };

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }

    payload.user = newUser[0]._id;

    const newCustomer = await Customer.create([payload], { session });

    if (!newCustomer.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create customer");
    }

    await session.commitTransaction();
    await session.endSession();

    return newCustomer;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err as string);
  }
};

export const UserServices = {
  createCustomerIntoDB,
};
