import request from "../request";

export function getRolePage(params: any) {
  return request({
    url: "/system/role",
    params,
  });
}

export function getRoleList(params: any) {
  return request({
    url: "/system/role/list",
    params,
  });
}
