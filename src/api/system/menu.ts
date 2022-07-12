import request from "../request";

export const getMenuPage = (params: any) =>
  request({
    url: "/system/menu",
    params,
  });
