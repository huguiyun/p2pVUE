<template>
  <div style="background-color:#eee;">
    <el-row>
      <el-col>
        <el-carousel trigger="click" :height="bannerH +'2000px'" >
          <el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">
            <img src="" class="bannerImg" width="1500px"/>
          </el-carousel-item>
          <el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">
            <img src="" class="bannerImg" width="1500px"/>
          </el-carousel-item>
        </el-carousel>
        <!-- <div class="block">
           <el-carousel height="480px"  ref="carousel" >
             <el-carousel-item v-for="item in list" :key="item">
               <img :src="item.bgurl">
             </el-carousel-item>
           </el-carousel>
         </div>-->
        <div class="newstitle">
          <ul>
            <li v-for="item in list" :key="item"  @mouseover="change(item)">{{item.title}}</li>
          </ul>
        </div>

      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-menu style="width: 98%;" mode="horizontal">
          <el-menu-item style="font-size: 18px;" index="3~~627d6ee9-acb1-4834-b861-fc36462aa12e">累计金额：</el-menu-item>
          <el-menu-item style="font-size: 20px; color: rgb(255, 120, 0); width: 12%;" index="3~~a7b6f3ad-0695-4e73-b660-e92ea0e21b8a">233424</el-menu-item>
          <el-menu-item style="width: 0%; font-size: 18px;" index="3~~ff4da008-7040-444d-b8ab-f083d3df4ece">元</el-menu-item>
          <el-menu-item style="font-size: 18px;" index="3~~8c9bf4c9-36eb-4b50-abd8-1ce35ed6ead4">已还本息：</el-menu-item>
          <el-menu-item style="width: 13%; font-size: 20px; color: rgb(255, 120, 0);" index="3~~c70475b6-002b-4955-99e6-dea6c9059057">1000000</el-menu-item>
          <el-menu-item style="width: 0%; font-size: 18px;" index="3~~e5f1563c-b8ef-4ffd-adc7-6afd91c8a621">元</el-menu-item>
          <el-menu-item style="font-size: 18px;" index="3~~b40d7e2e-4174-4392-9e13-fda849108312">余额：</el-menu-item>
          <el-menu-item style="font-size: 20px; color: rgb(255, 120, 0); width: 11%;" index="3~~2ca05f1d-a575-4b6b-8dd7-ac1e4a1fbd0c">999</el-menu-item>
          <el-menu-item style="width: 0%; font-size: 18px;" index="3~~c5177c19-9a09-4dde-8a3d-8eceb06244a3">元</el-menu-item>
          <el-menu-item style="font-size: 18px;" index="3~~25484cb4-27ca-4055-89f6-11daf95b7e44">注册人数：</el-menu-item>
          <el-menu-item style="font-size: 20px; color: rgb(255, 120, 0); width: 11%;" index="3~~bd487dae-8312-4591-a8c7-e2d77f6cc89a">200000</el-menu-item>
          <el-menu-item style="font-size: 18px; width: 10%;" index="3~~552eee7f-adfe-4a48-95e8-0b97df1fe28c">人</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-col style="text-indent: 48px; font-size: 36px;" :span="8">
      <i class="el-icon-s-management" style="text-indent: 13px; height: 50px;">安全理财</i>
    </el-col>
    <el-col style="text-indent: 48px; font-size: 36px;" :span="8">
      <i class="el-icon-s-marketing" style="text-indent: 13px; height: 50px;">高收益</i>
    </el-col>
    <el-col style="text-indent: 48px; font-size: 36px;" :span="8">
      <i class="el-icon-s-finance" style="height: 50px;">随时随</i>
    </el-col>
    <el-col :span="6">
      <el-card style="height: 59px;">
        <i class="el-icon-s-claim" style="font-size: 30px; color: rgb(255, 69, 0);">推荐项目</i>
      </el-card>
    </el-col>
    <el-col :span="18">
      <el-menu mode="horizontal">
        <el-menu-item style="width: 45%;" index="3~~4ddb725a-513a-40be-bdc0-7ae1bf03165b">
        </el-menu-item>
        <el-menu-item index="3">常规发标时间每天10:00，13:00和20:00，其余时间根据需要随机发</el-menu-item>
      </el-menu>
    </el-col>
    <el-row>
      <el-col :span="24">
        <el-card header="期限1-29天，期限短，收益见效快">
          <el-table :data="tableList" :fit="true" :show-header="true" show-header="true" default-expand-all>
            <el-table-column prop="id" label="借款人">
            </el-table-column>
            <el-table-column prop="name" label="借款目的">
            </el-table-column>
            <el-table-column label="年利率" width="180">
            </el-table-column>
            <el-table-column label="金额" width="180">
            </el-table-column>
            <el-table-column label="还款方式" width="180">
            </el-table-column>
            <el-table-column label="借款期限" width="180">
            </el-table-column>
            <el-table-column label="还款进度" width="180">
            </el-table-column>
            <el-table-column label="操作" width="180">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-form-item label="标题">
        </el-form-item>
        <br>

      </el-col>
      <el-col :span="6">
        <el-card>
          <i class="el-icon-s-order" style="font-size: 30px; color: rgb(255, 69, 0);">政信贷</i>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-menu style="height: 72px;" mode="horizontal">
          <el-menu-item style="width: 48%;" index="3~~b5f8516c-3111-40e9-bcc0-12c5c7f0c6ac">
          </el-menu-item>
          <el-menu-item index="3~~4d902897-1886-467e-8e72-a3c5726e8766">常规发标时间每天10:00，13:00和20:00，其余时间根据需要随机发</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="24">
        <el-card>
          <el-table :data="tableList" :fit="true" :show-header="true" show-header="true" default-expand-all>
            <el-table-column prop="id" label="借款人">
            </el-table-column>
            <el-table-column prop="name" label="借款目的">
            </el-table-column>
            <el-table-column label="年利率" width="180">
            </el-table-column>
            <el-table-column label="金额" width="180">
            </el-table-column>
            <el-table-column label="还款方式" width="180">
            </el-table-column>
            <el-table-column label="借款期限" width="180">
            </el-table-column>
            <el-table-column label="还款进度" width="180">
            </el-table-column>
            <el-table-column label="操作" width="180">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card header="卡片">
          <el-table :data="tableList" :fit="true" :show-header="true">
            <el-table-column prop="id" label="列1">
            </el-table-column>
            <el-table-column prop="name" label="列2">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>



<script>
  export default {
    name: "index22",
    data () {
      return {
        bannerH:200,
        bannerImgLst:['src/assets/img/1.jpg','src/assets/img/2.png']
      }
    },
    methods:{
      setBannerH(){
        this.bannerH = document.body.clientWidth / 4
      }
    },
    mounted(){
      this.setBannerH()

    },
    created(){}
  }
</script>

<style scoped>

</style>
