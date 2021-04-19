<template>
	<view class="customer-service">
		<view class="container">
			<view class="card1">
				<view class="title">
					<text>在线电话</text>
				</view>
				<view class="bottom">
					<view class="item">
						<view class="left">
							<view class="col" style="padding-top: 14upx">
								<image class="tel-icon" src="@/static/tel02.png" mode="widthFix"></image>
								<text class="number">优优客服（课程咨询）</text>
							</view>
							<text>400-154-9999</text>
						</view>
						<BaseButton width="136rpx" height="48rpx" bg="#ffd101" font-size="26rpx" color="#333333">拨号
						</BaseButton>
					</view>
					<view class="item border-none">
						<view class="left">
							<view class="col" style="padding-top: 14upx">
								<image class="tel-icon" src="@/static/tel02.png" mode="widthFix"></image>
								<text class="number">优优客服（课程咨询）</text>
							</view>
							<text>400-154-9999</text>
						</view>
						<BaseButton width="136rpx" height="48rpx" bg="#ffd101" font-size="26rpx" color="#333333">拨号
						</BaseButton>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import BaseButton from "@/components/BaseButton.vue";
	export default {
		components: {
			BaseButton,
		},
	};
</script>

<style scoped lang="scss">
	.customer-service {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #ffd101;

		.container {
			width: 100%;
			padding: 30upx;
			padding-bottom: 160upx;
			box-sizing: border-box;

			.card1 {
				width: 100%;
				background-color: #ffffff;
				border-radius: 20upx;
				padding: 28upx;
				box-sizing: border-box;
				margin-bottom: 26upx;

				.title {
					font-size: 32upx;
					color: #333333;
					margin-bottom: 20upx;
					font-weight: bold;
				}

				.bottom {
					font-size: 26upx;
					color: #777777;

					text {
						margin-right: 100upx;
					}

					.item {
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						border-bottom: 1px solid #e6e6e6;
						padding: 26upx 0;

						.left {
							width: 0;
							flex-grow: 1;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: flex-start;

							.col {
								margin-bottom: 10upx;
								display: flex;
								align-items: center;

								text {
									margin-right: 0;
								}

								.tel-icon {
									width: 36upx;
									height: auto;
									margin-right: 20upx;
								}
							}
						}
					}
				}
			}

			.card2 {
				width: 100%;
				background-color: #ffffff;
				border-radius: 20upx;
				padding: 28upx;
				box-sizing: border-box;
				margin-bottom: 26upx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.main {
					width: 0;
					flex-grow: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;

					.col {
						font-size: 24upx;
						color: #e46c12;
						margin-top: 14upx;

						.number {
							font-weight: bold;
						}
					}
				}

				.code {
					width: 158upx;
					height: 158upx;
				}
			}
		}
	}
</style>
