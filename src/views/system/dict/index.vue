<template>
  <div>
    <el-row justify="space-between" gutter="20">
      <el-col :span="12">
        <el-card>
          <el-table :data="dictTableData" @row-click="getDictDetailById">
            <el-table-column type="selection"></el-table-column>
            <el-table-column label="名称" prop="name"></el-table-column>
            <el-table-column label="描述" prop="description"></el-table-column>
            <el-table-column label="操作">
              <el-button type="primary" icon="edit"></el-button>
              <el-button type="danger" icon="delete"></el-button>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>字典详情</span>
            </div>
          </template>
          <el-table :data="dictDetailTableData">
            <el-table-column label="所属字典" prop="dictId"></el-table-column>
            <el-table-column label="字典标签" prop="label"></el-table-column>
            <el-table-column label="字典值" prop="value"></el-table-column>
            <el-table-column label="排序" prop="dictSort"></el-table-column>
            <el-table-column label="操作">
              <el-button type="primary" icon="edit"></el-button>
              <el-button type="danger" icon="delete"></el-button>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import { getDictPage } from "@/api/system/dict";
import { getDictDetailPage } from "@/api/system/dictDetail";
export default defineComponent({
  setup() {
    let dictTableData = ref([]);
    let dictDetailTableData = ref([]);
    let dictPage = reactive({});
    let dictDetailPage = reactive({});
    const params = {
      current: 1,
      size: 10,
    };

    function getDictDetailById(row: any) {
      getDictDetailPage({ dictId: row.dictId }).then((res) => {
        dictDetailPage = res.data;
        dictDetailTableData.value = res.data.records;
      });
    }
    onMounted(() => {
      getDictPage(params).then((res) => {
        dictPage = res.data;
        dictTableData.value = res.data.records;
      });
    });

    return {
      dictPage,
      dictDetailPage,
      dictTableData,
      dictDetailTableData,
      getDictDetailById,
    };
  },
});
</script>

<style scoped></style>
