import { BaseModel } from "../BaseModel";
import { DeptModel } from "./DeptModel";
export interface UserModel extends BaseModel {
  username: string;
  nickName: string;
  gender: string;
  email: string;
  phone: string;
  avatarName: string;
  avatarPath: string;
  isAdmin: boolean;
  enabled: number;
  dept: DeptModel;
}
