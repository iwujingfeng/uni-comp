<template>
	<view class="search-list-item">
		<view class="icon-wrap">
			<image src="../static/list-icon.png" mode="widthFix"></image>
		</view>
		<view class="main">
			<view class="top">
				<BaseHightlight content="亲子乐高教育" keys="教育" color="#ff6c00" :weight="true"></BaseHightlight>
			</view>
			<view class="bottom">
				<text class="left">内蒙古呼和浩特市新城区中山东路</text>
				<text class="right">呼和浩特市</text>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 带搜索关键词高亮的列表项
	 * 回头研究高亮功能的实现
	 */
	import BaseHightlight from '@/components/BaseHighlight.vue'
	export default {
		components: {
			BaseHightlight
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.search-list-item {
		width: 100%;
		border-bottom: 1px solid #e8e8e8;
		display: flex;
		align-items: flex-start;
		padding: 30upx 30upx;
		box-sizing: border-box;

		.icon-wrap {
			width: 24upx;
			margin-right: 14upx;
			position: relative;
			top: -4upx;

			image {
				width: 100%;
				height: auto;
			}
		}

		.main {
			width: 0;
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;

			.top {
				font-size: 28upx;
				color: #333333;
				margin-bottom: 20upx;
			}

			.bottom {
				font-size: 24upx;
				color: #999999;
			}
		}
	}
</style>
