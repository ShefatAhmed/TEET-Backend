import { Model, Types } from "mongoose";

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TCustomer = {
  [x: string]: import("mongoose").Schema.Types.ObjectId;
  payload: import("mongoose").Schema.Types.ObjectId;
  user: Types.ObjectId;
  name: TUserName;
  email: string;
  contactNo: string;
};

export interface CustomerModel extends Model<TCustomer> {
  isUserExists(id: string): Promise<TCustomer | null>;
}
