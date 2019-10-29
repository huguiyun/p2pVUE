<script src="../store/mutations.js"></script>
<template>
	<el-menu router :default-active="$route.path" class="el-menu-vertical-demo" background-color="#334157" text-color="#fff"
	 active-text-color="#ffd04b" :collapse="collapsed">
		<!-- <el-menu default-active="2" :collapse="collapsed" collapse-transition router :default-active="$route.path" unique-opened class="el-menu-vertical-demo" background-color="#334157" text-color="#fff" active-text-color="#ffd04b"> -->
		<div class="logobox">
			<img class="logoimg" src="../assets/img/logo.png" alt="">
		</div>
		<!-- 注意index是必须要填的属性  1.index可以看成ID，也就是它是唯一的  2.它代表路由的跳转的路劲 -->
		<el-submenu :index="'id_'+m.perId" v-for="m in menus">
			<template slot="title">
				<i :class="m.icon"></i>
				<span>{{m.perName}}</span>
			</template>
			<el-menu-item :key="'id_'+m2.perId" :index="m2.url" @click="showName(m2.perName)" v-for="m2 in m.childern">
				<template slot="title">
					<i :class="m2.icon"></i>
					<span>{{m2.perName}}</span>
				</template>
			</el-menu-item>
		</el-submenu>
	</el-menu>
</template>
<script>
	export default {
		data() {
			return {
				collapsed: false,
				menus: [],
				editableTabsValue: '2',
				tabIndex: 2
			}
		},
		created() {
			// this.$root.Bus.$on("collapsed-side", (v) => {
			// 	this.collapsed = v;
			// });
			// let url  = this.axios.SERVER + this.axios.urls.SYSTEM_MENU_TREE;

      let url = this.axios.urls.SYSTEM_MENU_TREE;
      console.log(url)
      this.axios.get(url, {
      }).then((response) => {
          this.menus = response.data;
      }).catch((response) => {
        alert("失败")
        console.log(response);
      });

		},
		methods:{
			showName(name){
				// 把菜单名称放进去，当成tab页的名称
				console.log("****************************************");
				let a = this.$store.commit('set_showName', name)
				console.log(a);
				let b = this.$store.commit('set_role', "pass");
				console.log(b);
				console.log("****************************************");
			}
		}
	}
</script>
<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 240px;
		min-height: 650px;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		border: none;
		text-align: left;
	}

	.el-menu-item-group__title {
		padding: 0px;
	}

	.el-menu-bg {
		background-color: #ff9e1f !important;
	}

	.el-menu {
		border: none;
	}

	.logobox {
		height: 40px;
		line-height: 40px;
		color: #7b9d32;
		font-size: 20px;
		text-align: center;
		padding: 20px 0px;
	}

	.logoimg {
		height: 50px;
	}
</style>
