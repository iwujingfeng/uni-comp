<template>
	<view class="goods bg-gray">

		<view class="container">
			<BaseTab type="2" height="56rpx" :show-count="false" active-color="#ffffff" font-size="24rpx"
				active-font-size="24rpx" justify-content="space-between" :tab-list="tabs" :tab-cur="currentTab"
				@change="onTabChange"></BaseTab>
			<view class="item">
				<image class="cover" src="@/static/test/cover-test.png"></image>
				<view class="content">
					<text class="title">小学数学-计算能..</text>
					<text class="des">hoho乐高教育</text>
					<view class="count">
						<text class="t1">已售：236</text>
						<text>库存：9999</text>
					</view>
					<view class="price">
						<text class="t1">￥</text>
						<text>49.80</text>
					</view>
				</view>
				<view class="button">
					<view class="btn-wrap">
						<BaseButton width="148rpx" height="54rpx" bg="#ebefff" font-size="26upx" color="#5678fe"
							@click-button="onClickButton">修改库存</BaseButton>
					</view>
					<BaseButton width="148rpx" height="54rpx" bg="#ff953d" font-size="26upx" color="#ffffff">上架
					</BaseButton>
				</view>
			</view>
			<view class="item" @click="$Router.push({name:'staff-member'})">
				<image class="cover" src="@/static/test/cover-test.png"></image>
				<view class="content">
					<text class="title">小学数学-计算能..</text>
					<text class="des">hoho乐高教育</text>
					<view class="count">
						<text class="t1">已售：236</text>
						<text>库存：9999</text>
					</view>
					<view class="price">
						<text class="t1">￥</text>
						<text>49.80</text>
					</view>
				</view>
				<view class="button">
					<view class="btn-wrap">
						<BaseButton width="148rpx" height="54rpx" bg="#ebefff" font-size="26upx" color="#5678fe"
							@click-button="onClickButton">修改库存</BaseButton>
					</view>
					<BaseButton width="148rpx" height="54rpx" bg="#5678fe" font-size="26upx" color="#ffffff">下架
					</BaseButton>
				</view>
			</view>
			<!-- <UniPopup ref="popup" type="bottom">
				<view class="modal">
					<view class="title">
						<text>库存</text>
						<image src="../../static/staff/border-b2.png" mode="widthFix"></image>
					</view>
					<view class="list">
						<scroll-view scroll-y="true" style="height: 100%;">
							<view class="title">
								<text>小学数学</text>
							</view>
							<view class="item" v-for="item in 5">
								<view class="con">
									<image src="../../static/test/cover-test.png"></image>
									<view class="con-text">
										<text>红色</text>
										<text>(7寸)</text>
										<text>大</text>
										<text>高级</text>
										<text>2020版</text>
										<text>新版</text>
									</view>
								</view>
								<BaseNumberBox></BaseNumberBox>
							</view>
						</scroll-view>
					</view>

					<view class="popup-btn-wrap">
						<BaseButton width="420rpx" height="80rpx" bg="#5678fe" font-size="30upx" color="#ffffff"
							@click-button="submitStandard">确定</BaseButton>
					</view>
					<view class="close" @click="handlePopupClose">
						<image src="@/static/staff/close-icon-bg.png"></image>
					</view>
				</view>
			</UniPopup> -->
		</view>
	</view>
</template>

<script>
	import BaseTab from '@/components/BaseTab.vue'
	import BaseButton from '@/components/BaseButton.vue'
	import UniPopup from '@/components/uni-popup/uni-popup.vue'
	import BaseNumberBox from '@/components/BaseNumberBox.vue'
	export default {
		components: {
			BaseTab,
			BaseButton,
			UniPopup,
			BaseNumberBox
		},
		data() {
			return {
				currentTab: 0,
				tabs: [{
					ID: 1,
					Name: '全部'
				}, {
					ID: 2,
					Name: '已上架'
				}, {
					ID: 3,
					Name: '已告罄'
				}, {
					ID: 4,
					Name: '已下架'
				}, ]
			}
		},
		methods: {
			onClickButton() {
				this.$refs.popup.open()
			},
			handlePopupClose() {
				this.$refs.popup.close()
			},
			submitStandard() {
				this.$refs.popup.close()
			},
			onTabChange({
				index,
				ID,
				Type
			}) {
				this.currentTab = index
				console.log('xxxxx', index)
			}
		}
	}
</script>

<style scoped lang="scss">
	/deep/.tab {
		margin-bottom: 44upx;
		justify-content: space-between;
	}

	/deep/.wuc-tab-item {
		width: 140upx;
		background-color: #ffffff;
	}

	/deep/.active-radius {
		background-color: #5678fe !important;
		border: 1px solid #5678fe;
	}

	/deep/.item-border {
		border-radius: 16upx;
	}



	// 修改modal
	.modal {
		width: 100vw;
		height: 70vh;
		background-color: #ffffff;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 60upx 30upx 30upx 30upx;
		box-sizing: border-box;
		position: relative;

		.title {
			width: 100%;
			font-size: 34upx;
			color: #000000;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			border-bottom: 1px solid #e5e5e5;

			image {
				width: 71upx;
				height: auto;
				margin-top: 14upx;
			}
		}

		.list {
			width: 100%;
			height: 0;
			flex-grow: 1;
			margin-top: 40upx;

			.title {
				font-size: 30upx;
				color: #333333;
				margin-bottom: 20upx;
				border: none;
			}

			.item {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 30upx;

				.con {
					width: 0;
					flex-grow: 1;
					background-color: #f9f9f9;
					border-radius: 10upx;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: flex-start;
					font-size: 24upx;
					color: #333333;
					padding: 20upx;
					box-sizing: border-box;
					margin-right: 20upx;

					image {
						width: 50upx;
						height: 50upx;
					}

					.con-text {
						width: 0;
						flex-grow: 1;
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: flex-start;
						flex-wrap: wrap;

						text {
							text-align: center;
							margin: 0 10upx 10upx 20upx;
							background-color: #92a8fd;
							border-radius: 20upx;
							padding: 6upx 20upx;
							box-sizing: border-box;
							color: #ffffff;
						}
					}
				}
			}
		}

		.popup-btn-wrap {
			margin-top: 30upx;
		}

		.close {
			padding: 30upx;
			position: absolute;
			top: 0;
			right: 0;

			image {
				width: 59upx;
				height: 59upx;
			}
		}
	}

	.goods {
		width: 100%;
		min-height: 100vh;

		.container {
			width: 100%;
			padding: 30upx;
			padding-top: 40upx;
			box-sizing: border-box;
		}

		.item {
			width: 100%;
			border-radius: 18upx;
			background-color: #ffffff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 35upx;
			box-sizing: border-box;
			margin-bottom: 42upx;

			.cover {
				width: 195upx;
				height: 196upx;
				border-radius: 18upx;
			}

			.content {
				width: 0;
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;
				margin-left: 26upx;

				.title {
					font-size: 30upx;
					color: #333333;
					margin-bottom: 10upx;
				}

				.des {
					font-size: 26upx;
					color: #999999;
				}

				.count {
					font-size: 24upx;
					color: #a5a8aa;
					margin: 10upx 0;

					.t1 {
						margin-right: 22upx;
					}
				}

				.price {
					font-size: 30upx;
					color: #ff6c00;

					.t1 {
						font-size: 24upx;
					}
				}
			}

			.button {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-end;

				.btn-wrap {
					margin-bottom: 26upx;
				}
			}
		}
	}
</style>
