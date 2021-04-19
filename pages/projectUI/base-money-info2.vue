<template>
	<view>
		<view class="money">
			<view class="inner">
				<view class="item top">
					<text class="title">我的钱包</text>
					<view class="right">
						<text class="more">更多优惠</text>
						<view class="arrow"></view>
					</view>
				</view>
				<!-- 新增 -->
				<view class="ceil-wrap">
					<view class="ceil-item">
						<text class="ceil-count">22</text>
						<text class="ceil-title">圆梦币(个）</text>
					</view>
					<view class="ceil-item">
						<text class="ceil-count">2</text>
						<text class="ceil-title">余额(元)</text>
					</view>
					<view class="ceil-item">
						<text class="ceil-count">10张</text>
						<text class="ceil-title">已领卡券(张）</text>
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

		.inner {
			min-height: 216upx;
			background: linear-gradient(to right, #fce5cf, #fbebd8, #f5d1b4);
			padding: 0 30upx;
			box-sizing: border-box;
			border-top-left-radius: 20upx;
			border-top-right-radius: 20upx;
			padding-top: 30upx;
			padding-bottom: 26upx;

			.item {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #905d36;
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

			.middle {
				font-size: 34upx;
				font-weight: bold;
				margin-bottom: 20upx;
				margin-top: 30upx;
			}

			// 新增
			.ceil-wrap {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.ceil-item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 0 30upx;
				box-sizing: border-box;
			}

			.ceil-count {
				color: #905d36;
				font-size: 34upx;
				font-weight: bold;
				margin-bottom: 20upx;
				margin-top: 30upx;
			}

			.ceil-title {
				color: #905d36;
				font-size: 24upx;
			}
		}
	}
</style>
