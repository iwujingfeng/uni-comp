<template>
	<view>
		<!-- 类型一 -->
		<view class="button-group">
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47"
				@click-button="addExpress">填写退货物流</BaseButton>
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47"
				@click-button="cancelRefud">撤销申请</BaseButton>
		</view>
		<br>
		<!-- 类型二 -->
		<view class="button-group1">
			<BaseButton width="50vw" height="100rpx" font-size="24rpx" bg="rgb(228, 218, 206)" color="#ffffff"
				border-radius="0" @click-button="addExpress">在线咨询</BaseButton>
			<BaseButton width="50vw" height="100rpx" font-size="24rpx" bg="rgb(204, 190, 151)" color="#ffffff"
				border-radius="0" @click-button="cancelRefud">立即报名</BaseButton>
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

	// 类型一
	.button-group {
		width: 100%;
		display: flex;
		flex-direction: row;
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

	// 类型二
	.button-group1 {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #ffffff;
		// position: fixed;
		// bottom: 0;
		// left: 0;
		// right: 0;
	}
</style>
