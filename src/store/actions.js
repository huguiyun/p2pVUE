export default{
	setResturantNameAsync : (context,payload)=>{
		console.log('111')
		setTimeout(()=>{
			console.log('222')
			context.commit('setResturantName', payload); //Action提交的是mutation
		},2000);
		/* 不能使用Vue实例 */
		console.log('333')
	},
	doAjax:(context,payload)=>{
		let _this = payload._this;
		let url = _this.axios.urls.SYSTEM_USER_DOLOGIN;
		console.log(url+":hu*****************");
		_this.axios.post(url,{}).then((response)=>{
			console.log(response);
		}).catch((response)=>{
			console.log(response);
		})
	}
}