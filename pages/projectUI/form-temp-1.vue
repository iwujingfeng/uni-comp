<template>
	<view class="apply bg-gray">
		<uni-nav-bar title="机构申请" :statusBar="true" :border="false" background-color="#ffd101"
			@clickLeft="routerBack()">
			<block slot="left">
				<image src="@/static/back-icon.png" mode="widthFix" style="width: 24upx"></image>
			</block>
		</uni-nav-bar>
		<view class="container">
			<!-- 第一部分 公司信息 -->
			<view class="section">
				<view class="title">
					<text>公司信息</text>
				</view>
				<view class="info-item">
					<text class="label">公司名称</text>
					<input type="text" value="" placeholder="请输入公司名称（和营业执照相同）" placeholder-class="placeholder-class" />
				</view>
				<view class="info-item">
					<text class="label">机构名称</text>
					<input type="text" value="" placeholder="请输入机构名称" placeholder-class="placeholder-class" />
				</view>
				<view class="info-item">
					<text class="label">机构区域</text>
					<view class="select">
						<input type="text" value="" placeholder="请选择公司所在机构区域" placeholder-class="placeholder-class"
							disabled />
						<image class="arrow" src="../../static/arrow-r.png" mode="widthFix" />
					</view>
				</view>
				<view class="info-item">
					<text class="label">详细地址</text>
					<input type="text" value="" placeholder="请输入详细地址" placeholder-class="placeholder-class" />
				</view>
				<view class="info-item upload border-none">
					<text class="label">上传营业执照</text>
					<image class="upload-image" src="@/static/yyzz.png" />
				</view>
			</view>
			<!-- 第二部分 个人信息 -->
			<view class="section">
				<view class="title">
					<text>个人信息</text>
				</view>
				<view class="info-item">
					<text class="label">姓名</text>
					<input type="text" value="" placeholder="请输入姓名" placeholder-class="placeholder-class" />
				</view>
				<view class="info-item">
					<text class="label">性别</text>
					<BaseRadioGroup :radioList="radioList"></BaseRadioGroup>
				</view>
				<view class="info-item">
					<text class="label">出生日期</text>
					<view class="select">
						<input type="text" value="" placeholder="请选择日期" placeholder-class="placeholder-class"
							disabled />
						<image class="arrow" src="../../static/arrow-r.png" mode="widthFix" />
					</view>
				</view>
				<view class="info-item">
					<text class="label">身份证号</text>
					<input type="text" value="" placeholder="请输入请输入身份证号" placeholder-class="placeholder-class" />
				</view>
				<view class="info-item">
					<text class="label">银行账号</text>
					<input type="text" value="" placeholder="请输入银行账号" placeholder-class="placeholder-class" />
				</view>

				<view class="info-item">
					<text class="label">开户行</text>
					<input type="text" value="" placeholder="请输入开户行" placeholder-class="placeholder-class" />
				</view>
				<view class="info-item upload border-none">
					<text class="label">上传身份证照</text>
					<view class="upload-card">
						<view class="card-item">
							<image class="card-image" src="@/static/sfz.png" />
							<text>正面</text>
						</view>
						<view class="card-item">
							<image class="card-image" src="@/static/sfz.png" />
							<text>反面</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 第三部分 注册信息 -->
			<view class="section">
				<view class="title">
					<text>注册信息</text>
				</view>
				<view class="info-item">
					<text class="label">用户名</text>
					<input type="text" value="" placeholder="请输入用户名（后台登录用）" placeholder-class="placeholder-class" />
				</view>
				<view class="info-item">
					<text class="label">密码</text>
					<input type="text" value="" placeholder="请输入密码" placeholder-class="placeholder-class" />
				</view>
				<view class="info-item upload border-none">
					<text class="label">确认密码</text>
					<input type="text" value="" placeholder="请输入密码" placeholder-class="placeholder-class" />
				</view>
			</view>
			<view class="button-container">
				<BaseButton width="100%" height="102rpx" border-radius="10rpx" bg="#FB8E37">保存并提交申请</BaseButton>
			</view>
		</view>
		<!-- 地区选择器 -->
		<UniPopup ref="addressPopup" type="bottom">

		</UniPopup>
		<!-- 时间选择器 -->
		<UniPopup ref="datePopup" type="bottom">
			<view class="modal">

			</view>
		</UniPopup>
	</view>
</template>

<script>
	/**
	 * @description 添加资料
	 */
	import BaseInput from "@/components/BaseInput.vue";
	import BaseRadioGroup from "@/components/BaseRadioGroup.vue";
	import BaseButton from "@/components/BaseButton.vue";
	import UniPopup from "@/components/uni-popup/uni-popup.vue";

	export default {
		components: {
			BaseInput,
			BaseRadioGroup,
			BaseButton,
			UniPopup,
		},
		data() {
			return {
				radioList: [{
						value: "1",
						name: "男",
						checked: true,
					},
					{
						value: "2",
						name: "女",
						checked: false,
					},
				],
			};
		},
	};
</script>

<style scoped lang="scss">
	/deep/.radio-group {
		margin: 30upx 0;
	}

	/deep/.radio-group label {
		font-size: 28upx;
		color: #9b979b;
	}

	/deep/.radio-group radio {
		transform: scale(0.7);
	}

	.button-container {
		width: 100%;
		padding: 0 30upx;
		padding-top: 100upx;
		box-sizing: border-box;
		margin-bottom: 74upx;
	}

	.modal {
		width: 100vw;
		background: #ffffff;
	}

	.apply {
		width: 100%;
		min-height: 100vh;

		.container {
			width: 100%;

			.section {
				width: 100%;
				margin-bottom: 30upx;
				background-color: #ffffff;
				padding: 30upx;
				box-sizing: border-box;

				.title {
					font-size: 34upx;
					color: #343536;
					font-weight: bold;
					margin-bottom: 40upx;
					margin-top: 24upx;
				}

				.info-item {
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					border-bottom: 1px solid #d8d8d8;
					margin-bottom: 36upx;

					.label {
						font-size: 26upx;
						color: #343536;
					}

					input {
						width: 100%;
						font-size: 32upx;
						color: #9b979b;
						margin: 30upx 0;
					}

					.placeholder-class {
						font-size: 28upx;
						color: #9b979b;
					}

					.select {
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;

						.arrow {
							width: 20upx;
							height: auto;
						}
					}

					.upload-image {
						width: 320upx;
						height: 200upx;
						border-radius: 10upx;
						margin-top: 30upx;
					}

					.upload-card {
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-top: 30upx;

						.card-item {
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							font-size: 24upx;
							color: #343536;

							.card-image {
								width: 320upx;
								height: 200upx;
								margin-bottom: 14upx;
							}
						}
					}
				}

				.upload {
					margin-bottom: 10upx;
				}
			}
		}
	}
</style>
