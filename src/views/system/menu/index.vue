<template>
  <div id="sys-menu">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="菜单标题" prop="title"></el-table-column>
      <el-table-column label="图标" prop="icon"></el-table-column>
      <el-table-column label="排序" prop="menuSort"></el-table-column>
      <el-table-column label="权限标识" prop="permission"></el-table-column>
      <el-table-column label="组件路径" prop="path"></el-table-column>
      <el-table-column label="外链" prop="iFrame"></el-table-column>
      <el-table-column label="缓存" prop="cache"></el-table-column>
      <el-table-column label="可见" prop="hidden"></el-table-column>
      <el-table-column
        label="创建日期"
        prop="createTime"
        width="200"
      ></el-table-column>
      <el-table-column label="操作" width="180">
        <template #default>
          <el-button type="primary" icon="edit"></el-button>
          <el-button type="danger" icon="delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { getMenuPage } from "@/api/system/menu";
export default defineComponent({
  setup() {
    let tableData = ref([]);
    let page = reactive({ records: [] });
    const params = {
      current: 1,
      size: 10,
    };
    onMounted(() => {
      getMenuPage(params).then((res) => {
        page = res.data;
        tableData.value = page.records;
        console.log(page);
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
