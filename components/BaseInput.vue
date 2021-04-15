<template>
	<view class="input-wrap" :class="hasBorderBottom ? 'border-bottom' : ''" :style="{padding:padding}">
		<image class="suffix" src="../static/search-icon.png" mode="widthFix" v-if="showSuffix"></image>
		<input type="text" value="" :style="{color:color,fontSize:fontSize}" :placeholder="placeholder" placeholder-class="placeholder-class"
		 @tap="$emit('search')" />
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: {
				type: String,
				required: true,
				default: '请填写您的真实姓名'
			},
			hasBorderBottom: {
				type: Boolean,
				default: true
			},
			showSuffix: {
				type: Boolean,
				default: true
			},
			padding:{
				type: String,
				default: '10rpx 16rpx'
			},
			fontSize:{
				type: String,
				default: '70rpx'
			},
			color:{
				type: String,
				default: '#333333'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.input-wrap {
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;
		background-color: #ffffff;
		border-radius: 12upx;
		box-sizing: border-box;

		.suffix {
			width: 29upx;
			height: auto;
			margin-right: 10upx;
		}

		input {
			width: 0;
			flex-grow: 1;
			// height: 70upx;
			// color: #333333;
			// font-size: 70upx;
		}
	}

	.border-bottom {
		border-bottom: 1px solid #eeeeee;
	}

	// .placeholder-class {
	// 	color: #333333;
	// 	font-size: 70upx;
	// }
</style>
