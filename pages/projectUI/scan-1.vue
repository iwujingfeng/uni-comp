<template>
	<view class="identity-code">
		<view class="container">
			<view class="card">
				<view class="title">
					<image src="@/static/identity.png" mode="widthFix"></image>
					<text>身份码</text>
				</view>
				<view class="code">
					<view class="inner">
						<view class="tips">
							<text>管理身份 课程签到</text>
						</view>
						<image src="@/static/test/code-test2.png" mode="widthFix"></image>
					</view>
				</view>
				<!-- <view class="des">
					<image src="../static/tixing.png" mode="widthFix"></image>
					<text>管理身份，课程签到</text>
				</view> -->
			</view>
			<view class="button-container">
				<BaseButton width="320rpx" height="102rpx" bg="#FB8E37" border-radius="12rpx" color="#ffffff"
					font-size="32rpx" bold>保存二维码图片</BaseButton>
				<BaseButton width="320rpx" height="102rpx" bg="#FB8E37" border-radius="12rpx" color="#ffffff"
					font-size="32rpx" bold @click-button="$Router.push({name:'record'})">查看核销记录</BaseButton>
			</view>
		</view>
	</view>
</template>

<script>
	import BaseButton from '@/components/BaseButton.vue'
	export default {
		components: {
			BaseButton
		}
	}
</script>

<style scoped lang="scss">
	.identity-code {
		width: 100%;
		min-height: 100vh;
		background-color: #FED200;

		.container {
			width: 100%;
			padding: 30upx;
			box-sizing: border-box;
		}

		.card {
			width: 100%;
			background-color: #ffffff;
			border-radius: 12upx;

			.title {
				font-size: 30upx;
				color: #2F2F2F;
				display: flex;
				align-items: center;
				padding: 30upx 50upx;
				box-sizing: border-box;
				background-color: #F7F7F7;
				border-top-left-radius: 12upx;
				border-top-right-radius: 12upx;

				image {
					width: 52upx;
					height: auto;
					margin-right: 14upx;
				}
			}

			.code {
				width: 100%;
				padding: 30upx 44upx 0 44upx;
				box-sizing: border-box;

				.inner {
					border-bottom: 1px solid #F7F7F7;
					padding: 70upx 80upx;
					padding-top: 0;
					box-sizing: border-box;
					font-size: 30upx;
					color: #2F2F2F;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding-bottom: 110upx;

					image {
						width: 100%;
						height: auto;
						margin-top: 30upx;
					}

					.tips {
						margin: 30upx 0;
						text-align: center;
						font-size: 30upx;
						color: #A5B0B6;
						font-weight: bold;
					}
				}
			}

			.des {
				font-size: 30upx;
				color: #2F2F2F;
				display: flex;
				align-items: center;
				padding: 30upx 50upx;
				box-sizing: border-box;

				image {
					width: 36upx;
					height: auto;
					margin-right: 14upx;
				}
			}
		}

		.button-container {
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin-top: 100upx;
		}
	}
</style>
