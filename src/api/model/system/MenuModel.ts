import { BaseModel } from "../BaseModel";
export interface MenuModel extends BaseModel {
  cache: boolean;
  component: string;
  hidden: boolean;
  icon: string;
  iframe: boolean;
  menuId: number;
  menuSort: number;
  name: string;
  path: string;
  permission: string;
  pid: number;
  subCount: number;
  title: string;
  type: number;
}
