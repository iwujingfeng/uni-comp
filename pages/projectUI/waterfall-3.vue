<template>
	<view class="waterfall-container">
		<!-- 猜你喜欢 -->
		<BaseWaterfallList :list="list1" @click-item="onClickGoods">
			<template v-slot:default="item">
				<view class="cnt">
					<view class="title" style="margin-bottom: 10upx">{{
		                  item.title
		                }}</view>
					<view class="tag-common">
						<text>360天最低价</text>
					</view>
					<view class="tag" style="width: 100%; padding-bottom: 30upx">
						<BasePriceTag type="1"></BasePriceTag>
					</view>
				</view>
			</template>
		</BaseWaterfallList>
	</view>
</template>

<script>
	import BaseWaterfallList from "@/components/BaseWaterfallList.vue";
	import BasePriceTag from "@/components/BasePriceTag.vue";
	export default {
		components: {
			BaseWaterfallList,
			BasePriceTag
		},
		data() {
			return {
				list1: [{
						id: 1,
						image_url: require("../../static/test/cover-test.png"),
						title: "舞蹈表演，棒棒哒~孩子喜欢一直就报",
						text: "素素",
						type: 1,
						sale: true,
					},
					{
						id: 2,
						image_url: require("../../static/test/cover-test.png"),
						title: "舞蹈表演",
						text: "素素",
						type: 1,
						reduce: true,
					},
					{
						id: 3,
						image_url: require("../../static/test/cover-test.png"),
						title: "火箭",
						text: "素素",
						type: 1,
						sale: true,
					},
					{
						id: 5,
						image_url: require("../../static/test/cover-test.png"),
						title: "华佗",
						text: "素素",
						type: 1,
						sale: true,
					},
				],
			}
		},
		methods: {
			onClickGoods(goods) {
				console.log(goods);
				this.$Router.push({
					name: "goods-detail",
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	.waterfall-container {
		width: 100%;

		.tab-wrap {
			margin-top: 40upx;
			margin-bottom: 40upx;
		}

		.cnt {
			padding: 0 22upx;
			padding-bottom: 22upx;
			box-sizing: border-box;
		}

		.tag-common {
			width: 170upx;
			height: 40upx;
			background-color: #ffe431;
			border-radius: 18upx;
			border-bottom-left-radius: 0;
			margin-top: 20upx;
			display: flex;
			justify-content: center;
			align-items: center;

			text {
				font-size: 24upx;
				color: #682004;
				transform: scale(0.9);
			}
		}

		.title {
			color: #333333;
			font-size: 30upx;
			margin-bottom: 20upx;
			margin-top: 20upx;
		}

		.text {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.name {
				display: flex;
				justify-content: flex-start;
				align-items: center;

				.icon {
					width: 40upx;
					height: auto;
					margin-right: 10upx;
				}
			}

			.count {
				display: flex;
				justify-content: flex-end;
				align-items: center;

				.icon {
					width: 25upx;
					height: auto;
					margin-right: 10upx;
				}
			}

			text {
				color: #333333;
				font-size: 24upx;
			}
		}
	}

	.comment {
		width: 100%;
		font-size: 24upx;
		color: #999999;
		background-color: #f5f6f6;
		border-radius: 10upx;
		padding: 6upx 10upx;
		box-sizing: border-box;

		image {
			width: 26upx;
			height: auto;
			margin-right: 10upx;
		}
	}
</style>
