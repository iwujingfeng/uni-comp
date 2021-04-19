<template>
	<view class="address-add">
		<uni-nav-bar title="新增地址" :statusBar="true" :border="false" background-color="#ffd101" @clickLeft="routerBack()">
			<block slot="left">
				<image src="@/static/back-icon.png" mode="widthFix" style="width: 24upx;"></image>
			</block>
		</uni-nav-bar>
		<view class="address-form bg-gray">
			<view class="form-wrap">
				<BaseFormInput label="联系人" label-width="140rpx" placeholder="请输入联系人姓名"></BaseFormInput>
				<BaseFormInput label="联系电话" label-width="140rpx" placeholder="请输入联系人电话"></BaseFormInput>
				<view class="select-input" style="border-bottom: 1px solid #eeeeee;padding: 24rpx 0;">
					<BaseSelectInput label-width="140rpx" label="所载地区" :candidates="candidates" placeholder="点击选择所载地区" v-model="city"
					 emptyTips="这里啥都没有"></BaseSelectInput>
				</view>
				<BaseFormInput label="收货地址" label-width="140rpx" placeholder="请输入收货地址" :has-border-bottom="false"></BaseFormInput>
			</view>
			<view class="default">
				<text>设为默认地址</text>
				<BaseCheckbox></BaseCheckbox>
			</view>
			<view class="button-wrap">
				<BaseButton width="100%" :gradient="true" direction="h" @click-button="onClickButton">保存</BaseButton>
			</view>
		</view>
	</view>
</template>

<script>
	import BaseFormInput from '@/components/BaseFormInput.vue'
	import BaseButton from '@/components/BaseButton.vue'
	import BaseCheckbox from '@/components/BaseCheckbox.vue'
	import BaseSelectInput from '@/components/BaseSelectInput.vue'
	export default {
		components: {
			BaseFormInput,
			BaseButton,
			BaseCheckbox,
			BaseSelectInput
		},
		data() {
			return {
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				city: '',
				radioList: [{
					value: '1',
					name: '',
					checked: true
				}]
			}
		},
		methods: {
			onClickButton() {
				console.log('点击了button')
				this.$Router.back()
			}
		}
	}
</script>

<style scoped lang="scss">
	.address-add {
		width: 100%;
		min-height: 100vh;

		.address-form {
			padding: 0 30upx;
			box-sizing: border-box;
			padding-top: 50upx;
		}

		.form-wrap {
			width: 100%;
			padding: 0 30upx;
			box-sizing: border-box;
			background-color: #ffffff;
			border-radius: 12upx;
			margin-bottom: 50upx;
		}

		.default {
			width: 100%;
			background-color: #ffffff;
			border-radius: 16upx;
			margin-top: 26upx;
			padding-left: 30upx;
			box-sizing: border-box;
			color: #666666;
			font-size: 26upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.button-wrap {
			margin-top: 70upx;
		}
	}
</style>
