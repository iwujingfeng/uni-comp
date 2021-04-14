<template>
	<view class="container">
		<view @click="showShadow" class="dropWrap">
			<image class="suffix" src="../static/location-city.png" mode="widthFix"></image>
			<text class="text">{{ list[current] }}</text>
			<image class="icon" src="../static/arrow-b.png" mode="widthFix"></image>
		</view>
		<slot></slot>
		<view class="dropdown">
			<view :class="showIf ? 'dropdown-mask' : 'undropdown-mask'" @click="hideShadow"></view>
			<view class="ul" :style="'--i:'+list.length" :class="showIf?'show':''">
				<view class="li" v-for="(item, index) in list" :key="index" @click="handlerItem(index)">{{ item }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'dropdown',
		props: {
			list: {
				type: Array,
				default: () => [
					'全部',
					'获取',
					'使用',
				]
			},
		},
		data() {
			return {
				showIf: false,
				current: 0
			};
		},
		methods: {
			handlerItem(index) {
				this.showIf = false
				this.current = index
				this.$emit('click-item', this.list[index]);
			},
			hideShadow() {
				this.showIf = false;
			},
			showShadow() {
				this.showIf = true;
			}
		}
	};
</script>

<style scoped lang="scss">
	.container {
		position: relative;
	}

	.dropWrap {
		box-sizing: border-box;
		height: 40upx;
		line-height: 40upx;
		font-size: 28upx;
		font-weight: bold;
		border-radius: 30upx;
		color: #333333;
		display: flex;
		align-items: center;
		justify-content: space-between;
    .suffix {
			width: 29upx;
			height: auto;
			margin-right: 10upx;
		}
		.text {
			width: 114upx;
			margin-right: 10upx;
		}
		.icon {
			width: 20upx;
			height: auto;
		}
	}

	.dropdown {
		position: absolute;
		z-index: 100;
		right: 30upx;

		.ul {
			width: 200upx;
			position: relative;
			top: 30upx;
			z-index: 101;
			list-style: none;
			background-color: #fff;
			border-radius: 4rpx;
			padding-left: 0;
			box-shadow: 6rpx 6rpx 10rpx rgba(122, 122, 122, 0.2);
			transition: all 0.2s;
			height: 0;
			overflow: hidden;
			padding: 0 24upx;
			box-sizing: border-box;

			.li {
				box-sizing: border-box;
				color: #333333;
				height: 80upx;
				border-bottom: 1px solid #dedede;
				font-size: 26upx;
				line-height: 60upx; //与下面的高度保持一致
				padding-left: 16upx;
				text-align: center;
			}

			.li:last-child {
				border-bottom: none;
			}
		}

		.show {
			padding-top: 20upx;
			padding-bottom: 20upx;
			height: calc(var(--i) * 82upx); //与上面的高度保持一致
		}

		.dropdown-mask {
			top: 0;
			left: 0;
			position: fixed;
			width: 100vw;
			height: 100vh;
			z-index: 100;
			pointer-events: auto;
		}

		.undropdown-mask {
			pointer-events: none;
		}
	}
</style>
