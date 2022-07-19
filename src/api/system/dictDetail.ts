import request from "../request";

export function getDictDetailPage(params: any) {
  return request({
    url: "system/dictDetail",
    params,
  });
}
