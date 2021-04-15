<template>
	<view class="ceil-item" :class="border?'ceil-border':''" :style="{alignItems:alignItems,padding:padding}" @tap="$emit('click-item')">
		<template v-if="layoutType=='normal'">
			<image class="icon-path" :src="iconPath" mode="widthFix" :style="{width:iconWidth,paddingLeft:paddingLeft}" v-if="showIcon"></image>
			<view class="middle">
				<view class="title-wrap">
					<text class="title" :style="{fontSize:fontSize,color:titleColor}">{{title}}</text>
					<text class="title-end">18447852036</text>
				</view>
				<view class="sub-title-wrap">
					<view class="tag" v-if="showTag">
						<text>默认</text>
					</view>
					<text class="sub-title">{{subTitle}}</text>
				</view>
				<!-- 自定义sub-title -->
				<slot name="sub-title"></slot>
			</view>
			<image class="arrow" :style="{width:suffixWidth}" :src="suffixPath" mode="widthFix" v-if="showSuffix"></image>
			<slot name="suffix"></slot>
		</template>
		<template v-if="layoutType=='column'">
			<image class="icon-path" :src="iconPath" mode="widthFix" :style="{width:iconWidth,paddingLeft:paddingLeft}" v-if="showIcon"></image>
			<view class="middle">
				<view class="content-wrap">
					<view class="item"><text class="title">武川立农村镇银行营业部</text>
						<image class="tel" src="" mode="widthFix"></image>
					</view>
					<view class="item"><text class="sub-title">网点类型：总行</text></view>
					<view class="item"><text class="sub-title">网点地址：武川立农村镇银行营业部</text>
						<image class="location" src="" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<image class="arrow" :style="{width:suffixWidth}" :src="suffixPath" mode="widthFix" v-if="showSuffix"></image>
			<slot name="suffix"></slot>
		</template>
	</view>
</template>

<script>
	export default {
		props: {
			border: {
				type: Boolean,
				default: false
			},
			iconPath: {
				type: String,
				default: ''
			},
			iconWidth: {
				type: String,
				default: '57rpx'
			},
			showIcon: {
				type: Boolean,
				default: true
			},
			title: {
				type: String,
				default: '标题'
			},
			subTitle: {
				type: String,
				default: 'x1'
			},
			showSuffix: {
				type: Boolean,
				default: true
			},
			fontSize: {
				type: String,
				default: '26upx'
			},
			titleColor: {
				type: String,
				default: '#333333'
			},
			paddingLeft: {
				type: String,
				default: '0'
			},
			showTag:{
				type: Boolean,
				default: false
			},
			suffixPath: {
				type: String,
				default: ''
			},
			suffixWidth: {
				type: String,
				default: '12rpx'
			},
			showSubTitle: {
				type: Boolean,
				default: false
			},
			alignItems: {
				type: String,
				default: 'center'
			},
			padding: {
				type: String,
				default: '30rpx 30rpx'
			},
			layoutType: {
				type: String,
				default: 'normal' // column 多列布局
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.ceil-item {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		background-color: #ffffff;
		border-radius: 10upx;
		margin-bottom: 24upx;
		box-sizing: border-box;

		.icon-path {
			height: auto;
			margin-right: 20upx;
			position: relative;
			top: -16upx;
		}

		.middle {
			width: 0;
			flex-grow: 1;
			text-align: left;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;

			.title-wrap {
				width: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;

				.title {
					margin-right: 40upx;
				}

				.title-end {
					font-size: 26upx;
					color: #999999;
				}
			}

			.sub-title-wrap {
				width: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;

				.tag {
					font-size: 24upx;
					color: #ff8400;
					background-color: #fff9e2;
					border: 1px solid #ff8400;
					padding: 0 10upx;
					border-radius: 10upx;
					margin-right: 14upx;
				}

				.sub-title {
					font-size: 26upx;
					color: #999999;
				}
			}

			// 类型二
			.content-wrap {
				width: 100%;

				.item {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.tel {
						width: 26upx;
						height: auto;
					}

					.location {
						width: 34upx;
						height: auto;
					}

					.title {
						font-size: 32upx;
						color: #333333;
						width: 0;
						flex-grow: 1;
						margin-right: 48rpx;
						border-right: 1px solid #eeeeee;
					}

					.sub-title {
						font-size: 26upx;
						color: #777777;
						margin-top: 10upx;
						width: 0;
						flex-grow: 1;
						margin-right: 48rpx;
					}
				}
			}
		}

		.sub-title {
			font-size: 26upx;
			color: #777777;
			margin-top: 12upx;
		}

		.suffix {
			height: auto;
			margin-right: 30upx;
		}
	}

	.ceil-border {
		border-bottom: 1px solid #eeeeee;
	}
</style>
