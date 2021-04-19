<template>
	<view>
		<view class="list">
			<view class="item">
				<BaseCeilItem :show-icon="false" title="课程名称" :show-sub-title="true" sub-title="用户姓名-儿童姓名"
					font-size="30upx" :show-suffix="false" icon-width="92rpx" :show-title-end="false"
					:show-middle-border="false" sub-title-color="#999999" padding="30rpx">
					<template #title-end>
						<view class="title-end">
							<BaseTag text="2课时" size="small" :inverted="true"></BaseTag>
							<text>享学币：-10</text>
						</view>
					</template>
					<template #sub-title>
						<view class="other">
							<text>2020.11.21 15:36</text>
							<BaseButton bg="#ff953d" width="149upx" height="57upx" font-size="26rpx"
								@click-button="toComment">未评价</BaseButton>
						</view>
					</template>
				</BaseCeilItem>
			</view>
			<view class="item">
				<BaseCeilItem :show-icon="false" title="课程名称" :show-sub-title="true" sub-title="用户姓名-儿童姓名"
					font-size="30upx" :show-suffix="false" icon-width="92rpx" :show-title-end="false"
					:show-middle-border="false" sub-title-color="#999999" padding="30rpx">
					<template #title-end>
						<view class="title-end">
							<BaseTag text="2课时" size="small" :inverted="true"></BaseTag>
							<text>享学币：-10</text>
						</view>
					</template>
					<template #sub-title>
						<view class="other">
							<text>2020.11.21 15:36</text>
							<BaseButton bg="#5678fe" width="149upx" height="57upx" font-size="26rpx">已评价</BaseButton>
						</view>
					</template>
				</BaseCeilItem>
			</view>
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
			BaseTag,
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
		line-height: 36upx !important;
	}

	/deep/uni-button {
		margin: 0;
	}
	.title-end {
				width: 0;
				flex-grow: 1;
				display: flex;
				justify-content: space-between;
				align-items: center;
	
				text {
					color: #999999;
				}
			}
	.other {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			font-size: 24upx;
			color: #999999;
		}
</style>
