<template>
	<view class="message-detail">
		<view class="container">
			<view class="item">
				<view class="time">
					<text>2020-10-21 14:33</text>
				</view>
				<view class="message">
					<text>还在给孩子报“情商培训班”？李玫瑾：其实最好的情商教育在家里</text>
				</view>
			</view>
			<view class="item">
				<view class="time">
					<text>2020-10-21 14:33</text>
				</view>
				<view class="message">
					<text class="link">联想法：记得快记得牢，快速领取！>></text>
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
				title: ''
			}
		},
		onLoad() {
			this.title = this.$Route.query.name
		}
	}
</script>

<style scoped lang="scss">
	.message-detail {
		width: 100%;

		.container {
			width: 100%;
			padding: 30upx;
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
				background-color: #fafcff;
				border-radius: 20upx;
				padding: 30upx;
				box-sizing: border-box;
				color: #333333;
				font-size: 26upx;

				text {
					line-height: 1.8;
				}

				.link {
					color: #ff6c00;
					text-decoration: underline;
				}
			}
		}
	}
</style>
