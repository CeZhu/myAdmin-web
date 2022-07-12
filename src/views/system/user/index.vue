<template>
  <div id="sys-users">
    <el-table :data="tableData">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column label="昵称" prop="nickName"></el-table-column>
      <el-table-column label="性别" prop="gender"></el-table-column>
      <el-table-column label="电话" prop="phone"></el-table-column>
      <el-table-column label="邮箱" prop="email"></el-table-column>
      <el-table-column label="部门" prop="dept"></el-table-column>
      <el-table-column label="状态" prop="enabled"></el-table-column>
      <el-table-column label="创建日期" prop="createTime"></el-table-column>
      <el-table-column label="操作">
        <template #default>
          <el-button type="primary" icon="edit"></el-button>
          <el-button type="danger" icon="delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import { getUserPage } from "@/api/system/user";

export default defineComponent({
  setup() {
    let tableData = ref([]);
    let page = reactive({ records: [] });
    const params = {
      current: 1,
      size: 10,
    };
    onMounted(() => {
      getUserPage(params).then((res) => {
        page = res.data;
        tableData.value = page.records;
      });
    });
    return {
      tableData,
      page,
    };
  },
});
</script>

<style scoped></style>
