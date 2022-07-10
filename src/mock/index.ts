export const menu = [
  {
    name: "首页",
    icon: "house",
    index: "/",
  },
  {
    name: "系统管理",
    icon: "goods",
    index: "2",
    submenu: [
      { name: "用户管理", index: "/system/users" },
      { name: "角色管理", index: "/system/role" },
      { name: "菜单管理", index: "/system/menu" },
      { name: "部门管理", index: "/system/dept" },
      { name: "岗位管理", index: "/system/job" },
      { name: "字典管理", index: "/system/dict" },
      { name: "任务调度", index: "/system/timing" },
    ],
  },
  {
    name: "系统监控",
    icon: "location",
    index: "3",
    submenu: [
      { name: "在线用户", index: "3-1" },
      { name: "操作日志", index: "3-2" },
      { name: "异常日志", index: "3-3" },
      { name: "服务监控", index: "3-4" },
    ],
  },
];
