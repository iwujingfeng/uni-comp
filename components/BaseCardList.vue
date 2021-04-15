<template>
	<view class="card-wrap">
		<view class="list-wrap">
			<view class="item" @click="clickItem(item)">
				<image class="cover-image" :class="{'img-redius':hasRedius}" :style="{height:coverImageHeight + 'px'}" src="@/static/test/goods-cover-test.png"></image>
				<view class="title ellipsis"><text>氨基酸净润平衡洁面乳</text></view>
				<view class="sub-title-wrap">
					<view class="left">
						<text class="bold">5360</text>
						<text>积分</text>
					</view>
					<text class="right">8516积分</text>
				</view>
				<view class="des">
					<text>已兑13.3万件</text>
				</view>
			</view>
			<view class="item" @click="clickItem(item)">
				<image class="cover-image" :class="{'img-redius':hasRedius}" :style="{height:coverImageHeight + 'px'}" src="@/static/test/goods-cover-test.png"></image>
				<view class="title ellipsis"><text>氨基酸净润平衡洁面乳</text></view>
				<view class="sub-title-wrap">
					<view class="left">
						<text class="bold">5360</text>
						<text>积分</text>
					</view>
					<text class="right">8516积分</text>
				</view>
				<view class="des">
					<text>已兑13.3万件</text>
				</view>
			</view>
			<view class="item" @click="clickItem(item)">
				<image class="cover-image" :class="{'img-redius':hasRedius}" :style="{height:coverImageHeight + 'px'}" src="@/static/test/goods-cover-test.png"></image>
				<view class="title ellipsis"><text>氨基酸净润平衡洁面乳</text></view>
				<view class="sub-title-wrap">
					<view class="left">
						<text class="bold">5360</text>
						<text>积分</text>
					</view>
					<text class="right">8516积分</text>
				</view>
				<view class="des">
					<text>已兑13.3万件</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			hasRedius: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				coverImageHeight: 0,
			};
		},
		created() {
			this.getCoverImageHeight()
		},
		methods: {
			// clickItem(item) {
			// 	this.$emit('click-card-item', item)
			// },
			getCoverImageHeight() {
				this.$nextTick(() => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.cover-image').boundingClientRect((rect) => {
						this.coverImageHeight = rect.width
					}).exec();
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.card-wrap {
		width: 100%;

		.list-wrap {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;

			.item {
				width: 50%;
				padding: 0 10upx;
				margin-bottom: 40upx;
				box-sizing: border-box;

				.img-redius {
					border-radius: 8upx;
				}

				image {
					width: 100%;
				}

				.title {
					width: 100%;
					font-size: 28upx;
					color: #333333;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					margin-top: 26upx;
				}

				.sub-title-wrap {
					width: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					font-size: 24upx;
					color: #999999;
					margin-top: 12upx;
          .left {
						color: #ed9900;
						font-size: 28upx;
					}
					.right {
						color: #bbbbbb;
						font-size: 24upx;
					}
				}

				.des {
					font-size: 24upx;
					color: #bbbbbb;
					margin-top: 10upx;
				}
			}
		}
	}
</style>
