<template>
	<view class="feedback">
		<image class="bg" src="@/static/feedback.png" mode="widthFix"></image>
		<view class="content">
			<view class="top">
				<image src="@/static/test/avatar-test.png" mode="widthFix"></image>
				<view class="right">
					<text>快来说说使用中遇到的问题吧！</text>
					<text class="bottom">功能异常/体验问题/产品建议等</text>
				</view>
			</view>
			<view class="main">
				<view class="close">
					<image src="@/static/close-gray.png" mode="widthFix"></image>
				</view>
				<view class="title">
					<text>请描述立农银行应用使用问题/意见反馈</text>
				</view>
				<view class="input">
         <textarea auto-height row="2" value="" placeholder="某个功能无法使用、页面白屏/卡顿/闪退、或其他产品建议（5个字以上）" placeholder-class="placeholder-class"/>
				</view>
				<view class="add">
					<image src="@/static/add-bg.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="btn">
				<BaseButton>提交</BaseButton>
			</view>
		</view>
	</view>
</template>

<script>
	import BaseButton from '@/components/BaseButton.vue'
	export default {
		components:{
			BaseButton
		}
	}
</script>

<style scoped lang="scss">
	.feedback {
		width: 100%;
		min-height: 100vh;
		position: relative;

		.bg {
			width: 100%;
			height: auto;
		}

		.content {
			width: 100%;
			min-height: 70vh;
			padding: 30upx 14rpx;
			box-sizing: border-box;
			position: absolute;
			top: 10vw;

			.top {
				width: 100%;
				display: flex;
				align-items: center;

				image {
					width: 106upx;
					height: auto;
					margin-right: 20upx;
				}

				.right {
					width: 0;
					flex-grow: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					font-size: 28upx;
					color: #ffffff;

					.bottom {
						margin-top: 10upx;
					}
				}
			}

			.main {
				width: 100%;
				min-height: 50vh;
				margin-top: 40upx;
				background-color: #ffffff;
				border-top-left-radius: 18upx;
				border-top-right-radius: 18upx;

				.close {
					width: 100%;
					text-align: right;

					image {
						width: 22upx;
						height: auto;
						padding: 40upx;
					}
				}

				.title {
					width: 100%;
					text-align: left;
					position: relative;
					top: -20upx;
					padding: 0 30upx;
					box-sizing: border-box;

					text {
						color: #333333;
						font-size: 26upx;
					}
				}
			 .input {
				 width: 100%;
				 padding: 0 30upx;
				 box-sizing: border-box;
				 margin-top: 20upx;
				 textarea {
					 width: 100%;
					 min-height: 90rpx;
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
			}
		}
	}
</style>
