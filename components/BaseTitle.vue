<template>
	<view class="title-container">
		<image class="line" :style="{width:iconWidth}" :src="leftIcon" mode="widthFix"></image>
		<view class="title" :style="{margin:margin}">
			<image class="like" :src="icon" mode="widthFix" v-if="showIcon"></image>
			<text class="title" :class="{'bold':bold}" :style="{fontSize:fontSize,color:color}">
				<slot>{{title}}</slot>
			</text>
		</view>
		<image class="line" :style="{width:iconWidth}" :src="rightIcon" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		props: {
			leftIcon: {
				type: String,
				default: '@/static/line-l.png'
			},
			rightIcon: {
				type: String,
				default: '@/static/line-r.png'
			},
			icon: {
				type: String,
				default: '@/static/like.png'
			},
			showIcon: {
				type: Boolean,
				default: true
			},
			title: {
				type: String,
				default: '你可能还喜欢'
			},
			iconWidth: {
				type: String,
				default: '34rpx'
			},
			color: {
				type: String,
				default: '#f4a400'
			},
			fontSize: {
				type: String,
				default: '28rpx'
			},
			bold: {
				type: Boolean,
				default: false
			},
			margin: {
				type: String,
				default: '0 32rpx'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.title-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		.line {
			// width: 34upx;
			height: auto;
		}

		.title {
			display: flex;
			justify-content: center;
			align-items: center;

			.like {
				width: 38upx;
				height: auto;
				margin-right: 16upx;
			}

			.bold {
				font-weight: bold;
			}
		}
	}
</style>
