<template>
	<view>
		<BaseGridSwiper ref="QSGrids" mode="swiper" indicatorDots indicatorDotsHieght="20" col="3"
			@gridClick="onClickGridItem"></BaseGridSwiper>
	</view>
</template>

<script>
	import BaseGridSwiper from '@/components/base-grid-swiper/BaseGridSwiper.vue'
	export default {
		components:{
			BaseGridSwiper
		},
		data() {
			return {
				grids: [{
					ID: 1,
					img: require('@/static/menu/menu01.png'),
					text: '乐高'
				}, {
					ID: 2,
					img: require('@/static/menu/menu02.png'),
					text: '早教'
				}, {
					ID: 3,
					img: require('@/static/menu/menu03.png'),
					text: '编程'
				}, {
					ID: 1,
					img: require('@/static/menu/menu04.png'),
					text: '美术'
				}, {
					ID: 1,
					img: require('@/static/menu/menu05.png'),
					text: '舞蹈'
				}, {
					ID: 1,
					img: require('@/static/menu/menu06.png'),
					text: '科学实验'
				}, {
					img: require('@/static/menu/menu07.png'),
					text: '国学书院'
				}, {
					ID: 1,
					img: require('@/static/menu/menu08.png'),
					text: '儿童体验'
				}, {
					ID: 1,
					img: require('@/static/menu/menu09.png'),
					text: '幼小衔接'
				}, {
					ID: 1,
					img: require('@/static/menu/menu10.png'),
					text: '教育综合'
				}, {
					ID: 1,
					img: require('@/static/menu/menu11.png'),
					text: '语文'
				}, {
					ID: 1,
					img: require('@/static/menu/menu12.png'),
					text: '数学'
				}, {
					ID: 1,
					img: require('@/static/menu/menu13.png'),
					text: '英语'
				}, {
					ID: 1,
					img: require('@/static/menu/menu14.png'),
					text: '物理'
				}, {
					ID: 1,
					img: require('@/static/menu/menu15.png'),
					text: '化学'
				}, {
					ID: 1,
					img: require('@/static/menu/menu15.png'),
					text: '地理'
				}, {
					ID: 1,
					img: require('@/static/menu/menu15.png'),
					text: '设计'
				}, {
					ID: 1,
					img: require('@/static/menu/menu15.png'),
					text: '体育'
				}, ],
			}
		},
		onReady() {
			this.setGridData();
		},
		methods: {
			setGridData() {
				this.$refs.QSGrids.setData(this.grids)
			},
			onClickGridItem(count, index, ID) {
				// 拿到grid点击项的ID
				console.log('333', count, index, ID)
				this.$Router.push({
					name: 'school-list'
				})
			},
		}
	}
</script>

<style>

</style>
