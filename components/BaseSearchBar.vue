<template>
	<view class="search-bar">
		<view class="back" @click="$emit('back')">
			<image src="../static/back-icon.png" mode="widthFix"></image>
		</view>
		<view class="inpur-wrap" :style="{borderRadius:borderRadius}">
			<image :src="icon" mode="widthFix" v-if="showIcon"></image>
			<input type="text" value="" :placeholder="placeholder" placeholder-class="placeholder-class" :style="{fontSize:fontSize,color:color}" />
		</view>
		<view class="cancle" @click="$emit('search')">
			<text>搜索</text>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			icon: {
				type: String,
				required: true
			},
			showIcon: {
				type: Boolean,
				default: true
			},
			placeholder: {
				type: String,
				default: '请输入关键词'
			},
			fontSize: {
				type: String,
				default: '24rpx'
			},
			color: {
				type: String,
				default: '#333333'
			},
			borderRadius:{
				type: String,
				default: '40rpx'
			}
		},
		computed:{
			// 回头研究下 如果从父组件传递属性修改placeholder样式
			// placeholderClass() {
			// 	return `font-size:${this.fontSize};color:${this.color}`
			// }
		}
	}
</script>
<style scoped lang="scss">
	.search-bar {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
   .back {
		 padding: 0 30upx;
		 box-sizing: border-box;
		 image {
			 width: 24upx;
			 height: auto;
		 }
	 }
		.inpur-wrap {
			width: 100%;
			padding: 16upx 30upx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #ffffff;

			image {
				width: 27upx;
				height: auto;
				margin-right: 16upx;
			}

			input {
				width: 0;
				flex-grow: 1;
			}
		}

		.cancle {
			width: 130upx;
			color: #333333;
			font-size: 24upx;
			padding: 0 30upx;
			box-sizing: border-box;
		}
	}

	.placeholder-class {
		color: #333333;
		font-size: 24rpx;
	}
</style>
