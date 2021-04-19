<template>
	<view class="offers">
		<view class="container">
			<BaseButton width="100%" height="70rpx" border-radius="4rpx" font-size="30rpx" color="#ffffff" bg="#F1583E">换一批</BaseButton>
			<view class="list">
				<view class="item">
					<image class="bg" src="@/static/quan-bg.png" mode="widthFix"></image>
					<view class="rect"></view>
					<text class="qiang">抢</text>
					<view class="content">
						<image class="avatar" src="@/static/test/avatar-test.png"></image>
						<view class="main">
							<view class="c1">
								<text>￥</text>
							</view>
							<view class="c2">
								<text>99</text>
							</view>
							<view class="c3">
								<text class="t1">立减券</text>
								<text class="t2">新东方·少儿国画</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 更多优惠
	 */
	import BaseButton from '@/components/BaseButton.vue'
	export default {
		components: {
			BaseButton
		}
	}
</script>

<style scoped lang="scss">
	.offers {
		width: 100%;
    .container {
			width: 100%;
			padding: 40upx 30upx;
			box-sizing: border-box;
		}
		.list {
			width: 100%;
			margin-top: 30upx;

			.item {
				width: 100%;
				position: relative;
				margin-bottom: 24upx;

				.bg {
					width: 85vw;
					height: auto;
					position: absolute;
					z-index: 1;
				}

				.rect {
					width: 120upx;
					height: 120upx;
					background-color: #F1583E;
					border-radius: 4upx;
					position: absolute;
					right: 0;
					transform: translateX(-18upx) translateY(20upx) rotate(12deg);
				}

				.qiang {
					font-size: 32upx;
					position: absolute;
					z-index: 2;
					color: #ffffff;
					right: 40upx;
					top: 60upx;
				}

				.content {
					z-index: 3;
					position: relative;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 20upx;
					box-sizing: border-box;

					.avatar {
						width: 120upx;
						height: 120upx;
						margin-right: 60upx;
					}

					.main {
						width: 0;
						flex-grow: 1;
						height: 90upx;
						display: flex;
						align-items: center;
						color: #E63236;

						.c1 {
							font-size: 32upx;
							position: relative;
							bottom: -24upx;
							font-weight: bold;
							margin-right: 4upx;
						}

						.c2 {
							font-size: 90upx;
						}

						.c3 {
							font-size: 32upx;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: flex-start;
							margin-left: 10upx;
							.t2 {
								font-size: 24upx;
								color: #CC6A27;
							}
						}
					}
				}
			}
		}
	}
</style>
