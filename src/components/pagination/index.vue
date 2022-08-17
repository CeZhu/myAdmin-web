<template>
  <div id="pagination">
    <el-pagination
      layout="total,prev, pager, next,sizes,jumper"
      :total="propsPage.total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  props: {
    page: {
      type: Object,
    },
  },
  setup(props: any, context: any) {
    const propsPage = reactive(props.page);
    function handleCurrentChange(current: number) {
      context.emit("onCurrentChange", current);
    }
    function handleSizeChange(size: number) {
      context.emit("onSizeChange", size);
    }
    return {
      handleCurrentChange,
      propsPage,
      handleSizeChange,
    };
  },
});
</script>

<style scoped>
#pagination {
  margin: 20px 0;
}
</style>
