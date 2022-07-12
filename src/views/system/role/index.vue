<template>
  <div>
    <el-table :data="tableData">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="数据权限" prop="dataScope"></el-table-column>
      <el-table-column label="角色级别" prop="level"></el-table-column>
      <el-table-column label="描述" prop="description"></el-table-column>
      <el-table-column label="创建日期" prop="createTime"></el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" icon="edit"></el-button>
        <el-button type="danger" icon="delete"></el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import { getRolePage } from "@/api/system/role";
export default defineComponent({
  setup() {
    let tableData = ref([]);
    let page = reactive({});
    const params = {
      current: 1,
      size: 10,
    };
    onMounted(() => {
      getRolePage(params).then((res) => {
        page = res.data;
        tableData.value = res.data.records;
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
