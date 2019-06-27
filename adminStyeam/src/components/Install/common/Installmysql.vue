<template>
<div>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="grid-content bg-purple">数据库地址</div>
    </el-col>
    <el-col :span="15">
      <el-input prefix-icon="el-icon-location" placeholder="请输入数据库地址" v-model= "$store.state.Install.mysqlFrom.host" clearable></el-input>
    </el-col>
  </el-row>
  <el-row  :gutter="20">
    <el-col :span="8">
      <div class="grid-content bg-purple">数据库用户名</div>
    </el-col>
    <el-col :span="15">
      <el-input prefix-icon="el-icon-s-custom
" placeholder="请输入用户名" v-model= "$store.state.Install.mysqlFrom.admin"></el-input>
    </el-col>
  </el-row>
  <el-row  :gutter="20">
    <el-col :span="8">
      <div class="grid-content bg-purple">数据库密码</div>
    </el-col>
    <el-col :span="15">
      <el-input
        prefix-icon="el-icon-view"
        placeholder="请输入密码"
        v-model= "$store.state.Install.mysqlFrom.password"
        show-password
      ></el-input>
    </el-col>
  </el-row>
  <el-row  :gutter="20">
    <el-col :span="8">
      <div class="grid-content bg-purple">数据库表名</div>
    </el-col>
    <el-col :span="15">
      <el-input
        prefix-icon="el-icon-document
"
        placeholder="请输入表名"
        v-model= "$store.state.Install.mysqlFrom.dataBase"
        clearable
      ></el-input>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: "Installadmin",
  data() {
    return {
    //   from: {
    //     host: "localhost",
    //     admin: "",
    //     password: "",
    //     dataBase: ""
    //   }
    };
  },
  mounted(){
      console.log(this)
  },
  methods: {
    // next() {
    //   // if (this.active++ > 2) this.active = 0;
    //   console.log(this.from);
    //   for (let item in this.from) {
    //     if (this.from[item] == "") {
    //       alert("必填信息不能为空");
    //       return;
    //     } else {
    //       this.$ajax
    //         .post("http://localhost:1080/install", this.from)
    //         .then(res => {
    //           console.log(res);
    //           if (res.data.msg == 1004) {
    //             this.$message({
    //               message: "链接失败，请检查信息是否正确",
    //               type: "warning"
    //             });
    //           } else if ((res.data.msg = 1000)) {
    //             this.active++;
    //           }
    //         });
    //       return;
    //     }
    //   }
    //   // console.log(this.$ajax)

    //   //  this.active ++
    // },
    // last() {
    //   this.active--;
    // }
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
.btn-next {
  text-align: center;
}
</style>
