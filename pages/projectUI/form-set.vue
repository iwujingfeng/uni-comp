<template>
	<view class="add-info bg-gray">
		<view class="container">
			<view class="address avatar-wrap">
				<text>头像</text>
				<image class="avatar" src="@/static/test/avatar-test.png" mode="widthFix"></image>
			</view>
			<view class="info-item">
				<text class="label">昵称</text>
				<input type="text" value="" placeholder="请输入昵称" placeholder-class="placeholder-class" />
			</view>
			<view class="info-item">
				<text class="label">联系方式</text>
				<input type="text" value="" placeholder="请输入联系方式" placeholder-class="placeholder-class" />
			</view>
			<view class="address" @click="$Router.push({name:'address-list'})">
				<text>收货地址</text>
				<image src="@/static/arrow-r.png" mode="widthFix"></image>
			</view>
			<view class="button-container">
				<BaseButton width="100%" height="102rpx" border-radius="10rpx" bg="#FB8E37">保存</BaseButton>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 添加资料
	 */
	import BaseInput from '@/components/BaseInput.vue'
	// import BaseRadioGroup from '@/components/BaseRadioGroup.vue'
	import BaseButton from '@/components/BaseButton.vue'
	export default {
		components: {
			BaseInput,
			// BaseRadioGroup,
			BaseButton
		},
		data() {
			return {
				radioList: [{
					value: '1',
					name: '男',
					checked: true
				}, {
					value: '2',
					name: '女',
					checked: false
				}]
			}
		}
	}
</script>

<style scoped lang="scss">
	/deep/.radio-group {
		margin: 30upx 0;
	}

	/deep/.radio-group label {
		font-size: 28upx;
		color: #9B979B;
	}

	/deep/.radio-group radio {
		transform: scale(0.7);
	}

	.button-container {
		width: 100%;
		padding-top: 100upx;
	}

	.add-info {
		width: 100%;
		min-height: 100vh;

		.container {
			width: 100%;
			background-color: #ffffff;
			padding: 30upx;
			padding-top: 0;
			box-sizing: border-box;
			margin-top: 20upx;
		}

		.info-item {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			border-bottom: 1px solid #D8D8D8;
			margin-bottom: 36upx;

			.label {
				font-size: 28upx;
				color: #2F2F2F;
			}

			input {
				font-size: 26upx;
				color: #8D9497;
				margin: 36upx 0;
			}

			.placeholder-class {
				font-size: 26upx;
				color: #8D9497;
			}
		}

		.address {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 28upx;
			color: #2F2F2F;
			padding: 4upx 0;

			image {
				width: 17upx;
				height: auto;
			}

			.avatar {
				width: 80upx;
				height: auto;
			}
		}

		.avatar-wrap {
			margin-bottom: 30upx;
			padding: 20upx 0;
			border-bottom: 1px solid #D8D8D8;
		}
	}
</style>
