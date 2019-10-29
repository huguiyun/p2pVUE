<template>
  <div style="background-color:white;margin-top: -50px">
    <!--前台界面-->
    <el-row >
      <el-row style="margin-left: 700px;">
        <el-col style="color: rgb(52, 45, 45); margin-left: 500px;" :span="3">
          <a href="http://www.magicalcoder.com"><i class="el-icon-user" style="color: rgb(92, 86, 86);">登录</i></a>
        </el-col>
        <el-col style="color: rgb(52, 45, 45);" :span="3">
         <a href="http://www.magicalcoder.com">
          <i class="el-icon-thumb" style="color: rgb(92, 86, 86);">注册</i>
         </a>
        </el-col>
      </el-row>
      <el-col>

        <el-menu router :default-active="$route.path" style="background-color: rgb(45,138,252);" mode="horizontal">
          <el-menu-item style="margin-left: 920px; text-indent: 0px; font-size: 18px; color: rgb(247, 238, 238); background-color: rgb(45,138,252);" index="/reception/ReceptionHome">首页</el-menu-item>
          <el-menu-item style="font-size: 18px; color: rgb(242, 238, 238); background-color: rgb(45,138,252);" index="/lixin/Bidding">我要借款</el-menu-item>
          <el-menu-item style="font-size: 18px; color: rgb(247, 242, 242); background-color: rgb(45,138,252);" index="/lixin/Bid">我要投资</el-menu-item>
          <el-menu-item style="font-size: 18px; color: rgb(249, 245, 245); background-color: rgb(45,138,252);" index="/reception/UserCenter">个人中心</el-menu-item>
          <el-menu-item style="font-size: 18px; color: rgb(242, 237, 237); background-color: rgb(45,138,252);" index="3~~b3131e94-ac9c-4cc4-a851-0064adfd4d44">关于我们</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

    <router-view></router-view>
  </div>
</template>

<script>
  // 导入组件

  // 导出模块
  export default {
    data(){
      return{

      };
    },
    components:{

    }
  };
</script>
<style scoped>


</style>
