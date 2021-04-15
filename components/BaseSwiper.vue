<template>
	<swiper class="swiper" :style="{height:swiperHeight + 'px'}" :indicator-dots="showDot" :autoplay="autoplay" :interval="interval"
	 :duration="duration" @change="$emit('change',$event.detail.current)" >
		<swiper-item v-for="item of list" :key="item.id" @click="$emit('swiperclick',item)">
			<image class="image" :src="item.image" mode="widthFix"></image>
			<text class="title" v-if="item.title">{{item.title}}</text>
		</swiper-item>
	</swiper>
</template>
<!-- 视频区 -->
		<!-- <video id="myVideo" class="my-video" :style="{height:swiperHeight + 'px'}" :src="videoPath" @error="videoErrorCallback"
		show-center-play-btn :poster="videoCover" show-fullscreen-btn="false" show-mute-btn :enable-play-gesture="true" vslide-gesture></video> -->
<script>
	/**
	 * @description 轮播图
	 * 自定义dot需要使用BaseSwiperDot包裹BaseSwiper组件
	 */
	export default {
		props: {
			autoplay: {
				type: Boolean,
				default: true
			},
			showVideo: {
				type: Boolean,
				default: false
			},
			videoCover: {
				type: String,
				default: ''
			},
			list: {
				type: Array,
				required: true,
				default: [{
					id: 1,
					image: '',
					title: '一',
					link: '',
					type:0
				}, {
					id: 2,
					image: '',
					title: '二',
					link: '',
					type:0
				}]
			},
			showDot: {
				type: Boolean,
				default: true
			},
			ratio: {
				type: Number | String,
				default: 0.45333333
			}
		},
		data() {
			return {
				videoPath: '',
				interval: 2000,
				duration: 500,
				swiperHeight: 0
			}
		},
		mounted() {
			// 根据图片动态计算出swiper容器的高度
			this.$nextTick(() => {
				const query = uni.createSelectorQuery().in(this);
				query.select('.image').boundingClientRect((rect) => {
					this.swiperHeight = rect.width * this.ratio
				}).exec();
			})
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style scoped lang="scss">
	/deep/uni-swiper-item {
		position: relative;
	}

	.swiper {
		width: 100%;
		position: relative;

		.image {
			width: 100%;
			height: auto;
		}

		.title {
			position: absolute;
		}
	}
</style>
