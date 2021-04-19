<template>
	<view>
		<BaseTextarea min-height="200rpx" border-radius="12rpx" padding="26rpx 32rpx" color="#b1b8c2" font-size="26rpx"
			place-color="#b1b8c2" place-font-size="26rpx" :placeholder="
		              showEditIcon ? '从多维度评价课程，让更多人了解我们' : ''
		            " @focus="showEditIcon = false" @blur="showEditIcon = true">
			<template #icon>
				<image class="icon" src="@/static/edit.png" mode="widthFix" v-if="showEditIcon"></image>
			</template>
			<template #count>
				<view class="count">已输入0/300</view>
			</template>
		</BaseTextarea>
	</view>
</template>

<script>
	import BaseTextarea from "@/components/BaseTextarea.vue";
	export default {
		components: {
			BaseTextarea
		},
		data() {
			return {
				showEditIcon: true,
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	// 修改子组件中的placeholder
	/deep/.uni-textarea-placeholder {
		padding-left: 60upx;
		position: relative;
		top: 20upx;
	}

	/deep/.uni-textarea-textarea {
		padding: 20upx;
		box-sizing: border-box;
	}

	.icon {
		width: 30upx;
		height: auto;
		position: absolute;
		top: 34upx;
		left: 30upx;
	}

	.count {
		font-size: 24upx;
		color: #b1b8c2;
		position: absolute;
		right: 30upx;
		bottom: 30upx;
	}

	.upload {
		width: 100%;
		display: flex;
		align-items: center;
		margin-top: 38upx;
		margin-bottom: 10upx;

		.upload-title {
			font-size: 26upx;
			color: #999999;
			margin-right: 16upx;
		}

		.upload-icon {
			width: 134upx;
			height: auto;
		}
	}
</style>
