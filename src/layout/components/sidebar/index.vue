<template>
  <div id="side-bar">
    <el-col>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        default-active="1"
        text-color="#fff"
        unique-opened
      >
        <template v-for="(submenu, index) in menuList" :key="index">
          <template v-if="submenu.submenu">
            <el-sub-menu :index="submenu.index">
              <template #title>
                <el-icon>
                  <component :is="submenu.icon"></component>
                </el-icon>
                <span>{{ submenu.name }}</span>
              </template>
              <el-menu-item
                v-for="(item, index) in submenu.submenu"
                :key="index"
                :index="item.index"
              >
                <span>{{ item.name }}</span>
              </el-menu-item>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="submenu.index">
              <el-icon>
                <component :is="submenu.icon"></component>
              </el-icon>
              <span>{{ submenu.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-col>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { menu } from "@/mock/index";
import { ref } from "vue";
export default defineComponent({
  setup() {
    const menuList = ref(menu);
    return {
      menuList,
    };
  },
});
</script>

<style scoped>
.el-col {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #545c64;
  width: 200px;
}
</style>
