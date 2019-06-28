<template>
  <div class="warp">
    <el-row  :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">数据库用户名</div>
      </el-col>
      <el-col :span="15">
        <el-input prefix-icon="el-icon-s-custom
" placeholder="请输入用户名" v-model= "$store.state.Install.adminFrom.admin"></el-input>
      </el-col>
    </el-row>
    <el-row  :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">数据库密码</div>
      </el-col>
      <el-col :span="15">
        <el-input prefix-icon="el-icon-view" placeholder="请输入密码" v-model= "$store.state.Install.adminFrom.password" show-password></el-input>
      </el-col>
    </el-row>
    <el-row  :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">数据库表名</div>
      </el-col>
      <el-col :span="15">
        <el-input prefix-icon="el-icon-document
" placeholder="请输入表名" v-model= "$store.state.Install.adminFrom.phone" clearable></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "Installadmin",
  data() {
    return {
     
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.warp {
  width: 50%;
  margin: 0 auto;
}
.from-warp {
  width: 100%;
  display: block;
  margin-top: 20px;
  padding-left: 20%;
}
.el-col {
  border-radius: 4px;
}
.el-row {
  margin-top: 20px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
}
.btn-next{
  text-align: center
}
</style>
