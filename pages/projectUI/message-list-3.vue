<template>
	<view class="message-detail">
		<view class="container">
			<view class="item">
				<view class="time">
					<text>2020-10-21 14:33</text>
				</view>
				<view class="message">
					<image class="bg" :style="{ width: coverWidth + 'px' }" src="@/static/test/banner-test.png"
						mode="widthFix" />
					<view class="title-wrap">
						<text class="title">21天攒图计划</text> <text>招募令</text>
					</view>
					<text>每日一画，不画就出局</text>
					<text>来吧，一起坚持21天，做行动派！</text>
					<!-- 标签 -->
					<view class="tag">
						<text>活动</text>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="time">
					<text>2020-10-21 14:33</text>
				</view>
				<view class="message">
					<image class="bg" :style="{ width: coverWidth + 'px' }" src="@/static/test/banner-test.png"
						mode="widthFix" />
					<view class="title-wrap">
						<text class="title">快题竞赛</text>
						<text>2020“建艺杯"等你来战 </text>
					</view>

					<text>每日一画，不画就出局</text>
					<text>来吧，一起坚持21天，做行动派！</text>
					<view class="tag">
						<text>活动</text>
					</view>
				</view>
			</view>
		</view>
		<BaseBottomNavbar v-if="isShowTab"></BaseBottomNavbar>
	</view>
</template>

<script>
	/**
	 * @description  消息详情
	 */
	export default {
		data() {
			return {
				title: "",
				coverWidth: 0,
			};
		},
		onLoad() {
			this.getCoverImageWidth();
		},
		methods: {
			getCoverImageWidth() {
				this.$nextTick(() => {
					const query = uni.createSelectorQuery();
					console.log("query", query);
					query
						.select(".message")
						.boundingClientRect((rect) => {
							this.coverWidth = rect.width;
						})
						.exec();
				});
			},
		},
	};
</script>

<style scoped lang="scss">
	.message-detail {
		width: 100%;

		.container {
			width: 100%;
			padding: 30upx;
			box-sizing: border-box;
			background-color: #ffffff;
		}

		.item {
			width: 100%;

			.time {
				width: 100%;
				text-align: center;
				font-size: 24upx;
				color: #999999;
				padding: 30upx 0;
			}

			.message {
				width: 100%;
				background-color: rgba($color: #000000, $alpha: 1);
				border-radius: 20upx;
				padding: 30upx;
				box-sizing: border-box;
				font-size: 26upx;
				position: relative;
				overflow: hidden;

				.bg {
					position: absolute;
					left: 0;
					top: 0;
					border-radius: 20upx;
					opacity: 0.5;
				}

				.title-wrap {
					display: flex;
					flex-direction: row;
					align-items: center;

					.title {
						font-size: 36upx;
						margin-right: 20upx;
					}
				}

				text {
					line-height: 1.8;
					color: #ffffff;
				}

				.tag {
					width: 100upx;
					height: 50upx;
					border-top-right-radius: 20upx;
					border-bottom-left-radius: 20upx;
					position: absolute;
					top: -2upx;
					right: -2upx;
					background-color: rgb(228, 218, 206);
					// padding-top: 4upx;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;

					text {
						font-size: 24upx;
						// text-align: center;
					}
				}
			}
		}
	}
</style>
