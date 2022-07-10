import request from "../request";

export const getMenuList = (params: any) =>
  request({
    url: "/system/menu",
    params,
  });
