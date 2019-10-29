export default{
	/* 获取数据并渲染 */
   getResturantName: (state) => {
	 return state.resturantName;
   },
   getJwt: (state) => {
		return state.jwt;
	},
	getShowName:(state) => {
		return state.showName;
	},
	getOptions:(state) => {
		return state.options;
	},
	getRole:(state) =>{
		return state.role;
	},
  getVerificationJwt:(state) =>{
    return state.verificationJwt;
  }

}
