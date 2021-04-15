<template>
	<view class="share">
		<uni-nav-bar title="分享" :statusBar="true" :border="false" background-color="#ffd101" @clickLeft="routerBack()">
			<block slot="left">
				<image src="@/static/back-icon.png" mode="widthFix" style="width: 24upx;"></image>
			</block>
		</uni-nav-bar>
		<UniPopup ref="sharePopup" background-color="rbga(0,0,0,.8)">
			<view class="poster">
				<image class="share-cover" src="../static/test/share-test.png"></image>
				<view class="inner">
					<view class="content">
						<view class="title-wrap">
							<text class="title">量身定制高数数学1对1系列课程量身定制高...</text>
							<view class="price">
								<text class="unit">¥</text>
								<text>638.00</text>
								<text class="raw">￥1000</text>
							</view>
						</view>
						<image class="code" src="../static/test/code-test.png"></image>
					</view>
				</view>
			</view>
			<view class="action">
				<view class="icon">
					<view class="item">
						<image src="../static/save.png"></image>
						<text>保存图片</text>
					</view>
					<view class="item">
						<image src="../static/copy.png"></image>
						<text>分享链接</text>
					</view>
				</view>
				<view class="button" @click="close">
					<text>取消</text>
				</view>
			</view>
			<!-- <BaseCanvasShare></BaseCanvasShare> -->
		</UniPopup>
	</view>
</template>

<script>
	import BaseCanvasShare from '@/components/BaseCanvasShare.vue'
	import UniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			BaseCanvasShare,
			UniPopup
		},
		mounted() {
			// this.$refs.sharePopup.open()
		},
		methods:{
			open() {
				this.$refs.sharePopup.open()
			},
			close() {
				this.$refs.sharePopup.close()
			},
		}
	}
</script>

<style scoped lang="scss">
	/deep/.uni-popup__wrapper-box {
		top: -8%;
	}
  .share {
		width: 100%;
		min-height: 100vh;
	}
	.poster {
		width: 80vw;
		min-height: 100vw;
		padding: 26upx;
		box-sizing: border-box;
		background-color: #f2f1f6;
		border-radius: 18upx;
    .inner {
			width: 100%;
			background-color: #ffffff;
			padding: 30upx;
			box-sizing: border-box;
			border-radius: 16upx;
		}
		.share-cover {
			width: 100%;
			vertical-align: bottom;
		}

		.content {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title-wrap {
				width: 0;
				flex-grow: 1;
				margin-right: 40upx;

				.title {
					font-size: 28upx;
					color: #333333;
					display: block;
					margin-bottom: 10upx;
				}

				.price {
					width: 100%;
					display: flex;
					align-items: flex-end;
					font-size: 33upx;
					color: #f1583e;

					.unit {
						font-size: 24upx;
					}

					.raw {
						font-size: 24upx;
						color: #c7c7c7;
					}
				}

			}

			.code {
				width: 148upx;
				height: 148upx;
			}
		}
	}

	.action {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background: #ffffff;

		.icon {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom: 1px solid #e2e1e1;

			.item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 30upx 58upx;
				box-sizing: border-box;

				image {
					width: 82upx;
					height: 82upx;
				}

				text {
					font-size: 24upx;
					color: #999999;
					margin-top: 14upx;
				}
			}
		}

		.button {
			width: 100%;
			padding: 30upx 0;
			text-align: center;
			font-size: 34upx;
			color: 3333333;
		}
	}
</style>
