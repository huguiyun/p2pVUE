<template>
	<div>
    <el-row>
      <el-col style="width: 100%; color: rgb(0, 43, 255); background-color: rgb(238,62,30); opacity: 0.7; height: 60px;" :span="12">
        <el-link style="width: 10%; left: 1000px; top: 30%; bottom: 0px; font-weight: bold; height: 20px; color: rgb(26, 22, 22);">返回首页</el-link>
        <el-link style="width: 10%; left: 1000px; top: 20px; font-weight: bold; height: 20px; color: rgb(31, 28, 28);">免费注册</el-link>
        <el-link style="width: 10%; left: 1000px; top: 20px; font-weight: bold; height: 20px; color: rgb(26, 24, 24);">登录</el-link>
      </el-col>
      <el-col style="width: 100%; color: rgb(0, 43, 255); background-color: rgb(9, 82, 254); opacity: 0.7; height: 60px;" :span="12">
        <el-link style="width: 10%; height: 20px; left: 666px; bottom: -5px; top: 18px; font-weight: bold; color: rgb(254, 251, 251);" onclick="http://baidu.com">首页</el-link>
        <el-link style="width: 10%; left: 666px; top: 30%; bottom: 0px; font-weight: bold; height: 20px; color: rgb(244, 240, 240);">我要投资</el-link>
        <el-link style="width: 10%; left: 666px; top: 30%; bottom: 0px; font-weight: bold; height: 20px; color: rgb(244,20,12);">我要借款</el-link>
        <el-link style="width: 10%; left: 666px; top: 20px; font-weight: bold; height: 20px; color: rgb(239, 233, 233);">安全保障</el-link>
        <el-link style="width: 10%; left: 666px; top: 20px; font-weight: bold; height: 20px; color: rgb(239, 233, 233);">个人中心</el-link>
        <el-link style="width: 10%; left: 666px; top: 20px; font-weight: bold; height: 20px; color: rgb(239, 233, 233);">关于我们</el-link>
      </el-col>
    </el-row>
    <el-carousel :autoplay="true" :loop="true">
      <el-carousel-item>
      </el-carousel-item>
      <el-carousel-item>
      </el-carousel-item>
    </el-carousel>
    <el-col :span="24">
      <el-menu style="width: 98%;" mode="horizontal">
        <el-menu-item style="font-size: 18px;" index="3~~627d6ee9-acb1-4834-b861-fc36462aa12e">累计金额：</el-menu-item>
        <el-menu-item style="font-size: 20px; color: rgb(255, 120, 0);" index="3~~a7b6f3ad-0695-4e73-b660-e92ea0e21b8a">233424</el-menu-item>
        <el-menu-item style="width: 0%; font-size: 18px;" index="3~~ff4da008-7040-444d-b8ab-f083d3df4ece">元</el-menu-item>
        <el-menu-item style="font-size: 18px;" index="3~~8c9bf4c9-36eb-4b50-abd8-1ce35ed6ead4">已还本息：</el-menu-item>
        <el-menu-item style="width: 18%; font-size: 20px; color: rgb(255, 120, 0);" index="3~~c70475b6-002b-4955-99e6-dea6c9059057">1000000</el-menu-item>
        <el-menu-item style="width: 0%; font-size: 18px;" index="3~~e5f1563c-b8ef-4ffd-adc7-6afd91c8a621">元</el-menu-item>
        <el-menu-item style="font-size: 18px;" index="3~~b40d7e2e-4174-4392-9e13-fda849108312">余额：</el-menu-item>
        <el-menu-item style="font-size: 20px; color: rgb(255, 120, 0);" index="3~~2ca05f1d-a575-4b6b-8dd7-ac1e4a1fbd0c">999</el-menu-item>
        <el-menu-item style="width: 0%; font-size: 18px;" index="3~~c5177c19-9a09-4dde-8a3d-8eceb06244a3">元</el-menu-item>
        <el-menu-item style="font-size: 18px;" index="3~~25484cb4-27ca-4055-89f6-11daf95b7e44">注册人数：</el-menu-item>
        <el-menu-item style="font-size: 20px; color: rgb(255, 120, 0); width: 15%;" index="3~~bd487dae-8312-4591-a8c7-e2d77f6cc89a">200000</el-menu-item>
        <el-menu-item style="font-size: 18px; width: 10%;" index="3~~552eee7f-adfe-4a48-95e8-0b97df1fe28c">人</el-menu-item>
      </el-menu>
    </el-col>
    <el-col style="text-indent: 48px; font-size: 36px;" :span="8">
      <i class="el-icon-s-management" style="text-indent: 13px;">安全理财</i>
    </el-col>
    <el-col style="text-indent: 48px; font-size: 36px;" :span="8">
      <i class="el-icon-s-marketing" style="text-indent: 13px;">高收益</i>
    </el-col>
    <el-col style="text-indent: 48px; font-size: 36px;" :span="8">
      <i class="el-icon-s-finance">随时随</i>
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
        <hr>
        </hr>
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
      </el-col>
    </el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					uname: '',
					pwd: ''
				}
			};
		},
		methods: {
			toLogin() {
				this.$router.push({
					path: '/Login'
				})
			}
		}
	}


</script>

<style scoped>
	.login-wrap {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		padding-top: 10%;
		background-image: url(data:image/svg+xml;
		base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEzNjFweCIgaGVpZ2h0PSI2MDlweCIgdmlld0JveD0iMCAwIDEzNjEgNjA5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ni4yICg0NDQ5NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgMjE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQW50LURlc2lnbi1Qcm8tMy4wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i6LSm5oi35a+G56CB55m75b2VLeagoemqjCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc5LjAwMDAwMCwgLTgyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc3LjAwMDAwMCwgNzMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTgiIG9wYWNpdHk9IjAuOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzQuOTAxNDE2LCA1NjkuNjk5MTU4KSByb3RhdGUoLTcuMDAwMDAwKSB0cmFuc2xhdGUoLTc0LjkwMTQxNiwgLTU2OS42OTkxNTgpIHRyYW5zbGF0ZSg0LjkwMTQxNiwgNTI1LjE5OTE1OCkiPgogICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsLTExIiBmaWxsPSIjQ0ZEQUU2IiBvcGFjaXR5PSIwLjI1IiBjeD0iNjMuNTc0ODc5MiIgY3k9IjMyLjQ2ODM2NyIgcng9IjIxLjc4MzA0NzkiIHJ5PSIyMS43NjYwMDgiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbC0zIiBmaWxsPSIjQ0ZEQUU2IiBvcGFjaXR5PSIwLjU5OTk5OTk2NCIgY3g9IjUuOTg3NDY0NzkiIGN5PSIxMy44NjY4NjAxIiByeD0iNS4yMTczOTEzIiByeT0iNS4yMTMzMDk5NyI+PC9lbGxpcHNlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOC4xMzU0NTE0LDg4LjM1MjAyMTUgQzQzLjg5ODQyMjcsODguMzUyMDIxNSA0OC41NzAyMzQsODMuNjgzODY0NyA0OC41NzAyMzQsNzcuOTI1NDAxNSBDNDguNTcwMjM0LDcyLjE2NjkzODMgNDMuODk4NDIyNyw2Ny40OTg3ODE2IDM4LjEzNTQ1MTQsNjcuNDk4NzgxNiBDMzIuMzcyNDgwMSw2Ny40OTg3ODE2IDI3LjcwMDY2ODgsNzIuMTY2OTM4MyAyNy43MDA2Njg4LDc3LjkyNTQwMTUgQzI3LjcwMDY2ODgsODMuNjgzODY0NyAzMi4zNzI0ODAxLDg4LjM1MjAyMTUgMzguMTM1NDUxNCw4OC4zNTIwMjE1IFoiIGlkPSJPdmFsLTMtQ29weSIgZmlsbD0iI0NGREFFNiIgb3BhY2l0eT0iMC40NSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02NC4yNzc1NTgyLDMzLjE3MDQ5NjMgTDExOS4xODU4MzYsMTYuNTY1NDkxNSIgaWQ9IlBhdGgtMTIiIHN0cm9rZT0iI0NGREFFNiIgc3Ryb2tlLXdpZHRoPSIxLjczOTEzMDQzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDIuMTQzMTcwOCwyNi41MDAyNjgxIEw3LjcxMTkwMTYyLDE0LjU2NDA3MDIiIGlkPSJQYXRoLTE2IiBzdHJva2U9IiNFMEI0QjciIHN0cm9rZS13aWR0aD0iMC43MDI2Nzg5NjQiIG9wYWNpdHk9IjAuNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSIxLjQwNTM1Nzg5OTg3MzE1MywyLjEwODAzNjk1MzQ2OTk4MSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02My45MjYyMTg3LDMzLjUyMTU2MSBMNDMuNjcyMTMyNiw2OS4zMjUwOTUxIiBpZD0iUGF0aC0xNSIgc3Ryb2tlPSIjQkFDQUQ5IiBzdHJva2Utd2lkdGg9IjAuNzAyNjc4OTY0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjEuNDA1MzU3ODk5ODczMTUzLDIuMTA4MDM2OTUzNDY5OTgxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjYuODUwOTIyLCAxMy41NDM2NTQpIHJvdGF0ZSgzMC4wMDAwMDApIHRyYW5zbGF0ZSgtMTI2Ljg1MDkyMiwgLTEzLjU0MzY1NCkgdHJhbnNsYXRlKDExNy4yODU3MDUsIDQuMzgxODg5KSIgZmlsbD0iI0NGREFFNiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsLTQiIG9wYWNpdHk9IjAuNDUiIGN4PSI5LjEzNDgyNjUzIiBjeT0iOS4xMjc2ODA3NiIgcng9IjkuMTM0ODI2NTMiIHJ5PSI5LjEyNzY4MDc2Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC4yNjk2NTMxLDE4LjI1NTM2MTUgQzE4LjI2OTY1MzEsMTMuMjE0MjgyNiAxNC4xNzk4NTE5LDkuMTI3NjgwNzYgOS4xMzQ4MjY1Myw5LjEyNzY4MDc2IEM0LjA4OTgwMTE0LDkuMTI3NjgwNzYgMCwxMy4yMTQyODI2IDAsMTguMjU1MzYxNSBMMTguMjY5NjUzMSwxOC4yNTUzNjE1IFoiIGlkPSJPdmFsLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMTM0ODI3LCAxMy42OTE1MjEpIHNjYWxlKC0xLCAtMSkgdHJhbnNsYXRlKC05LjEzNDgyNywgLTEzLjY5MTUyMSkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTYuMjk0NzAwLCAxMjMuNzI1NjAwKSByb3RhdGUoLTUuMDAwMDAwKSB0cmFuc2xhdGUoLTIxNi4yOTQ3MDAsIC0xMjMuNzI1NjAwKSB0cmFuc2xhdGUoMTA2LjI5NDcwMCwgMzUuMjI1NjAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwtMiIgZmlsbD0iI0NGREFFNiIgb3BhY2l0eT0iMC4yNSIgY3g9IjI5LjExNzY0NzEiIGN5PSIyOS4xNDAyNDM5IiByeD0iMjkuMTE3NjQ3MSIgcnk9IjI5LjE0MDI0MzkiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbC0yIiBmaWxsPSIjQ0ZEQUU2IiBvcGFjaXR5PSIwLjMiIGN4PSIyOS4xMTc2NDcxIiBjeT0iMjkuMTQwMjQzOSIgcng9IjIxLjU2ODYyNzUiIHJ5PSIyMS41ODUzNjU5Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwtMi1Db3B5IiBzdHJva2U9IiNDRkRBRTYiIG9wYWNpdHk9IjAuNCIgY3g9IjE3OS4wMTk2MDgiIGN5PSIxMzguMTQ2MzQxIiByeD0iMjMuNzI1NDkwMiIgcnk9IjIzLjc0MzkwMjQiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbC0yIiBmaWxsPSIjQkFDQUQ5IiBvcGFjaXR5PSIwLjUiIGN4PSIyOS4xMTc2NDcxIiBjeT0iMjkuMTQwMjQzOSIgcng9IjEwLjc4NDMxMzciIHJ5PSIxMC43OTI2ODI5Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI5LjExNzY0NzEsMzkuOTMyOTI2OCBMMjkuMTE3NjQ3MSwxOC4zNDc1NjEgQzIzLjE2MTYzNTEsMTguMzQ3NTYxIDE4LjMzMzMzMzMsMjMuMTc5NjA5NyAxOC4zMzMzMzMzLDI5LjE0MDI0MzkgQzE4LjMzMzMzMzMsMzUuMTAwODc4MSAyMy4xNjE2MzUxLDM5LjkzMjkyNjggMjkuMTE3NjQ3MSwzOS45MzI5MjY4IFoiIGlkPSJPdmFsLTIiIGZpbGw9IiNCQUNBRDkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtOSIgb3BhY2l0eT0iMC40NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcyLjAwMDAwMCwgMTMxLjAwMDAwMCkiIGZpbGw9IiNFNkExQTYiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbC0yLUNvcHktMiIgY3g9IjcuMDE5NjA3ODQiIGN5PSI3LjE0NjM0MTQ2IiByeD0iNi40NzA1ODgyNCIgcnk9IjYuNDc1NjA5NzYiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuNTQ5MDE5NjA4LDEzLjYyMTk1MTIgQzQuMTIyNjI2ODEsMTMuNjIxOTUxMiA3LjAxOTYwNzg0LDEwLjcyMjcyMiA3LjAxOTYwNzg0LDcuMTQ2MzQxNDYgQzcuMDE5NjA3ODQsMy41Njk5NjA5NSA0LjEyMjYyNjgxLDAuNjcwNzMxNzA3IDAuNTQ5MDE5NjA4LDAuNjcwNzMxNzA3IEwwLjU0OTAxOTYwOCwxMy42MjE5NTEyIFoiIGlkPSJPdmFsLTItQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjc4NDMxNCwgNy4xNDYzNDEpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTMuNzg0MzE0LCAtNy4xNDYzNDEpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbC0xMCIgZmlsbD0iI0NGREFFNiIgY3g9IjIxOC4zODIzNTMiIGN5PSIxMzguNjg1OTc2IiByeD0iMS42MTc2NDcwNiIgcnk9IjEuNjE4OTAyNDQiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbC0xMC1Db3B5LTIiIGZpbGw9IiNFMEI0QjciIG9wYWNpdHk9IjAuMzUiIGN4PSIxNzkuNTU4ODI0IiBjeT0iMTc1LjM4MTA5OCIgcng9IjEuNjE3NjQ3MDYiIHJ5PSIxLjYxODkwMjQ0Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwtMTAtQ29weSIgZmlsbD0iI0UwQjRCNyIgb3BhY2l0eT0iMC4zNSIgY3g9IjE4MC4wOTgwMzkiIGN5PSIxMDIuNTMwNDg4IiByeD0iMi4xNTY4NjI3NSIgcnk9IjIuMTU4NTM2NTkiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjguOTk4NTM4MSwyOS45NjcxNTk4IEwxNzEuMTUxMDE4LDEzMi44NzYwMjQiIGlkPSJQYXRoLTExIiBzdHJva2U9IiNDRkRBRTYiIG9wYWNpdHk9IjAuOCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEwIiBvcGFjaXR5PSIwLjc5OTk5OTk1MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA1NC4xMDA2MzUsIDM2LjY1OTMxNykgcm90YXRlKC0xMS4wMDAwMDApIHRyYW5zbGF0ZSgtMTA1NC4xMDA2MzUsIC0zNi42NTkzMTcpIHRyYW5zbGF0ZSgxMDI2LjYwMDYzNSwgNC42NTkzMTcpIj4KICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbC03IiBzdHJva2U9IiNDRkRBRTYiIHN0cm9rZS13aWR0aD0iMC45NDExNzY0NzEiIGN4PSI0My44MTM1NTkzIiBjeT0iMzIiIHJ4PSIxMS4xODY0NDA3IiByeT0iMTEuMjk0MTE3NiI+PC9lbGxpcHNlPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQuNTk2Nzc0LCAyMy4xMTExMTEpIiBmaWxsPSIjQkFDQUQ5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwtNyIgb3BhY2l0eT0iMC40NSIgY3g9IjkuMTg1MzQ3MTgiIGN5PSI4Ljg4ODg4ODg5IiByeD0iOC40NzQ1NzYyNyIgcnk9IjguNTU2MTQ5NzMiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTkuMTg1MzQ3MTgsMTcuNDQ1MDM4NiBDMTMuODY1NzI2NCwxNy40NDUwMzg2IDE3LjY1OTkyMzUsMTMuNjE0MzE5OSAxNy42NTk5MjM1LDguODg4ODg4ODkgQzE3LjY1OTkyMzUsNC4xNjM0NTc4NyAxMy44NjU3MjY0LDAuMzMyNzM5MTU2IDkuMTg1MzQ3MTgsMC4zMzI3MzkxNTYgTDkuMTg1MzQ3MTgsMTcuNDQ1MDM4NiBaIiBpZD0iT3ZhbC03Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNC42NTk3Mzg1LDI0LjgwOTY5NCBMNS43MTY2NjA4NCw0Ljc2ODc4OTQ1IiBpZD0iUGF0aC0yIiBzdHJva2U9IiNDRkRBRTYiIHN0cm9rZS13aWR0aD0iMC45NDExNzY0NzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbCIgc3Ryb2tlPSIjQ0ZEQUU2IiBzdHJva2Utd2lkdGg9IjAuOTQxMTc2NDcxIiBjeD0iMy4yNjI3MTE4NiIgY3k9IjMuMjk0MTE3NjUiIHJ4PSIzLjI2MjcxMTg2IiByeT0iMy4yOTQxMTc2NSI+PC9lbGxpcHNlPgogICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsLUNvcHkiIGZpbGw9IiNGN0UxQUQiIGN4PSIyLjc5NjYxMDE3IiBjeT0iNjEuMTc2NDcwNiIgcng9IjIuNzk2NjEwMTciIHJ5PSIyLjgyMzUyOTQxIj48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM0LjYzMTI0NDMsMzkuMjkyMjcxMiBMNS4wNjM2NjY2Myw1OS43ODUwODIiIGlkPSJQYXRoLTEwIiBzdHJva2U9IiNDRkRBRTYiIHN0cm9rZS13aWR0aD0iMC45NDExNzY0NzEiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xOSIgb3BhY2l0eT0iMC4zMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI4Mi41MzcyMTksIDQ0Ni41MDI4NjcpIHJvdGF0ZSgtMTAuMDAwMDAwKSB0cmFuc2xhdGUoLTEyODIuNTM3MjE5LCAtNDQ2LjUwMjg2NykgdHJhbnNsYXRlKDExNDIuNTM3MjE5LCAzMjcuNTAyODY3KSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDEuMzMzNTM5LCAxMDQuNTAyNzQyKSByb3RhdGUoMjc1LjAwMDAwMCkgdHJhbnNsYXRlKC0xNDEuMzMzNTM5LCAtMTA0LjUwMjc0MikgdHJhbnNsYXRlKDEyOS4zMzM1MzksIDkyLjUwMjc0MikiIGZpbGw9IiNCQUNBRDkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTQiIG9wYWNpdHk9IjAuNDUiIGN4PSIxMS42NjY2NjY3IiBjeT0iMTEuNjY2NjY2NyIgcj0iMTEuNjY2NjY2NyI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMy4zMzMzMzMzLDIzLjMzMzMzMzMgQzIzLjMzMzMzMzMsMTYuODkwMDExMyAxOC4xMDk5ODg3LDExLjY2NjY2NjcgMTEuNjY2NjY2NywxMS42NjY2NjY3IEM1LjIyMzM0NDU5LDExLjY2NjY2NjcgMCwxNi44OTAwMTEzIDAsMjMuMzMzMzMzMyBMMjMuMzMzMzMzMywyMy4zMzMzMzMzIFoiIGlkPSJPdmFsLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjY2NjY2NywgMTcuNTAwMDAwKSBzY2FsZSgtMSwgLTEpIHRyYW5zbGF0ZSgtMTEuNjY2NjY3LCAtMTcuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC01LUNvcHktNiIgZmlsbD0iI0NGREFFNiIgY3g9IjIwMS44MzMzMzMiIGN5PSI4Ny41IiByPSI1LjgzMzMzMzMzIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQzLjUsODguODEyNjY4NSBMMTU1LjA3MDUwMSwxNy42MDM4NTQ0IiBpZD0iUGF0aC0xNyIgc3Ryb2tlPSIjQkFDQUQ5IiBzdHJva2Utd2lkdGg9IjEuMTY2NjY2NjciPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuNSwzNy4zMzMzMzMzIEwxMjcuNDY2MjUyLDk3LjY0NDk3MzUiIGlkPSJQYXRoLTE4IiBzdHJva2U9IiNCQUNBRDkiIHN0cm9rZS13aWR0aD0iMS4xNjY2NjY2NyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aC0xOSIgc3Ryb2tlPSIjQ0ZEQUU2IiBzdHJva2Utd2lkdGg9IjEuMTY2NjY2NjciIHBvaW50cz0iMTQzLjkwMjU5NyAxMjAuMzAyMjgxIDE3NC45MzU0NTUgMjMxLjU3MTM0MiAzOC41IDE0Ny41MTA4NDcgMTI2LjM2Njk0MSAxMTAuODMzMzMzIj48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNTkuODMzMzMzLDk5Ljc0NTM4NDIgTDE5NS40MTY2NjcsODkuMjUiIGlkPSJQYXRoLTIwIiBzdHJva2U9IiNFMEI0QjciIHN0cm9rZS13aWR0aD0iMS4xNjY2NjY2NyIgb3BhY2l0eT0iMC42Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwNS4zMzMzMzMsODIuMTM3MjEwNSBMMjM4LjcxOTQwNiwzNi4xNjY2NjY3IiBpZD0iUGF0aC0yNCIgc3Ryb2tlPSIjQkFDQUQ5IiBzdHJva2Utd2lkdGg9IjEuMTY2NjY2NjciPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjY2LjcyMzQyNCwxMzIuMjMxOTg4IEwyMDcuMDgzMzMzLDkwLjQxNjY2NjciIGlkPSJQYXRoLTI1IiBzdHJva2U9IiNDRkRBRTYiIHN0cm9rZS13aWR0aD0iMS4xNjY2NjY2NyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtNSIgZmlsbD0iI0MxRDFFMCIgY3g9IjE1Ni45MTY2NjciIGN5PSI4Ljc1IiByPSI4Ljc1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTUtQ29weS0zIiBmaWxsPSIjQzFEMUUwIiBjeD0iMzkuMDgzMzMzMyIgY3k9IjE0OC43NSIgcj0iNS4yNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC01LUNvcHktMiIgZmlsbC1vcGFjaXR5PSIwLjYiIGZpbGw9IiNEMURFRUQiIGN4PSI4Ljc1IiBjeT0iMzMuMjUiIHI9IjguNzUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtNS1Db3B5LTQiIGZpbGwtb3BhY2l0eT0iMC42IiBmaWxsPSIjRDFERUVEIiBjeD0iMjQzLjgzMzMzMyIgY3k9IjMwLjMzMzMzMzMiIHI9IjUuODMzMzMzMzMiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtNS1Db3B5LTUiIGZpbGw9IiNFMEI0QjciIGN4PSIxNzUuNTgzMzMzIiBjeT0iMjMyLjc1IiByPSI1LjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
		/* background-color: #112346; */
		background-repeat: no-repeat;
		background-position: center right;
		background-size: 100%;
	}

	.login-container {
		border-radius: 10px;
		margin: 0px auto;
		width: 350px;
		padding: 30px 35px 15px 35px;
		background: #fff;
		border: 1px solid #eaeaea;
		text-align: left;
		box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
	}

	.title {
		margin: 0px auto 40px auto;
		text-align: center;
		color: #505458;
	}
</style>
