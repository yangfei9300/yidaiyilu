<template>
	<view>
		<view class="roww  rowsb" style="padding:15rpx 15rpx;">
			<view class=" colonn ">
				<view class="colonn m-top-20" 
				@click.stop="toInfo(item)"
				v-for="(item,index) in videos" v-if="index%2==0">
					<image class="w-350 m-bottom-20 br-20" :src="item.image" mode="widthFix" ></image>
					<view class="fs-30" style="font-weight: bold;">{{item.adTitle}}</view>
				</view>
			</view>
			<view class=" colonn ">
				<view class="colonn m-top-20" 
				@click.stop="toInfo(item)"
				v-for="(item,index) in videos" v-if="index%2!=0">
					<image class="w-350 m-bottom-20 br-20" :src="item.image" mode="widthFix" ></image>
					<view class="fs-30" style="font-weight: bold;">{{item.adTitle}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videos:[]
			}
		},
		onLoad() {
			this.videoget();
		},
		methods: {
			toInfo(item){
				uni.setStorageSync("videoInfo",item)
				uni.navigateTo({
					url:"/pages/videoInfo/videoInfo"
				})
			},
			videoget(){
				var data = {
					meetingId:getApp().globalData.activityId
				}  
				this.$axios
					.axios('GET', this.$paths.mediumVideolist, data)
					.then(res => {
						if (res.code == 200) { 
							this.videos=res.rows
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
