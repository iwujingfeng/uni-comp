<template>
	<view class="tab-sub-wrap">
		<BaseTab type="2" :tab-list="subTabs" :tab-cur="currentTabSubIndex" tab-class="tab-item-default"
			select-class="tab-item-active" font-size="24rpx" color="#333333" active-color="#333333"
			active-font-size="24rpx" @change="subTabChange"></BaseTab>
		<br>
		<BaseTab type="2" height="56rpx" :show-count="false" active-color="#ffffff" font-size="24rpx"
			active-font-size="24rpx" justify-content="space-between" :tab-list="tabs" :tab-cur="currentTab"
			@change="onTabChange"></BaseTab>
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
				currentTabSubIndex: 0,
				currentTab: 0,
				subTabs: [{
					ID: 1,
					Name: '全部',
					Des: '77'
				}, {
					ID: 2,
					Name: '有图',
					Des: '77'
				}, {
					ID: 3,
					Name: '最新',
					Des: '77'
				}],
			}
		},
		methods: {
			subTabChange({
				index,
				ID,
				type
			}) {
				this.currentTabSubIndex = index
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
	/deep/.item-border {
		background-color: #ffffff;
		border-radius: 8upx;
		border: none;
		padding: 14upx 24upx;
	}

	/deep/.active-radius {
		background-color: #ffd101 !important;
		border-radius: 8upx !important;
		border: none;
	}

	.tab-sub-wrap {
		padding: 0 20upx;
		box-sizing: border-box;
		margin-bottom: 40upx;
	}

	// /deep/.tab {
	// 	margin-bottom: 44upx;
	// 	justify-content: space-between; 使用该样式实现tab两端对齐
	// }

	// 	/deep/.wuc-tab-item {
	// 		width: 140upx;
	// 		background-color: #ffffff;
	// 	}

	// 	/deep/.active-radius {
	// 		background-color: #5678fe !important;
	// 		border: 1px solid #5678fe;
	// 	}

	// 	/deep/.item-border {
	// 		border-radius: 16upx;
	// 	}
</style>
