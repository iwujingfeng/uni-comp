<template>
	<view>
		<view class="container">
			<BaseCeilItem :show-icon="false" title="张小刚" :show-sub-title="true" sub-title="15696358456"
				font-size="30upx" :show-suffix="false" icon-width="92rpx" :show-title-end="false"
				:show-middle-border="false">
				<template #title-end>
					<BaseTag text="校长" size="small" :inverted="true"></BaseTag>
				</template>
				<template #suffix>
					<BaseButton font-size="26rpx" radius-num="40rpx" width="130rpx" height="48rpx" bg="#5678fe">一键拨号
					</BaseButton>
				</template>
			</BaseCeilItem>
		</view>
	</view>
</template>

<script>
	import BaseCeilItem from '@/components/BaseCeilItem.vue'
	import BaseButton from '@/components/BaseButton.vue'
	import BaseTag from '@/components/BaseTag.vue'
	export default {
		components: {
			BaseCeilItem,
			BaseButton,
			BaseTag
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
	/deep/.ceil-item {
		margin-bottom: 30upx;
	}

	/deep/.ceil-item .middle {
		padding-bottom: 0;
		border-bottom: none;
	}

	/deep/.ceil-item .middle .title-wrap {
		justify-content: flex-start;
	}

	/deep/.uni-tag {
		margin-left: 18upx;
		color: #fc4448;
		border-color: #fc4448;
	}

	/deep/.uni-tag .uni-tag--default {
		color: #fc4448;
		// line-height: 36upx !important;
	}

	.container {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;
	}

	// 第三个
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
</style>
