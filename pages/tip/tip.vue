<template>
	<view>
		<image :src="activityInfo.bannerImage" 
		class="w-750" mode="widthFix"></image>
		<view class="colonn" >
			<rich-text v-for="(item,index) in tips"
			 :nodes="item.details"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activityInfo:{},
				tips:[],
				options:{}
			}
		},
		
		onLoad(options) {
			this.options=options;
			this.activityInfo=uni.getStorageSync("activityInfo");
			if(options.type==3){
				this.getTishi();
				uni.setNavigationBarTitle({
					title:"友情提示"
				})
			}else if(options.type==5){
				this.getZhiyin()
				uni.setNavigationBarTitle({
					title:"会场指引"
				})
			}
			
		},
		methods: {
			
			// 获取会场早就i你
			getZhiyin(){
				var data = {
					'meetingId':getApp().globalData.activityId,
					'type':4
				}  
				this.$axios
					.axios('GET', this.$paths.meetingTipslist, data)
					.then(res => {
						if (res.code == 200) { 
							var tips=res.rows;
							for(var a=0;a<tips.length;a++){
								tips[a].details=this.$tools.formatRichText(tips[a].details);
							}
							this.tips=tips;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			
			
			getTishi(){
				var data = {
					'meetingId':getApp().globalData.activityId,
					type:3
				}  
				this.$axios
					.axios('GET', this.$paths.meetingTips, data)
					.then(res => {
						if (res.code == 200) { 
							
							var tips=res.rows;
							for(var a=0;a<tips.length;a++){
								tips[a].details=this.$tools.formatRichText(tips[a].details);
							}
							this.tips=tips;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			}
		}
	}
</script>

<style>

</style>
