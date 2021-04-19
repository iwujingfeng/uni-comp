<template>
	<view>
		<view class="address-wrap">
			<image src="@/static/location.png" mode="widthFix"></image>
			<view class="address" @click="toLocation">
				<text>呼和浩特市玉泉区滨河北路远鹏星河国际13号楼4号</text>
			</view>
			<image src="@/static/location.png" mode="widthFix" @click="makePhoneCall"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.address-wrap {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 55upx;

		image {
			width: 38upx;
			height: auto;
		}

		.address {
			width: 0;
			flex-grow: 1;
			height: 110upx;
			font-size: 26upx;
			color: #666666;
			margin-left: 15upx;
			margin-right: 30upx;
			border-right: 1px dashed #d2d2d2;
			padding-right: 50upx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
		}
	}
</style>
