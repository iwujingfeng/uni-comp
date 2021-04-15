<template>
	<view>
		<!-- 返回图标 标题 下划线 -->
		<uni-nav-bar left-icon="arrowleft" title="排行榜" :statusBar="true" :fixed="true" @clickLeft="" @clickRight="" />
		<br>
		<!-- 左右显示文字 -->
		<uni-nav-bar left-icon="arrowleft" right-text="菜单" left-text="返回" title="标题" @clickLeft="back" />
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
