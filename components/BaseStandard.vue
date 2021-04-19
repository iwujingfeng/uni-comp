<template>
	<view class="standard">
		<view class="title-wrap">
			<image class="cover" src="../static/test/cover-test1.png"></image>
			<view class="title">
				<text>¥ 328.00</text>
				<text class="des">已选：大众版少儿读物</text>
			</view>
		</view>
		<view class="options">
			<view class="title">
				<text>颜色分类</text>
			</view>
			<view class="search-list">
				<view class="item" :class="{'on':index === current}" :style="{background:itemBg,color:itemColor,borderRadius:borderRadius}"
				 v-for="(item,index) in list" :key="index" @click="$emit('click-item',item,index)">
					<text>{{item}}</text>
				</view>
			</view>
		</view>
		<view class="count-input">
			<text>商品数量</text>
			<BaseNumberBox></BaseNumberBox>
		</view>
		<!-- 添加button -->
		<slot name="button"></slot>
		<view class="close" @click="$emit('close')">
			<image src="../static/close-icon.png"></image>
		</view>
	</view>
</template>

<script>
	import BaseNumberBox from '@/components/BaseNumberBox.vue'
	/**
	 * @description 规格弹窗内容 配合uni-popup使用
	 */
	export default {
		components:{
			BaseNumberBox
		},
		props: {
			current: {
				type: Number,
				default: 0
			},
			title: {
				type: String,
				default: '标题'
			},
			icon: String,
			showIcon: {
				type: Boolean,
				default: false
			},
			list: {
				type: Array,
				required: true,
				default: () => []
			},
			itemBg: {
				type: String,
				default: '#eeeeee'
			},
			itemColor: {
				type: String,
				default: '#999999'
			},
			borderRadius: {
				type: String,
				default: '30rpx'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.standard {
		width: 100%;
		background-color: #ffffff;
		position: relative;

		.title-wrap {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			border-bottom: 1px solid #e5e5e5;
			padding: 30upx;
			padding-bottom: 40upx;
			box-sizing: border-box;

			.cover {
				width: 180upx;
				height: 180upx;
				margin-right: 30upx;
			}

			.title {
				width: 0;
				flex-grow: 1;
				font-size: 34upx;
				color: #f4421f;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				font-weight: bold;
				padding-top: 10upx;

				.des {
					font-size: 24upx;
					color: #999999;
					margin-top: 30upx;
					font-weight: normal;
				}
			}
		}

		.options {
			width: 100%;
			margin-top: 34upx;

			.title {
				font-size: 26upx;
				color: #333333;
				text-align: left;
				padding: 0 30upx;
				box-sizing: border-box;
			}

			.search-list {
				width: 100%;
				min-height: 50px;
				padding: 12px 18upx;
				box-sizing: border-box;
				display: flex;
				flex-wrap: wrap;

				.item {
					margin: 10upx;
					text-align: center;
					padding: 14upx 20upx;
					border: 1px solid #eeeeee !important;
					font-size: 24upx;
				}

				.on {
					background-color: #fff9e2 !important;
					border: 1px solid #ffcc4d !important;
				}
			}
		}
    .count-input {
			width: 100%;
			padding: 0 30upx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 30upx;
			margin-bottom: 50upx;
			text {
				font-size: 26upx;
				color: #333333;
			}
		}
		.close {
			position: absolute;
			top: 0;
			right: 0;
			z-index: 100;
			padding: 30upx;
			image {
				width: 32upx;
				height: 32upx;
			}
		}
	}
</style>
