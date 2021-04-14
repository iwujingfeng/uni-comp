<template>
	<view class="uni-container">
		<view v-if="!hasLeftWin" class="uni-hello-text">
			<text class="hello-text">来源于项目时间的组件封装</text>
		</view>
		<!-- 折叠面板 -->
		<view class="uni-panel" v-for="(item, index) in list" :key="item.id">
			<view class="uni-panel-h" :class="item.open || activeOpen === item.id ? 'uni-panel-h-on' : ''"
				@click="triggerCollapse(index, item.id)">
				<text class="uni-panel-text">{{ item.name }}</text>
				<text class="uni-panel-icon uni-icon" :class="
            item.open || activeOpen === item.id ? 'uni-panel-icon-on' : ''
          ">{{ item.pages ? "&#xe581;" : "&#xe470;" }}</text>
			</view>
			<view class="uni-panel-c" v-if="item.open || activeOpen === item.id">
				<view :class="{
            'left-win-active':
              leftWinActive === (item2.url ? item2.url.split('/')[3] : item2) &&
              hasLeftWin,
          }" class="uni-navigate-item" v-for="(item2, key) in item.pages" :key="key"
					@click="goDetailPage(item.id, item2.key)">
					<text class="uni-navigate-text">{{
            item2.name ? item2.name : item2
          }}</text>
					<text class="uni-navigate-icon uni-icon">&#xe470;</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	// TODO 修复Android v3 加载过慢问题
	// #ifdef APP-PLUS
	var domModule = weex.requireModule("dom");
	domModule.addRule("fontFace", {
		fontFamily: "uniicons",
		src: "url('/static/uni.ttf')",
	});
	// #endif
	import {
		mapState,
		mapMutations
	} from "vuex";
	export default {
		data() {
			return {
				// 折叠面板数据
				list: [{
					// 分类菜单
					id: "menu",
					name: "视图容器",
					open: false,
					pages: [{
						name: '宫格可滑动菜单',
						key: 'base-grid-swiper'
					}, {
						name: '宫格不可滑动菜单——基本菜单',
						key: 'base-menu'
					}, ],
				}, {
					// 下拉
					id: "dropDown",
					name: "下拉菜单",
					open: false,
					pages: [{
						name: '城市下拉选择',
						key: 'city-drop-down'
					}, ],
				}, {
					// 搜索框
					id: "search",
					name: "搜索框",
					open: false,
					pages: [{
						name: '简单搜索框',
						key: 'base-search-input'
					}, ],
				}, ],
			};
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: "/pages/about/about",
			});
		},
		// #ifndef APP-NVUE
		computed: {
			...mapState({
				hasLeftWin: (state) => !state.noMatchLeftWindow,
				leftWinActive: (state) => state.leftWinActive.split("/")[3],
				activeOpen: (state) => state.activeOpen,
			}),
		},
		// #endif

		// #ifdef H5
		// watch: {
		// 	$route: {
		// 		immediate: true,
		// 		handler(newRoute) {
		// 			if (newRoute.matched.length) {
		// 				this.setLeftWinActive(newRoute.path);
		// 				let path = newRoute.path.split("/")[3];
		// 				for (const item of this.list) {
		// 					if (Array.isArray(item.pages)) {
		// 						for (const page of item.pages) {
		// 							if (page === path) {
		// 								this.setActiveOpen(item.id);
		// 							}
		// 							if (page.url && page.url === newRoute.path) {
		// 								this.setActiveOpen(item.id);
		// 							}
		// 						}
		// 					}
		// 				}
		// 			}
		// 		},
		// 	},
		// },
		// #endif
		methods: {
			...mapMutations([
				"setMenu",
				"setMatchLeftWindow",
				"setLeftWinActive",
				"setActiveOpen",
			]),
			triggerCollapse(e, id) {
				if (!this.list[e].pages) {
					this.goDetailPage("", this.list[e].url);
					return;
				}
				// #ifdef APP-NVUE
				for (var i = 0; i < this.list.length; ++i) {
					if (e === i) {
						this.list[i].open = !this.list[e].open;
					} else {
						this.list[i].open = false;
					}
				}
				// #endif
				// #ifndef APP-NVUE
				if (id === this.activeOpen) {
					id = "";
				}
				this.setActiveOpen(id);

				// #endif
			},
			// 跳转组件容器
			goDetailPage(panel, key) {
				if (typeof key === "string") {
					const url = `/pages/projectUI/${key}`
					console.log(url)
					if (this.hasLeftWin) {
						uni.reLaunch({
							url: url,
						});
					} else {
						uni.navigateTo({
							url: url,
						});
					}
				} else {
					if (this.hasLeftWin) {
						uni.reLaunch({
							url: e.url,
						});
					} else {
						uni.navigateTo({
							url: e.url,
						});
					}
				}
			},
		},
	};
</script>

<style>
	@import "../../../common/uni-nvue.css";
</style>
