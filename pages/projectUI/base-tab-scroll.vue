<template>
	<view class="tab-wrap">
		<BaseTab type="3" :tab-list="tabs" :tab-cur="currentTabIndex" tab-class="tab-item-default"
			select-class="tab-item-active" :bold="true" font-size="26rpx" color="#333333" active-color="#333333"
			active-font-size="30rpx" @change="tabChangeSub"></BaseTab>
	</view>
</template>

<script>
	import BaseTab from "@/components/BaseTab.vue";
	export default {
		components: {
			BaseTab
		},
		data() {
			return {
				tabs: [{
						ID: 1,
						Name: "机构商城",
					},
					{
						ID: 2,
						Name: "机构简介",
					},
					{
						ID: 3,
						Name: "机构动态",
					},
					{
						ID: 4,
						Name: "机构评价",
					},
					{
						ID: 5,
						Name: "其他",
					},
				],
				currentTabIndex: 0,
			}
		},
		methods: {
			tabChangeSub({
				index,
				ID,
				type
			}) {
				console.log(index);
				this.currentTabIndex = index;
			},
		}
	}
</script>

<style scoped lang="scss">
	/* tab添加底部border图片 */
	/deep/ .active-border {
		background-image: url(../../static/border-b-sort.png);
		background-position: center bottom;
		background-repeat: no-repeat;
		background-size: 40upx;
	}

	/deep/ .item-type3 {
		padding-bottom: 0;
	}

	/deep/ .item-type3 text {
		display: block;
		margin-bottom: 10upx;
	}

	/deep/ .wuc-tab-item {
		height: 76upx !important;
		line-height: 60upx !important;
	}

	.tab-wrap {
		padding-top: 20upx;
		background-color: #ffffff;
		box-shadow: 4upx 8upx 8upx #e5eaf1;
		position: fixed;
		top: 90upx;
		left: 0;
		right: 0;
		z-index: 100;
	}
</style>
