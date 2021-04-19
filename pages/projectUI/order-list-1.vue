<template>
	<view class="order-list bg-gray">
		<view class="tab-wrap">
			<BaseTab type="5" :tab-list="tags" :tabCur="tabCurrentIndex" active-color="#2A2A2A" color="#2A2A2A"
				font-size="26rpx" border-bottom-color="#DCBD57" :bold="true" active-font-size="28rpx"
				@change="onChabge"></BaseTab>
		</view>
		<view class="list-container">
			<view class="banner">
				<BaseBanner img="../../static/test/order-banner-test.png" border-radius="6rpx"></BaseBanner>
			</view>
			<view class="list">
				<view class="list-item">
					<view class="title">
						<text>新东方</text>
						<text class="suffix">待付款</text>
					</view>
					<view class="content" @click="$Router.push({name:'order-detail'})">
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
					<view class="button-group">
						<BaseButton width="144rpx" height="54rpx" font-size="24rpx" color="#3E3E3E"
							border-radius="18rpx" border="1px solid #AFBABF" bg="#ffffff">取消订单</BaseButton>
						<BaseButton width="144rpx" height="54rpx" font-size="24rpx" color="#3E3E3E"
							border-radius="18rpx" border="1px solid #AFBABF" bg="#ffffff">立即付款</BaseButton>
					</view>
				</view>
				<view class="list-item">
					<view class="title">
						<text>新东方</text>
						<text class="suffix">待收货</text>
					</view>
					<view class="content" @click="$Router.push({name:'order-detail'})">
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
					<view class="button-group">
						<BaseButton width="144rpx" height="54rpx" font-size="24rpx" color="#3E3E3E"
							border-radius="18rpx" border="1px solid #AFBABF" bg="#ffffff"
							@click-button="$Router.push({name:'order-return'})">退货</BaseButton>
						<BaseButton width="144rpx" height="54rpx" font-size="24rpx" color="#3E3E3E"
							border-radius="18rpx" border="1px solid #AFBABF" bg="#ffffff">确认收货</BaseButton>
					</view>
				</view>
				<view class="list-item">
					<view class="title">
						<text>新东方</text>
						<text class="suffix">待付款</text>
					</view>
					<view class="content" @click="$Router.push({name:'order-detail'})">
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
					<view class="button-group">
						<BaseButton width="144rpx" height="54rpx" font-size="24rpx" color="#3E3E3E"
							border-radius="18rpx" border="1px solid #AFBABF" bg="#ffffff">取消订单</BaseButton>
						<BaseButton width="144rpx" height="54rpx" font-size="24rpx" color="#3E3E3E"
							border-radius="18rpx" border="1px solid #AFBABF" bg="#ffffff">立即付款</BaseButton>
					</view>
				</view>
				<view class="list-item">
					<view class="title">
						<text>新东方</text>
						<text class="suffix">待评价</text>
					</view>
					<view class="content" @click="$Router.push({name:'order-detail'})">
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
					<view class="button-group">
						<BaseButton width="144rpx" height="54rpx" font-size="24rpx" color="#3E3E3E"
							border-radius="18rpx" border="1px solid #AFBABF" bg="#ffffff"
							@click-button="$Router.push({name:'order-return'})">退货</BaseButton>
						<BaseButton width="144rpx" height="54rpx" font-size="24rpx" color="#3E3E3E"
							border-radius="18rpx" border="1px solid #AFBABF" bg="#ffffff"
							@click-button="$Router.push({name:'order-comment'})">去评价</BaseButton>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 我的订单
	 */
	import BaseTab from '@/components/BaseTab.vue'
	import BaseBanner from '@/components/BaseBanner.vue'
	import BaseButton from '@/components/BaseButton.vue'
	import BaseSearchInput from '@/components/BaseSearchInput.vue'
	export default {
		components: {
			BaseTab,
			BaseBanner,
			BaseButton,
			BaseSearchInput
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

	.search-input {
		width: 0;
		flex-grow: 1;
		padding-right: 30upx;
		margin-left: -40upx;
	}

	.order-list {
		width: 100%;
		height: 100vh;

		.tab-wrap {
			width: 100%;
			background-color: #FED200;
			padding: 12upx 0 20upx 0;
		}

		.list-container {
			padding: 0 30upx;
			box-sizing: border-box;

			.banner {
				padding-top: 10upx;
			}

			.list {
				width: 100%;
				padding-top: 20upx;

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

					.button-group {
						width: 100%;
						display: flex;
						justify-content: flex-end;
						align-items: center;
						padding: 20upx 0 40upx 0;
					}
				}
			}
		}
	}
</style>
