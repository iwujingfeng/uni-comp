<template>
	<view class="input-wrap" :class="hasBorderBottom ? 'border-bottom' : ''">
		<image class="suffix" src="../static/search-icon.png" mode="widthFix"></image>
		<input type="text" value="" :placeholder="placeholder" placeholder-class="placeholder-class" @tap="$emit('search')" />
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
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
		position: relative;
		background-color: #ffffff;
		border-radius: 12upx;
		padding: 10upx 16upx;
		box-sizing: border-box;

		.suffix {
			width: 29upx;
			height: auto;
			margin-right: 10upx;
		}

		input {
			width: 0;
			flex-grow: 1;
		}
	}

	.border-bottom {
		border-bottom: 1px solid #eeeeee;
	}
</style>
