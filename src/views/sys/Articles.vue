<template>
	<div>
		<!-- 搜索筛选 -->
		<el-form :inline="true" :model="formInline" class="user-search">
			<el-form-item label="搜索：">
				<el-input size="small" v-model="formInline.title" placeholder="输入文章标题"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button size="small" type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
				<el-button size="small" type="primary" icon="el-icon-plus" @click="add()">添加</el-button>
			</el-form-item>
		</el-form>
		<!--列表-->
		<el-table size="small" :data="listData" border element-loading-text="拼命加载中" style="width: 100%;">
			<el-table-column sortable prop="id" label="ID" width="100">
			</el-table-column>
			<el-table-column sortable prop="title" label="文章标题" width="200">
			</el-table-column>
			<el-table-column sortable prop="body" label="文章内容" width="600">
			</el-table-column>
			<el-table-column align="center" label="操作" min-width="300">
				<template slot-scope="scope">
					<el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="del(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 分页条 -->
		<el-pagination style="margin-top: 20px;" @size-change="handleSizeChange" @current-change="handleCurrentChange"
		 :current-page="formInline.page" :page-sizes="[10, 20, 30, 50]" :page-size="formInline.rows" layout="total, sizes, prev, pager, next, jumper"
		 :total="pageBean.total">
		</el-pagination>

		<!-- 编辑界面 -->
		<el-dialog :title="title" :visible.sync="editFormVisible" width="30%" @click="closeDialog">
			<el-form label-width="120px" :model="editForm" :rules="rules" ref="editForm">
				<el-form-item label="文章标题" prop="title">
					<el-input size="small" v-model="editForm.title " auto-complete="off" placeholder="请输入文章标题"></el-input>
				</el-form-item>
				<el-form-item label="文章内容" prop="body">
					<el-input size="small" v-model="editForm.body" auto-complete="off" placeholder="请输入文章内容"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button size="small" @click="closeDialog">取消</el-button>
				<el-button size="small" type="primary" class="title" @click="submitForm">保存</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				/* 定义容器 */
				listData: [],
				pageBean: {
					total: 0
				},
				formInline: {
					title: '',
					page: 1,
					rows: 10

				},
				editFormVisible: false,
				title: '',
				editForm: {
					title: '',
					body: '',
					id: 0
				},
				rules: {
					title: [{
						required: true,
						message: '请输入文章标题',
						trigger: 'blur'
					}],
					body: [{
							required: true,
							message: '请输入文章内容',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
				}
			};
		},
		methods: {
			search() {
				this.doSearch(this.formInline);
			},
			/* 具体的数据 */
			doSearch(params) {
				let url = this.axios.urls.SYSTEM_ARTICLE_LIST;
				/* 请求后台数据 */
				this.axios.post(url, params).then((response) => {
					console.log(response);
					/* 将数据展示到页面 */
					this.listData = response.data.result;
					/* 查看pageBean的数据 */
					this.pageBean = response.data.pageBean;
				}).catch((response) => {
					console.log(response);
				});
			},
			/* 每页展示的数发生改变是调用 */
			handleSizeChange(rows) {
				this.formInline.page = 1;
				this.formInline.rows = rows;
				this.search();
			},
			/* 页数发生改变是调用 */
			handleCurrentChange(page) {
				this.formInline.page = page;
				this.search();
			},
			closeDialog() {
				this.editFormVisible = false;
				this.clearForm();
			},
			submitForm() {
				//用来提交新增，修改的表单数据的，提交前需要通过vue实例中定义的表单填写规则
				this.$refs['editForm'].validate((valid) => {
					if (valid) {
						let url ;
						if(this.editForm.id==0){
							url = this.axios.urls.SYSTEM_ARTICLE_ADD;
						}else{
							url = this.axios.urls.SYSTEM_ARTICLE_EDIT;
						}
						this.axios.post(url, this.editForm).then((response) => {
							console.log(response);
							this.clearForm();
							this.doSearch(this.formInline);
						}).catch((response) => {
							console.log(response);
						});
						
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			clearForm() {
				this.editForm.title = '';
				this.editForm.body = '';
				this.formInline.page = 1;
				this.formInline.rows = 10;
				this.editFormVisible = false;
			},
			add() {
				this.title = '新增文章';
				this.editFormVisible = true;
			},
			edit(index, row) {
				//index代表的是操作数据在当前界面的行号
				//row代表操作的当前数据，那也就意味着可以从row中获取所有数据库列段名
				this.title = '修改文章';
				this.editForm.id = row.id;
				this.editForm.title = row.title;
				this.editForm.body = row.body;
				this.editFormVisible = true;
				console.log("huguiyun")
			},
			del(index, row) {



				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({						
						type: 'success',
						message: '删除成功!'
					});
					let url = this.axios.urls.SYSTEM_ARTICLE_DEL;
					/* 请求后台数据 */
					this.axios.post(url, {
						id: row.id
					}).then((response) => {
						console.log(response);
						this.clearForm();
						this.doSearch({});
					}).catch((response) => {
						console.log(response);
					});
					
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});



			}


		},
		created() {
			this.doSearch({});
		}
	}
</script>

<style>

</style>
