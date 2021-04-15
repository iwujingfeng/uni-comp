<template>
	<view class="button">
		<button type="default" hover-class="hover"  :style="{borderRadius:borderRadius,width:width,height:height,lineHeight:height,fontSize:fontSize,color:color,background:!plain?bg:'',border:border}"
		 :class="[gradient? 'linear-gradient-' + direction : disabled ? 'disable-color' :'',{'bold':bold}]" :disabled="disabled" @click="$emit('click-button')">
			<slot>新增收货地址</slot>
		</button>
	</view>
</template>

<script>
	/**
	 * @description button组件
	 */
	export default {
		props: {
			// 没有背景色
			plain:{
				type: Boolean,
				default: false // 传true的时候直接添加属性plain即可 不需要:plain="true"
			},
			bold:{
				type: Boolean,
				default: false
			},
			borderRadius: {
				type: String,
				default: '60rpx'
			},
			width: {
				type: String,
				default: '130upx'
			},
			height: {
				type: String,
				default: '84upx'
			},
			fontSize: {
				type: String,
				default: '32rpx'
			},
			bg: {
				type: String,
				default: '#fcb200'
			},
			color: {
				type: String,
				default: '#ffffff'
			},
			gradient: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			direction: {
				type: String,
				default: 'v' // v 纵向渐变 h 横向渐变
			},
			border:{
				type: String,
				default: ''
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	// /deep/base-button {
	// 	width: 100%;
	// }

	.button {
		// width: 100%;

		button {
			outline: none;
			border: none;
			padding: 0;
		}

		// 去掉黑边
		button::after {
			border: none;
		}

		.linear-gradient-v {
			background: linear-gradient(to bottom, #ffb700, #f4a400) !important;
		}

		.linear-gradient-h {
			background: linear-gradient(to right, #ff7800, #fe4200) !important;
		}

		.disable-color {
			background: linear-gradient(to bottom, #e4e4e4, #bababa) !important;
			color: #666666 !important;
		}

		// 增加默认点击态
		.hover {
			opacity: 0.9;
		}
		
		.bold {
			font-weight: bold;
		}
	}
</style>
