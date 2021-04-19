<template>
	<view class="grid-container">
		<BaseGridImage :grid-list=gridList :show-tip="true" :col="3"></BaseGridImage>
	</view>
</template>

<script>
	import BaseGridImage from '@/components/BaseGridImage.vue'
	export default {
		components: {
			BaseGridImage
		},
		data() {
			return {
				gridList: [ //格子数据列表
					{
						imgUrl: '../../static/test/grid-test.png',
					},
					{
						imgUrl: '../../static/test/grid-test.png',
					},
					{
						imgUrl: '../../static/test/grid-test.png',
					},
					{
						imgUrl: '../../static/test/grid-test.png',
					},
					{
						imgUrl: '../../static/test/grid-test.png',
					},
					{
						imgUrl: '../../static/test/grid-test.png',
					},
					{
						imgUrl: '../../static/test/grid-test.png',
					},
					{
						imgUrl: '../../static/test/grid-test.png',
					},
					{
						imgUrl: '../../static/test/grid-test.png',
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.grid-container {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;
	}
</style>
