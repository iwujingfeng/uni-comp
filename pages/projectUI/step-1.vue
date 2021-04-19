<template>
	<view class="order-return bg-gray">
		<view class="top">
			<BaseStep :current="currentStep" :finish-step="finishStep"></BaseStep>
		</view>
		<view class="container">
			<view class="step-item" v-if="currentStep==1">
				<text class="title">退货理由</text>
				<textarea value="" placeholder="请填写退货理由" placeholder-style="font-size:24upx;color:#91999C" />
				<view class="upload-icon">
					<image src="@/static/upload-icon.png" mode="widthFix"></image>
				</view>
				<view class="upload-image">
					<image src="@/static/test/swiper-test.png"></image>
					<image src="@/static/test/swiper-test.png"></image>
					<image src="@/static/test/swiper-test.png"></image>
					<image src="@/static/test/swiper-test.png"></image>
					<image src="@/static/test/swiper-test.png"></image>
				</view>
			</view>
			<view class="step-item" v-if="currentStep==2">
				<text class="title">填写退货信息</text>
				<view class="info-item">
					<text class="label">收货人</text>
					<input type="text" value="" placeholder="请输入姓名" placeholder-class="placeholder-class" />
				</view>
				<view class="info-item">
					<text class="label">联系方式</text>
					<input type="text" value="" placeholder="请输入联系方式" placeholder-class="placeholder-class" />
				</view>
				<view class="info-item">
					<text class="label">收货地址</text>
					<input type="text" value="" placeholder="请输入收货地址" placeholder-class="placeholder-class" />
				</view>
				<view class="info-item">
					<text class="label">快递单号</text>
					<input type="text" value="" placeholder="请输入快递单号" placeholder-class="placeholder-class" />
				</view>
				<view class="info-item" style="border: none;">
					<text class="label">快递公司</text>
					<input type="text" value="" placeholder="请输入快递公司" placeholder-class="placeholder-class" />
				</view>
			</view>
			<view class="step-item" v-if="currentStep==3">
				<view class="review">
					<image class="review-icon" src="@/static/review-icon.png" mode="widthFix"></image>
					<text>商家审核中</text>
				</view>
			</view>
			<view class="step-item" v-if="currentStep==4">
				<view class="review">
					<image class="review-icon" src="@/static/review-refuse.png" mode="widthFix"></image>
					<text>审核未通过，具体原因请联系商家</text>
				</view>
			</view>
			<BaseButton width="100%" height="102rpx" border-radius="12rpx" bg="#FB8E37"
				v-if="currentStep==1 || currentStep==2" @click-button="onSubmit">提交</BaseButton>
		</view>
	</view>
</template>

<script>
	import BaseStep from '@/components/BaseStep.vue'
	import BaseButton from '@/components/BaseButton.vue'
	export default {
		components: {
			BaseStep,
			BaseButton
		},
		data() {
			return {
				currentStep: 1,
				finishStep: 0
			}
		},
		methods: {
			onSubmit() {
				this.currentStep++
				this.finishStep++
			}
		}
	}
</script>

<style scoped lang="scss">
	.order-return {
		width: 100%;
		min-height: 100vh;

		.top {
			background-color: #FED200;
			padding: 60upx 60upx 90upx 60upx;
			box-sizing: border-box;
		}

		.container {
			width: 100%;
			padding: 0 30upx;
			box-sizing: border-box;
			padding-bottom: 30upx;
			position: relative;
			top: -72upx;

			.step-item {
				width: 100%;
				background-color: #ffffff;
				border-radius: 14upx;
				padding: 50upx 30upx 30upx 30upx;
				box-sizing: border-box;
				margin-bottom: 100upx;

				.title {
					font-size: 30upx;
					color: #343536;
				}

				textarea {
					width: 100%;
					// min-height: 60upx;
					font-size: 24upx;
					color: #91999C;
					margin-top: 30upx;
					margin-bottom: 30upx;
				}

				.upload-icon {
					width: 196upx;
					height: 134upx;
					border-radius: 6upx;
					border: 1px dashed #979797;
					display: flex;
					justify-content: center;
					align-items: center;

					image {
						width: 44upx;
						height: auto;
					}
				}

				.upload-image {
					width: 100%;
					min-height: 18.6vw;
					margin-top: 30upx;

					image {
						width: 18.6vw;
						height: 18.6vw;
						margin: 8upx;
					}
				}

				.info-item {
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					border-bottom: 1px solid #D8D8D8;
					margin-top: 50upx;

					.label {
						font-size: 28upx;
						color: #2F2F2F;
					}

					input {
						font-size: 24upx;
						color: #8D9497;
						margin: 30upx 0;
					}

					.placeholder-class {
						font-size: 24upx;
						color: #8D9497;
					}
				}

				.review {
					width: 100%;
					font-size: 26upx;
					color: #343536;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding-bottom: 80upx;
					padding-top: 150upx;

					.review-icon {
						width: 318upx;
						height: auto;
						margin-bottom: 70upx;
					}
				}
			}
		}
	}
</style>
