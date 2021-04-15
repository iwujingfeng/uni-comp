<template>
	<view class="bottom-nav">
		<!-- 用户端底部导航 -->
		<template v-if="type==='user'">
			<view class="item item-user" v-for="(item,index) in navTabListByUser" @click="toBottomNavbarPage(item,index)">
				<image class="er" mode="widthFix" :src="item.iconPathActive" v-if="currentNavIndex==index"></image>
				<image class="yi" mode="widthFix" :src="item.iconPath" v-else></image>
				<text :class="currentNavIndex===index?'on':''">{{item.title}}</text>
			</view>
		</template>

		<!-- 员工端底部导航 -->
		<template v-else>
			<view class="item" v-for="(item,index) in navTabListByStaff" @click="toBottomNavbarPage(item,index)">
				<image class="er" mode="widthFix" :src="item.iconPathActive" v-if="currentNavIndex==index"></image>
				<image class="yi" mode="widthFix" :src="item.iconPath" v-else></image>
				<text :class="currentNavIndex===index?'staff-on':''">{{item.title}}</text>
			</view>
		</template>
	</view>
</template>

<script>
	/**
	 * @author [wujingfeng]
	 * @description 公共底部导航
	 */
	export default {
		props: {
			// type: {
			// 	type: String,
			// 	default: 'user'
			// },
			// currentNavIndex: {
			// 	type: Number,
			// 	default: 0
			// }
		},
		computed: {
			type(){
				return this.$store.state.clientType
			},
			currentNavIndex() {
				return this.$store.state.bottomNavIndex
			}
		},
		data() {
			return {
				// currentNavIndex: 0,
				navTabListByUser: [{
						iconPath: require('@/static/tab/user-index.png'),
						iconPathActive: require('@/static/tab/user-index.png'),
						title: '首页',
						pagePath: '/pages/index',
						name: 'index'
					},
					{
						iconPath: require('@/static/tab/user-discover.png'),
						iconPathActive: require('@/static/tab/user-discover.png'),
						title: '发现',
						pagePath: '/pages/discover',
						name: 'discover'
					},
					{
						iconPath: require('@/static/tab/user-msg.png'),
						iconPathActive: require('@/static/tab/user-msg.png'),
						title: '消息',
						pagePath: '/pages/message',
						name: 'message'
					},
					{
						iconPath: require('@/static/tab/user-member.png'),
						iconPathActive: require('@/static/tab/user-member.png'),
						title: '我的',
						pagePath: '/pages/member',
						name: 'member'
					},
				],
				navTabListByStaff: [{
						iconPath: require('@/static/tab/staff-index.png'),
						iconPathActive: require('@/static/tab/staff-index-on.png'),
						title: '首页',
						pagePath: '/pages/staff/index',
						name: 'staff-index'
					},
					{
						iconPath: require('@/static/tab/staff-discover.png'),
						iconPathActive: require('@/static/tab/staff-discover-on.png'),
						title: '发现',
						pagePath: '/pages/staff/discover',
						name: 'staff-discover'
					},
					{
						iconPath: require('@/static/tab/staff-msg.png'),
						iconPathActive: require('@/static/tab/staff-msg-on.png'),
						title: '消息',
						pagePath: '/pages/staff/message',
						name: 'staff-message'
					},
					{
						iconPath: require('@/static/tab/staff-member.png'),
						iconPathActive: require('@/static/tab/staff-member-on.png'),
						title: '我的',
						pagePath: '/pages/staff/member',
						name: 'staff-member'
					},
					{
						iconPath: require('@/static/tab/staff-user.png'),
						iconPathActive: require('@/static/tab/staff-user-on.png'),
						title: '用户端',
						pagePath: '/pages/index',
						name: 'index'
					},
				],
			};
		},
		// created() {
		// 	this.currentNavIndex = uni.getStorageSync('currentNavIndex') || 0
		// },
		methods: {
			toBottomNavbarPage(item, index) {
				console.log(item.name, index)
				if (item.name === 'index') {
					this.$store.commit('updateBottomNavIndex', 0)
				} else {
					this.$store.commit('updateBottomNavIndex', index)
				}

				// this.currentNavIndex = index

				// uni.setStorageSync('currentNavIndex',this.currentNavIndex)
				this.$Router.push({
					name: item.name
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	.bottom-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 116upx;
		text-align: center;
		border-top: 1px solid #f7f7f7;
		background-color: #ffffff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 20;

		.item {
			width: 150upx;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: #333333;
			font-size: 22upx;
			position: relative;

			image {
				width: 50upx;
				height: 50upx;
				display: block;
				margin: 0 auto 10upx;
			}

			text {
				color: #333333;
				font-size: 28upx;
				display: block;

				&.on {
					color: #ffb600;
				}

				&.staff-on {
					color: #5678fe;
				}
			}
		}

		.item-user {
			width: 25%;
		}
	}
</style>
