<template>
	<view class="banner">
		<image :src="img" mode="widthFix" :style="{borderRadius:borderRadius}"></image>
	</view>
</template>

<script>
	export default {
		props: {
			img: String,
			borderRadius: String
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.banner {
		width: 100%;

		image {
			width: 100%;
			height: auto;
		}
	}
</style>
