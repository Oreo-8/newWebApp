<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="19">
        <el-card class="box-card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first" />
            <el-tab-pane label="配置管理" name="second" />
            <el-tab-pane label="角色管理" name="third" />
            <el-tab-pane label="定时任务补偿" name="fourth" />
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="5"><el-card class="box-card"></el-card></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "blogMain",
  data() {
    return {
      activeName: "",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped>
</style>