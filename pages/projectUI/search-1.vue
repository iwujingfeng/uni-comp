<template>
	<view class="search">
		<view class="search-container">
			<BaseSearchBar icon="../../static/search-icon.png" border-radius="20rpx" @back="$Router.back()"
				@search="onSearch"></BaseSearchBar>
		</view>
		<BaseHistorySearch icon="../../static/hot.png" :show-icon="true" item-bg="#f2f6f9" border-radius="10rpx"
			title="热门搜索" :list="hotList" @click-item="onClickitem"></BaseHistorySearch>
		<BaseHistorySearch icon="../../static/history.png" :show-icon="true" item-bg="#f2f6f9" border-radius="10rpx"
			title="历史搜索" :list="hotList" @click-item="onClickitem"></BaseHistorySearch>
		<view class="search-list">
			<BaseSearchListItemHighlight></BaseSearchListItemHighlight>
		</view>
		<BaseBottomNavbar v-if="isShowTab"></BaseBottomNavbar>
	</view>
</template>

<script>
	/**
	 * @description 搜索
	 */
	import BaseSearchBar from '@/components/BaseSearchBar.vue'
	import BaseSearchListItemHighlight from '@/components/BaseSearchListItemHighlight.vue'
	import BaseHistorySearch from '@/components/BaseHistorySearch.vue'
	export default {
		components: {
			BaseSearchBar,
			BaseSearchListItemHighlight,
			BaseHistorySearch
		},
		data() {
			return {
				hotList: ['实验课', '悠悠教育大班课', '实验课', '悠悠教育大班课', '实验课', '悠悠教育大班课']
			}
		},
		methods: {
			onClickitem(item) {
				console.log(item)
			},
			onSearch() {
				console.log('搜索')
			}
		}
	}
</script>

<style scoped lang="scss">
	.search {
		width: 100%;

		// height: 100vh;
		.search-container {
			width: 100%;
			background-color: #ffd101;
			padding: 14upx 0;
			margin-bottom: 40upx;
		}
	}
</style>
