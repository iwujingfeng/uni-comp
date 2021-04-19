<template>
	<view style="padding: 0 30upx;box-sizing: border-box;">
		<view class="list-container">
			<view class="item" @click="$Router.push({name:'goods-detail'})">
				<view class="cover">
					<image src="@/static/test/cover-test1.png"></image>
					<view class="tag">
						<text>立减78元</text>
					</view>
				</view>

				<view class="content">
					<text class="title">小学数学暑假班特训营能力小学数学暑假班特训营能力...</text>
					<text class="des">hoho乐高教育</text>
					<view class="price">
						<text class="t1">￥</text>
						<text>49.80</text>
						<text class="raw">￥1000</text>
						<text class="tag">5656人付款</text>
					</view>
				</view>
			</view>
			<view class="item" @click="$Router.push({name:'goods-detail'})">
				<view class="cover">
					<image src="@/static/test/cover-test1.png"></image>
					<view class="tag">
						<text>1.6折</text>
					</view>
				</view>
				<view class="content">
					<text class="title">小学数学-计算能..</text>
					<text class="des">hoho乐高教育</text>
					<view class="price">
						<text class="t1">￥</text>
						<text>49.80</text>
						<text class="raw">￥1000</text>
						<text class="tag">5656人付款</text>
					</view>
				</view>
			</view>
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
	.list-container {
		width: 100%;
		padding: 20upx 15upx;
		box-sizing: border-box;

		.item {
			border-radius: 18upx;
			background-color: #ffffff;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			margin-bottom: 20upx;

			.cover {
				width: 195upx;
				height: 196upx;
				border-radius: 18upx;
				position: relative;

				image {
					width: 100%;
					height: 100%;
					border-radius: 18upx;
				}

				.tag {
					height: 40upx;
					padding: 0 18upx;
					background: linear-gradient(to right, #ff7600, #ffbe01);
					position: absolute;
					left: 0;
					top: 0;
					color: #ffffff;
					font-size: 24upx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					border-top-left-radius: 18upx;
					border-bottom-right-radius: 40upx;
				}
			}

			.content {
				width: 0;
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;
				margin-left: 26upx;

				.title {
					font-size: 30upx;
					color: #333333;
					margin-bottom: 10upx;
				}

				.des {
					font-size: 26upx;
					color: #999999;
					margin-bottom: 24upx;
				}

				.price {
					width: 100%;
					font-size: 30upx;
					color: #ff6c00;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.t1 {
						font-size: 24upx;
					}

					.raw {
						width: 0;
						flex-grow: 1;
						font-size: 24upx;
						color: #a5a8aa;
						transform: scale(0.8);
					}

					.tag {
						color: #b7b7b7;
						font-size: 24upx;
						transform: scale(0.8);
						background-color: #f7f7f7;
						border-radius: 10upx;
						padding: 4upx 10upx;
					}
				}
			}
		}
	}
</style>
