<template>
	<view>
		<view class="colonn">
			<image :src="activityInfo.bannerImage"
			class="w-750" mode="widthFix"></image>
			<view class="roww p-all-20 border_bottom" 
			v-for="(item,index) in ziliao">
				<view>{{item.remark}}</view>
				<view class="allline"></view>
				<view style="color: blue;font-weight: bold;"
				@click.stop="toLoad(item)"
				>下载</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ziliao:[],
				activityInfo:{}
			}
		},
		onLoad() {
			this.activityInfo=uni.getStorageSync("activityInfo");
			this.xiazai();
		},
		methods: {
			toLoad(item){
				window.location.href=item.url;
			},
			xiazai(){
				var data = {
					'meetingId':getApp().globalData.activityId,
				}  
				this.$axios
					.axios('GET', this.$paths.meetingFilelist, data)
					.then(res => {
						if (res.code == 200) { 
							var ziliao=res.rows;
							for(var a=0;a<ziliao.length;a++){
								ziliao[a].url=  this.$tools.Decrypt(ziliao[a].url);
								ziliao[a].url=ziliao[a].url.replace('\"',"");
								ziliao[a].url=ziliao[a].url.replace('\"',"");
							}
							this.ziliao=ziliao;
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
