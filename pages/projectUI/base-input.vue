<template>
	<view>
		<!-- 带边框的输入框 -->
		<BaseInput color="#B8B8B8" font-size="24rpx" :show-suffix="false" :has-border-bottom="false"
			placeholder="不可大于当前享学币数量"></BaseInput>
		<br>
		<!-- 带下划线的输入框 -->
		
	</view>
</template>

<script>
	import BaseInput from '@/components/BaseInput.vue'

	export default {
		components: {
			BaseInput,
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
	/deep/.placeholder-class {
		font-size: 28upx;
		color: #D8D8D8;
	}

	// /deep/.placeholder-class {
	// 	font-size: 24upx;
	// 	color: #B8B8B8;
	// }

	// /deep/.input-wrap {
	// 	width: 100%;
	// 	border: 1px solid #CFCFCF;
	// 	border-radius: 6upx;
	// 	padding: 20upx 16upx !important;
	// 	box-sizing: border-box;
	// 	margin-bottom: 64upx;
	// }
</style>
