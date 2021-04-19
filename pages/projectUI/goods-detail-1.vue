<template>
	<view class="goods-detail bg-gray padding-bottom">
		<!-- 导航栏 -->
		<view class="nav-bar">
			<view class="back" @click="$Router.back()">
				<image class="back-icon" src="@/static/back-icon.png" mode="widthFix"></image>
			</view>
			<view class="input-container">
				<BaseSearchInput placeholder="绘本阅读"></BaseSearchInput>
			</view>
			<view class="suffix suffix1" @click="handleShare">
				<image class="icon icon1" src="../../static/share-icon.png" mode="widthFix"></image>
			</view>
			<view class="suffix suffix2" @click="$Router.push({name:'cart'})">
				<image class="icon" src="../../static/cart-icon.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="tab-wrap">
			<BaseTab type="5" :tab-list="tags" :tabCur="tabCurrentIndex" active-color="#333333" color="#333333"
				font-size="26rpx" border-bottom-color="#DCBD57" :bold="true" active-font-size="30rpx"
				justify-content="space-between" text-padding="16rpx 0" @change="onTabChabge"></BaseTab>
		</view>
		<view class="swiper-container">
			<BaseSwiperDot :info="swiperList" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
				<BaseSwiper :list="swiperList" :autoplay="false" :ratio="1" :radius="true" :show-dot="false"
					:show-video="true" video-cover="http://2020jty.nmqq.net/swiper-test1.png" @change="onSwiperChange">
				</BaseSwiper>
			</BaseSwiperDot>
		</view>
		<view class="price-container">
			<view class="content">
				<view class="price">
					<view class="btn">
						<text class="unit">￥</text>
						<text>76.00~568.00</text>
					</view>
					<view class="btn2">
						券后￥<text>1548</text>起
					</view>
					<view class="zhibo" @click="toShowLink">
						<image src="../../static/zhibo-icon.png" mode="widthFix"></image>
					</view>
				</view>
				<text class="title">优惠促销</text>
				<view class="price2">
					<view class="count-wrap">
						<text class="count">￥1000</text>
					</view>
					<text class="count">已售15248</text>
				</view>
			</view>
		</view>
		<view class="hb-container">
			<view class="inner">
				<image class="hb-bg" src="../../static/hongbao-banner.png" mode="widthFix"></image>
				<view class="left">
					<text class="unit">￥</text>
					<text>9999</text>
				</view>
				<view class="center">
					<text>商品专享红包</text>
					<text>领取后下单立减</text>
				</view>
				<text class="btn" @click="selectCoupon">领取</text>
			</view>
		</view>
		<view class="title-container">
			<text>duwidgl乐高教育创意玩转世界duwidgl乐高教育创意玩转世界</text>
		</view>
		<view class="address-container">
			<view class="item" @click="toSelectAddress">
				<text class="label">发货</text>
				<view class="main">
					<image class="icon" src="../../static/location.png" mode="widthFix"></image>
					<text>内蒙古呼和浩特市新城区新华大街 23号</text>
				</view>
			</view>
			<view class="item">
				<text class="label">状态</text>
				<view class="main">
					<text>物流配送/到店自提/在线观看</text>
				</view>
			</view>
			<view class="item-select">
				<text class="label">选择</text>
				<view class="main" @click="selectStandard">
					<view class="top">
						<text>物流配送/到店自提/在线观看</text>
						<image class="icon" src="../../static/arrow-r.png" mode="widthFix"></image>
					</view>
					<view class="bottom">
						<image class="cover" src="../../static/test/grid-test.png"></image>
						<image class="cover" src="../../static/test/grid-test.png"></image>
						<image class="cover" src="../../static/test/grid-test.png"></image>
						<image class="cover" src="../../static/test/grid-test.png"></image>
						<image class="cover" src="../../static/test/grid-test.png"></image>
						<text class="tips">共12种可选</text>
					</view>
				</view>
			</view>
		</view>
		<view class="comment-container">
			<view class="comment-title">
				<view class="title">
					<text>评价</text>
					<text class="count">(86)</text>
				</view>
				<view class="arrow" @click="$Router.push({name:'comment-list-goods'})">
					<text>更多评价</text>
					<image src="../../static/arrow-r.png" mode="widthFix"></image>
				</view>
			</view>
			<BaseCeilItem icon-path="../../static/test/avatar-test.png" icon-width="84upx" title="酒鬼妖精" font-size="28rpx"
				:show-title-end="false" :show-suffix="false">
				<template #sub-title>
					<view class="sub-title">
						<view class="rate">
							<text class="rate-title">打分</text>
							<BaseRate v-model="ceshi1" :size="23" :img-data="imgData" :gutter="10"></BaseRate>
						</view>
						<text class="time">2020-03-29</text>
					</view>
				</template>
			</BaseCeilItem>
			<view class="content">
				<text>课程评价是指根据一定的标准和课程系统信息以科学的方法检查课程的目标、编订和实施是否实现了教育目的，实现的程度如何，以判定课程设计的效果，并据此作出改进课程的决策。</text>
			</view>
			<view class="grid-container">
				<BaseGridImage :grid-list=gridList :show-tip="true" :col="3"></BaseGridImage>
			</view>
		</view>
		<view class="detail">
			<view class="title">
				<text>商品详情</text>
			</view>
			<!-- <image class="detail-image" src="../static/test/detail-test1.png" mode="widthFix"></image> -->
		</view>

		<view class="action-container" style="bottom: 100upx;">
			<BaseGoodsAction :options="options" :buttons="buttons" icon-width="38rpx" @click=""
				@clickButton="selectStandard"></BaseGoodsAction>
		</view>
		<view class="action-container">
			<BaseGoodsAction :options="options" :buttons="buttons1" icon-width="38rpx" @click=""
				@clickButton="selectStandard"></BaseGoodsAction>
		</view>
		<!-- 优惠券弹窗 -->
		<UniPopup ref="popup" type="bottom">
			<view class="modal">
				<view class="coupon-item">
					<image class="bg" src="../../static/quan-bg2.png" mode="widthFix"></image>
					<text class="title">兑换券</text>
					<view class="btn">
						<text>立</text>
						<text>即</text>
						<text>领</text>
						<text>取</text>
					</view>
					<image class="quan" src="../../static/duihuanquan.png" mode="widthFix"></image>
					<view class="con">
						<text>课程名称</text>
						<text class="time">有效期至2020.05.11 23:59</text>
					</view>
				</view>
				<view class="coupon-item">
					<image class="bg" src="../../static/quan-bg-lingqu.png" mode="widthFix"></image>
					<text class="title">兑换券</text>
					<view class="quan-count">
						<text class="unit">￥</text>
						<text>500</text>
					</view>
					<view class="con">
						<text>课程名称</text>
						<text class="time">有效期至2020.05.11 23:59</text>
					</view>
				</view>
				<view class="popup-btn-wrap">
					<BaseButton width="100%" height="80rpx" font-size="30upx" color="#ffffff"
						bg="linear-gradient(to right,#ff7800,#fe4200)" @click-button="onCloseCoupon">关闭</BaseButton>
				</view>
			</view>
		</UniPopup>
		<!-- 规格弹窗 -->
		<UniPopup ref="standardPopup" type="bottom">
			<BaseStandard :list="standardList" :current="currentStandardIndex" @click-item="onClickStandardItem"
				@close="onCloseStandard">
				<template #button>
					<view class="button-container">
						<BaseGoodsButtonGroup height="80rpx" :buttonData="buttonData"
							@click-button="toCartOrOrderSubmit"></BaseGoodsButtonGroup>
						<BaseButton width="100%" height="80rpx" font-size="30upx" color="#ffffff"
							bg="linear-gradient(to right,#ff7800,#fe4200)" @click-button="toOrderSubmit">立即购买
						</BaseButton>
					</view>
				</template>
			</BaseStandard>
		</UniPopup>
		<!-- 分享 -->
		<BaseShare ref="shareModal"></BaseShare>
	</view>
</template>

<script>
	/**
	 * @description 实体商品详情 线下课程详情
	 */
	import BaseSearchInput from '@/components/BaseSearchInput.vue'
	import BaseSwiper from '@/components/BaseSwiper.vue'
	import BaseSwiperDot from '@/components/BaseSwiperDot.vue'
	import BaseTab from '@/components/BaseTab.vue'

	import BaseCeilItem from '@/components/BaseCeilItem.vue'
	import BaseRate from '@/components/BaseRate.vue'
	import BaseGridImage from '@/components/BaseGridImage.vue'
	import BaseTitle from '@/components/BaseTitle.vue'
	import BaseWaterfallList from '@/components/BaseWaterfallList.vue'
	import BasePriceTag from '@/components/BasePriceTag.vue'
	import BaseGoodsAction from '@/components/BaseGoodsAction.vue'
	import UniPopup from '@/components/uni-popup/uni-popup.vue'
	import BaseButton from '@/components/BaseButton.vue'
	import BaseStandard from '@/components/BaseStandard.vue'
	import BaseGoodsButtonGroup from '@/components/BaseGoodsButtonGroup.vue'
	import BaseShare from '@/components/BaseShare.vue'

	export default {
		components: {
			BaseSearchInput,
			BaseSwiper,
			BaseSwiperDot,
			BaseTab,
			BaseCeilItem,
			BaseRate,
			BaseGridImage,
			BaseTitle,
			BaseWaterfallList,
			BasePriceTag,
			BaseGoodsAction,
			UniPopup,
			BaseButton,
			BaseStandard,
			BaseGoodsButtonGroup,
			BaseShare
		},
		data() {
			return {
				isCourse: false, // 临时变量 判断是实体商品还是线下课程
				buttonData: [{
						text: '加入购物车',
						background: 'linear-gradient(to right,#ffbc14,#ff9a0a)'
					},
					{
						text: '立即购买',
						background: 'linear-gradient(to right,#ff7800,#fe4200)'
					},
				],
				currentStandardIndex: 0,
				standardList: ['大众少儿读物', '大众少儿读物一年级', '少儿读物', '大众少儿读物一年级', '大众少儿读物一年级', '大众少儿读物一年级'],
				ceshi1: 3,
				imgData: ['../static/rate/rate_0.png'],
				options: [{
						text: '店铺',
						icon: 'heart',
						iconPath: require('../../static/shop-icon.png')
					},
					{
						text: '收藏',
						icon: 'heart',
						iconPath: require('../../static/collect-icon.png')
					},
				],
				buttons: {
					text: '立即购买',
					background: 'linear-gradient(to right,#ff7800,#fe4200)'
				},
				buttons1: [{
						text: '加入购物车',
						background: 'linear-gradient(to right,#ffbc14,#fe9a0a)'
					},
					{
						text: '立即购买',
						background: 'linear-gradient(to right,#ff7800,#fe4200)'
					},
				],
				gridList: [ //格子数据列表
					{
						imgUrl: '../static/test/grid-test.png',
					},
					{
						imgUrl: '../static/test/grid-test.png',
					},
					{
						imgUrl: '../static/test/grid-test.png',
					}
				],
				list: [{
						id: 1,
						image_url: require('@/static/test/cover-test.png'),
						title: "舞蹈表演，棒棒哒~孩子喜欢一直就报",
						text: "素素",
					},
					{
						id: 2,
						image_url: require('@/static/test/cover-test.png'),
						title: "舞蹈表演",
						text: "素素",
					},
					{
						id: 3,
						image_url: require('@/static/test/cover-test.png'),
						title: "火箭",
						text: "素素",
					},
					{
						id: 5,
						image_url: require('@/static/test/cover-test.png'),
						title: "华佗",
						text: "素素",
					},
					{
						id: 6,
						image_url: require('@/static/test/cover-test.png'),
						title: "舞蹈表演，棒棒哒~孩子喜欢一直就报",
						text: "素素",
					},
					{
						id: 7,
						image_url: require('@/static/test/cover-test.png'),
						title: "舞蹈表演，棒棒哒~孩子喜欢一直就报",
						text: "素素",
					},
					{
						id: 8,
						image_url: require('@/static/test/cover-test.png'),
						title: "舞蹈表演，棒棒哒~孩子喜欢一直就报",
						text: "素素",
					},
					{
						id: 9,
						image_url: require('@/static/test/cover-test.png'),
						title: "舞蹈表演，棒棒哒~孩子喜欢一直就报",
						text: "素素",
					},
					{
						id: 10,
						image_url: require('@/static/test/cover-test.png'),
						title: "LEVEL 2",
						text: "素素",
					},
					{
						id: 12,
						image_url: require('@/static/test/cover-test.png'),
						title: "王者荣耀",
						text: "素素",
					},
				],
				tabCurrentIndex: 0,
				tags: [{
					ID: 1,
					Name: '商品'
				}, {
					ID: 2,
					Name: '详情'
				}, {
					ID: 3,
					Name: '评价'
				}, {
					ID: 3,
					Name: '推荐'
				}],
				swiperList: [{
					id: 1,
					image: require('@/static/test/swiper-test1.png'),
					title: '标题',
					content: ''
				}, {
					id: 2,
					image: require('@/static/test/swiper-test1.png'),
					title: '标题',
					content: ''
				}],
				// 自定义swiperDot
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
				dotStyle: [{
						backgroundColor: 'rgba(0, 0, 0, .3)',
						border: '1px rgba(0, 0, 0, .3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
						selectedBorder: '1px rgba(0, 0, 0, .9) solid'
					},
					{
						backgroundColor: 'rgba(255, 90, 95,0.3)',
						border: '1px rgba(255, 90, 95,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
						selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
					},
					{
						backgroundColor: 'rgba(83, 200, 249,0.3)',
						border: '1px rgba(83, 200, 249,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
						selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
					}
				],
				modeIndex: 2,
				styleIndex: -1,
				current: 0,
				mode: 'nav', // default dot round nav indexes
				dotsStyles: {}
			}
		},
		methods: {
			onTabChabge({
				index
			}) {
				console.log(index)
				this.tabCurrentIndex = index
			},
			onSwiperChange(current) {
				console.log(current)
				this.current = current
			},
			selectCoupon() {
				this.$refs.popup.open()
			},
			onCloseCoupon() {
				this.$refs.popup.close()
			},
			selectStandard() {
				this.$refs.standardPopup.open()
			},
			onCloseStandard() {
				this.$refs.standardPopup.close()
			},
			onClickStandardItem(standardItem, index) {
				this.currentStandardIndex = index
			},
			toSelectAddress() {
				this.$Router.push({
					name: 'address-list'
				})
			},
			// 模拟跳转线下课程提交订单页
			toOrderSubmit() {
				this.$Router.push({
					name: 'order-submit'
				})
			},
			// 模拟跳转实体商品提交订单页 和添加购物车
			toCartOrOrderSubmit(btnIndex) {
				if (btnIndex === 0) {
					// this.$Router.push({
					// 	name: 'cart'
					// })
					console.log('增加购物车动画')
				}
				if (btnIndex === 1) {
					this.$Router.push({
						name: 'order-submit'
					})
				}
			},
			toShowLink() {
				location.href = 'https://www.baidu.com/'
			},
			handleShare() {
				// this.$Router.push({name:'share'})
				this.$refs.shareModal.open()
			}
		}
	}
</script>
<style scoped lang="scss">
	/deep/.my-video {
		width: 100%;
	}

	/deep/.ceil-item .middle {
		padding-bottom: 0;
		border-bottom: none;
	}

	/deep/.ceil-container .ceil-item {
		box-shadow:
			-2px 0px 5px 1px #f9f9f9,
			0px -2px 5px 1px #f9f9f9,
			2px 0px 5px 1px #f9f9f9,
			0px 2px 5px 1px #f9f9f9;
	}

	/deep/.button-container .button-group {
		margin-bottom: 30upx;
	}

	.button-container {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;
	}

	.zhibo {
		width: 0;
		flex-grow: 1;
		text-align: right;
		padding: 6upx 0 6upx 20upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		image {
			width: 54upx;
			height: auto;
		}
	}

	.modal {
		width: 100vw;
		padding: 80upx 30upx 30upx 30upx;
		box-sizing: border-box;
		background-color: #ffffff;

		.coupon-item {
			width: 100%;
			min-height: 100upx;
			position: relative;
			margin-bottom: 24upx;

			.bg {
				width: 100%;
				height: auto;
			}

			.title {
				position: absolute;
				top: 0;
				left: 10upx;
				font-size: 24upx;
				color: #ffffff;
			}

			.btn {
				font-size: 29upx;
				color: #ffffff;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
				position: absolute;
				right: 24upx;
				top: 28upx;
				width: 60upx;
			}

			.quan {
				width: 123upx;
				height: auto;
				position: absolute;
				top: 40upx;
				left: 46upx;
			}

			.quan-count {
				font-size: 60upx;
				color: #c7282b;
				position: absolute;
				top: 40upx;
				left: 34upx;

				.unit {
					font-size: 30upx;
				}
			}

			.con {
				font-size: 30upx;
				color: #c6272a;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				font-weight: bold;
				position: absolute;
				top: 36upx;
				left: 240upx;

				.time {
					font-size: 24upx;
					font-weight: normal;
				}
			}
		}

		.popup-btn-wrap {
			width: 100%;
			margin-top: 46upx;
		}
	}

	.action-container {
		width: 100%;
		border-top: 1px solid #eeeeee;
		border-bottom: 1px solid #eeeeee;
		padding: 14upx 0;
		padding-top: 0;
		background-color: #ffffff;
		position: fixed;
		bottom: 0;
	}

	.comment-container {
		width: 100%;
		background-color: #ffffff;
		margin-top: 14upx;
		padding-top: 50upx;
		padding-bottom: 20upx;

		.comment-title {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30upx;
			box-sizing: border-box;

			.title {
				font-size: 34upx;
				color: #333333;
				font-weight: bold;
				display: flex;
				align-items: center;

				.count {
					color: #ff6c00;
					font-size: 26upx;
					margin-left: 12upx;
				}
			}

			.arrow {
				font-size: 24upx;
				color: #ff6c00;
				display: flex;
				align-items: center;

				image {
					width: 15upx;
					height: auto;
					margin-left: 12upx;
				}
			}
		}
	}

	.grid-container {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;
	}

	.ceil-container {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;

		.ceil-other {
			margin-top: 40upx;
		}

		.star {
			display: flex;
			justify-content: flex-end;
			align-items: center;

			image {
				width: 37upx;
				height: auto;
				margin-right: 12upx;
			}

			text {
				font-size: 28upx;
				color: #999999;
			}
		}

		.rate-wrap {
			margin: 10upx 0;
		}

		.sub-title-btn {
			width: 160upx;
			height: 50upx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(to right, #ff3218, #ff6c00);
			color: #ffffff;
			border-radius: 10upx;
			font-size: 30upx;
			margin-top: 24upx;

			.unit {
				font-size: 24upx;
			}
		}
	}

	.zan {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;

		.title {
			width: 100%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			color: #999999;
			font-size: 26upx;
			margin-bottom: 34upx;
		}

		.main {
			width: 100%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			border-top: 1px solid #e1e5ea;
			border-bottom: 1px solid #e1e5ea;
			padding: 20upx 0;

			.left {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-right: 16upx;

				image {
					width: 22upx;
					height: auto;
					margin-bottom: 8upx;
				}

				text {
					font-size: 24upx;
					color: #999999;
				}
			}

			.right {
				display: flex;
				justify-content: flex-start;
				align-items: center;

				image {
					width: 58upx;
					height: 58upx;
					margin: 0 10upx;
				}
			}
		}
	}

	.comment {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;

		.title {
			text-align: left;
			font-size: 34upx;
			color: #333333;
			margin-bottom: 28upx;
		}

		.input-wrap {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 30upx;

			image {
				width: 60upx;
				height: 60upx;
			}

			.input {
				width: 0;
				flex-grow: 1;
				margin-left: 20upx;
			}
		}
	}

	.sub-title {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 4upx;

		image {
			width: 17upx;
			height: auto;
			margin-right: 12upx;
		}

		text {
			font-size: 24upx;
			color: #999999;
		}
	}

	.content {
		width: 100%;
		font-size: 26upx;
		color: #666666;
		line-height: 2;
		padding: 0 30upx;
		box-sizing: border-box;
	}
</style>
<style scoped lang="scss">
	// swiper-dot添加样式
	/deep/.uni-swiper__dots-box {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	/deep/.uni-swiper__dots-nav {
		background-color: rgba(0, 0, 0, 0);
	}

	/deep/.uni-swiper__dots-nav-item {
		width: 76upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, .3);
		border-radius: 30upx;
	}

	/deep/.waterfalls-box .waterfalls-list {
		background-color: #f7f9fc;
	}

	// 修改数据加减
	/deep/ .uni-numbox__minus,
	/deep/ .uni-numbox__value,
	/deep/ .uni-numbox__plus,
	/deep/ .uni-input-input {
		border-color: #EC6203;
		background-color: #ffffff;
	}

	/deep/ .uni-numbox__value {
		border-left: 1px solid #EC6203;
		border-right: 1px solid #EC6203;
	}

	/deep/ .uni-input-input,
		{
		color: #EC6203;
	}

	/deep/ .uni-numbox__plus .uni-numbox--text {
		color: #EC6203;
	}

	/deep/ .uni-numbox__minus .uni-numbox--text {
		color: #999999;
	}

	.tab-wrap {
		width: 100%;
		background-color: #ffffff;
		padding-bottom: 12rpx 0;
	}

	.nav-bar {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #ffd101;
		padding: 14upx 0;

		.back {
			padding: 0 30upx;
			box-sizing: border-box;

			.back-icon {
				width: 25upx;
				height: auto;
			}
		}

		.input-container {
			width: 0;
			flex-grow: 1;
		}

		.suffix {
			.icon {
				width: 44upx;
				height: auto;
			}
		}

		.suffix1 {
			padding-left: 30upx;
			padding-right: 30upx;
			box-sizing: border-box;
		}

		.suffix2 {
			padding-left: 0;
			padding-right: 30upx;
			box-sizing: border-box;
		}
	}

	.goods-detail {
		width: 100%;
		min-height: 100vh;

		.swiper-container {
			width: 100%;
		}

		.price-container {
			width: 100%;
			padding: 0 30upx;
			box-sizing: border-box;
			position: relative;
			position: relative;
			display: flex;
			align-items: center;

			.price-bg {
				width: 100%;
				height: auto;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				z-index: 0;
			}

			.content {
				width: 100%;
				background-color: #ffffff;
				border-radius: 10upx;
				padding: 20upx 30upx;
				box-sizing: border-box;
				// position: relative;
				z-index: 2;
				box-shadow:
					-2px 0px 5px 1px #f9f9f9,
					0px -2px 5px 1px #f9f9f9,
					2px 0px 5px 1px #f9f9f9,
					0px 2px 5px 1px #f9f9f9;
				// top: -6upx;
				margin-top: 40upx;

				.title {
					font-size: 32upx;
					color: #000000;
				}

				.price {
					width: 100%;
					display: flex;
					align-items: center;
					// position: relative;
					// left: -12upx;

					.btn {
						width: 288upx;
						height: 62upx;
						color: #ff490e;
						font-size: 42upx;
						// background-color: #ffffff;
						// border-radius: 30upx;
						font-weight: bold;
						display: flex;
						align-items: center;
						justify-content: center;


						.unit {
							font-size: 30upx;
							transform: scale(0.8);
							position: relative;
							bottom: -6upx;
						}
					}

					.btn2 {
						height: 40upx;
						line-height: 40upx;
						color: #ffffff;
						background-color: #fa5101;
						border-radius: 30upx;
						padding: 0 16upx;
						font-size: 24upx;
						transform: scale(0.9);
						margin-left: 10upx;

						text {
							font-size: 30upx;
						}
					}
				}

				.price2 {
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 24upx;
					margin-top: 12upx;
					color: #bdbcbc;
					position: relative;
					left: -12upx;

					.count-wrap {
						width: 0;
						flex-grow: 1;
						text-align: left;
						padding-left: 10upx;
					}
				}
			}
		}

		.hb-container {
			width: 100%;
			padding: 30upx;
			box-sizing: border-box;
			background-color: #ffffff;

			.inner {
				width: 100%;
				min-height: 152upx;
				position: relative;
			}

			.hb-bg {
				width: 100%;
				height: auto;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				z-index: 0;
			}

			.left {
				font-size: 48upx;
				color: #4a271e;
				font-weight: bold;
				position: absolute;
				top: 0;
				left: 0;
				position: absolute;
				top: 56upx;
				left: 48upx;

				.unit {
					font-size: 30upx;
					font-weight: normal;
				}
			}

			.center {
				font-size: 28upx;
				color: #ffffff;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				position: absolute;
				top: 54upx;
				left: 240upx;
			}

			.btn {
				font-size: 30upx;
				color: #874826;
				font-weight: bold;
				position: absolute;
				top: 72upx;
				right: 30upx;
			}
		}

		.title-container {
			width: 100%;
			padding: 0 30upx;
			box-sizing: border-box;
			font-size: 32upx;
			color: #000000;
			line-height: 1.8;
			background-color: #ffffff;
		}

		.address-container {
			width: 100%;
			padding: 30upx;
			box-sizing: border-box;
			background-color: #ffffff;
			margin-top: 17upx;

			.item {
				width: 100%;
				display: flex;
				align-items: center;
				margin-bottom: 14upx;
				padding: 4upx 0;

				.label {
					font-size: 26upx;
					color: #333333;
					margin-right: 40upx;
				}

				.main {
					font-size: 24upx;
					color: #b8b8b8;
					width: 0;
					flex-grow: 1;
					display: flex;
					align-items: center;

					.icon {
						width: 16upx;
						height: auto;
						margin-right: 12upx;
					}
				}
			}

			.item-select {
				width: 100%;
				display: flex;
				align-items: flex-start;

				.label {
					font-size: 26upx;
					color: #333333;
					margin-right: 40upx;
				}

				.main {
					width: 0;
					flex-grow: 1;
					display: flex;
					flex-direction: column;

					.top {
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 24upx;
						color: #b8b8b8;

						.icon {
							width: 14upx;
							height: auto;
						}
					}

					.bottom {
						width: 100%;
						display: flex;
						align-items: center;
						margin-top: 20upx;

						.cover {
							width: 60upx;
							height: 60upx;
							margin-right: 14upx;
						}

						.tips {
							font-size: 24upx;
							color: #b8b8b8;
							margin-left: 10upx;
						}
					}
				}
			}
		}

		.detail {
			width: 100%;
			background-color: #ffffff;
			margin-top: 14upx;

			.title {
				width: 100%;
				text-align: center;
				font-size: 36upx;
				color: #333333;
				font-weight: bold;
				padding: 40upx 0;
			}

			.detail-image {
				width: 100%;
				height: auto;
			}
		}

		.list-container {
			width: 100%;
			padding: 0 30upx;
			padding-top: 84upx;
			box-sizing: border-box;
			background-color: #ffffff;

			.list-title {
				margin-bottom: 64upx;
			}
		}
	}

	.comment-area {
		width: 100%;
		font-size: 24upx;
		color: #999999;
		background-color: #f5f6f6;
		border-radius: 10upx;
		padding: 6upx 10upx;
		box-sizing: border-box;

		image {
			width: 26upx;
			height: auto;
			margin-right: 10upx;
		}
	}
</style>
