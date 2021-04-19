<template>
	<view class="scroll-panel" id="scroll-panel">
		<view class="list-box">
			<view class="left">
				<scroll-view scroll-y="true" :style="{ 'height':scrollHeight + 'px' }" :scroll-into-view="leftIntoView">
					<view class="item" v-for="(item,index) in leftArray" :key="index"
						:class="{ 'active':index==leftIndex }" :id="'left-'+index" :data-index="index" @tap="leftTap">
						<image class="border-on" src="../../static/border-on.png" mode="widthFix" v-if="index==leftIndex">
						</image>
						<text>{{item}}</text>
					</view>
				</scroll-view>
			</view>
			<view class="main">
				<scroll-view scroll-y="true" :style="{ 'height':scrollHeight + 'px' }" @scroll="mainScroll"
					:scroll-into-view="scrollInto" scroll-with-animation="true">
					<view class="item main-item" v-for="(item,index) in mainArray" :key="index" :id="'item-'+index">
						<!-- <view class="title">
									<view>{{item.title}}</view>
								</view> -->
						<view class="goods" v-for="(item2,index2) in item.list" :key="index2">
							<image src="../../static/test/cover-test1.png" mode=""></image>
							<view>
								<view>小学数学暑假班特训营能力...</view>
								<view class="describe">hoho乐高教育</view>
								<view class="money">
									<text class="unit">￥</text>
									<text class="price">69.80</text>
									<text>￥1000</text>
								</view>
							</view>
						</view>
					</view>
					<view class="fill-last" :style="{ 'height':fillHeight + 'px' }"></view>
				</scroll-view>
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
				isCollected: false,
				currentTabIndex: 0,
				tabs: [{
					ID: 1,
					Name: '机构商城'
				}, {
					ID: 2,
					Name: '机构简介'
				}, {
					ID: 3,
					Name: '机构动态'
				}, {
					ID: 4,
					Name: '机构评价'
				}],

				scrollHeight: 400,
				scrollTopSize: 0,
				fillHeight: 0, // 填充高度，用于最后一项低于滚动区域时使用
				leftArray: [],
				mainArray: [],
				topArr: [],
				leftIndex: 0,
				scrollInto: ''
			}
		},
		computed: {
			/* 计算左侧滚动位置定位 */
			leftIntoView() {
				return `left-${this.leftIndex > 3 ? (this.leftIndex-3):0}`;
			}
		},
		mounted() {
			/* 等待DOM挂载完成 */
			this.$nextTick(() => {
				/* 在非H5平台，nextTick回调后有概率获取到错误的元素高度，则添加200ms的延迟来减少BUG的产生 */
				setTimeout(() => {
					/* 等待滚动区域初始化完成 */
					this.initScrollView().then(() => {
						/* 获取列表数据，你的代码从此处开始 */
						this.getListData();
					})
				}, 200);
			})
		},
		methods: {
			handleCollect() {
				this.isCollected = !this.isCollected
			},
			tabChangeSub({
				index,
				ID,
				type
			}) {
				console.log(index, ID, type)
				this.currentTabIndex = index
				console.log(currentTabIndex)
			},
			/* 初始化滚动区域 */
			initScrollView() {
				return new Promise((resolve, reject) => {
					let view = uni.createSelectorQuery().select('#scroll-panel');
					view.boundingClientRect(res => {
						this.scrollTopSize = res.top;
						this.scrollHeight = res.height;
						this.$nextTick(() => {
							resolve();
						})
					}).exec();
				});
			},
			/* 获取列表数据 */
			getListData() {
				// Promise 为 ES6 新增的API ，有疑问的请自行学习该方法的使用。
				new Promise((resolve, reject) => {
					/* 因无真实数据，当前方法模拟数据。正式项目中将此处替换为 数据请求即可 */
					uni.showLoading();
					setTimeout(() => {
						let [left, main] = [
							[],
							[]
						];
						left.push('实体物品')
						left.push('线下课程')
						for (let i = 0; i < 2; i++) {
							// left.push('实体物品');

							let list = [];
							let r = Math.floor(Math.random() * 10);
							r = r < 1 ? 3 : r;
							for (let j = 0; j < r; j++) {
								list.push(j);
							}
							main.push({
								title: `第${i+1}类商品标题`,
								list
							})
						}

						// 将请求接口返回的数据传递给 Promise 对象的 then 函数。
						resolve({
							left,
							main
						});
					}, 1000);
				}).then((res) => {
					console.log('-----------请求接口返回数据示例-------------');
					console.log(res);

					uni.hideLoading();
					this.leftArray = res.left;
					this.mainArray = res.main;

					// DOM 挂载后 再调用 getElementTop 获取高度的方法。
					this.$nextTick(() => {
						this.getElementTop();
					});
				});
			},
			/* 获取元素顶部信息 */
			getElementTop() {
				new Promise((resolve, reject) => {
					let view = uni.createSelectorQuery().selectAll('.main-item');
					view.boundingClientRect(data => {
						resolve(data);
					}).exec();
				}).then((res) => {
					let topArr = res.map((item) => {
						return item.top - this.scrollTopSize; /* 减去滚动容器距离顶部的距离 */
					});
					this.topArr = topArr;

					/* 获取最后一项的高度，设置填充高度。判断和填充时做了 +-20 的操作，是为了滚动时更好的定位 */
					let last = res[res.length - 1].height;
					if (last - 20 < this.scrollHeight) {
						this.fillHeight = this.scrollHeight - last + 20;
					}
				});
			},
			/* 主区域滚动监听 */
			mainScroll(e) {
				let top = e.detail.scrollTop;
				let index = 0;
				/* 查找当前滚动距离 */
				for (let i = (this.topArr.length - 1); i >= 0; i--) {
					/* 在部分安卓设备上，因手机逻辑分辨率与rpx单位计算不是整数，滚动距离与有误差，增加2px来完善该问题 */
					if ((top + 2) >= this.topArr[i]) {
						index = i;
						break;
					}
				}
				this.leftIndex = (index < 0 ? 0 : index);
			},
			/* 左侧导航点击 */
			leftTap(e) {
				let index = e.currentTarget.dataset.index;
				this.scrollInto = `item-${index}`;
			}
		}
	}
</script>

<style lang="scss">
	// 标题左对齐
	/deep/.uni-navbar__header-container-inner {
	  justify-content: flex-start;
	  position: relative;
	  left: -80upx;
	}
	.right-icon {
	  display: flex;
	  justify-content: flex-end;
	  align-items: center;
	}
	.tab-wrap {
		padding-top: 20upx;
		background-color: #ffffff;
		box-shadow: 4upx 8upx 8upx #e5eaf1;
	}

	page,
	.container {
		height: 100%;
	}

	/* 容器 */
	.container {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: flex-start;

		&>view {
			width: 100%;
		}

		.scroll-panel {
			flex-grow: 1;
			height: 0;
			overflow: hidden;
			margin-top: 14upx;
		}

		// .bottom-panel{
		// 	padding-bottom: 0;
		// 	padding-bottom: constant(safe-area-inset-bottom);  
		// 	padding-bottom: env(safe-area-inset-bottom);		
		// }
	}


	.list-box {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: flex-start;
		font-size: 28rpx;

		.left {
			width: 190rpx;
			background-color: #f7f9fc;
			line-height: 80rpx;
			box-sizing: border-box;
			font-size: 28rpx;
			color: #898989;

			.item {
				padding-left: 30rpx;
				position: relative;
				display: flex;
				justify-content: flex-start;
				align-items: center;

				&:not(:first-child) {
					margin-top: 1px;

					&::after {
						content: '';
						display: block;
						height: 0;
						border-top: #d6d6d6 solid 1px;
						width: 620upx;
						position: absolute;
						top: -1px;
						right: 0;
						transform: scaleY(0.5);
						/* 1px像素 */
					}
				}

				&.active {
					color: #333333;
					font-weight: bold;
					background-color: #fff;
				}

				.border-on {
					width: 7upx;
					height: auto;
					margin-right: 10upx;
				}
			}

			.fill-last {
				height: 0;
				width: 100%;
				background: none;
			}
		}

		.main {
			background-color: #fff;
			padding-left: 20rpx;
			width: 0;
			flex-grow: 1;
			box-sizing: border-box;



			.title {
				line-height: 64rpx;
				font-size: 24rpx;
				font-weight: bold;
				color: #666;
				background-color: #fff;
				position: sticky;
				top: 0;
				z-index: 19;
			}

			.item {
				padding-bottom: 10rpx;
				border-bottom: #eee solid 1px;
			}

			.goods {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: flex-start;
				align-items: center;
				align-content: center;
				margin-bottom: 40rpx;

				&>image {
					width: 170rpx;
					height: 170rpx;
					margin-right: 25rpx;
					margin-left: 2px;
					border-radius: 16upx;
				}

				.describe {
					font-size: 24rpx;
					color: #999999;
					margin-top: 10upx;
				}

				.money {
					width: 100%;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					font-size: 24rpx;
					color: #a5a8aa;
					margin-top: 14upx;

					.unit {
						color: #ff6c00;
					}

					.price {
						font-size: 30upx;
						color: #ff6c00;
						font-weight: bold;
						margin-right: 14upx;
					}
				}
			}
		}
	}
</style>