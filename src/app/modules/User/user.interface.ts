import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface TUser {
  id: any;
  email: string;
  password: string;
  role: 'admin' | 'customer';
}

export interface UserModel extends Model<TUser> {
  isUserExists(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;