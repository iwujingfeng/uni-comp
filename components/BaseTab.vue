<template>
	<scroll-view class="tab-scroll" :class="tabClass" :style="tabStyle" scroll-with-animation scroll-x :scroll-left="scrollLeft">
		<!-- type1：右侧有边线 -->
		<template v-if="type==1">
			<view class="tab" :class="{'tab-wrap-center':center}">
				<view class="wuc-tab-item" :style="{height:height,lineHeight:height,padding:itemPadding}" :class="{ 'border-right' :index < tabList.length}"
				 v-for="(item, index) in tabList" :key="index" :id="item.ID" @tap="tabSelect(index,item.ID,item.Type)">
					<view class="item" :class="{'active-border':index === tabCur,'active-bold':bold}" :style="{fontSize:index === tabCur ? activeFontSize :fontSize,color:index === tabCur ? activeColor : color}">
						{{ item.Name }}
					</view>
				</view>
			</view>
		</template>
		<!-- type2：激活后有圆角边框-->
		<template v-if="type==2">
			<view class="tab">
				<view class="wuc-tab-item item-border" :style="{height:height,lineHeight:height,padding:itemPadding}" :class="{'active-radius':index === tabCur,'active-bold':index === tabCur && bold}"
				 v-for="(item, index) in tabList" :key="index" :id="item.ID" @tap="tabSelect(index,item.ID,item.Type)">
					<view :style="{fontSize:index === tabCur ? activeFontSize :fontSize,color:index === tabCur ? activeColor : color}">{{ item.Name }}</view>
					<text class="text-sub" v-if="showCount">({{ item.Des }})</text>
				</view>
			</view>
		</template>
		<!-- type2：底部有border-->
		<template v-if="type==4">
			<view class="tab">
				<view class="wuc-tab-item item-border" :style="{height:height,lineHeight:height,padding:itemPadding}" :class="{'active-radius':index === tabCur,'active-bold':index === tabCur && bold}"
				 v-for="(item, index) in tabList" :key="index" :id="item.ID" @tap="tabSelect(index,item.ID,item.Type)">
					<view :style="{fontSize:index === tabCur ? activeFontSize :fontSize,color:index === tabCur ? activeColor : color}">{{ item.Name }}</view>
					<text class="text-sub">({{ item.Des }})</text>
				</view>
			</view>
		</template>
		<!-- type3:底部图片形式的border -->
		<template v-if="type==3">
			<view class="tab" :class="{'tab-wrap-center':center}">
				<view class="wuc-tab-item" :style="{height:height,lineHeight:height,padding:itemPadding}" :class="{ 'border-right' :index < tabList.length}"
				 v-for="(item, index) in tabList" :key="index" :id="item.ID" @tap="tabSelect(index,item.ID,item.Type)">
					<!-- .active-border会在父组件通过深度选择器传递 -->
					<view class="item item-type3" :class="{'active-border':index === tabCur,'active-bold':index === tabCur && bold}"
					 :style="{fontSize:index === tabCur ? activeFontSize :fontSize,color:index === tabCur ? activeColor : color}">
						<!-- background: url(../static/border-bottom.png) no-repeat center bottom -->
						<text class="text">{{ item.Name }}</text>
					</view>
				</view>
			</view>
		</template>
		<!-- 底部有border-bottom 宽度和item一样宽 tab-wrap-center需要要了-->
		<template v-if="type==5">
			<view class="tab" :class="{'tab-wrap-center':center}" :style="{justifyContent:justifyContent}">
				<view class="wuc-tab-item" :style="{padding:itemPadding}" v-for="(item, index) in tabList" :key="index" :id="item.ID"
				 @tap="tabSelect(index,item.ID,item.Type)">
					<!-- .active-border会在父组件通过深度选择器传递 -->
					<view class="item" :class="{'active-bold':index === tabCur && bold,'border-bottom':index === tabCur}" :style="{fontSize:index === tabCur ? activeFontSize :fontSize,color:index === tabCur ? activeColor : color,borderBottomColor:index === tabCur?borderColor:'',borderBottomWidth:index==tabCur?borderWidth:'',padding:textPadding}">
						<text class="text">{{ item.Name }}</text>
					</view>
				</view>
			</view>
		</template>
		<!-- 底部有border-bottom 宽度和item父容器一样宽 tab-wrap-center需要要了-->
		<template v-if="type==6">
			<view class="tab" :class="{'tab-wrap-center':center}" :style="{justifyContent:justifyContent}">
				<view class="wuc-tab-item" :class="{'border-bottom':index === tabCur}" :style="{padding:itemPadding,borderBottomColor:index === tabCur?borderColor:'',borderBottomWidth:index==tabCur?borderWidth:'',}"
				 v-for="(item, index) in tabList" :key="index" :id="item.ID" @tap="tabSelect(index,item.ID,item.Type)">
					<!-- .active-border会在父组件通过深度选择器传递 -->
					<view class="item" :class="{'active-bold':index === tabCur && bold}" :style="{fontSize:index === tabCur ? activeFontSize :fontSize,color:index === tabCur ? activeColor : color,padding:textPadding}">
						<text class="text">{{ item.Name }}</text>
					</view>
				</view>
			</view>
		</template>
	</scroll-view>
</template>
<script>
	export default {
		name: 'BaseTab',
		data() {
			return {
				// leftAlign: 'left-align',
				// centerAlign: 'center-align'
			};
		},
		props: {
			// 不同风格的tab 1：下划线 2：
			type: {
				type: String,
				default: '1'
			},
			// center 不需要了 扩展性太差
			center: {
				type: Boolean,
				default: false
			},
			justifyContent: {
				type: String,
				default: 'flex-start'
			},
			color: {
				type: String,
				default: '#999999'
			},
			fontSize: {
				type: String,
				default: '32rpx'
			},
			activeColor: {
				type: String,
				default: '#000000'
			},
			activeFontSize: {
				type: String,
				default: '36rpx'
			},
			bold: {
				type: Boolean,
				default: false
			},
			height: {
				type: String,
				default: '70rpx'
			},
			itemPadding: {
				type: String,
				default: '0 30rpx'
			},
			textPadding: {
				type: String,
				default: '0 0'
			},
			tabList: {
				type: Array,
				default () {
					return [{
						ID: 1,
						Name: '全部好物'
					}, {
						ID: 2,
						Name: '家用电器'
					}, {
						ID: 3,
						Name: '日用百货'
					}, {
						ID: 4,
						Name: '文体娱乐'
					}, ];
				}
			},
			tabCur: {
				type: Number,
				default () {
					return 0;
				}
			},
			tabClass: {
				type: String,
				default () {
					return '';
				}
			},
			tabStyle: {
				type: String,
				default () {
					return '';
				}
			},
			activeStyle: {
				type: Object,
				default: () => {}
			},
			borderStyle: String,
			// type5的属性
			borderColor: {
				type: String,
				default: '#FED200'
			},
			borderWidth: {
				type: String,
				default: '4rpx'
			},
			showCount: {
				type: Boolean,
				default: true
			},
			background:{
				tyepe:String,
				default:'#dab77e'
			}
		},
		methods: {
			tabSelect(index, ID, Type) {
				if (this.currentTab === index) return false;
				this.$emit('change', {
					index,
					ID,
					Type
				});
			}
		},
		computed: {
			scrollLeft() {
				return (this.tabCur - 1) * 60;
			}
		}
	};
</script>
<!-- 公共样式 -->
<style scoped lang="scss">

</style>
<!-- type1的样式 -->
<style scoped lang="scss">

</style>
<!-- type2的样式 -->
<style scoped lang="scss">
	.text-sub {
		font-size: 24upx;
		color: #333333;
	}
</style>
<!-- type4的样式 -->
<style scoped lang="scss">
	.text-sub {
		font-size: 24upx;
		color: #333333;
	}
</style>
<!-- type5的样式：与文字等宽border-bottom -->
<style scoped lang="scss">
	.border-bottom {
		border-bottom-style: solid;
		// border-bottom-color: #FED200;
	}
</style>
<!-- type3的样式 -->
<style lang="scss" scoped>
	.item-type3 {
		padding-bottom: 16upx;
	}

	.uni-navbar__header-container {
		overflow: scroll;
	}

	scroll-view,
	swiper {
		box-sizing: border-box;
	}

	.tab-scroll {
		white-space: nowrap;
	}

	.tab {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}



	.tab-wrap-center {
		justify-content: center;
	}

	.wuc-tab-item {
		display: inline-block;
		margin: 0 10upx;
		color: #333333;
		font-size: 32upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.border-right {
		// background: url(../static/border-r.png) no-repeat right center;
	}

	.tab-scroll.fixed {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 1024;
		box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
	}

	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.text-center {
		text-align: center;
	}

	.flex-sub {
		flex: 1;
	}

	.text-white {
		color: #ffffff;
	}

	.bg-white {
		background-color: #ffffff;
	}

	.bg-blue {
		background-color: #0081ff;
	}

	.text-orange {
		color: #f37b1d;
	}

	.text-xl {
		font-size: 36upx;
	}

	/* 将tab 居中对齐 */
	.uni-scroll-view-content>div {
		display: flex;
		justify-content: left;
	}

	.uni-navbar__header-btns-left {
		width: auto;
	}

	.item-border {
		height: 50upx;
		line-height: 50upx;
		border: 1px solid #e5e5e5;
		color: #999999;
		font-size: 28upx;
		border-radius: 30upx;
	}

	.active-radius {
		border: 1px solid #dab77e;
		background-color: #dab77e;
		color: #ffffff;
	}

	.active-bold {
		font-weight: bold;
	}
</style>
