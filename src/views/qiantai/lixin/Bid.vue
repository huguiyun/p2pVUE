<template>

<el-container>
  <el-aside></el-aside><!--居中-->
  <el-main>
    <strong>我要投资</strong><br/><br/><br/>
    <strong>投标状态：</strong>&nbsp;&nbsp;
    <el-button-group>
      <el-button type="warning" round>全部</el-button>
      <el-button type="danger">招标中</el-button>
      <el-button type="success" round>已完成</el-button>
    </el-button-group>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <!--表单搜索 搜索所有数据！！！！-->
    <el-button-group>
      <el-input v-model="searchR" placeholder="利息率" type="text" size="medium">
      </el-input>
    </el-button-group>&nbsp;&nbsp;
    <el-button-group>
      <el-input v-model="searchM" placeholder="还款月数" size="medium" type="text">
      </el-input>
    </el-button-group>&nbsp;&nbsp;
    <el-button size="medium" icon="el-icon-search" type="primary">搜 索</el-button><br/><br/>

    <!--列表数据展示-->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="借款人" width="69" align="center"></el-table-column>
      <el-table-column prop="title" label="借款标题" width="118" align="center">
      </el-table-column>
      <el-table-column prop="rate" label="利息率" width="109" align="center" sortable></el-table-column>
      <el-table-column prop="amount" label="投标额度" width="109" align="center" sortable></el-table-column>
      <el-table-column prop="money" label="总利息" width="99" align="center" sortable></el-table-column>
      <el-table-column prop="monthes" label="还款月数" width="109" align="center" sortable></el-table-column>
      <!--<el-table-column prop="mintime" label="投标倒计时" width="128" align="center" sortable ></el-table-column>-->
      <el-table-column label="投标进度" align="center" width="268" >
        <template slot-scope="scope">
         <el-progress :percentage="scope.row.plan"></el-progress>
        </template>
      </el-table-column>
      <el-table-column label="操  作" align="center">
        <template slot-scope="scope">

          <!--  查看详情  -->
          <el-popover placement="right" width="666" trigger="click">
            <el-card class="box-card" style="background-color: whitesmoke;"><br/>
              <!--  头 部  -->
              <div slot="header" class="clearfix">
                &nbsp;借款标题：XXX<br/><br/>
                <el-tooltip align="right" effect="light" placement="bottom-start">
                  <div slot="content">借款描述借款描述借款描述<br/>借款描述借款描述借款描述借款描述<br/>借款描述借款描述借款描述借款描述借款描述</div>
                  <el-button style="float: right; padding: 3px 0;color: black;" type="text">
                    —— 借款人：XX<br/><br/>
                    借款总额：10000 ￥
                  </el-button>
                </el-tooltip>
              </div>
              <!--  主 体  -->
              <div class="text item">
                <span style="color:green;"><strong>安全分数：78</strong></span><br/><br/>
                <span><strong>投资利息率：2.27%</strong></span><br/><br/>
                <span><strong>已投资：4000 ￥</strong></span><br/><br/>
                <span><strong>我的投资：<input style="width: 48px;" v-model="bidMoney" /> ￥</strong></span>
                <p align="right" style="color: red;"><strong>我的投资利息：210 ￥</strong></p>
                <!--  分割线  -->
                <el-divider></el-divider>
                <p align="left">
                  <el-input style="width: 46%;" placeholder="发布时间" disabled="false"></el-input> -
                  <el-input style="width: 48%;" placeholder="截止时间" disabled="false"></el-input>
                </p>
                <p>
                  <el-table :data="tableData" width="100%" border>
                    <el-table-column align="center" prop="people" label="投标人" ></el-table-column>
                    <el-table-column align="center" prop="peopleMoney" label="投资额度" ></el-table-column>
                  </el-table><br/>
                </p>
                <p align="left">
                  <span><strong>还款方式：</strong></span><br/><br/>
                  <span><strong>还款类型：</strong></span><br/><br/>
                </p>
                <p align="right">
                  <span><strong>审核人：</strong></span>
                </p>
              </div>
            </el-card>
            <!--  查看详情   结束   -->
            <el-button size="mini" slot="reference" >查 看 详 情</el-button><!--@click="handleDetails(requestId)"-->
          </el-popover>

          <!--投资-->
          <el-button size="mini" type="danger" @click="handleBidding(requestId)">投 资</el-button>

        </template>
      </el-table-column>
    </el-table><br/><br/>

    <!--分页展示数据-->
    <div align="center" class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                     layout="total, sizes, prev, pager, next, jumper" :total="10000">
      </el-pagination>
    </div>

  </el-main>
</el-container>

</template>

<script>
    export default {
      // el: "#app",
      name: "Bid",
      // reteS,
      // monthS,
      data() {
        return {
          searchR: '',//搜索框的内容 年利率
          searchM: '',//搜索框的内容 还款月数
          bidMoney:6000,
          tableData: [{
            requestId:1,
            name: '蓝忘机',
            title:'给羡羡买酒',
            rate:2.13,
            amount:8000,
            money:170.4,
            monthes:2,
            returnType:0,
            bidRequestType:1,
            // mintime: 3,
            plan: 20,
            handle: ""
          }, {
            requestId:2,
            name: '曾流逼',
            title:'娶媳妇  ',
            rate:2.7,
            amount:80000,
            money:1704,
            // monthes:6,
            // returnType:1,
            // bidRequestType:2,

            // mintime:4,
            plan: 50,
            handle: ""
          }]
        }
      },
      methods: {
        // formatter(row, column) {
        //   return row.address;
        // },
        //查看详情按钮
        handleDetails(requestId) {

        },
        //直接投标按钮
        handleBidding(index, row) {
          // 跳转路由 去投标界面 Bidding
          this.$router.push({
            path: '/reception/Bidding'
          });
        },
        //分页
        handleSizeChange(val) {//每页的条数可改变
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {//当前页数可改变
          console.log(`当前页: ${val}`);
        }
      }
    }
</script>

<style scoped>

</style>
