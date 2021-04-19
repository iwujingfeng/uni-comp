<template>
	<view class="business-detail">
		<view class="detail-container">
			<view class="title">
				<text>赠书！炎炎夏日读好书！在这炎热夏天你想读什么书？快来定一本吧！ 炎炎夏日读好书！</text>
			</view>
			<view class="time">
				<text>发布时间：2020-03-29</text>
			</view>
			<view class="detail">
				<text>“阅读力是一个人的终生的学习力和创造力，如果通过阅读掌握生存技能和自我保护知识，强化生命意识，会让孩子终身受益。图书是人类生存智慧的载体，更是无时不在的良师。”</text>
				<text>随着大暑的结束，夏日时节更加热气腾腾。一块西瓜、一声蝉鸣、一把蒲扇、一本好书，难道不是度过炎炎夏日的最完美装备吗？</text>
				<text>在这炎热夏天你想读什么书？快来定一本吧！</text>
				<text>本期，中国教育新闻网联合机械工业出版社为大家送上五本经典书籍，一起来沉浸书海，享受读书带给我们的喜悦吧！</text>
				<text>关注“中国教育新闻网”微信公众号的朋友，在本条微信文末“写留言”位置分享您的“2019年夏日阅读计划”，并留言您想要哪本书，就有机会从以下图书中免费领取您感兴趣的1本书。（赠书规则附后）</text>
				<view class="image">
					<image src="@/static/test/swiper-test.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<BaseBottomNavbar v-if="isShowTab"></BaseBottomNavbar>
	</view>
</template>

<script>
	export default {
		methods: {
			handleShare() {
				console.log('分享')
			}
		}
	}
</script>

<style scoped lang="scss">
	.right-icon {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.business-detail {
		width: 100%;
		min-height: 100vh;

		.detail-container {
			width: 100%;
			padding: 30upx;
			box-sizing: border-box;
			padding-bottom: 150upx;

			.title {
				width: 100%;
				text-align: left;
				font-size: 36upx;
				color: #333333;
				line-height: 1.6;
			}

			.time {
				width: 100%;
				text-align: left;
				font-size: 24upx;
				color: #999999;
				border-bottom: 1px solid #E6E6E6;
				padding: 20upx 0;
			}

			.detail {
				font-size: 26upx;
				color: #333333;
				line-height: 2;
				padding-top: 50upx;

				text {
					display: block;
					margin-bottom: 20upx;
					text-indent: 52upx;
				}

				.image {
					width: 100%;
					text-align: center;

					image {
						width: 380upx;
						height: auto;
						margin-top: 20upx;
					}
				}
			}
		}

	}
</style>
