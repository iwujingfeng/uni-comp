<template>
	<view class="course-comment bg-gray padding-bottom">
		<view class="container">
			<view class="card">
				<text class="title">新东方</text>
				<view class="item border-bottom" @click="$Router.push({name:'course-comment-sub'})">
					<image class="cover" src="../../static/test/cover-test1.png"></image>
					<view class="main">
						<text class="name">书法</text>
						<view class="comment">
							<image class="icon" src="../../static/comment.png" mode="widthFix"></image>
							<text>22</text>
						</view>
					</view>
					<BaseBadge text="45" type="error" size="small"></BaseBadge>
				</view>
				<view class="item" @click="$Router.push({name:'course-comment-sub'})">
					<image class="cover" src="../../static/test/cover-test1.png"></image>
					<view class="main">
						<text class="name">书法</text>
						<view class="comment">
							<image class="icon" src="../../static/comment.png" mode="widthFix"></image>
							<text>22</text>
						</view>
					</view>
					<BaseBadge text="45" type="error" size="small"></BaseBadge>
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
	export default {
		components: {
			BaseBadge,
			BaseTag
		}
	}
</script>

<style scoped lang="scss">
	/deep/.uni-tag {
		margin-left: 18upx;
		color: #fc4448;
		border-color: #fc4448;
	}

	/deep/.uni-tag .uni-tag--default {
		color: #fc4448;
		line-height: 36upx !important;
	}

	.course-comment {
		width: 100%;
		min-height: 100vh;

		.container {
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
			padding: 30upx 24upx 0 24upx;
			box-sizing: border-box;
			margin-bottom: 16upx;

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
					width: 100upx;
					height: 100upx;
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

					.name {
						font-size: 28upx;
						color: #2B2B2B;
						margin-bottom: 26upx;
					}

					.comment {
						font-size: 24upx;
						color: #C1C1C1;
						display: flex;
						justify-content: flex-start;
						align-items: center;

						.icon {
							width: 30upx;
							height: auto;
							margin-right: 26upx;
						}
					}
				}
			}

			.border-bottom {
				border-bottom: 1px solid #EAEBEC;
			}
		}
	}
</style>
