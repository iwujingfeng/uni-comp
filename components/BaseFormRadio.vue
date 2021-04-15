<template>
	<view class="radio-wrap" :class="hasBorderBottom ? 'border-bottom' : ''">
		<view class="label">
			<text>{{label}}</text>
		</view>
		<view class="radio-out">
			<label class="radio">
				<radio class="#ffcc57" value="r1" checked="true" />先生</label>
			<label class="radio">
				<radio class="#ffcc57" value="r2" />女士</label>
		</view>

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
	.radio-wrap {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 40upx 0;

		.label {
			width: 90upx;
			font-size: 26upx;
			color: #333333;
			margin-right: 46upx;
		}
		.radio-out {
			width: 0;
			flex-grow: 1;
			display: flex;
			align-items: center;
			label {
				color: #333333;
				font-size: 26upx;
				display: flex;
				align-items: center;
				margin-right: 24upx;
			}
			
			radio {
				transform: scale(0.8);
			}
		}
	}

	.border-bottom {
		border-bottom: 1px solid #eeeeee;
	}
</style>
