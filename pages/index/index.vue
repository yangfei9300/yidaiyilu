<template>
	<view class="colonn">
		<view class="roww p-all-20">
			<image src="/static/LOGO.png" class="w-375 " mode="widthFix"></image>
		</view>
		<image :src="activityInfo.bannerImage" class="w-750" mode="widthFix"></image>
		<view class="h-25"></view>
		<view class="huanhang">
			<view class="colonn w-187 center_center m-bottom-20" 
			@click.stop="toPage(1)"
			>
				<image src="/static/t1.jpg" class="w-100 h-100"></image>
				<view class="h-10"></view>
				<view class="fs-30">大会简介</view>
			</view>
			<view class="colonn w-187 center_center m-bottom-20" 
			@click.stop="toPage(2)"
			>
				<image src="/static/t2.jpg" class="w-100 h-100"></image>
				<view class="h-10"></view>
				<view class="fs-30">大会日程</view>
			</view>
			<view class="colonn w-187 center_center m-bottom-20"
				@click.stop="toPage(3)"
			>
				<image src="/static/t3.jpg" class="w-100 h-100"></image>
				<view class="h-10"></view>
				<view class="fs-30">友情提示</view>
			</view>
			<view class="colonn w-187 center_center m-bottom-20"
			@click.stop="toPage(4)"
			>
				<image src="/static/t4.jpg" class="w-100 h-100"></image>
				<view class="h-10"></view>
				<view class="fs-30">宣传片</view>
			</view>
			<view class="colonn w-187 center_center m-bottom-20"
			@click.stop="toPage(5)"
			>
				<image src="/static/t5.jpg" class="w-100 h-100"></image>
				<view class="h-10"></view>
				<view class="fs-30">会场指引</view>
			</view>
			<view class="colonn w-187 center_center m-bottom-20"
			@click.stop="toPage(6)"
			>
				<image src="/static/t6.jpg" class="w-100 h-100"></image>
				<view class="h-10"></view>
				<view class="fs-30">资料下载</view>
			</view>
			<view class="colonn w-187 center_center m-bottom-20"
			@click.stop="toPage(7)"
			>
				<image src="/static/t7.jpg" class="w-100 h-100"></image>
				<view class="h-10"></view>
				<view class="fs-30">联系我们</view>
			</view>
		</view>
		<view class="colonn center_center">
			<view style="font-weight: bold;" 
			class="m-top-30 m-bottom-40">大会资讯</view>
			<view class="colonn">
				<view class="roww border_bottom m-bottom-20 p-bottom-20" 
				v-for="(item,index) in zixunList"
				@click.stop="toizxun(item)"
				>
					<image 
					:src="item.image" 
					class="w-300 h-200"
					mode="aspectFill"
					></image>
					<view class="w-25"></view>
					<view class="txtShowLength2 fs-30 w-400 h-90"
					style="line-height: 30rpx;font-weight: 700;"
					>
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activityInfo:{},//活动详情
				zixunList:[]
			}
		},  
		onLoad() {
			this.getInfo();
			this.getZixun()
		}, 
		methods: {
			toizxun(item){
				uni.setStorageSync("zixunInfo",item)
				uni.navigateTo({
					url:"/pages/richview/richview"
				})
			},
			// 
			getZixun(){
				var data = {
					'meetingId':5
				}  
				this.$axios
					.axios('GET', this.$paths.mediumNewslist, data)
					.then(res => {
						if (res.code == 200) { 
							var zixunList=res.rows; 
							for(var a=0;a<zixunList.length;a++){
								zixunList[a].content=this.$tools.formatRichText(zixunList[a].content);
							}
							this.zixunList=zixunList;
							console.log("asd",this.zixunList)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {});
			},
			toPage(index){
				if(index==1||index==2){
					uni.navigateTo({
						url:"/pages/conferenceIntroduction/conferenceIntroduction?type="+index
					})
				}else if(index==3){
					uni.navigateTo({
						url:"/pages/tip/tip?type="+index
					})
				}else if(index==4){
					uni.navigateTo({
						url:"/pages/videos/videos"
					})
				}else if(index==5){
					uni.navigateTo({
						url:"/pages/tip/tip?type="+index
					})
				}else if(index==6){
					uni.navigateTo({
						url:"/pages/ziliaoxiazai/ziliaoxiazai?"
					})
				}else if(index==7){
					uni.navigateTo({
						url:"/pages/phones/phones",
					})
				}
			},
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
	@import url(index.css);
</style>
