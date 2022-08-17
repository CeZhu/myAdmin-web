<template>
  <div>
    <el-dialog v-model="dialogShow" title="title" width="30%">
      <el-form
        ref="ruleFormRef"
        label-position="right"
        label-width="66px"
        :rules="rules"
        :model="form"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电话" prop="phone">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="昵称" prop="nickName">
              <el-input v-model="form.nickName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="部门">
              <el-select v-model="form.dept" :placeholder="selectPlaceHolder">
                <el-option
                  v-for="item in deptOptions"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="岗位">
              <el-select v-model="form.job" :placeholder="selectPlaceHolder">
                <el-option
                  v-for="item in jobOptions"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="性别">
              <el-radio-group v-model="form.gender">
                <el-radio label="男">男</el-radio>
                <el-radio label="女">女</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态">
              <el-radio-group v-model="form.enabled">
                <el-radio :label="1">启用</el-radio>
                <el-radio :label="0">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="角色">
              <el-select v-model="form.role" :placeholder="selectPlaceHolder">
                <el-option
                  v-for="item in roleOptions"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button
            @click="
              dialogShow = false;
              resetForm(ruleFormRef);
            "
            >取消</el-button
          >
          <el-button
            type="primary"
            @click="
              dialogShow = false;
              resetForm(ruleFormRef);
            "
            >提交</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref, onMounted } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { listAll } from "@/api/system/dept";
import { getJobList } from "@/api/system/job";
import { getRoleList } from "@/api/system/role";
export default defineComponent({
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const form = reactive({
      username: "",
      phone: "",
      nickName: "",
      email: "",
      dept: "",
      job: "",
      gender: "男",
      enabled: 0,
      role: "",
    });
    const rules = reactive<FormRules>({
      username: [
        { required: true, message: "用户名不得为空", trigger: "blur" },
      ],
      phone: [{ required: true, message: "电话不得为空", trigger: "blur" }],
      nickName: [{ required: true, message: "昵称不得为空", trigger: "blur" }],
      email: [{ required: true, message: "邮箱不得为空", trigger: "blur" }],
    });
    const ruleFormRef = ref<FormInstance>();
    const dialogShow = computed({
      get: () => props.dialogVisible,
      set: (val) => ctx.emit("update:dialogVisible", val),
    });
    let selectPlaceHolder = ref("请选择");

    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!", fields);
        }
      });
    };

    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.resetFields();
    };

    const deptOptions = ref([] as any[]);
    const jobOptions = ref([] as any[]);
    const roleOptions = ref([] as any[]);
    onMounted(() => {
      listAll({}).then((res) => {
        deptOptions.value = res.data;
      });
      getJobList({}).then((res) => {
        jobOptions.value = res.data;
      });
      getRoleList({}).then((res) => {
        roleOptions.value = res.data;
      });
    });

    return {
      form,
      dialogShow,
      selectPlaceHolder,
      rules,
      ruleFormRef,
      submitForm,
      resetForm,
      deptOptions,
      jobOptions,
      roleOptions,
    };
  },
});
</script>

<style scoped></style>
