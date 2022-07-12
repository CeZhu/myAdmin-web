import request from "../request";

export function getJobPage(params: any) {
  return request({
    url: "system/job",
    params,
  });
}
