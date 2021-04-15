<template>
	<view>
		<view class="add" @click="handleCouponSheetShow">
			<image src="../../static/add.png" mode="widthFix"></image>
		</view>
		<BaseMiniSheet v-if="showCouponSheet" @click-item="onClickCouponSheet"></BaseMiniSheet>
	</view>
</template>

<script>
	import BaseMiniSheet from '@/components/BaseMiniSheet.vue'
	export default {
		components: {
			BaseMiniSheet
		},
		data() {
			return {
				showCouponSheet: false,
			}
		},
		methods: {
			handleCouponSheetShow() {
				this.showCouponSheet = !this.showCouponSheet
			},
			onClickCouponSheet(index) {
				console.log('xxx')
				setTimeout(() => {
					uni.showToast({
						title: 'xxx',
						icon: 'none'
					})
				}, 1000)

				// if (index === 0) {
				// 	this.$Router.push({
				// 		name: 'customer-service'
				// 	})
				// }
				if (index === 1) {
					// this.$Router.push({
					// 	name: 'coupon-me'
					// })
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.add {
		width: 44upx;
		height: 44upx;
		margin-left: 20upx;

		image {
			width: 100%;
			height: auto;
		}
	}
</style>
