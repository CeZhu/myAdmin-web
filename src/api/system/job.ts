import request from "../request";

export function getJobPage(params: any) {
  return request({
    url: "system/job",
    params,
  });
}

export function getJobList(params: any) {
  return request({
    url: "system/job/list",
    params,
  });
}
