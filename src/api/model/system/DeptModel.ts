import { BaseModel } from "../BaseModel";
export interface DeptModel extends BaseModel {
  name: string;
  subCount: number;
  enabled: boolean;
}
