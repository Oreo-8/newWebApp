<template>
  <div id="my-user-menu">
    <div style="text-align: center">
      <el-avatar icon="el-icon-user-solid" :size="60"></el-avatar>
    </div>
    <div style="text-align: center">未登录</div>
    <div style="text-align: center"><el-tag size="small">游客</el-tag></div>
    <el-divider content-position="left">
      <i class="el-icon-menu"></i>
    </el-divider>
    <div>
      <el-menu>
        <el-menu-item index="1">
          <i class="el-icon-user"></i>
          <span slot="title">登录</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-paperclip"></i>
          <span slot="title">注册</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "myUserMenu",
};
</script>
<style scoped>
#my-user-menu {
  padding: 8px;
}
</style>