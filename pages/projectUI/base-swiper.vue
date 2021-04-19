<template>
	<view>
		<BaseSwiper :list="swiperList" ratio="0.36232" :show-dot="false":radius="true" @change="onSwiperChange"></BaseSwiper>
		<BaseSwiper :list="swiperList" ratio="0.36232"  @change="onSwiperChange"></BaseSwiper>
	</view>
</template>

<script>
	import BaseSwiper from '@/components/BaseSwiper.vue'
	export default {
		components: {
			BaseSwiper
		},
		data() {
			return {
				current: 0,
				swiperList: [{
					id: 1,
					image: require('@/static/test/banner-test.png'),
					title: '标题'
				}, {
					id: 2,
					image: require('@/static/test/banner-test.png'),
					title: '标题'
				}],
			}
		},
		methods: {
			onSwiperChange(current) {
				console.log(current)
				this.current = current
			},
		}
	}
</script>

<style scoped lang="scss">
	/deep/ .swiper {
		margin-top: 30upx;
		border-radius: 18upx;
		overflow: hidden;
	}
</style>
