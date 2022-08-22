interface TreeNode {
  value: number;
  label: string;
  children: TreeNode[];
}

export function buildTree(list: any[], key: string): any[] {
  const arr = [];
  const map: Map<number, TreeNode> = new Map();
  for (let i = 0; i < list.length; i++) {
    const node: TreeNode = {
      value: list[i][key],
      label: list[i].name,
      children: [],
    };
    map.set(i, node);
  }

  for (let i = 0; i < list.length; i++) {
    const currentNode = map.get(i);
    if (list[i].pid === null) {
      arr.push(currentNode);
    }
    for (let j = 0; j < list.length; j++) {
      if (j === i) continue;
      if (list[i][key] === list[j].pid) {
        const childNode: TreeNode = {
          value: list[j][key],
          label: list[j].name,
          children: [],
        };
        currentNode?.children.push(childNode);
      }
    }
  }
  return arr;
}

/* const dept1 = {
  deptId: 2,
  pid: 7,
  name: "研发部",
};
const dept2 = {
  deptId: 5,
  pid: 7,
  name: "运维部",
};
const dept3 = {
  deptId: 6,
  pid: 8,
  name: "测试部",
};
const dept4 = {
  deptId: 7,
  pid: null,
  name: "华南分部",
};
const dept5 = {
  deptId: 8,
  pid: null,
  name: "华北分部",
};
const dept6 = {
  deptId: 15,
  pid: 8,
  name: "UI部门",
};

const arr = [dept1, dept2, dept3, dept4, dept5, dept6];
const result = buildTree(arr, "deptId");
console.log(result);
 */
