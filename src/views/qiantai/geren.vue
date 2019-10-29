<template>
    <div>
      <el-container>
        <el-header height="61px">
          <el-col style="width: 100%; height: 50px;" :span="12">
            <el-link style="height: 50px; left: 350px; right: 0px;  position: relative;" plain icon="el-icon-s-home">返回首页</el-link>
            <el-link style="height: 50px; left: 430px;  position: relative;" icon="el-icon-user-solid">免费注册</el-link>
            <el-link style="height: 50px; left: 520px;  position: relative;">登入</el-link>
          </el-col>
          <el-col style="width: 100%; color: rgb(0, 43, 255); background-color: rgb(251, 252, 255); opacity: 0.7; height: 60px;" :span="12">
            <el-link style="width: 10%; height: 20px; left: 300px; bottom: -5px; top: 20px; font-weight: bold;" onclick="http:baidu.com">首页</el-link>
            <el-link style="width: 10%; left: 300px; top: 30%; bottom: 0px; font-weight: bold; height: 20px;">我要投资</el-link>
            <el-link style="width: 10%; left: 300px; top: 20px; font-weight: bold; height: 20px;">我要借款</el-link>
            <el-link style="width: 10%; margin-left: 0px; left: 300px; top: 20px; font-weight: bold; height: 20px;">我的账户</el-link>
            <el-link style="width: 10%; padding-top: 0px; padding-left: 0px; left: 300px; top: 20px; font-weight: bold;">关于我们</el-link>
          </el-col>
        </el-header>
        <el-container>
          <el-aside style="width: 15%; left: 20px; top: 0px; position: relative; right: 0px; top: 50px;" width="0px">
            <el-menu style="width: 100%;" mode="vertical" :collapse-transition="false">
              <el-menu-item style="width: 100%; text-align: center; font-weight: bold;" index>账户总览</el-menu-item>
              <el-menu-item style="width: 100%; text-align: center; font-weight: bold;" index="1">资金记录</el-menu-item>
              <el-menu-item style="width: 100%; text-align: center; font-weight: bold;" index="3">投资记录</el-menu-item>
              <el-menu-item style="width: 100%; text-align: center; font-weight: bold;" index="3">回款计划</el-menu-item>
              <el-menu-item style="width: 100%; text-align: center; font-weight: bold;" index="3">开通第三方</el-menu-item>
              <el-menu-item style="width: 100%; text-align: center; font-weight: bold;" index="3">充值</el-menu-item>
              <el-menu-item style="width: 100%; text-align: center; font-weight: bold;" index="3">提现</el-menu-item>
              <el-menu-item style="width: 100%; text-align: center; font-weight: bold;" index="3">我的红包</el-menu-item>
              <el-menu-item style="width: 100%; text-align: center; font-weight: bold;" index="3">兑换历史</el-menu-item>
              <el-menu-item style="width: 100%; text-align: center; font-weight: bold;" index="3">系统信息</el-menu-item>
              <el-menu-item style="width: 100%; text-indent: 0px; text-align: center; font-weight: bold;" index>账户设置</el-menu-item>
            </el-menu>
          </el-aside>
          <el-container>
            <el-main style="left: 0px; position: relative; top: 32px;">
              <el-menu style="width: 100%;" mode="horizontal">
                <el-menu-item style="height: 50px;" index>晚上好，tg_gpdt0139 喝一杯下午茶，让心情放松一下~</el-menu-item>
                <el-menu-item style="width: 40%; height: 50px;" index>
                </el-menu-item>
                <el-menu-item style="height: 50px;" index>上次登录时间： 2015-09-11 14:05:07</el-menu-item>
              </el-menu>
              <el-row>
                <el-col :span="8">
                  <el-card header="可用余额">
                    <strong>00</strong>
                    <strong>元</strong>
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card header="代收利息">
                    <strong>00</strong>
                    <strong>元</strong>
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card header="代收本金">
                    <strong>00</strong>
                    <strong>元</strong>
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card header="账户授信额度">
                    <strong>00</strong>
                    <strong>元</strong>
                  </el-card>
                </el-col>
                <!--<el-col :span="8">-->
                <!-- <el-card header="bbb">-->
                <!-- <strong>00</strong>-->
                <!-- <strong>元</strong>-->
                <!-- </el-card>-->
                <!--</el-col>-->
                <el-col :span="8">
                  <el-card header="累计收益">
                    <!--<strong style="color: rgb(204, 0, 0);">00</strong>-->
                    <!--<strong style="color: rgb(204, 0, 0);">元</strong>-->
                    <strong>00</strong>
                    <strong>元</strong>
                  </el-card>
                </el-col>
              </el-row>
              <el-tabs style="position: relative; left: 13px; color: rgb(57, 61, 73);" value="first">
                <el-tab-pane name="1" style="left: 20px;" label="回款计划">
                </el-tab-pane>
                <el-tab-pane name="2" label="资金记录">
                </el-tab-pane>
                <el-tab-pane name="3" label="投资记录">
                </el-tab-pane>
              </el-tabs>
            </el-main>
            <el-footer>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "geren"
    }
</script>

<style scoped>

</style>
