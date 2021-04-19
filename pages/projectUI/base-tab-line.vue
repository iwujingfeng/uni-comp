<template>
	<view>
		<!-- tab1 -->
		<BaseTab type="6" :tab-list="tabs" :tabCur="tabCurrentIndex" active-color="#5678fe" color="#999999"
			font-size="26rpx" active-font-size="30rpx" justifyContent="space-between" item-padding="20rpx 0" bold
			border-color="#5678fe" @change="onChabge"></BaseTab>
		<!-- tab2 -->
		<BaseTab type="5" :tab-list="tags" :tabCur="tabCurrentIndex" center active-color="#2A2A2A" color="#2A2A2A"
			font-size="26rpx" border-color="#2A2A2A" border-width="6rpx" :bold="true" active-font-size="28rpx"
			item-padding="0 130rpx" @change="onChabge"></BaseTab>
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
				tabs: [{
					ID: 1,
					Name: '全部评价'
				}, {
					ID: 2,
					Name: '未评价'
				}, {
					ID: 3,
					Name: '已评价'
				}]
			}
		},
		methods: {
			onChabge({
				index
			}) {
				this.tabCurrentIndex = index
			},
		}
	}
</script>

<style scoped lang="scss">
	// tab1 样式
	/deep/.wuc-tab-item {
		width: 33.3333%;
		margin: 0;
	}

	// tab1 样式
	/deep/.border-bottom {
		border-color: #5678fe;
	}
</style>
