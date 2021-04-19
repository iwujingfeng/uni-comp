<template>
	<view>
		<!-- 单元格1 -->
		<view class="drop">
			<view class="item">
				<text class="l">核销人员</text><text>李潇潇</text>
			</view>
			<view class="item">
				<text class="l">获得享学币</text>
				<input type="text" value="" placeholder="输入范围0~20" />
				<text>享学币</text>
			</view>
		</view>
		<br>
		<!-- 使用Ceil组件 -->
		<view class="list-wrapper">
			<view class="item">
				<BaseCeilItem font-size="30rpx" color="#363636" :show-icon="false" :showTitleEnd="false"
					suffix-path="../../static/arrow-r.png" suffixWidth="20rpx" padding="26rpx 0 10upx 0">
				</BaseCeilItem>
			</view>
			<view class="item">
				<BaseCeilItem font-size="30rpx" color="#363636" :show-icon="false" :showTitleEnd="false"
					suffix-path="../../static/arrow-r.png" suffixWidth="20rpx" padding="26rpx 0 10upx 0">
				</BaseCeilItem>
			</view>
		</view>
	</view>
</template>

<script>
	import BaseCeilItem from "@/components/BaseCeilItem.vue";
	export default {
		components: {
			BaseCeilItem
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	// 单元格1 样式
	.drop {
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;

		.item {
			width: 100%;
			background-color: #ffffff;
			border-radius: 20upx;
			padding: 34upx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #333333;
			font-size: 28upx;
			margin-bottom: 32upx;

			.l {
				color: #999999;
			}
		}
	}

	// 使用Ceil组件 样式
	/deep/.ceil-item .middle {
		padding-bottom: 0;
		border-bottom: none;
	}

	.list-wrapper {
		width: 100%;
		min-height: 85vh;
		padding: 20upx 30upx;
		box-sizing: border-box;
		background-color: #ffffff;
		margin-top: 20upx;

		.item {
			border-bottom: 1px solid #e9eaec;
		}
	}
</style>
