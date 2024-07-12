<template>
	<view>
		<rich-text :nodes="richView.content"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				richView:{}
			}
		},
		onLoad() {
			this.richView=uni.getStorageSync("zixunInfo")
			uni.setNavigationBarTitle({
				title:this.richView.name
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
