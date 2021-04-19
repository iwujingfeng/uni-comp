<template>
	<view class="coupon-record bg-gray">
		<uni-nav-bar title="优惠券记录" :statusBar="true" :border="false"
		background-color="#ffd101" @clickLeft="routerBack()">
		  <block slot="left">
		    <image src="@/static/back-icon.png" mode="widthFix" style="width: 24upx;"></image>
		  </block>
		</uni-nav-bar>
		<view class="tab-wrapper">
			<BaseTab type="5" :tab-list="tags" :tabCur="tabCurrentIndex" center active-color="#2A2A2A" color="#2A2A2A" font-size="26rpx"
			 border-color="#2A2A2A" border-width="6rpx" :bold="true" active-font-size="28rpx" item-padding="0 130rpx" @change="onChabge"></BaseTab>
		</view>
		<view class="list-wrapper">
			<!-- 分享记录 -->
			<template v-if="tabCurrentIndex==0">
				<!-- 分享记录 -->
				<view class="item">
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
						<text>领取时间：2021.2.10</text>
					</view>
					<view class="right">
						<text class="title">刘玥</text>
						<text>已领取</text>
					</view>
				</view>
				<!-- 分享记录：已使用 -->
				<view class="item used">
					<view class="left">
						<view class="count">
							<text class="unit">￥</text>
							<text>500</text>
						</view>
						<view class="btn-wrap">
							<view class="btn">
								<text>兑换券</text>
							</view>
						</view>
					</view>
					<view class="center">
						<text class="title">新东方教育</text>
						<text>领取时间：2021.2.10</text>
					</view>
					<image class="state-icon" src="@/static/used.png"></image>
				</view>
				<!-- 分享记录：已使用 -->
				<view class="item used">
					<view class="left">
						<view class="count">
							<text class="unit">￥</text>
							<text>500</text>
						</view>
						<view class="btn-wrap">
							<view class="btn">
								<text>立减券</text>
							</view>
						</view>
					</view>
					<view class="center">
						<text class="title">新东方教育</text>
						<text>领取时间：2021.2.10</text>
					</view>
					<image class="state-icon" src="@/static/used.png"></image>
				</view>
			</template>
			<!-- 已过期 -->
			<template v-if="tabCurrentIndex==1">
				<!-- 已过期 -->
				<view class="item overdue">
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
						<view class="title">
							<text>新东方教育</text>
							<text class="rest">剩余10次</text>
						</view>
						<text>有效期至：2021.2.10 23:29</text>
					</view>
					<image class="state-icon" src="@/static/guoqi.png"></image>
				</view>
				<!-- 已过期 类型2 -->
				<view class="item overdue2">
					<image class="guoqi-bg" src="@/static/guoqi-bg.png" mode="widthFix"></image>
					<view class="content">
						<view class="left">
							<view class="count">
								<text class="unit">￥</text>
								<text class="number">500</text>
								<view class="btn">
									<text>立减券</text>
								</view>
							</view>
							<view class="date">
								<text class="name">新东方</text>
								<text>有效期至：2021.2.10 23:29</text>
							</view>
						</view>
					</view>
					<view class="content content2">
						<view class="center">
							<view class="title-wrap">
								<text class="title">新东方教育</text>
								<view class="btn">
									<text>兑换券</text>
								</view>
							</view>
							<view class="date">
								<text>有效期至：2021.2.10 23:29</text>
							</view>
						</view>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import BaseTab from '@/components/BaseTab.vue'
	export default {
		components: {
			BaseTab
		},
		data() {
			return {
				tabCurrentIndex: 0,
				tags: [{
					ID: 1,
					Name: '分享记录'
				}, {
					ID: 2,
					Name: '已过期'
				}]
			}
		},
		methods: {
			onChabge({
				index
			}) {
				console.log(index)
				this.tabCurrentIndex = index
			}
		}
	}
</script>

<style scoped lang="scss">
	.coupon-record {
		width: 100%;
		height: 100vh;

		.tab-wrapper {
			width: 100%;
			background-color: #FED200;
			padding: 24upx 0;
		}

		.list-wrapper {
			width: 100%;
			padding: 20upx 30upx;
			box-sizing: border-box;

			.item {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				position: relative;
				z-index: 1;
				padding: 30upx 0 44upx 30upx;
				box-sizing: border-box;
				background: linear-gradient(to right, #F1E0CC, #E09D70);
				border-radius: 10upx;
				margin-bottom: 24upx;

				.left {
					width: 32%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					color: #C68655;

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
							border: 1px solid #C68655;
							padding: 4upx 6upx;
							border-radius: 4upx;
							margin-right: 6upx;
							transform: scale(0.9);
						}
					}
				}

				.center {
					width: 0;
					flex-grow: 1;
					color: #8A6546;
					font-size: 24upx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					padding-left: 10upx;
					box-sizing: border-box;

					.title {
						font-size: 32upx;
						color: #2F2F2F;
						margin-bottom: 20upx;
					}
				}

				.right {
					width: 22%;
					color: #8A6546;
					font-size: 24upx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.title {
						font-size: 32upx;
						color: #2F2F2F;
						margin-bottom: 20upx;
					}
				}
			}

			// 已使用样式
			.used {
				.center {
					color: #9B979B;
				}

				.state-icon {
					width: 162upx;
					height: 162upx;
					position: absolute;
					bottom: 0;
					right: 0;
				}
			}

			// 已过期样式
			.overdue {
				background: #ffffff;

				.left {
					width: 33%;
				}

				.rest {
					font-size: 24upx;
					margin-left: 30upx;
				}

				text {
					color: #737373;
				}

				.btn {
					border-color: #737373 !important;
				}

				.state-icon {
					width: 162upx;
					height: 162upx;
					position: absolute;
					bottom: 0;
					right: 0;
				}
			}

			.overdue2 {
				width: 100%;
				position: relative;
				flex-direction: column;
				padding: 0 34upx;

				.guoqi-bg {
					width: 100%;
					height: auto;
					position: absolute;
					top: 0;
					left: 0;
				}

				.content {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					position: relative;
					z-index: 1;
					margin-top: 14upx;

					.left {
						width: 100%;
						color: #737373;

						.count {
							display: flex;
							align-items: center;
							margin-bottom: 8upx;

							.number {
								margin-right: 30upx;
							}
						}
					}

					.center {
						width: 100%;
						padding-left: 0;
						color: #737373;

						.title-wrap {
							display: flex;
							align-items: center;
							margin-bottom: 18upx;

							.title {
								margin-bottom: 0;
								margin-right: 30upx;
							}
						}
					}

					.btn {
						border: 1px solid #737373;
						padding: 4upx 6upx;
						border-radius: 4upx;
						margin-right: 10upx;
						font-size: 24upx;
					}

					.date {
						font-size: 24upx;
						color: #737373;

						.name {
							font-weight: bold;
							margin-right: 30upx;
						}
					}
				}

				.content2 {
					padding-top: 54upx;
				}
			}
		}
	}
</style>
