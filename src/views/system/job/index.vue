<template>
  <div>
    <el-table :data="tableData">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="排序" prop="jobSort"></el-table-column>
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
import { defineComponent, ref, reactive, onMounted } from "vue";
import { getJobPage } from "@/api/system/job";
export default defineComponent({
  setup() {
    let page = reactive({});
    let tableData = ref([]);
    const params = {
      current: 1,
      size: 10,
    };
    onMounted(() => {
      getJobPage(params).then((res) => {
        page = res.data;
        tableData.value = res.data.records;
      });
    });
    return {
      page,
      tableData,
    };
  },
});
</script>

<style scoped></style>
