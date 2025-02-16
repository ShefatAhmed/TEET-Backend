import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { UserServices } from "./user.services";

const createCustomer = catchAsync(async (req, res) => {
  const { password, customer: customerData } = req.body;
  const result = await UserServices.createCustomerIntoDB(password, customerData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

export const UserControllers = {
  createCustomer,
};