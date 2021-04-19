<template>
	<view>
		<view class="card">
			<view class="title">
				<text>优优王国机构—乐高课程</text>
			</view>
			<view class="content">
				<BaseTag text="2课时" size="small" :inverted="true"></BaseTag>
				<text>2020.11.21 15:36</text>
			</view>
			<view class="person">
				<view class="item">
					<image src="@/static/test/avatar-test.png"></image>
					<text class="text">刘悦</text>
					<BaseTag text="老师" size="small" :inverted="true"></BaseTag>
				</view>
				<view class="item">
					<image src="@/static/test/avatar-test.png"></image>
					<text class="text">洋洋</text>
					<BaseTag text="学生" size="small" :inverted="true"></BaseTag>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import BaseTag from "@/components/BaseTag.vue";
	export default {
		components: {
			BaseTag
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	/deep/.uni-tag {
	  margin-right: 12upx;
	  color: #fc4448;
	  border-color: #fc4448;
	}
	
	/deep/.person .uni-tag {
	  margin-right: 0;
	  color: #fc4448;
	  border-color: #fc4448;
	}
	
	/deep/.uni-tag .uni-tag--default {
	  color: #fc4448;
	  line-height: 36upx !important;
	}
	.card {
		width: 100%;
		background-color: #ffffff;
		border-radius: 12upx;
		padding: 35upx;
		box-sizing: border-box;
		margin-bottom: 30upx;

		.title {
			font-size: 30upx;
			color: #333333;
			margin-bottom: 24upx;
		}

		.content {
			width: 100%;
			display: flex;
			align-items: center;
			font-size: 24upx;
			color: #999999;
		}

		.person {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 56upx;

			.item {
				display: flex;
				align-items: center;
			}

			image {
				width: 60upx;
				height: 60upx;
			}

			.text {
				font-size: 26upx;
				color: #333333;
				margin-left: 16upx;
				margin-right: 10upx;
			}
		}
	}
</style>
