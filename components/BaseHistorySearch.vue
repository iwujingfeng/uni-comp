<template>
	<view class="search-hot">
		<view class="title">
			<image class="icon" :src="icon" mode="widthFix" v-if="showIcon"></image>
			<text>{{title}}</text>
		</view>
		<view class="search-list">
			<view class="item" :style="{background:itemBg,color:itemColor,borderRadius:borderRadius}" v-for="(item,index) in list"
			 :key="index" @click="$emit('click-item',item)">
				<text>{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
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
				default: '#555555'
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
	.search-hot {
		padding-bottom: 30upx;

		.title {
			font-size: 30upx;
			color: #000000;
			padding: 0 24upx;
			box-sizing: border-box;

			.icon {
				width: 23upx;
				height: auto;
				margin-right: 10upx;
			}
		}

		.search-list {
			width: 100%;
			min-height: 50px;
			padding: 12px;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;

			.item {
				margin: 10upx;
				text-align: center;
				padding: 10upx 20upx;
				box-sizing: border-box;
				font-size: 28upx;
			}
		}
	}
</style>
