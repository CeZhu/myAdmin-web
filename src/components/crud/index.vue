<template>
  <div id="crud">
    <el-button type="primary" @click="handleCreate"
      ><el-icon><Plus /></el-icon>新增</el-button
    >
    <el-button type="success" @click="handleEdit"
      ><el-icon><EditPen /></el-icon>修改</el-button
    >
    <el-button type="danger" @click="handleDelete"
      ><el-icon><Delete /></el-icon>删除</el-button
    >
    <el-button type="warning" @click="handleExport"
      ><el-icon><Download /></el-icon>导出</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(props, ctx) {
    function handleCreate() {
      ctx.emit("onCreate");
    }
    function handleEdit() {
      ctx.emit("onEdit");
    }
    function handleDelete() {
      ctx.emit("onDelete");
    }
    function handleExport() {
      ctx.emit("onExport");
    }

    return {
      handleCreate,
      handleEdit,
      handleDelete,
      handleExport,
    };
  },
});
</script>

<style scoped>
#crud {
  margin: 20px 0;
}
</style>
