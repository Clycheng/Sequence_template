<template>
  <div class="warp">
    <!-- 步骤条 -->
    <el-steps :active="this.active" finish-status="success">
      <el-step title="数据库信息"></el-step>
      <el-step title="超级管理员设置"></el-step>
      <el-step title="安装完成"></el-step>
    </el-steps>
    <!-- intall组件 -->
    <installmysql v-if="!$store.state.Install.isInstalladmin"></installmysql>
    <installadmin v-if="$store.state.Install.isInstalladmin"></installadmin>
    <!-- next按钮 -->
    <el-row class="btn-next">
      <el-col :span="24">
        <el-button style="margin-top: 12px;" :plain="true" v-if="active !=0" @click="last">上一步</el-button>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Installadmin from "./common/Installadmin";
import Installmysql from "./common/Installmysql";
export default {
  name: "Install",
  components: {
    Installmysql,
    Installadmin
  },
  data() {
    return {
      from: {
        host: "localhost",
        admin: "",
        password: "",
        dataBase: ""
      },
      active: 0
    };
  },
  methods: {
    next() {
      switch (this.active) {
        case 0:
          this.addMysql(this.active);
          break;
        case 1:
           this.addAdmin(this.active);
          break;
        case 2:
          this.complete(this.active);
          break;
      }
      // if (this.active++ > 2) this.active = 0;
    },
    last() {
      this.active--;
      this.$store.state.Install.isInstalladmin = false;
    },
    // 添加数据库信息
    addMysql() {
      for (let item in this.$store.state.Install.mysqlFrom) {
        if (this.$store.state.Install.mysqlFrom[item] == "") {
          alert("必填信息不能为空");
          return;
        } else {
          this.$ajax
            .post(
              "http://localhost:1080/install",
              this.$store.state.Install.mysqlFrom
            )
            .then(res => {
              console.log(res);
              if (res.data.msg == 1004) {
                this.$message({
                  message: "链接失败，请检查信息是否正确",
                  type: "warning"
                });
              } else if ((res.data.msg = 1000)) {
                this.active++;
                this.$store.state.Install.isInstalladmin = true;
              }
            });
          return;
        }
      }
    },
    // 添加超级管理员
    addAdmin(){
      this.active ++;
      alert('添加管理员')
    },
    // 完成
    complete(){
      this.active ++;
      this.$router.push({
        path:'/',
        query:{
          admin:"admin",
          password:this.$store.state.Install.adminFrom.password
        }
      })
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
.btn-next {
  text-align: center;
}
</style>
