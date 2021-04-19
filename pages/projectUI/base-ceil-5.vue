<template>
	<view class="apply-shop bg-gray">
		<view class="container">
			<view class="item" @click="$Router.push({name:'school-name'})">
				<view class="main">
					<text class="title">新东方</text>
					<text class="state">呼和浩特市新城区金泰国际大厦</text>
				</view>
				<text class="count">5科目</text>
			</view>
			<view class="item" @click="$Router.push({name:'school-name'})">
				<view class="main">
					<text class="title">新东方</text>
					<text class="state">呼和浩特市新城区金泰国际大厦</text>
				</view>
				<text class="count">5科目</text>
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
	.apply-shop {
		width: 100%;
		min-height: 100vh;

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
			padding: 30upx;
			box-sizing: border-box;
			margin-bottom: 20upx;

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
		}
	}
</style>
