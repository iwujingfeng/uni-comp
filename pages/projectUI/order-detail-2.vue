<template>
	<view class="order-detail bg-gray">
		<uni-nav-bar title="订单详情" :statusBar="true" :border="false" background-color="#ffd101" @clickLeft="routerBack()">
			<block slot="left">
				<image src="@/static/back-icon.png" mode="widthFix" style="width: 24upx;"></image>
			</block>
		</uni-nav-bar>
		<view class="list-container">
			<view class="list">
				<!-- 订单剩余支付时间 -->
				<view class="pay-time">
					<text>等待支付，剩余</text><text class="time">14:12</text>
				</view>
				<view class="list-item">
					<view class="title">
						<text>新东方</text>
						<text class="suffix">待付款 | 待收货 | 待评价 | 已退货</text>
					</view>
					<view class="content">
						<image class="cover" src="@/static/test/cover-test.png"></image>
						<view class="main">
							<view class="content-title">
								<text>国字书法</text>
							</view>
							<view class="des">
								<text>数量：1</text>
								<text>总价：100</text>
								<text>实付：88</text>
							</view>
						</view>
					</view>
					<view class="info">
						<view class="col col1">
							<view class="prefix">
								<text>优</text>
							</view>
							<view class="text">
								<text>优惠卷立减</text>
							</view>
							<text class="suffix">- ¥100</text>
						</view>
						<view class="col col2">
							<view class="prefix">
								<text>享</text>
							</view>
							<view class="text">
								<text>享学币</text>
							</view>
							<text class="suffix">- 500</text>
						</view>
						<view class="col col3">
							<view class="prefix">
								<text>绑</text>
							</view>
							<view class="text">
								<text>绑定儿童</text>
							</view>
							<text class="suffix">武靖峰</text>
						</view>
						<view class="des">
							<image src="@/static/warn.png" mode="widthFix"></image>
							<text>只有线下课程才会有绑定儿童这项</text>
						</view>
					</view>
					<view class="total">
						<text class="t1">商品总价</text>
						<text class="t2">¥</text>
						<text class="t3">199</text>
						<text class="t4">实付款</text>
						<text class="t5">¥</text>
						<text class="t6">99.99</text>
					</view>
				</view>
				<view class="list-item">
					<view class="title">
						<text>订单信息</text>
					</view>
					<view class="info">
						<!-- 待付款状态 -->
						<view class="col col-info">
							<view class="text">
								<text>订单编号</text>
							</view>
							<text class="suffix">202012221025</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>下单时间</text>
							</view>
							<text class="suffix">2020-12-22 10:25</text>
						</view>
						<!-- 待收货状态 -->
						<view class="col col-info">
							<view class="text">
								<text>自动收货</text>
							</view>
							<text class="suffix">6天20时23分23秒</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>订单编号</text>
							</view>
							<text class="suffix">202012221025</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>配送状态</text>
							</view>
							<text class="suffix">物流配送/到店自提（2选1）</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>下单时间</text>
							</view>
							<text class="suffix">2020-12-22 10:25</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>付款时间</text>
							</view>
							<text class="suffix">2020-12-22 10:25</text>
						</view>
						<!-- 待评价状态 -->
						<view class="col col-info">
							<view class="text">
								<text>订单编号</text>
							</view>
							<text class="suffix">202012221025</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>配送状态</text>
							</view>
							<text class="suffix">物流配送/到店自提（2选1）</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>下单时间</text>
							</view>
							<text class="suffix">2020-12-22 10:25</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>付款时间</text>
							</view>
							<text class="suffix">2020-12-22 10:25</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>发货时间</text>
							</view>
							<text class="suffix">2020-12-22 10:25</text>
						</view>
						<!-- 已退货状态 -->
						<view class="col col-info">
							<view class="text">
								<text>订单编号</text>
							</view>
							<text class="suffix">202012221025</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>配送状态</text>
							</view>
							<text class="suffix">物流配送/到店自提（2选1）</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>物流编号</text>
							</view>
							<text class="suffix">202012221025</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>退货物流</text>
							</view>
							<text class="suffix">顺丰</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>下单时间</text>
							</view>
							<text class="suffix">2020-12-22 10:25</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>付款时间</text>
							</view>
							<text class="suffix">2020-12-22 10:25</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>发货时间</text>
							</view>
							<text class="suffix">2020-12-22 10:25</text>
						</view>
						<view class="col col-info">
							<view class="text">
								<text>退货时间</text>
							</view>
							<text class="suffix">2020-12-22 10:25</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 待付款状态按钮 -->
		<view class="button-group" style="bottom: 120upx;">
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47">取消订单</BaseButton>
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47">立即支付</BaseButton>
		</view>
		<!-- 待收货状态按钮 -->
		<view class="button-group">
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47">查询</BaseButton>
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47">退款</BaseButton>
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47">确认收货</BaseButton>
		</view>
		<!-- 待评价状态按钮 -->
		<view class="button-group">
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47">查询</BaseButton>
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47">再来一单</BaseButton>
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47">立即评价</BaseButton>
		</view>
		<!-- 已退货状态按钮 -->
		<view class="button-group">
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47">查询</BaseButton>
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47">再来一单</BaseButton>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 我的订单
	 */
	import BaseTab from '@/components/BaseTab.vue'
	import BaseButton from '@/components/BaseButton.vue'
	export default {
		components: {
			BaseTab,
			BaseButton
		},
		data() {
			return {
				tabCurrentIndex: 0,
				tags: [{
					ID: 1,
					Name: '全部'
				}, {
					ID: 2,
					Name: '待付款'
				}, {
					ID: 3,
					Name: '待收货'
				}, {
					ID: 3,
					Name: '待评价'
				}, {
					ID: 3,
					Name: '退款/售后'
				}]
			}
		},
		methods: {
			onChabge({
				index
			}) {
				this.tabCurrentIndex = index
			}
		}
	}
</script>

<style scoped lang="scss">
	/deep/.button-group .button {
		margin-left: 20upx;
	}

	.order-detail {
		width: 100%;
		height: 100vh;

		.list-container {
			padding: 0 30upx;
			box-sizing: border-box;

			.list {
				width: 100%;
				padding-top: 20upx;
        .pay-time {
					width: 100%;
					display: flex;
					align-items: center;
					font-size: 34upx;
					color: #2A2A2A;
					font-weight: bold;
					padding: 30upx 0;
					.time {
						color: #E88B29;
						margin-left: 10upx;
					}
				}
				.list-item {
					width: 100%;
					background-color: #ffffff;
					border-radius: 10upx;
					padding: 0 30upx;
					box-sizing: border-box;
					margin-bottom: 24upx;

					.title {
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 24upx 0;
						box-sizing: border-box;
						font-size: 30upx;
						color: #2A2A2A;
						border-bottom: 1px solid #EAEBEC;

						.suffix {
							font-size: 28upx;
							color: #84898B;
						}
					}

					.content {
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 20upx 0;
						padding-bottom: 30upx;
						border-bottom: 1px solid #EAEBEC;

						.cover {
							width: 105upx;
							height: 105upx;
						}

						.main {
							width: 0;
							flex-grow: 1;
							margin-left: 24upx;

							.content-title {
								font-size: 28upx;
								color: #2B2B2B;
								font-weight: bold;
								text-align: left;
								margin-bottom: 20upx;
							}

							.des {
								display: flex;
								justify-content: space-between;
								align-items: center;
								font-size: 26upx;
								color: #84898B;
							}
						}
					}

					.info {
						width: 100%;
						color: #383838;
						font-size: 26upx;
						padding-top: 20upx;
						padding-bottom: 24upx;
						border-bottom: 1px solid #EAEBEC;

						.col {
							width: 100%;
							display: flex;
							justify-content: space-between;
							align-items: center;

							.prefix {
								width: 28upx;
								height: 28upx;
								display: flex;
								justify-content: center;
								align-items: center;
								background-color: #F1583E;
								border-radius: 6upx;
								font-size: 24upx;
								color: #ffffff;
							}

							.suffix {
								color: #E15E47;
							}

							.text {
								width: 0;
								flex-grow: 1;
								text-align: left;
								padding: 10upx 20upx;
								box-sizing: border-box;
							}
						}

						.col1 {
							font-size: 26upx;
						}

						.col2 {
							font-size: 26upx;
						}

						.col-info {
							.text {
								padding-left: 0;
								color: #84898B;
							}

							.suffix {
								color: #2A2A2A;
							}
						}
					}

					.des {
						width: 100%;
						display: flex;
						align-items: center;
						color: #E15E47;
						font-size: 24upx;
						margin-top: 10upx;

						image {
							width: 22upx;
							height: auto;
							margin-right: 20upx;
						}
					}

					.total {
						width: 100%;
						padding: 40upx 0;
						color: #2B2B2B;
						display: flex;
						justify-content: flex-end;
						align-items: center;

						.t1,
						.t2,
						.t3,
						.t4,
						.t5 {
							font-size: 26upx;
						}

						.t2,
						.t5 {
							margin-left: 20upx;
							margin-right: 10upx;
						}

						.t2 {
							color: #E15E47;
						}

						.t3 {
							margin-right: 40upx;
							color: #E15E47;
						}

						.t6 {
							font-size: 44upx;
						}
					}
				}
			}
		}

		.button-group {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding: 20upx 0 40upx 0;
			background-color: #ffffff;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 24upx 30upx;
			box-sizing: border-box;
		}
	}
</style>
