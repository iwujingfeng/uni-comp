<template>
	<view class="message">
		<uni-nav-bar title="消息" right-text="全部已读" :statusBar="true" :border="false" background-color="#ffd101" @clickRight="handleAllRead"></uni-nav-bar>
		<view class="container">
			<BaseCeilItem v-for="item in mesageList" :icon-path="item.avatar" :title="item.name" :sub-title="item.msg" :time="item.time"
			 icon-width="84rpx" font-size="32rpx" :bold="true" :show-sub-title="true" :show-suffix="false" align-items="flex-start"
			 @click-item="toMessageDetail(item)">
				<template #sub-title-end>
					<!-- <BaseDot :count="item.count"></BaseDot> -->
					<BaseBadge :text="item.count" type="error" v-if="showBadge"></BaseBadge>
				</template>
			</BaseCeilItem>
		</view>
		<BaseBottomNavbar v-if="isShowTab"></BaseBottomNavbar>
	</view>
</template>

<script>
	/**
	 * @description 消息
	 */
	import BaseCeilItem from '@/components/BaseCeilItem.vue'
	// import BaseDot from '@/components/BaseDot.vue'
	import BaseBadge from '@/components/BaseBadge.vue'
	export default {
		components: {
			BaseCeilItem,
			// BaseDot,
			BaseBadge
		},
		data() {
			return {
				showBadge:true,
				mesageList: [{
					name: '汉斯教育',
					msg: '亲爱的顾客，感谢您购买的课程',
					avatar: require('../../static/test/avatar-test.png'),
					count: 9,
					time: '周三'
				}, {
					name: '英语家',
					msg: '亲爱的顾客，感谢您购买的课程',
					avatar: require('../../static/test/avatar-test.png'),
					count: 99,
					time: '周一'
				}, ]
			}
		},
		methods:{
			toMessageDetail(item) {
				this.$Router.push({path:'/message-detail',query:{name:item.name}})
			},
			handleAllRead() {
				console.log('处理全部已读')
				this.showBadge= false
			}
		}
	}
</script>

<style scoped lang="scss">
	/deep/ .uni-navbar__header-btns-right {
		width: 160upx;
	}
	.message {
		width: 100%;

		.container {
			width: 100%;
			padding-top: 40upx;
		}
	}
</style>
