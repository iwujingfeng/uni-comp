<template>
	<view class="location">
		<BaseDropDown :list="listData">
			<template #default>
				<view class="tq">
					<text>晴</text>
					<text>13C</text>
				</view>
			</template>
		</BaseDropDown>
	</view>
</template>

<script>
	import BaseDropDown from '@/components/BaseDropDown.vue'
	export default {
		components: {
			BaseDropDown
		},
		data() {
			return {
				listData: ['呼和浩特',
					'北京',
					'上海',
				],
			}
		}
	}
</script>

<style scoped lang="scss">
	.location {
		width: 200upx;
		margin-right: 24upx;

		.tq {
			font-size: 24upx;
			color: #333333;
			text-align: left;
			padding-left: 48upx;
		}
	}
</style>
