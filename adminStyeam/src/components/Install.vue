<template>
  <div class="warp">
    <el-steps :active="active" finish-status="success">
      <el-step title="数据库信息"></el-step>
       <el-step title="超级管理员设置"></el-step>
      <el-step title="安装完成"></el-step>
    </el-steps>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">数据库地址</div>
      </el-col>
      <el-col :span="15">
        <el-input
          prefix-icon="el-icon-location"
          placeholder="请输入数据库地址"
          v-model="from.host"
          clearable
        ></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">数据库用户名</div>
      </el-col>
      <el-col :span="15">
        <el-input prefix-icon="el-icon-s-custom
" placeholder="请输入用户名" v-model="from.admin"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">数据库密码</div>
      </el-col>
      <el-col :span="15">
        <el-input prefix-icon="el-icon-view" placeholder="请输入密码" v-model="from.password" show-password></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">数据库表名</div>
      </el-col>
      <el-col :span="15">
        <el-input prefix-icon="el-icon-document
" placeholder="请输入表名" v-model="from.dataBase" clearable></el-input>
      </el-col>
    </el-row>
    <el-row class = "btn-next">
      <el-col :span = "24">
    <el-button style="margin-top: 12px;" v-if="active !=0" @click="last">上一步</el-button>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { constants } from 'crypto';
export default {
  name: "Install",
  data() {
    return {
      from: {
        host: "localhost",
        admin: "",
        password: "",
        dataBase: ""
      },
      active: 0,
      isInstall:true
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
      console.log(this.from)
      // console.log(this.$ajax)
      this.$ajax.get("http://localhost:1080/ver").then((res)=>{
        console.log(res.data)
        if(res.data.msg == 1000 ){
          this.isInstall = false
        }else if(res.data.msg == 10004){
          this.isInstall = true
        }
      }).then(()=>{
        if(!this.isInstall){
          console.log("未安装")
        }else{
          console.log("可以安装")
        }
      })
    },
    last(){
      // this.active --
    }
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
