<template>
	<view class="business-info">
		<view class="container">
			<view class="item" v-for="item in 5" @click="$Router.push({name:'business-detail'})">
				<view class="main">
					<text class="title">课程评价是指根据一定的标准和课程系统信息以科学的方法检查课程的目标</text>
					<text class="state">2020-03-29</text>
				</view>
				<image class="icon" src="../../static/arrow-r.png" mode="widthFix"></image>
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
	.business-info {
		width: 100%;
		min-height: 100vh;
		background-color: #ffffff;

		.container {
			width: 100%;
			padding: 20upx 30upx;
			box-sizing: border-box;
		}

		.item {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #FFFFFF;
			border-radius: 12upx;
			padding: 20upx 0;
			box-sizing: border-box;
			margin-bottom: 20upx;
			border-bottom: 1px solid #E6E6E6;

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

			.count {
				color: #FF631B;
				font-size: 32upx;
			}
			.icon {
				width: 17upx;
				height: auto;
			}
		}
	}
</style>
