<template>
	<view class="record bg-gray">
		<view class="container">
			<view class="item-wrap" v-for="item in 2">
				<view class="title-wrap">
					<text class="t">新东方</text>
					<text class="d">2020.10.2 23:12</text>
				</view>
				<view class="item">
					<view class="main">
						<text class="title">国字书法</text>
						<text class="state">课程</text>
					</view>
					<view class="main center">
						<text class="title">刘玥</text>
						<text class="state">绑定儿童</text>
					</view>
					<view class="main end">
						<text class="title">50课时</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 申请店铺
	 */
</script>

<style scoped lang="scss">
	.record {
		width: 100%;
		min-height: 100vh;

		.container {
			width: 100%;
			padding: 20upx 30upx;
			box-sizing: border-box;
		}

		.item-wrap {
			width: 100%;
			background-color: #FFFFFF;
			border-radius: 12upx;
			padding: 30upx;
			box-sizing: border-box;
			margin-bottom: 20upx;

			.title-wrap {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				border-bottom: 1px solid #F0F0F0;
				padding-bottom: 20upx;

				.t {
					font-size: 32upx;
					color: #2B2B2B;
				}

				.d {
					font-size: 24upx;
					color: #2B2B2B;
				}
			}

			.item {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 20upx;


				.main {
					width: 0;
					flex-grow: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;

					.title {
						color: #2B2B2B;
						font-size: 28upx;
						margin-bottom: 20upx;
					}

					.state {
						font-size: 24upx;
						color: #CFCFCF;
					}
				}

				.center {
					align-items: center;
				}

				.end {
					align-items: flex-end;

					.title {
						margin-bottom: 0;
					}
				}

				.count {
					color: #FF631B;
					font-size: 32upx;
				}
			}
		}
	}
</style>
