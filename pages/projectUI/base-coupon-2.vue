<template>
	<view class="coupon-me bg-gray">
		<uni-nav-bar title="已领卡券" rightText="使用记录" :statusBar="true" :border="false" background-color="#ffd101" @clickLeft="routerBack()" @clickRight="$Router.push({name:'coupon-record'})">
		  <block slot="left">
		    <image src="@/static/back-icon.png" mode="widthFix" style="width: 24upx;"></image>
		  </block>
		</uni-nav-bar>
		<view class="list-wrapper">
			<view class="item">
				<image class="guoqi-bg" src="@/static/coupon-me.png" mode="widthFix"></image>
				<view class="content">
					<view class="center">
						<view class="title-wrap">
							<text class="title">新东方教育</text>
							<view class="btn">
								<text>兑换券</text>
							</view>
						</view>
						<view class="date">
							<text>有效期至：2021.2.10</text>
						</view>
					</view>
					<view class="btn-container" @click="$Router.push({name:'goods-list'})">
						<text>立即使用</text>
					</view>
				</view>
				<view class="content content2">
					<view class="center">
						<view class="title-wrap">
							<text class="title">新东方教育</text>
							<view class="btn">
								<text>立减券</text>
							</view>
						</view>
						<view class="date">
							<text>有效期至：2021.2.10</text>
						</view>
					</view>
					<view class="count">
						<text class="unit">￥</text>
						<text class="number">500</text>
					</view>
					<view class="btn-container" @click="$Router.push({name:'goods-list'})">
						<text>立即使用</text>
					</view>
				</view>
			</view>
			<!-- 已使用 -->
			<view class="item">
				<image class="guoqi-bg" src="@/static/coupon-me.png" mode="widthFix"></image>
				<view class="content">
					<view class="center">
						<view class="title-wrap">
							<text class="title">新东方教育</text>
							<view class="btn">
								<text>兑换券</text>
							</view>
						</view>
						<view class="date">
							<text>有效期至：2021.2.10</text>
						</view>
					</view>
					<view class="btn-container" @click="$Router.push({name:'goods-list'})">
						<text>立即使用</text>
					</view>
				</view>
				<view class="content content2 used">
					<view class="center">
						<view class="title-wrap">
							<text class="title">新东方教育</text>
							<view class="btn">
								<text>立减券</text>
							</view>
						</view>
						<view class="date">
							<text>有效期至：2021.2.10</text>
						</view>
					</view>
					<view class="count">
						<text class="unit">￥</text>
						<text class="number">500</text>
					</view>
					<image class="used-state" src="@/static/used-state2.png" mode="widthFix"></image>
				</view>
			</view>
			<!-- 已使用 -->
			<view class="item">
				<image class="guoqi-bg" src="@/static/coupon-me.png" mode="widthFix"></image>
				<view class="content used">
					<view class="center">
						<view class="title-wrap">
							<text class="title">新东方教育</text>
							<view class="btn">
								<text>立减券</text>
							</view>
						</view>
						<view class="date">
							<text>有效期至：2021.2.10</text>
						</view>
					</view>
					<view class="count">
						<text class="unit">￥</text>
						<text class="number">500</text>
					</view>
					<image class="used-state" src="@/static/used-state2.png" mode="widthFix"></image>
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
							<text>有效期至：2021.2.10</text>
						</view>
					</view>
					<view class="btn-container" @click="$Router.push({name:'goods-list'})">
						<text>立即使用</text>
					</view>
				</view>
			</view>
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
				this.tabCurrentIndex = index
			}
		}
	}
</script>

<style scoped lang="scss">
	// .right-icon {
	//   display: flex;
	//   justify-content: flex-end;
	//   align-items: center;
	// }
	/deep/.uni-navbar__header-btns-right {
		width: 170upx;
	}
	.coupon-me {
		width: 100%;
		height: 100vh;

		.list-wrapper {
			width: 100%;
			padding: 20upx 30upx;
			box-sizing: border-box;

			.item {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-end;
				position: relative;
				z-index: 1;
				border-radius: 10upx;
				margin-bottom: 50upx;

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
					padding: 0 34upx;
					padding-top: 24upx;
					padding-bottom: 24upx;
					box-sizing: border-box;

					.btn-container {
						width: 80upx;
						height: 80upx;
						color: #ffffff;
						font-size: 24upx;
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: #BB9257;
						box-shadow: inset 0 2px 3px 0px #A67E46;
						border-radius: 50%;

						text {
							width: 52upx;
							transform: scale(0.8);
							text-align: center;
						}
					}
					.count {
						width: 0;
						flex-grow: 1;
						font-size: 60upx;
						display: flex;
						align-items: center;
						margin-bottom: 8upx;
						color: #C68655;
						font-weight: bold;

						.unit {
							font-size: 32upx;
							margin-right: 10upx;
							position: relative;
							top: 8upx;
						}
					}
					.used-state {
						width: 170upx;
						height: auto;
						position: absolute;
						right: -40upx;
						bottom: -48upx;
					}
				}

				.content2 {
					margin-top: 32upx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.count {
						width: 0;
						flex-grow: 1;
						font-size: 60upx;
						display: flex;
						align-items: center;
						margin-bottom: 8upx;
						color: #FE5F00;
						font-weight: bold;

						.unit {
							font-size: 32upx;
							margin-right: 10upx;
							position: relative;
							top: 8upx;
						}
					}
					// .used-state {
					// 	width: 170upx;
					// 	height: auto;
					// 	position: absolute;
					// 	right: -40upx;
					// 	bottom: -48upx;
					// 	transform: rotate(90deg);
					// }
				}

				// 已使用
				.content.used {
					overflow: hidden;

					.center {
						color: #737373;
					}

					.title {
						color: #737373 !important;
					}

					.btn {
						color: #737373;
						border: 1px solid #737373;
					}

					// .used-state {
					// 	width: 170upx;
					// 	height: auto;
					// 	position: absolute;
					// 	right: -40upx;
					// 	bottom: -48upx;
					// }
					.count {
						width: 0;
						flex-grow: 1;
						font-size: 60upx;
						display: flex;
						align-items: center;
						margin-bottom: 8upx;
						color: #737373;
						font-weight: bold;

						.unit {
							font-size: 32upx;
							margin-right: 10upx;
							position: relative;
							top: 8upx;
						}
					}
				}

				.left {
					width: 29%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					color: #C68655;
					width: 100%;
					color: #737373;

					.count {
						font-size: 60upx;
						display: flex;
						align-items: center;
						margin-bottom: 8upx;

						.unit {
							font-size: 32upx;
							margin-right: 10upx;
						}

						.number {
							margin-right: 30upx;
						}
					}

					.btn-wrap {
						font-size: 24upx;
						display: flex;
						justify-content: flex-start;
						align-items: center;

						.btn {
							border: 1px solid #C68655;
							padding: 0 6upx;
							border-radius: 6upx;
							margin-right: 10upx;
						}
					}
				}

				.center {
					width: 54%;
					padding-left: 0;
					color: #8A6546;
					font-size: 24upx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					box-sizing: border-box;


					.title-wrap {
						display: flex;
						align-items: center;
						margin-bottom: 18upx;

						.title {
							font-size: 32upx;
							color: #2F2F2F;
							margin-bottom: 0;
							margin-right: 30upx;
							font-weight: bold;
						}
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

				.btn {
					border: 1px solid #C68655;
					padding: 0 6upx;
					border-radius: 6upx;
					margin-right: 10upx;
					font-size: 24upx;
					color: #C68655;
				}

				.date {
					font-size: 24upx;
					color: #9B979B;

					.name {
						font-weight: bold;
						margin-right: 30upx;
					}
				}
			}
		}
	}
</style>
