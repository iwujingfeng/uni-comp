<template>
	<view class="nav-bar-search">
		<uni-status-bar/>
		<view class="nav-bar">
			<view class="back-wrap" @click="navigateBack()"><image src="@/static/images/back-icon.png" mode="widthFix" style="width: 9px;height: auto;"></image></view>
			<uni-search-bar :radius="100" @confirm="search" placeholder="请输入您要搜索的歌曲名称" @input="input" bgColor="f6f6f6"></uni-search-bar>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 搜索页的导航栏
	 */
import uniSearchBar from '@/components/input/uni-search-bar.vue';
import uniStatusBar from "@/components/uni-status-bar.vue";
export default {
	components: {
		uniSearchBar,
		uniStatusBar
	}
};
</script>

<style scoped lang="scss">
.nav-bar-search {
	width: 100%;
	.nav-bar {
		width: 100%;
		padding: 0 24upx;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: relative;
		.uni-searchbar {
			width: 90%;
		}
		.back-wrap {
			width: 10%;
		}
	}
}
</style>
