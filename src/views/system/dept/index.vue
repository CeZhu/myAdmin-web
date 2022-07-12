<template>
  <div>
    <el-table :data="tableData">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="排序" prop="deptSort"></el-table-column>
      <el-table-column label="状态" prop="enabled"></el-table-column>
      <el-table-column label="创建日期" prop="createTime"></el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" icon="edit"></el-button>
        <el-button type="danger" icon="delete"></el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { listAll } from "@/api/system/dept";
export default defineComponent({
  setup() {
    let tableData = ref([]);
    const params = {};
    onMounted(() => {
      listAll(params).then((res) => {
        tableData.value = res.data;
      });
    });
    return {
      tableData,
    };
  },
});
</script>

<style scoped></style>
