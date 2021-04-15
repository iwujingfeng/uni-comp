<template>
	<view>
		<BaseTab type="3" :tab-list="tabs" :tab-cur="currentTabIndex" tab-class="tab-item-default"
			select-class="tab-item-active" :bold="true" :center="true" @change="tabChangeSub"></BaseTab>
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
				currentTabIndex: 0,
				tabs: [{
						ID: 1,
						Name: "猜你喜欢",
					},
					{
						ID: 2,
						Name: "今日特价",
					},
					{
						ID: 3,
						Name: "发现好店",
					},
				],
			}
		},
		methods: {
			tabChangeSub({
				index,
				ID,
				type
			}) {
				console.log(index, ID, type);
				this.currentTabIndex = index;
			},
		}
	}
</script>

<style>

</style>
