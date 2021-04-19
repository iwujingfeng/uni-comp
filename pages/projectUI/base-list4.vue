<template>
	<view class="course-comment bg-gray padding-bottom">
		<view class="container">
			<view class="card">
				<view class="item">
					<image class="cover" src="@/static/test/grid-test.png"></image>
					<view class="main">
						<view class="title-wrap">
							<text class="name">书法</text>
							<BaseTag text="1.5折" size="small" :inverted="true"></BaseTag>
						</view>
						<text class="sub">新东方</text>
						<view class="comment">
							<text class="t1">￥900</text>
							<text class="t2">￥980</text>
							<text>已售：199</text>
						</view>
					</view>
				</view>
			</view>
			<view class="card">
				<view class="item">
					<image class="cover" src="@/static/test/grid-test.png"></image>
					<view class="main">
						<view class="title-wrap">
							<text class="name">书法</text>
						</view>
						<view class="rate">
							<BaseRate v-model="ceshi1" :size="24" :img-data="imgData" :gutter="10"></BaseRate>
							<text class="count">4.8分</text>
						</view>

						<view class="comment">
							<text>呼和浩特市新城区金泰国际大厦</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 课堂评价 查看
	 */
	import BaseBadge from '@/components/BaseBadge.vue'
	import BaseTag from '@/components/BaseTag.vue'
	import BaseRate from '@/components/BaseRate.vue'
	export default {
		components: {
			BaseBadge,
			BaseTag,
			BaseRate
		},
		data() {
			return {
				ceshi1: 3,
				imgData: ['../../static/rate_0.png'],
			}
		}
	}
</script>

<style scoped lang="scss">
	/deep/.uni-tag {
		margin-left: 10upx;
		color: #fc4448;
		border-color: #fc4448;
		transform: scale(0.8);
		background-color: #ffffff;
	}

	/deep/.uni-tag .uni-tag--default {
		color: #fc4448;
		height: 36upx !important;
		line-height: 36upx !important;
	}

	.course-comment {
		width: 100%;
		min-height: 100vh;

		.container {
			width: 100%;
			padding: 20upx 30upx;
			box-sizing: border-box;
		}

		.card {
			width: 100%;
			background-color: #ffffff;
			border-radius: 12upx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			padding: 0 24upx 0 24upx;
			box-sizing: border-box;
			margin-bottom: 20upx;

			.title {
				font-size: 24upx;
				color: #343536;
			}

			.item {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 30upx 0;

				.cover {
					width: 140upx;
					height: 140upx;
					border-radius: 6upx;
				}

				.main {
					margin-left: 30upx;
					width: 0;
					flex-grow: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: flex-start;
					padding-top: 6upx;

					.title-wrap {
						display: flex;
						align-items: center;
						margin-bottom: 16upx;
					}

					.name {
						font-size: 28upx;
						color: #2B2B2B;
					}

					.sub {
						font-size: 24upx;
						color: #CFCFCF;
					}

					.rate {
						display: flex;
						align-items: center;
						margin-bottom: 6upx;
						font-size: 24upx;
						color: #FF631B;

						.count {
							margin-left: 8upx;
						}
					}

					.comment {
						width: 100%;
						font-size: 24upx;
						color: #CFCFCF;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-top: 10upx;

						.t1 {
							font-size: 30upx;
							color: #FF631B;
						}

						.t2 {
							width: 0;
							flex-grow: 1;
							font-size: 30upx;
							color: #85898F;
							text-decoration: line-through;
							padding-left: 40upx;
						}
					}
				}
			}
		}

		.card2 {
			.title {
				width: 100%;
				border-bottom: 1px solid #EAEBEC;
				padding-bottom: 20upx;
			}

			.cover2 {
				width: 69upx !important;
				height: 69upx !important;
				border-radius: 50%;
			}

			.name {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin-bottom: 10upx !important;
			}

			.right {
				font-size: 26upx;
				color: #292929;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-end;

				.count {
					color: #FF631B;
					margin-bottom: 6upx;
				}
			}
		}
	}
</style>
