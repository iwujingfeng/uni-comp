<template>
	<view class="empty">
		<image src="../static/empty.png" mode="widthFix"></image>
		<text>邀请您评论哦~</text>
	</view>
</template>

<script>
	export default {
		props:{
			text:{
				type:String,
				default:'暂时还没有数据哦~'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.empty {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		image {
			width: 60%;
			height: auto;
		}

		text {
			font-size: 26upx;
			color: #999999;
		}
	}
</style>
