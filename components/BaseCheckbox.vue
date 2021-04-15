<template>
	<view class="checkbox-wrap">
		<checkbox-group @change="$emit('checkbox-change')">
			<checkbox :value="value" :checked="checked" />
		</checkbox-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '1',
				checked: false
			};
		}
	}
</script>

<style scoped lang="scss">
	.checkbox-wrap {
		display: flex;
		align-items: center;
		padding: 24upx 0;
		display: flex;
		align-items: center;

		checkbox {
			transform: scale(0.5);
		}
	}
</style>
