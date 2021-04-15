<template>
	<view class="button-group">
		<button type="default" hover-class="hover" :class="[index===0?'border-left':'border-right']" v-for="(item,index) in buttonData" :style="{height:height,lineHeight:height,background:item.background}" @click="$emit('click-button',index)">{{item.text}}</button>
	</view>
</template>

<script>
	/**
	 * @description 商品购买按钮组
	 */
	export default {
		props: {
			buttonData: {
				type: Array,
				required: true,
				default: () => [] // text background
			},
			height:{
				type:String,
				default: '84upx'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.button-group {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		button {
			margin: 0;
			border-radius: 0;
			border: none;
			outline: none;
			font-size: 28upx;
			color: #ffffff;
			flex: 1;
		}
		button::after {
			border: 1px solid transparent;
		}
		.border-left {
			border-top-left-radius: 60upx;
			border-bottom-left-radius: 60upx;
		}
		.border-right {
			border-top-right-radius: 60upx;
			border-bottom-right-radius: 60upx;
		}
		// 增加默认点击态
		.hover {
			opacity: 0.9;
		}
	}
</style>
