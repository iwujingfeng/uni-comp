<template>
	<view class="input-wrap">
		<textarea :value="value" :placeholder="placeholder" placeholder-class="placeholder-class" :style="{minHeight:minHeight}"
		 auto-height @input="$emit('input', $event.target.value)" @focus="$emit('focus')" @blur="$emit('blur')"></textarea>
		<slot name="icon"></slot>
		<slot name="count"></slot>
	</view>
</template>

<script>
	export default {
		props: {
			value: String | Number,
			placeholder: {
				type: String,
				default: '快来写你的评论吧~'
			},
			minHeight: {
				type: String,
				default: '150rpx'
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
		background-color: #f7f9fc;
		border-radius: 10upx;
		padding: 12upx 20upx;
		box-sizing: border-box;
		position: relative;
	}

	textarea {
		font-size: 24upx;
		color: #999999;
	}

	.placeholder-class {
		font-size: 24upx;
		color: #999999;
	}
</style>
