<template>
	<view>
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
	</view>
</template>

<script>
	import BaseCeilItem from '@/components/BaseCeilItem.vue'
	import BaseRate from '@/components/BaseRate.vue'
	export default {
		components: {
			BaseCeilItem,
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
</style>
