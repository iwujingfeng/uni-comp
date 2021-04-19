<template>
	<view>
		<BaseTab type="5" :tab-list="tags" :tabCur="tabCurrentIndex" center active-color="#2A2A2A" color="#2A2A2A"
			font-size="26rpx" border-color="#EEC747" border-width="6rpx" :bold="true" active-font-size="28rpx"
			item-padding="0 20rpx" @change="onChabge"></BaseTab>
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
				tabCurrentIndex: 0,
				tags: [{
						ID: 1,
						Name: "使用说明",
					},
					{
						ID: 2,
						Name: "使用说明",
					},
					{
						ID: 3,
						Name: "使用说明",
					},
					{
						ID: 4,
						Name: "使用说明",
					},
					{
						ID: 5,
						Name: "使用说明",
					},
					{
						ID: 6,
						Name: "使用说明",
					},
				],
			}
		},
		methods: {
			onChabge({
				index
			}) {
				console.log(index);
				this.tabCurrentIndex = index;
			},
		}
	}
</script>

<style>

</style>
