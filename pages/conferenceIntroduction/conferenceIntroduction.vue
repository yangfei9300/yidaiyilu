<template>
	<view>
		<rich-text v-if="options.type==1" :nodes="activityInfo.description"></rich-text>
		<rich-text v-if="options.type==2" :nodes="activityInfo.agenda"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activityInfo:{},
				options:{}
			}
		},
		onLoad(options) {
			this.options=options;
			if(options.type==1){
				uni.setNavigationBarTitle({
					title:"大会简介"
				})
			}else if(options.type==2){
				uni.setNavigationBarTitle({
					title:"大会日程"
				})
			}
			this.getInfo();
		},
		methods: {
			
			
			
			getInfo(){
				var data = {  
				}  
				this.$axios
					.axios('GET', this.$paths.meetingmeeting+getApp().globalData.activityId, data)
					.then(res => {
						if (res.code == 200) { 
							var activityInfo=res.data;
							activityInfo.agenda=this.$tools.formatRichText(activityInfo.agenda);
							activityInfo.description=this.$tools.formatRichText(activityInfo.description);
							this.activityInfo=activityInfo;
							uni.setStorageSync("activityInfo",activityInfo)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
		}
	}
</script>

<style>

</style>
