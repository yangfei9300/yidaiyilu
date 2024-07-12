//封装请求文件
export default{
	axios(method,url,data){
		uni.showLoading({
			'title':'加载中'
		})
		return new Promise((resolve,reject)=>{
			uni.request({
				url: url,
				method:method,
				data:data,
				header:{
					'Content-Type':'application/json;charset=utf-8',
					'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqd3RfeWgiLCJleHAiOjE3MDkxMDg5NTAsInN1YiI6IllIIiwiYXVkIjoiZXZlcnkiLCJuYmYiOjE3MDg1MDQxNTAsImlhdCI6MTcwODUwNDE1MCwianRpIjoxMDAwMSwidWlkIjoxfQ.SVf56_ApZmzYtv0M-zEm3wttrlKixi0bVMxrkd81TqI'
				},
				success:(res)=>{
						resolve(res.data)
				},  
				fail:(err)=>{
					reject(err)
				},
				complete() {
					wx.hideLoading()
				}
			})
		})
	},
	axiosDate(method,url,data){
		uni.showLoading({
			'title':'加载中'
		})
		return new Promise((resolve,reject)=>{
			uni.request({
				url: url,
				method:method,
				data:data,
				header:{
					'Content-Type':'application/json;charset=utf-8',
					'auth':uni.getStorageSync("DataHt")
				},
				success:(res)=>{
					resolve(res.data)
				},
				fail:(err)=>{
					reject(err)
				},
				complete() {
					wx.hideLoading()
				}
			})
		})
	},
}
  