<template>
	<view class="container">
		<view class="card card2">
			<view class="title">
				<text>新东方-国字书法</text>
			</view>

			<view class="item border-bottom" @click="$Router.push({ name: 'comment-detail' })">
				<image class="cover cover2" src="@/static/test/cover-test1.png"></image>
				<view class="main">
					<view class="name">
						<text>刘玥</text>
						<BaseTag text="2课时" size="small" :inverted="true"></BaseTag>
					</view>
					<view class="comment">
						<text>2020.10.18 23:29</text>
					</view>
				</view>
				<view class="right">
					<text class="count">享学币：+10</text>
					<text>Lily老师</text>
				</view>
			</view>
			<view class="item" @click="$Router.push({ name: 'comment-detail' })">
				<image class="cover cover2" src="@/static/test/cover-test1.png"></image>
				<view class="main">
					<view class="name">
						<text>刘玥</text>
						<BaseTag text="2课时" size="small" :inverted="true"></BaseTag>
					</view>

					<view class="comment">
						<text>2020.10.18 23:29</text>
					</view>
				</view>
				<view class="right">
					<text class="count">享学币：+10</text>
					<text>Lily老师</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 课堂评价 查看
	 */
	import BaseBadge from "@/components/BaseBadge.vue";
	import BaseTag from "@/components/BaseTag.vue";
	export default {
		components: {
			BaseBadge,
			BaseTag,
		},
	};
</script>

<style scoped lang="scss">
	/deep/.uni-tag {
		margin-left: 18upx;
		color: #fc4448;
		border-color: #fc4448;
		background-color: #ffffff;
	}

	/deep/.uni-tag .uni-tag--default {
		color: #fc4448;
		line-height: 36upx !important;
	}

	.container {
		padding: 24upx 30upx;
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
					color: #2b2b2b;
					margin-bottom: 26upx;
				}

				.comment {
					font-size: 24upx;
					color: #c1c1c1;
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
			border-bottom: 1px solid #eaebec;
		}
	}

	.card2 {
		.title {
			width: 100%;
			border-bottom: 1px solid #eaebec;
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
				color: #ff631b;
				margin-bottom: 6upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
			}
		}
	}
</style>
