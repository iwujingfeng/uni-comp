<template>
	<view class="recharge bg-gray">

		<view class="container">
			<view class="amount">
				<view class="title">
					<text>充值金额</text>
					<text class="ratio">1元=1圆梦币</text>
				</view>
				<view class="input">
					<text class="suffix">¥</text>
					<BaseInput :show-suffix="false" :has-border-bottom="false" placeholder=""></BaseInput>
					<image class="close" src="@/static/close-icon.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="grid">
				<view class="item">
					<text class="top">20</text>
					<text class="bottom">￥20.00</text>
				</view>
				<view class="item margin">
					<text class="top">20</text>
					<text class="bottom">￥20.00</text>
				</view>
				<view class="item">
					<text class="top">20</text>
					<text class="bottom">￥20.00</text>
				</view>
				<view class="item">
					<text class="custom">自定义充值</text>
				</view>
			</view>
			<view class="button-container">
				<BaseButton bg="#5678fe" width="100%" border-radius="6rpx" font-size="32rpx">充值</BaseButton>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 充值
	 */
	import BaseInput from '@/components/BaseInput.vue'
	import BaseButton from '@/components/BaseButton.vue'

	export default {
		components: {
			BaseInput,
			BaseButton
		}
	}
</script>

<style scoped lang="scss">
	.recharge {
		width: 100%;
		min-height: 100vh;
    .container {
			width: 100%;
			padding: 30upx;
			box-sizing: border-box;
		}
		.amount {
			width: 100%;
			background-color: #ffffff;
			border-radius: 14upx;
			padding: 35upx;
			box-sizing: border-box;

			.title {
				width: 100%;
				display: flex;
				align-items: center;
				font-size: 29upx;
				color: #333333;
				margin-bottom: 44upx;

				.ratio {
					font-size: 24upx;
					color: #f2661e;
					margin-left: 18upx;
				}
			}

			.input {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: flex-end;

				.suffix {
					font-size: 36upx;
					color: #333333;
					position: relative;
					top: -24upx;
				}

				.input-el {
					width: 0;
					flex-grow: 1;
				}

				.close {
					width: 42upx;
					height: 42upx;
					margin-left: 20upx;
					position: relative;
					top: -24upx;
				}
			}


		}

		.grid {
			width: 100%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			margin-top: 40upx;

			.item {
				width: 31.5%;
				height: 134upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background-color: #ffffff;
				box-shadow:
					-2px 0px 5px 1px #f9f9f9,
					0px -2px 5px 1px #f9f9f9,
					2px 0px 5px 1px #f9f9f9,
					0px 2px 5px 1px #f9f9f9;

				.top {
					font-size: 48upx;
					color: #5678fe;
					font-weight: bold;
				}

				.bottom {
					font-size: 24upx;
					color: #a0a4b4;
				}

				.custom {
					font-size: 30upx;
					color: #ff9056;
					font-weight: bold;
				}
			}
			.margin {
				margin: 40upx 20upx;
			}
		}
		.button-container {
			position: fixed;
			bottom: 26upx;
			left: 0;
			right: 0;
			padding: 0 30upx;
			box-sizing: border-box;
		}
	}
</style>
