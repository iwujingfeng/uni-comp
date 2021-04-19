<template>
	<view>
		<view class="date-wrap">
			<view class="date-input left" @click="selectDatePicker">
				<text>请选择开始日期</text>
				<image class="arrow" src="@/static/arrow-bold-b.png" mode="widthFix"></image>
			</view>
			<view class="date-input" @click="selectDatePicker">
				<text>请选择结束日期</text>
				<image class="arrow" src="@/static/arrow-bold-t.png" mode="widthFix"></image>
			</view>
		</view>

		<!-- 日期选择器 -->
		<BaseDatePicker ref='date-time' datestype="date" :datestring='dateString' @change='dateTimeChange'>
		</BaseDatePicker>
	</view>
</template>

<script>
	import BaseDatePicker from '@/components/base-date-picker/BaseDatePicker.vue'
	export default {
		components: {
			BaseDatePicker
		},
		data() {
			return {
				dateString: '',
			}
		},
		methods: {
			selectDatePicker() {
				this.$refs['date-time'].show();
			},
			dateTimeChange(value) {
				this.dateString = value
			},
		}
	}
</script>

<style scoped lang="scss">
	.date-wrap {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.date-input {
			flex: 1;
			border: 1px solid #E2E2E2;
			border-radius: 4upx;
			background-color: #ffffff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 24upx;
			color: #363636;
			padding: 20upx 24upx;
			box-sizing: border-box;

			.arrow {
				width: 21upx;
				height: auto;
			}
		}

		.left {
			margin-right: 24upx;
		}
	}
</style>
