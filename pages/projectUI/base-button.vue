<template>
	<view>
		<view class="button-container">
			<br>
			<!-- 圆角按钮 -->
			<BaseButton width="100%" bg="#5173fb" font-size="28upx">提交核销</BaseButton>
			<br>
			<!-- 渐变按钮 -->
			<BaseButton width="100%" height="84rpx" bg="linear-gradient(to bottom,#FFDE00,#FEC900)" font-size="26rpx"
				color="#363636" bold @click-button="$Router.push({name:'share-code'})">生成二维码</BaseButton>
			<br>
			<!-- 矩形圆角按钮 -->
			<BaseButton width="100%" height="102rpx" border-radius="10rpx" bg="#FB8E37">保存</BaseButton>
			<br>
			<!-- 线框按钮 -->
			<BaseButton width="144rpx" plain height="54rpx" font-size="24rpx" color="#E15E47" border="1px solid #E15E47"
				@click-button="cancelRefud">撤销申请</BaseButton>
		</view>
	</view>
</template>

<script>
	import BaseButton from "@/components/BaseButton.vue";
	export default {
		components: {
			BaseButton,
		},
	};
</script>

<style>
	.button-container {
		/* position: fixed;
    bottom: 32upx; */
		padding: 0 30upx;
		box-sizing: border-box;
		left: 0;
		right: 0;
	}
</style>
