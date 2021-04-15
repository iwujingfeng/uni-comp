<template>
	<view class="mini-sheet">
		<view class="item" v-for="(item,index) of list" :key="item.icon" @click="$emit('click-item',index)">
			<image class="icon" :src="item.icon" mode="widthFix"></image>
			<text class="text">{{item.text}}</text>
		</view>
		<view class="top"></view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => [{
					icon: require('@/static/kefu.png'),
					text: '客服'
				}, {
					icon: require('@/static/quan.png'),
					text: '卡券'
				}]
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.mini-sheet {
		width: 206rpx;
		background: rgba(0, 0, 0, .8);
		border-radius: 8upx;
		padding: 8upx 36upx;
		box-sizing: border-box;
		position: absolute;
		top: 80rpx;
		right: 30rpx;
		z-index: 100;

		.item {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 12upx 0;

			.icon {
				width: 42upx;
				height: auto;
			}

			.text {
				font-size: 30upx;
				color: #ffffff;
			}
		}

		.top {
			width: 0;
			height: 0;
			border-left: 10upx solid transparent;
			border-right: 10upx solid transparent;
			border-bottom: 10upx solid rgba(0, 0, 0, .8);
			// background: rgba(0, 0, 0, .8);
			// transform: rotate(45deg);
			position: absolute;
			top: -10upx;
			right: 20upx;
		}
	}
</style>
