import { USER_ROLE } from './user.constant';

export interface TUser {
  email: string;
  password: string;
  role: 'admin' | 'customer';
}

export type TUserRole = keyof typeof USER_ROLE;