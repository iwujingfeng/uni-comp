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
					// 容器组件：滚动容器 弹窗容器
					id: "container",
					name: "容器组件 Container",
					open: false,
					pages: [{
						name: '滚动容器',
						key: 'base-scroll-view'
					}, {
						name: '弹窗容器',
						key: 'base-popup'
					}, ],
				}, {
					// 标题栏
					id: "title",
					name: "标题栏 Title",
					open: false,
					pages: [{
						name: '常规标题',
						key: 'base-title-1'
					}, {
						name: '带图片的标题',
						key: 'base-title-2'
					}, {
						name: '带下划线的标题',
						key: 'base-title-3'
					}],
				}, {
					// 分类菜单
					id: "menu",
					name: "分类菜单 Menu",
					open: false,
					pages: [{
						name: '宫格可滑动菜单',
						key: 'base-grid-swiper'
					}, {
						name: '宫格不可滑动菜单——基本菜单',
						key: 'base-menu'
					}, {
						name: '九宫格菜单',
						key: 'base-menu-9'
					}, {
						name: '带有徽章的菜单',
						key: 'base-menu-b'
					}, {
						name: '侧边栏分类-单选',
						key: 'base-menu-side'
					}, {
						name: '侧边栏分类-多选',
						key: 'base-menu-side-m'
					}, ],
				}, {
					// 下拉
					id: "dropDown",
					name: "下拉菜单 Dropdown",
					open: false,
					pages: [{
						name: '城市下拉选择',
						key: 'city-drop-down'
					}, ],
				}, {
					// 选择器
					id: "picker",
					name: "选择器 Picker",
					open: false,
					pages: [{
						name: '时间选择器1',
						key: 'time-picker-1'
					}, {
						name: '地区选择器1',
						key: 'area-picker-1'
					}, ],
				}, {
					// 搜索框
					id: "search",
					name: "搜索框 Search",
					open: false,
					pages: [{
						name: '简单搜索框',
						key: 'base-search-input'
					}, ],
				}, {
					// 滑块视图
					id: "swiper",
					name: "滑块视图 Swiper",
					open: false,
					pages: [{
						name: '简单轮播图',
						key: 'base-swiper'
					}, {
						name: '轮播图带Dot',
						key: 'base-swiper-dot'
					}, ],
				}, {
					// 气泡弹出框
					id: "popover",
					name: "气泡弹出框 Popover",
					open: false,
					pages: [{
						name: '可操作的气泡列表',
						key: 'base-bubble'
					}, ],
				}, {
					// 弹出层
					id: "popup",
					name: "弹出层 Popup",
					open: false,
					pages: [{
						name: '弹出层容器遮罩 Popup',
						key: 'base-popup'
					}, {
						name: '对话框 Dialog',
						key: 'base-dialog'
					}, {
						name: '轻提示 Toast',
						key: 'base-toast'
					}, ],
				}, {
					// 标签页切换
					id: "tab",
					name: "标签页切换 Tab",
					open: false,
					pages: [{
						name: '居中对齐的Tab',
						key: 'base-tab-center'
					}, {
						name: '可滚动的Tab',
						key: 'base-tab-scroll'
					}, {
						name: '下划线三等分的Tab',
						key: 'base-tab-line'
					}, {
						name: '带背景色的Tab',
						key: 'base-tab-bg'
					}, {
						name: '下划线与文字等宽的Tab',
						key: 'base-tab-line-1'
					}, ],
				}, {
					// 顶部导航
					id: "navbar",
					name: "顶部导航(导航栏) NavBar",
					open: false,
					pages: [{
						name: '基础样式',
						key: 'base-navbar1'
					}, ],
				}, {
					// 底部导航
					id: "tabbar",
					name: "底部导航(标签栏) TabBar",
					open: false,
					pages: [{
						name: '图片上传一',
						key: 'base-image-upload'
					}, ],
				}, {
					// 侧边导航
					id: "sidebar",
					name: "侧边导航 SideBar",
					open: false,
					pages: [{
						name: '图片上传一',
						key: 'base-image-upload'
					}, ],
				}, {
					// 瀑布流
					id: "waterfall",
					name: "瀑布流 Waterfall",
					open: false,
					pages: [{
						name: '瀑布流1',
						key: 'waterfall-1'
					}, {
						name: '瀑布流2',
						key: 'waterfall-2'
					}, {
						name: '瀑布流3',
						key: 'waterfall-3'
					}, ],
				}, {
					// 缺省页
					id: "empty",
					name: "缺省页 Empty",
					open: false,
					pages: [{
						name: '缺省页实现一',
						key: 'base-empty'
					}, ],
				}, {
					// 结果页
					id: "result",
					name: "结果页 Result",
					open: false,
					pages: [{
						name: '404页面',
						key: 'base-404'
					}, ],
				}, {
					// 宫格
					id: "grid",
					name: "宫格 Grid",
					open: false,
					pages: [{
						name: '图片九宫格',
						key: 'base-image-grid'
					}, ],
				}, {
					// 信息栏
					id: "info",
					name: "信息栏 Info",
					open: false,
					pages: [{
						name: '通用头像信息栏',
						key: 'base-info'
					}, {
						name: '头像信息栏1',
						key: 'base-avatar-info'
					}, {
						name: '钱包信息栏1',
						key: 'base-money-info'
					}, {
						name: '钱包信息栏2',
						key: 'base-money-info2'
					}, ],
				}, {
					// 列表与列表项
					id: "list",
					name: "列表-列表项 List",
					open: false,
					pages: [{
						name: '列表项一',
						key: 'base-list'
					}, {
						name: '列表1',
						key: 'base-list1'
					}, {
						name: '列表2',
						key: 'base-list2'
					}, {
						name: '列表3',
						key: 'base-list3'
					}, {
						name: '列表4',
						key: 'base-list4'
					}, {
						name: '索引列表1',
						key: 'base-index'
					}, ],
				}, {
					// 单元格
					id: "ceil",
					name: "单元格 Ceil",
					open: false,
					pages: [{
						name: '单行两列',
						key: 'base-ceil'
					}, {
						name: '单行三列',
						key: 'base-ceil-3'
					}, {
						name: '多行多列1',
						key: 'base-ceil-m'
					}, {
						name: '多行多列2',
						key: 'base-ceil-m2'
					}, {
						name: '多行多列3',
						key: 'base-ceil-m3'
					}, {
						name: '两行两列',
						key: 'base-ceil-5'
					}, {
						name: '两行两列（带图标、按钮）',
						key: 'base-ceil-6'
					}, {
						name: '两行三列',
						key: 'base-ceil-4'
					}, {
						name: '使用Ceil组件',
						key: 'base-ceil-c'
					}, {
						name: '使用Ceil组件1',
						key: 'base-ceil-c1'
					}, {
						name: 'Ceil1',
						key: 'base-ceil-1'
					}, ],
				}, {
					// 上传
					id: "upload",
					name: "上传 Upload",
					open: false,
					pages: [{
						name: '图片上传一',
						key: 'base-image-upload'
					}, ],
				}, {
					// 表单输入
					id: "input",
					name: "表单输入 Input",
					open: false,
					pages: [{
						name: '单行输入',
						key: 'base-input'
					}, {
						name: '多行输入',
						key: 'base-textarea'
					}, {
						name: '设置页表单',
						key: 'form-set'
					}, {
						name: '表单模板1',
						key: 'form-temp-1'
					}, {
						name: '表单模板2',
						key: 'form-temp-2'
					}, {
						name: '充值表单',
						key: 'form-temp-3'
					}, ],
				}, {
					// 单选框
					id: "radio",
					name: "单选框 Radio",
					open: false,
					pages: [{
						name: '图片上传一',
						key: 'base-image-upload'
					}, ],
				}, {
					// 复选框
					id: "checkbox",
					name: "复选框 Checkbox",
					open: false,
					pages: [{
						name: '图片上传一',
						key: 'base-image-upload'
					}, ],
				}, {
					// 步骤条
					id: "step",
					name: "步骤条 Step",
					open: false,
					pages: [{
						name: '步骤条1',
						key: 'step-1'
					}, {
						name: '步骤条2-(生产力协会)',
						key: 'step-2'
					}, ],
				}, {
					// 时间线
					id: "timeline",
					name: "时间线 Timeline",
					open: false,
					pages: [{
						name: '图片上传一',
						key: 'base-image-upload'
					}, ],
				}, {
					// 按钮
					id: "button",
					name: "按钮 Button",
					open: false,
					pages: [{
						name: '按钮',
						key: 'base-button'
					}, {
						name: '按钮组',
						key: 'base-button-group'
					}],
				}, {
					// 加载状态
					id: "loading",
					name: "加载状态 Loading",
					open: false,
					pages: [{
						name: '图片上传一',
						key: 'base-image-upload'
					}, ],
				}, {
					// 骨架屏
					id: "skeleton",
					name: "骨架屏 Skeleton",
					open: false,
					pages: [{
						name: '图片上传一',
						key: 'base-image-upload'
					}, ],
				}, {
					// 进度条
					id: "progress",
					name: "进度条 Progress",
					open: false,
					pages: [{
						name: '图片上传一',
						key: 'base-image-upload'
					}, ],
				}, {
					// 环形进度条
					id: "circle",
					name: "环形进度条 Circle",
					open: false,
					pages: [{
						name: '图片上传一',
						key: 'base-image-upload'
					}, ],
				}, {
					// 通知栏
					id: "noticeBar",
					name: "通知栏 NoticeBar",
					open: false,
					pages: [{
						name: '图片上传一',
						key: 'base-image-upload'
					}, ],
				}, {
					// 地址
					id: "address",
					name: "地址 Address",
					open: false,
					pages: [{
						name: '地址选择',
						key: 'base-address-select'
					}, {
						name: '地址栏',
						key: 'base-address-bar1'
					}, {
						name: '地址列表（含删除）',
						key: 'address-list-1'
					}, {
						name: '新增地址1',
						key: 'address-add-1'
					}, ],
				}, {
					// 银行卡
					id: "bank",
					name: "银行卡 Bank",
					open: false,
					pages: [{
						name: '地址选择',
						key: 'base-address-select'
					}, ],
				}, {
					// 优惠券
					id: "coupon",
					name: "优惠券 Coupon",
					open: false,
					pages: [{
						name: '优惠券样式1',
						key: 'base-coupon-1'
					}, {
						name: '优惠券样式2',
						key: 'base-coupon-2'
					}, {
						name: '优惠券样式3',
						key: 'base-coupon-3'
					}, {
						name: '优惠券样式4',
						key: 'base-coupon-4'
					}, ],
				}, {
					// 业务组件
					id: "business",
					name: "业务组件 Business",
					open: false,
					pages: [{
						name: '商品规格 Sku',
						key: 'base-address-select'
					}, {
						name: '提交订单栏 SubmitBar',
						key: 'base-address-select'
					}, {
						name: '商品导航 GoodsAction',
						key: 'base-address-select'
					}, {
						name: '购物车 Cart',
						key: 'base-address-select'
					}, {
						name: '订单确认页1 Order-Submit',
						key: 'order-submit-1'
					}, {
						name: '订单列表页1 Order-List',
						key: 'order-list-1'
					}, {
						name: '订单详情页2 Order-Detail',
						key: 'order-detail-2'
					}, {
						name: '商品列表1',
						key: 'goos-list1'
					}, {
						name: '商品列表2',
						key: 'goos-list2'
					}, {
						name: '订单详情信息1',
						key: 'order-detail-1'
					}, {
						name: '购物车1',
						key: 'order-cart-1'
					}, {
						name: '商品详情页1',
						key: 'goods-detail-1'
					}, ],
				}, {
					// 模板页面
					id: "template",
					name: "模板页面 Template",
					open: false,
					pages: [{
						name: '新闻详情页1',
						key: 'detail-1'
					}, {
						name: '搜索页1',
						key: 'search-1'
					}, {
						name: '扫码界面1',
						key: 'scan-1'
					},{
						name: '消息列表1',
						key: 'message-list-1'
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
