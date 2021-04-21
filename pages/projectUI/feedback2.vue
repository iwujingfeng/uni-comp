<template>
	<view class="feedback">
		<view class="content">
			<view class="main">
				<view class="title">
					<text>问题描述</text>
					<text class="des">*必填</text>
				</view>
				<view class="input">
					<textarea auto-height row="3" value="" placeholder="某个功能无法使用、页面白屏/卡顿/闪退、或其他产品建议（5个字以上）"
						placeholder-class="placeholder-class" />
				</view>
				<view class="add">
					<image src="@/static/add-bg.png" mode="widthFix"></image>
				</view>
				<view class="title">
					<text>联系方式</text>
					<text class="des">*必填</text>
				</view>
				<view class="input">
					<input type="tel" value="" placeholder="请输入联系方式" placeholder-class="placeholder-class" />
				</view>
			</view>
			<view class="btn">
				<BaseButton width="50vw">提交</BaseButton>
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
	.placeholder-class {
		font-size: 24upx;
		color: #cccccc;
	}

	.feedback {
		width: 100%;
		min-height: 100vh;
		position: relative;

		.content {
			width: 100%;
			margin-top: 60upx;
			// min-height: 70vh;
			// padding: 30upx 14rpx;
			// box-sizing: border-box;
			// position: absolute;
			// top: 10vw;


			.main {
				width: 100%;
				// min-height: 50vh;
				margin-bottom: 80upx;
				background-color: #ffffff;
				// border-top-left-radius: 18upx;
				// border-top-right-radius: 18upx;
				padding: 30upx;
				box-sizing: border-box;


				.title {
					width: 100%;
					text-align: left;
					padding: 0 30upx;
					box-sizing: border-box;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					text {
						color: #333333;
						font-size: 26upx;
					}

					.des {
						color: red;
						font-size: 24upx;
					}
				}

				.input {
					width: 100%;
					padding: 0 30upx;
					box-sizing: border-box;
					margin-top: 20upx;

					textarea {
						width: 100%;
						min-height: 120rpx;
						font-size: 26upx;
					}
				}

				.add {
					width: 100%;
					padding: 0 30upx;
					box-sizing: border-box;
					margin-top: 20upx;
					text-align: left;

					image {
						width: 128upx;
						height: auto;
					}
				}
			}

			.btn {
				width: 100%;
				padding: 0 110upx;
				box-sizing: border-box;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
