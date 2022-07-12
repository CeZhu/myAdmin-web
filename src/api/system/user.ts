import request from "../request";

export function getUserPage(params: any) {
  return request({
    url: "system/user",
    params,
  });
}
