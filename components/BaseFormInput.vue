<template>
	<view class="input-wrap" :class="hasBorderBottom ? 'border-bottom' : ''">
		<view class="label" :style="{width:labelWidth}">
			<text>{{label}}</text>
		</view>
		<input type="text" value="" :placeholder="placeholder" placeholder-class="placeholder-class" />
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				required: true,
				default: '姓名'
			},
			labelWidth:{
				type: String,
				default: '90rpx'
			},
			placeholder: {
				type: String,
				required: true,
				default: '请填写您的真实姓名'
			},
			hasBorderBottom: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.input-wrap {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 30upx 0;
		position: relative;

		.label {
			font-size: 26upx;
			color: #333333;
			margin-right: 46upx;
		}

		input {
			width: 0;
			flex-grow: 1;
		}
	}
	.border-bottom {
		border-bottom: 1px solid #eeeeee;
	}
	.placeholder-class {
		color: #333333;
		font-size: 26upx;
	}
</style>
