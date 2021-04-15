<template>
	<view class="tag" :style="{background:background,justifyContent:justifyContent}">
		<template v-if="type==1">
			<view class="price">
				<view class="current-price" :style="{color:aColor,marginRight:space}">
					<text class="unit">￥</text>
					<text>919.80</text>
				</view>
				<text class="raw-price" :style="{color:bColor}">￥1000</text>
			</view>
			<view class="action">
				<text>抢</text>
			</view>
		</template>
		<template v-if="type==2">
			<view class="current-price" :style="{color:aColor,marginRight:space}">
				<text class="unit">￥</text>
				<text>919.80</text>
			</view>
			<text class="raw-price" :style="{color:bColor}">￥1000</text>
		</template>
	</view>
</template>

<script>
	export default {
		props: {
			type: Number | String,
			background: {
				type: String,
				default: '#ffe431'
			},
			aColor: {
				type: String,
				default: '#ffffff'
			},
			bColor: {
				type: String,
				default: '#ffc7b4'
			},
			justifyContent:{
				type: String,
				default: 'space-between'
			},
			space:{
				type:String,
				default:'12rpx'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.tag {
		width: 100%;
		height: 65upx;
		// margin-top: 10upx;
		display: flex;
		// justify-content: space-between;
		align-items: center;

		.price {
			background: url('../static/tag-bg.png');
			background-position: left center;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			width: 0;
			flex-grow: 1;
			height: 65upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 20upx;
			padding-left: 10upx;
			box-sizing: border-box;
		}
    .current-price {
    	font-size: 30upx;
    	display: flex;
    	align-items: flex-end;
			font-weight: bold;
    
    	.unit {
    		font-size: 24upx;
    	}
    }
    
    .raw-price {
    	font-size: 24upx;
    	text-decoration: line-through;
    }
		.action {
			width: 65upx;
			height: 65upx;
			display: flex;
			justify-content: center;
			align-items: center;

			text {
				font-size: 34upx;
				color: #682004;
			}
		}
	}
</style>
