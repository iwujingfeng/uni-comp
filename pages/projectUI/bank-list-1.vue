<template>
	<view>
		<view class="content">
			<bank-item bankCode="ABC" bankName="中国农业银行" cardCode="5106365987639" />
			<bank-item bankCode="ICBC" bankName="中国工商银行" cardCode="5106365986893" />
			<bank-item bankCode="CCB" bankName="中国建设银行" cardCode="5106365982687" />
			<bank-item bankCode="ZZBANK" bankName="郑州银行" cardCode="5106365983698" />
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		padding: 20rpx;
	}
</style>
