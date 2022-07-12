import request from "../request";

export function getRolePage(params: any) {
  return request({
    url: "/system/role",
    params,
  });
}
