<template>
	<view class="step">
		<view class="option">
			<view class="wrap">
				<view class="item-on" v-if="current==1">
					<view class="inner">
						<image class="finish-icon" src="@/static/finish.png" mode="widthFix" v-if="finishStep==1"></image>
						<text class="number" v-else>1</text>
					</view>
				</view>
				<view class="item" v-else>
					<text class="number">1</text>
				</view>
			</view>
			<text class="step-des">提交审核</text>
		</view>

		<view class="step-line">
			<image class="arrow" src="@/static/step-arrow.png" mode="widthFix" v-if="finishStep==1"></image>
			<image class="line" src="@/static/step-line.png" mode="widthFix" v-else></image>
		</view>
		<view class="option">
			<view class="wrap">
				<view class="item-on" v-if="current==2">
					<view class="inner">
						<image class="finish-icon" src="@/static/finish.png" mode="widthFix" v-if="finishStep==2"></image>
						<text class="number" v-else>2</text>
					</view>
				</view>
				<view class="item" v-else>
					<text class="number">2</text>
				</view>
			</view>
			<text class="step-des">商家审核</text>
		</view>
		<view class="step-line">
			<image class="arrow" src="@/static/step-arrow.png" mode="widthFix" v-if="finishStep==2"></image>
			<image class="line" src="@/static/step-line.png" mode="widthFix" v-else></image>
		</view>
		<view class="option">
			<view class="wrap">
				<view class="item-on" v-if="current==3">
					<view class="inner">
						<image class="finish-icon" src="@/static/finish.png" mode="widthFix" v-if="finishStep==3"></image>
						<text class="number" v-else>3</text>
					</view>
				</view>
				<view class="item" v-else>
					<text class="number">3</text>
				</view>
			</view>
			<text class="step-des">平台审核</text>
		</view>
		<view class="step-line">
			<image class="arrow" src="@/static/step-arrow.png" mode="widthFix" v-if="finishStep==3"></image>
			<image class="line" src="@/static/step-line.png" mode="widthFix" v-else></image>
		</view>
		<view class="option">
			<view class="wrap">
				<view class="item-on" v-if="current==4">
					<view class="inner">
						<image class="finish-icon" src="@/static/finish.png" mode="widthFix" v-if="finishStep==4"></image>
						<text class="number" v-else>4</text>
					</view>
				</view>
				<view class="item" v-else>
					<text class="number">4</text>
				</view>
			</view>
			<text class="step-des">审核结果</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			current: {
				type: Number,
				default: 1
			},
			finishStep: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.step {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.option {
			min-height: 140upx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;

			.wrap {
				width: 90upx;
				height: 90upx;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.item-on {
				width: 90upx;
				height: 90upx;
				border-radius: 50%;
				background-color: #FEE880;
				display: flex;
				justify-content: center;
				align-items: center;

				.inner {
					width: 66upx;
					height: 66upx;
					background-color: #ffffff;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.number {
					font-size: 30upx;
					color: #343536;
				}

				.finish-icon {
					width: 34upx;
					height: auto;
				}
			}

			.item {
				width: 54upx;
				height: 54upx;
				border-radius: 50%;
				background-color: #FEF1B2;
				display: flex;
				justify-content: center;
				align-items: center;

				.number {
					font-size: 30upx;
					color: #343536;
				}
			}

			.step-des {
				font-size: 26upx;
				color: #343536;
			}
		}

		.step-line {
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			top: -24upx;

			.line {
				width: 64upx;
				height: auto;
			}

			.arrow {
				width: 66upx;
				height: auto;
			}
		}
	}
</style>
