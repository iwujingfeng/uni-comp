<template>
	<scroll-view class="scroll-view" scroll-y="true" :style="{height:height}" @scrolltolower="handleLoadMore">
		<!-- 传入的列表 -->
		<slot></slot>
		<!-- 空数据 -->
		<view class="no-data" v-if="!count">暂时还没有数据</view>
		<!-- loading -->
		<LoadingMore type="19" v-if="more"></LoadingMore>
		<!-- 没有数据了 -->
		<view class="no-more" v-if="!more">没有更多数据了</view>
	</scroll-view>

</template>

<script>
	/**
	 * @description 滚动组件封装 包含底部加载更多loading | 数据为空占位符 | 没有数据了
	 * 目前仅支持纵向滚动
	 */
	import LoadingMore from '@/components/loading-more/LoadingMore.vue'
	export default {
		components: {
			LoadingMore,
		},
		props: {
			height: {
				type: String,
				default: '100%'
			},
		},
		data() {
			return {
				more: true, // 为true显示loading 为false显示'没有更多数据'。
				count:10
			};
		},
		watch:{
			more(n) {
				console.log(n)
			}
		},
		methods: {
			handleLoadMore() {
				this.$emit('load-more')
			}
		}
	}
</script>

<style scoped lang="scss">
	.scroll-view {
		width: 100%;
		position: relative;

		.no-data {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translatex(-50%);
		}

		.no-more {
			padding: 30rpx 0;
			text-align: center;
			font-size: 28rpx;
			color: #999999;
		}
	}
</style>
