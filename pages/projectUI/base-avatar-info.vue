<template>
	<view class="header">
		<image class="header-bg" src="@/static/member-header.png" mode="widthFix"></image>
		<view class="avatar-container">
			<image class="avatar" src="@/static/test/avatar-test.png"></image>
			<view class="main">
				<view class="name">
					<text>张咩咩</text>
					<image class="icon" src="@/static/dengji.png" mode="widthFix"></image>
					<view class="count">
						<text>V9</text>
					</view>
					<view class="set-wrap">
						<image class="set" src="@/static/set.png" mode="widthFix"
							@click="$Router.push({ name: 'setting' })"></image>
						<image class="ting" src="@/static/ting.png" mode="widthFix"
							@click="$Router.push({ name: 'customer-service' })"></image>
					</view>
				</view>
				<view class="badge-image">
					<view class="badge-item" v-for="(item, index) in badgeList" :key="index"
						@click="openPopup(item, index)">
						<image :src="item.active" mode="widthFix"></image>
						<!-- 勿删 添加条件判断即可 -->
						<!-- <image :src="item.default" mode="widthFix"></image> -->
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
	.header {
		width: 100%;

		.header-bg {
			width: 100%;
			height: auto;
			position: absolute;
			top: 0;
			left: 0;
		}

		.avatar-container {
			width: 100%;
			padding: 0 30upx;
			padding-top: 30upx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			margin-bottom: 34upx;

			.avatar {
				width: 115upx;
				height: 115upx;
				margin-right: 20upx;
			}

			.main {
				width: 0;
				flex-grow: 1;

				.name {
					width: 100%;
					font-size: 36upx;
					color: #1b1b1b;
					display: flex;
					align-items: center;
					margin-bottom: 26upx;
					position: relative;

					.icon {
						width: 33upx;
						height: auto;
						margin-left: 30upx;
						position: relative;
						z-index: 2;
					}

					.count {
						width: 90upx;
						padding: 4upx 10upx 2upx 0;
						text-align: center;
						background-color: #fef1b1;
						border-radius: 6upx;
						font-size: 26upx;
						color: #343536;
						position: relative;
						left: -20upx;
						z-index: 1;
						padding-left: 10upx;
					}

					.set-wrap {
						width: 0;
						flex-grow: 1;
						text-align: right;

						.set {
							width: 48upx;
							height: auto;
							margin-right: 30upx;
						}

						.ting {
							width: 40upx;
							height: auto;
						}
					}
				}

				.badge-image {
					width: 100%;
					display: flex;
					align-items: center;
					background-color: #fef1b1;
					border-top-left-radius: 30upx;
					border-bottom-left-radius: 30upx;
					padding: 10upx 20upx;

					.badge-item {
						width: 50upx;
						margin: 0 4upx;

						image {
							width: 100%;
							height: auto;
						}
					}
				}
			}
		}
	}
</style>
