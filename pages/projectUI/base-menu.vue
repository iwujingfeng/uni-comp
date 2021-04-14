<template>
	<view>
		<!-- 可传入slot -->
		<BaseMenu :menu-list="menuList" item-width="20%" item-padding="20rpx 20rpx" icon-padding="10rpx 30rpx"
			:bold="true" :show-tag="false" @clickItem="onClickMenuItem($event)">
			<template #tag>
				<image class="menu-tag" src="../../static/jingxuan.png" mode="widthFix"></image>
			</template>
		</BaseMenu>
	</view>
</template>

<script>
	import BaseMenu from '@/components/BaseMenu.vue'
	export default {
		components: {
			BaseMenu
		},
		data() {
			return {
				menuList: [{
						icon: require('@/static/menu/menu1.png'),
						title: '扫一扫',
						route: ''
					},
					{
						icon: require('@/static/menu/menu2.png'),
						title: '身份码',
						route: 'identity-code'
					},
					{
						icon: require('@/static/menu/menu3.png'),
						title: '进商城',
						route: 'shop'
					},
					{
						icon: require('@/static/menu/menu4.png'),
						title: '在线课',
						route: ''
					},
					{
						icon: require('@/static/menu/menu5.png'),
						title: '看直播',
						route: ''
					},
					{
						icon: require('@/static/menu/menu5.png'),
						title: '看直播',
						route: ''
					}
				],
			}
		},
		methods: {
			onClickMenuItem(name) {
				console.log(name)
			}
		}
	}
</script>

<style>
	.menu-tag {
		width: 53upx;
		height: auto;
		position: absolute;
		top: 20upx;
		right: 20upx;
	}
</style>
