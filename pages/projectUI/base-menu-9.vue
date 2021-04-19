<template>
	<view>
		<view class="menu-area">
			<view class="inner">
				<view class="title">
					<text>专属权益</text>
				</view>
				<BaseMenu :menu-list="honorTabList" item-width="33.3333333%" item-padding="0"
					icon-padding="30rpx 60rpx 0 60rpx" font-size="24rpx"></BaseMenu>
			</view>
		</view>
	</view>
</template>

<script>
	import BaseMenu from "@/components/BaseMenu.vue";
	export default {
		components: {
			BaseMenu
		},
		data() {
			return {
				honorTabList: [{
						icon: require("@/static/ping-big.png"),
						title: "评议权",
					},
					{
						icon: require("@/static/ping-big.png"),
						title: "评议权",
					},
					{
						icon: require("@/static/ping-big.png"),
						title: "评议权",
					},
					{
						icon: require("@/static/ping-big.png"),
						title: "评议权",
					},
					{
						icon: require("@/static/ping-big.png"),
						title: "评议权",
					},
					{
						icon: require("@/static/ping-big.png"),
						title: "评议权",
					},
					{
						icon: require("@/static/ping-big.png"),
						title: "评议权",
					},
					{
						icon: require("@/static/ping-big.png"),
						title: "评议权",
					},
					{
						icon: require("@/static/ping-big.png"),
						title: "评议权",
					},
				],
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.menu-area {
		width: 100%;
		padding: 0 30upx;
		padding-bottom: 60upx;
		box-sizing: border-box;

		.inner {
			width: 100%;
			background-color: #ffffff;
			border-radius: 20upx;
			box-shadow: 0px 2px 10px 0px #e5e7ef, 0px 2px 10px 0px #e5e7ef;
			padding: 50upx 0;

			.title {
				padding: 0 34upx;
				box-sizing: border-box;
			}
		}
	}
</style>
