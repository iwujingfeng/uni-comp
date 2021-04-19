<template>
	<view class="waterfall-container">
		<BaseWaterfallList :list="list" @click-item="onClickGoods">
			<!--  #ifdef  MP-WEIXIN -->
			<view v-for="(item, index) of list" :key="index" slot="slot{{index}}">
				<view class="cnt">
					<view class="title">{{ item.title }}</view>
					<view class="text">
						<view class="name">
							<image class="icon" src="../../static/test/avatar-test.png" mode="widthFix"></image>
							<text>{{ item.text }}</text>
						</view>
						<view class="count">
							<image class="icon" src="../../static/eye.png" mode="widthFix"></image>
							<text>100</text>
						</view>
					</view>
				</view>
			</view>
			<!--  #endif -->

			<!-- #ifndef  MP-WEIXIN -->
			<template v-slot:default="item">
				<view class="cnt">
					<view class="title">{{ item.title }}</view>
					<view class="text">
						<view class="name">
							<image class="icon" src="../../static/test/avatar-test.png" mode="widthFix"></image>
							<text>{{ item.text }}</text>
						</view>
						<view class="count">
							<image class="icon" src="../../static/eye.png" mode="widthFix"></image>
							<text>100</text>
						</view>
					</view>
				</view>
			</template>
			<!-- #endif -->
		</BaseWaterfallList>
	</view>
</template>

<script>
	import BaseWaterfallList from '@/components/BaseWaterfallList.vue'
	export default {
		components: {
			BaseWaterfallList
		},
		data() {
			return {
				list: [{
						id: 1,
						image_url: require('../../static/test/grid-test.png'),
						title: "舞蹈表演，棒棒哒~孩子喜欢一直就报",
						text: "素素",
					},
					{
						id: 2,
						image_url: require('../../static/test/grid-test.png'),
						title: "舞蹈表演",
						text: "素素",
					},
					{
						id: 3,
						image_url: require('../../static/test/grid-test.png'),
						title: "火箭",
						text: "素素",
					},
					{
						id: 5,
						image_url: require('../../static/test/grid-test.png'),
						title: "华佗",
						text: "素素",
					},
					{
						id: 6,
						image_url: require('../../static/test/grid-test.png'),
						title: "舞蹈表演，棒棒哒~孩子喜欢一直就报",
						text: "素素",
					},
					{
						id: 7,
						image_url: require('../../static/test/grid-test.png'),
						title: "舞蹈表演，棒棒哒~孩子喜欢一直就报",
						text: "素素",
					},
					{
						id: 8,
						image_url: require('../../static/test/grid-test.png'),
						title: "舞蹈表演，棒棒哒~孩子喜欢一直就报",
						text: "素素",
					},
					{
						id: 9,
						image_url: require('../../static/test/grid-test.png'),
						title: "舞蹈表演，棒棒哒~孩子喜欢一直就报",
						text: "素素",
					},
					{
						id: 10,
						image_url: require('../../static/test/grid-test.png'),
						title: "LEVEL 2",
						text: "素素",
					},
					{
						id: 12,
						image_url: require('../../static/test/grid-test.png'),
						title: "王者荣耀",
						text: "素素",
					},
				],
			}
		},
		methods: {
			onClickGoods(content) {
				console.log(content)
				this.$Router.push({
					name: 'content-detail'
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.waterfall-container {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;

		.cnt {
			padding: 0 22upx;
			padding-bottom: 22upx;
			box-sizing: border-box;
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
</style>
