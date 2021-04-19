<template>
	<view>
		<view class="banner">
			<image class="icon" src="@/static/edit.png" mode="widthFix"></image>
			<view class="center">
				<text>在这里赠积分给好友哦~</text>
			</view>
			<view class="rect">
				<text>积分转赠</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.banner {
		width: 100%;
		padding: 22upx 30upx;
		box-sizing: border-box;
		background: linear-gradient(to right, #f9e3cd, #f4cfb2);
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 16upx;
		margin-bottom: 20upx;

		.icon {
			width: 46upx;
			height: auto;
		}

		.center {
			width: 0;
			flex-grow: 1;
			font-size: 26upx;
			color: #94623c;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-left: 30upx;
			box-sizing: border-box;
		}

		.rect {
			width: 134upx;
			height: 50upx;
			line-height: 50upx;
			border: 1px solid #94623c;
			border-radius: 4upx;
			color: #94623c;
			font-size: 24upx;
			text-align: center;
		}
	}
</style>
