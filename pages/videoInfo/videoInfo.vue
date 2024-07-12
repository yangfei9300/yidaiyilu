<template>
	<view class="colonn center_center" style="background-color: black;width: 750rpx;height: 100vh;">
		<video :src="videoInfo.videoPath"></video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoInfo:{}
			}
		},
		onLoad() {
			this.videoInfo=uni.getStorageSync("videoInfo");
			uni.setNavigationBarTitle({
				title:this.videoInfo.adTitle
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
