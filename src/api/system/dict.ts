import request from "../request";

export function getDictPage(params: any) {
  return request({
    url: "system/dict",
    params,
  });
}
