<template>
	<view>
		<view class="money">
			<view class="inner">
				<view class="item top">
					<text class="title">我的钱包</text>
					<view class="right" @click="$Router.push({ name: 'offers' })">
						<text class="more">更多优惠</text>
						<view class="arrow"></view>
					</view>
				</view>
				<view class="bottom">
					<view class="bottom-item" @click="$Router.push({ name: 'coin-record' })">
						<view class="top">
							<text>500000</text>
							<text class="unit">个</text>
						</view>
						<text class="sub-title">享学币</text>
					</view>
					<view class="bottom-item" @click="$Router.push({ name: 'balance' })">
						<view class="top">
							<text>10000</text>
							<text class="unit">元</text>
						</view>
						<text class="sub-title">余额</text>
					</view>
					<view class="bottom-item" @click="$Router.push({ name: 'coupon-share' })">
						<view class="top">
							<text>0</text>
							<text class="unit">张</text>
						</view>
						<text class="sub-title">分享卡券</text>
					</view>
					<view class="bottom-item" @click="$Router.push({ name: 'coupon-me' })">
						<view class="top">
							<text>1</text>
							<text class="unit">张</text>
						</view>
						<text class="sub-title">已领卡券</text>
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

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.money {
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;
		position: relative;

		.inner {
			min-height: 216upx;
			background: #ffffff;
			box-shadow: 0px 2px 10px 0px #e5e7ef, 0px 2px 10px 0px #e5e7ef;
			padding: 0 30upx;
			box-sizing: border-box;
			border-radius: 20upx;
			padding-top: 30upx;
			padding-bottom: 26upx;

			.item {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #37496c;
				font-size: 24upx;
			}

			.top {
				font-size: 30upx;

				.right {
					display: flex;
					justify-content: flex-end;
					align-items: center;

					.more {
						font-size: 28upx;
						color: #343536;
						margin-right: 12upx;
					}

					.arrow {
						width: 0;
						height: 0;
						border-top: 12upx solid transparent;
						border-bottom: 12upx solid transparent;
						border-left: 12upx solid #343536;
					}
				}
			}

			.bottom {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 34upx;

				.bottom-item {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: #37496c;

					.top {
						width: 100%;
						text-align: center;
						font-size: 40upx;

						.unit {
							// font-size: 24upx;
							margin-left: 10upx;
						}
					}

					.sub-title {
						text-align: center;
						font-size: 24upx;
					}
				}
			}
		}
	}
</style>
