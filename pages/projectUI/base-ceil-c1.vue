<template>
	<view>
		<BaseCeilItem icon-path="../../static/test/grid-test.png" icon-width="150upx" border-radius="10rpx" title="汉斯教育"
			font-size="32rpx" color="#333333" padding="20rpx" :show-title-end="false" :show-suffix="false"
			@click-item="toBusiness">
			<template #title-end>
				<view class="star">
					<image src="../../static/rate_0.png" mode="widthFix"></image>
					<text>300</text>
				</view>
			</template>
			<template #other>
				<view class="rate-wrap">
					<BaseRate v-model="ceshi1" :size="23" :img-data="imgData" :gutter="10"></BaseRate>
				</view>
			</template>
			<template #sub-title>
				<view class="sub-title">
					<image src="../../static/location.png" mode="widthFix"></image>
					<text>内蒙古呼和浩特市新城区中山东路</text>
				</view>
			</template>
		</BaseCeilItem>

		<BaseCeilItem icon-path="../../static/test/grid-test.png" icon-width="150upx" border-radius="10rpx"
			title="小学数学-计算能力特训营..." font-size="32rpx" color="#333333" padding="20rpx" :show-title-end="false"
			:show-suffix="false" @click-item="toGoodsDetail">
			<template #title-end>
				<view class="star">
					<image src="../../static/rate_1.png" mode="widthFix"></image>
				</view>
			</template>
			<template #sub-title>
				<view class="sub-title-btn">
					<text class="unit">￥</text>
					<text>919.80</text>
				</view>
			</template>
		</BaseCeilItem>
	</view>
</template>

<script>
	import BaseCeilItem from '@/components/BaseCeilItem.vue'
	import BaseButton from '@/components/BaseButton.vue'
	import BaseTag from '@/components/BaseTag.vue'
	import BaseRate from '@/components/BaseRate.vue'
	export default {
		components: {
			BaseCeilItem,
			BaseButton,
			BaseTag,
			BaseRate
		},
		data() {
			return {
				ceshi1: 3,
				imgData: ['../../static/rate_0.png'],
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
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



	.sub-title {
		width: 100%;
		display: flex;
		justify-content: flex-start;
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
