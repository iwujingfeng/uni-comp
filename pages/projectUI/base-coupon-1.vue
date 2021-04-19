<template>
	<view class="container">
		<view class="item" :style="{ height: itemHeight + 'px' }">
			<image class="item-bg" src="../../static/coupon-share.png" mode="widthFix"></image>
			<view class="content" :style="{ height: (itemHeight / 3) * 2 + 'px' }">
				<view class="left">
					<view class="count">
						<text class="unit">￥</text>
						<text>500</text>
					</view>
					<view class="btn-wrap">
						<view class="btn">
							<text>兑换券</text>
						</view>
						<view class="btn">
							<text>立减券</text>
						</view>
					</view>
				</view>
				<view class="center">
					<text class="title">新东方教育</text>
					<text>有效期：2021.2.10</text>
				</view>
				<view class="right">
					<text class="title">20次</text>
					<text>剩余</text>
				</view>
			</view>
			<view class="button" :style="{ height: (itemHeight / 3) * 1 + 'px' }">
				<text>立即分享</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemWidth: 0, // 卡片的宽度
			};
		},
		computed: {
			itemHeight() {
				return Math.round(this.itemWidth / 2.46);
			},
		},
		onReady() {
			this.getItemWidth();
		},
		methods: {
			getItemWidth() {
				this.$nextTick(() => {
					const query = uni.createSelectorQuery();
					query
						.select(".item-bg")
						.boundingClientRect((rect) => {
							this.itemWidth = rect.width;
						})
						.exec();
				});
			},
		},
	};
</script>

<style scoped lang="scss">
	.container {
		width: 100%;
		padding: 14upx 30upx;
		box-sizing: border-box;
	}

	.item {
		position: relative;
		margin-bottom: 24upx;
		// 新增
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		image {
			width: 100%;
			height: auto;
			border-radius: 6upx;
			position: absolute;
			// 新增
			z-index: -1;
		}

		.content {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			position: relative;
			z-index: 1;
			// 修改
			padding: 40upx 30upx;
			box-sizing: border-box;

			.left {
				// 修改
				width: 32%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				color: #c68655;

				.count {
					font-size: 60upx;

					.unit {
						font-size: 32upx;
						margin-right: 10upx;
					}
				}

				.btn-wrap {
					font-size: 24upx;
					display: flex;
					justify-content: flex-start;
					align-items: center;

					.btn {
						border: 1px solid #c68655;
						padding: 4upx 6upx;
						border-radius: 4upx;
						margin-right: 10upx;
					}
				}
			}

			.center {
				width: 0;
				flex-grow: 1;
				color: #8a6546;
				font-size: 24upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				padding-left: 24upx;
				box-sizing: border-box;

				.title {
					font-size: 32upx;
					color: #2f2f2f;
					margin-bottom: 20upx;
				}
			}

			.right {
				// 修改
				width: 30%;
				color: #8a6546;
				font-size: 24upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.title {
					font-size: 32upx;
					color: #2f2f2f;
					margin-bottom: 20upx;
				}
			}
		}

		.button {
			width: 100%;
			position: relative;
			z-index: 1;
			//   margin-top: 28upx;
			font-size: 28upx;
			color: #653817;
			text-align: center;
			padding: 26upx 0;
		}
	}
</style>
