<template>
	<view>
		<view class="colonn">
			<view class="roww p-all-20 border_bottom" v-for="(item,index) in phoens">
				<view>{{item.name}}</view>
				<view class="allline"></view>
				<view>{{item.phone}}</view>
				<view class="w-20"></view>
				<view style="color: blue;font-weight: bold;"
				@click.stop="makephoen(item)"
				>拨打</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoens:[]
			}
		},
		onLoad() {
			this.getPhone();
		},
		methods: {
			makephoen(item){
				uni.makePhoneCall({
					phoneNumber:item.phone
				})
			},
			getPhone(){
				var data = {
					'meetingId':getApp().globalData.activityId,
				}  
				this.$axios
					.axios('GET', this.$paths.meetingContactlist, data)
					.then(res => {
						if (res.code == 200) { 
							this.phoens=res.rows;
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
