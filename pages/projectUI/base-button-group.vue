<template>
	<view>
		<view class="button-group">
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47"
				@click-button="addExpress">填写退货物流</BaseButton>
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47"
				@click-button="cancelRefud">撤销申请</BaseButton>
		</view>
	</view>
</template>

<script>
	import BaseButton from "@/components/BaseButton.vue";
	export default {
		components: {
			BaseButton
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
	/deep/.button-group .button {
		margin-left: 20upx;
	}

	.button-group {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 20upx 0 40upx 0;
		background-color: #ffffff;
		// position: fixed;
		// bottom: 0;
		// left: 0;
		// right: 0;
		padding: 24upx 30upx;
		box-sizing: border-box;
	}
</style>
