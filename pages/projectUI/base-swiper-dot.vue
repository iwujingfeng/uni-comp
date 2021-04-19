<template>
	<view>
		<BaseSwiperDot :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
			<BaseSwiper :list="swiperList" :show-dot="false" @change="onSwiperChange"></BaseSwiper>
		</BaseSwiperDot>
	</view>
</template>

<script>
	import BaseSwiper from '@/components/BaseSwiper.vue'
	import BaseSwiperDot from '@/components/BaseSwiperDot.vue'
	export default {
		components: {
			BaseSwiper,
			BaseSwiperDot
		},
		data() {
			return {
				current: 0,
				swiperList: [{
					id: 1,
					image: require('@/static/test/swiper-test.png'),
					title: '标题'
				}, {
					id: 2,
					image: require('@/static/test/swiper-test.png'),
					title: '标题'
				}],
				dotsStyles: {},
				mode: 'nav', // default dot round nav indexes
				// 自定义swiperDot
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
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
	/deep/.uni-swiper__dots-box {
		bottom: 0 !important;
		height: 30px;
		background: rgba(0, 0, 0, .3);
	}
</style>
