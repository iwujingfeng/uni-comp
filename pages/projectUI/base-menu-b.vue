<template>
	<view>
		<view class="menu-wrap menu-wrap-order">
			<view class="title order-title">
				<text>我的订单</text>
			</view>
			<BaseMenu :menu-list="orderTabList" item-width="20%" item-padding="0" icon-padding="10rpx 40rpx"
				font-size="24rpx" :show-tag="false" @clickItem="onClickOrder">
				<!-- 额外的徽章 -->
				<template v-slot:badgePay>
					<!-- 待付款 -->
					<BaseBadge text="1" type="error" :unit="4"></BaseBadge>
				</template>
				<template v-slot:badgeReceive>
					<!-- 待收货 -->
					<BaseBadge text="10" type="error" :unit="4"></BaseBadge>
				</template>
				<template v-slot:badgeComment>
					<!-- 待评价 -->
					<BaseBadge text="10" type="error" :unit="4"></BaseBadge>
				</template>
			</BaseMenu>
		</view>
	</view>
</template>

<script>
	import BaseMenu from "@/components/BaseMenu.vue";
	import BaseBadge from "@/components/BaseBadge.vue";
	export default {
		components: {
			BaseMenu,
			BaseBadge,
		},
		data() {
			return {
				orderTabList: [{
						icon: require("@/static/menu/d1.png"),
						title: "我的订单",
						route: "order-list",
					},
					{
						icon: require("@/static/menu/d2.png"),
						title: "待付款",
						route: "order-list",
					},
					{
						icon: require("@/static/menu/d3.png"),
						title: "待收货",
						route: "order-list",
					},
					{
						icon: require("@/static/menu/d4.png"),
						title: "待评价",
						route: "order-list",
					},
					{
						icon: require("@/static/menu/d5.png"),
						title: "退货/售后",
						route: "order-list",
					},
				],
			}
		},
		methods: {
			onClickOrder(route) {
				this.$Router.push({
					name: route,
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	/deep/ .uni-badge {
	  height: 30upx;
	  line-height: 30upx;
		position: absolute;
		top: 0;
		right: 28upx;
	}
	.menu-wrap {
		width: 100%;
		margin-top: 20upx;
		padding: 20upx 0;
		border-radius: 12upx;
		background-color: #ffffff;
		box-shadow: 0px 2px 10px 0px #e5e7ef, 0px 2px 10px 0px #e5e7ef;

		.title {
			font-size: 30upx;
			color: #474747;
			padding: 0 34upx;
			box-sizing: border-box;
		}

		.order-title {
			margin-bottom: 20upx;
		}
	}

	.menu-wrap-order {
		padding: 40upx 0;
		margin-bottom: 20upx;
	}
</style>
