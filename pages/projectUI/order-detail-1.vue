<template>
	<view>
		<view class="title">
			<text>退货物流信息</text>
		</view>
		<view class="info">
			<view class="col col-info">
				<view class="text">
					<text>收货人</text>
				</view>
				<text class="suffix">refundDetail.RefundName</text>
			</view>
			<view class="col col-info">
				<view class="text">
					<text>联系方式</text>
				</view>
				<text class="suffix">refundDetail.RefundTel</text>
			</view>
			<view class="col col-info">
				<view class="text">
					<text>收货地址</text>
				</view>
				<text class="suffix">efundDetail.RefundDetailAddress</text>
			</view>
			<view class="col col-info">
				<view class="text">
					<text>快递单号</text>
				</view>
				<text class="suffix">refundDetail.CourierNumber</text>
			</view>
			<view class="col col-info">
				<view class="text">
					<text>快递公司</text>
				</view>
				<text class="suffix">refundDetail.RefundLogisticsCompany</text>
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
	.title {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24upx 0;
		box-sizing: border-box;
		font-size: 30upx;
		color: #2a2a2a;
		border-bottom: 1px solid #eaebec;

		.suffix {
			font-size: 28upx;
			color: #84898b;
		}
	}

	.info {
		width: 100%;
		color: #383838;
		font-size: 26upx;
		padding-top: 20upx;
		padding-bottom: 24upx;

		.col {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.prefix {
				width: 28upx;
				height: 28upx;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #f1583e;
				border-radius: 6upx;
				font-size: 24upx;
				color: #ffffff;
			}

			.suffix {
				color: #e15e47;
			}

			.text {
				width: 0;
				flex-grow: 1;
				text-align: left;
				padding: 10upx 20upx;
				box-sizing: border-box;
			}
		}

		.col1 {
			font-size: 26upx;
		}

		.col2 {
			font-size: 26upx;
		}

		.col-info {
			.text {
				padding-left: 0;
				color: #84898b;
			}

			.suffix {
				color: #2a2a2a;
				// 设置宽度 强制换行 避免压缩左侧标题
				width: 450upx;
				word-break: break-all;
				text-align: right;
			}
		}
	}
</style>
