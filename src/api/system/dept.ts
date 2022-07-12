import request from "../request";

export function listAll(params: any) {
  return request({
    url: "system/dept",
    params,
  });
}
