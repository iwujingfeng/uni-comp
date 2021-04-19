<template>
	<view class="address-list bg-gray">
		<uni-nav-bar title="地址管理" :right-text="rightText" :statusBar="true" :border="false" background-color="#ffd101"
			@clickLeft="routerBack()" @clickRight="onClickRightButton">
			<block slot="left">
				<image src="@/static/back-icon.png" mode="widthFix" style="width: 24upx;"></image>
			</block>
		</uni-nav-bar>
		<view class="list">
			<checkbox-group @change="checkboxChange">
				<label class="label" v-for="item in items" :key="item.value" @click="toAddressEdit">
					<BaseAddressItem icon-path="../../static/address.png" icon-width="69rpx" title="张咩咩" font-size="26rpx"
						color="#333333" sub-title="内蒙古呼和浩特新城区中山东路99号
				新世纪广场2层" suffix-path="../../static/arrow-r.png" suffix-width="15rpx" :show-suffix="!isEditState"></BaseAddressItem>
					<view class="checkbox" v-if="isEditState">
						<checkbox :value="item.value" :checked="item.checked" />
					</view>
				</label>
			</checkbox-group>
		</view>

		<view class="button-container">
			<BaseButton width="100%" height="100rpx" :gradient="true" direction="h" border-radius="0"
				v-if="isEditState">删除收货地址</BaseButton>
			<BaseButton width="100%" height="100rpx" :gradient="true" direction="h" border-radius="0" v-else
				@click-button="$Router.push({name:'address-edit'})">新增收货地址</BaseButton>
		</view>
	</view>
</template>

<script>
	import BaseAddressItem from '@/components/BaseAddressItem.vue'
	import BaseButton from '@/components/BaseButton.vue'
	export default {
		components: {
			BaseAddressItem,
			BaseButton
		},
		data() {
			return {
				rightText: '删除', // 全选
				isEditState: false,
				items: [{
						value: 'USA',
						name: '美国'
					},
					{
						value: 'CHN',
						name: '中国',
						checked: 'true'
					}
				]
			}
		},
		methods: {
			checkboxChange: function(e) {
				var items = this.items,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			},
			// 删除或者全选
			onClickRightButton() {
				console.log(this.isEditState)
				this.rightText = this.isEditState ? '删除' : '取消'
				this.isEditState = !this.isEditState
				console.log('删除或者全选')
			},
			toAddressEdit() {
				if (!this.isEditState) {
					this.$Router.push({
						name: 'address-edit'
					})
				} else {
					console.log('多选地址')
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.address-list {
		width: 100%;
		height: 100vh;

		.list {
			width: 100%;
			padding: 30upx;
			box-sizing: border-box;
		}

		.label {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #ffffff;
			border-radius: 10upx;
			padding-right: 20upx;
			box-sizing: border-box;

			checkbox {
				transform: scale(0.6);
			}
		}

		.button-container {
			width: 100%;
			position: fixed;
			bottom: 0;
		}
	}
</style>
