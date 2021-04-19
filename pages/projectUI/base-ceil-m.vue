<template>
	<view>
		<view class="card">
			<view class="content">
				<view class="item">
					<text class="t">剩余50课时</text>
					<text>乐高课程名称</text>
				</view>
				<view class="item">
					<text class="t">张晓</text>
					<text>绑定儿童</text>
				</view>
			</view>
			<view class="image">
				<image src="@/static/arrow-blue-b.png" mode="widthFix"></image>
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
	.card {
		width: 100%;
		background-color: #ffffff;
		border-radius: 20upx;
		padding: 34upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.content {
			width: 0;
			flex-grow: 1;
			color: #999999;
			font-size: 24upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.t {
					color: #333333;
					font-size: 28upx;
					margin-bottom: 12upx;
				}
			}
		}

		.image {
			width: 27upx;
			margin-left: 84upx;

			image {
				width: 100%;
				height: auto;
			}
		}
	}
</style>
