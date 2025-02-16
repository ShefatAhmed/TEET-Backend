import { Model, Types } from "mongoose";

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TCustomer = {
  user: Types.ObjectId;
  name: TUserName;
  email: string;
  contactNo: string;
};

export interface CustomerModel extends Model<TCustomer> {
  isUserExists(id: string): Promise<TCustomer | null>;
}
