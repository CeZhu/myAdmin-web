import request from "../request";

export function getUserPage(params: any) {
  return request({
    url: "system/user",
    params,
  });
}

export function addUser(data: any) {
  return request({
    url: "system/user",
    method: "post",
    data,
  });
}
