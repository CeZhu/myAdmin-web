<template>
  <div id="sys-users">
    <Crud @onCreate="handleCreate"></Crud>
    <CreateDialog
      :dialogVisible="dialogVisible"
      @update:dialogVisible="updateDialogVisible"
    ></CreateDialog>
    <el-table :data="tableData">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column label="昵称" prop="nickName"></el-table-column>
      <el-table-column label="性别" prop="gender"></el-table-column>
      <el-table-column label="电话" prop="phone"></el-table-column>
      <el-table-column label="邮箱" prop="email"></el-table-column>
      <el-table-column label="部门" prop="dept.name"></el-table-column>
      <el-table-column label="状态" prop="enabled"></el-table-column>
      <el-table-column
        label="创建日期"
        prop="createTime"
        width="200px"
      ></el-table-column>
      <el-table-column label="操作">
        <template #default>
          <el-button type="primary" icon="edit"></el-button>
          <el-button type="danger" icon="delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination
      :page="page"
      @onCurrentChange="handleCurrentChange"
      @onSizeChange="handleSizeChange"
    ></Pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import { getUserPage } from "@/api/system/user";
import Pagination from "@/components/pagination/index.vue";
import Crud from "@/components/crud/index.vue";
import CreateDialog from "./CreateDialog.vue";
export default defineComponent({
  setup() {
    let tableData = ref([]);
    let dialogVisible = ref(false);
    const page = reactive({
      current: 1,
      size: 10,
      total: 50,
      records: [],
    });
    const params = {
      current: 1,
      size: 10,
    };

    onMounted(() => {
      getUserData(params);
    });

    function getUserData(params: any) {
      getUserPage(params).then((res) => {
        page.total = res.data.total;
        page.records = res.data.records;
        tableData.value = res.data.records;
      });
    }

    function handleCurrentChange(current: number) {
      params.current = current;
      getUserData(params);
    }

    function handleSizeChange(size: number) {
      params.size = size;
      getUserData(params);
    }

    function handleCreate() {
      dialogVisible.value = true;
    }
    function updateDialogVisible(val: boolean) {
      dialogVisible.value = val;
    }
    return {
      tableData,
      page,
      handleCurrentChange,
      getUserData,
      handleSizeChange,
      handleCreate,
      dialogVisible,
      updateDialogVisible,
    };
  },
  components: { Pagination, Crud, CreateDialog },
});
</script>

<style scoped></style>
