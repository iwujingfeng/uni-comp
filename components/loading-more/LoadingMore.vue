<template>
	<view class="loading-box">
		<!-- loading2 -->
		<view class="lds-dual-ring" v-if="type==1"></view>
		<!-- loading3 -->
		<view class="lds-facebook" v-if="type==2">
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading4 -->
		<view class="lds-heart" v-if="type==3">
			<view></view>
		</view>
		<!-- loading5 -->
		<view class="lds-ring" v-if="type==4">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading6 -->
		<view class="lds-roller" v-if="type==5">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading7 -->
		<view class="lds-default" v-if="type==6">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading8 -->
		<view class="lds-ellipsis" v-if="type==7">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading9 -->
		<view class="lds-grid" v-if="type==8">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading10 -->
		<view class="lds-hourglass" v-if="type==9"></view>
		<!-- loading11 -->
		<view class="lds-ripple" v-if="type==10">
			<view></view>
			<view></view>
		</view>
		<!-- loading12 -->
		<view class="lds-spinner" v-if="type==11">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading13 -->
		<view class="spinner13" v-if="type==12"></view>
		<!-- loadign14 -->
		<view class="spinner14" v-if="type==13">
			<view class="double-bounce1"></view>
			<view class="double-bounce2"></view>
		</view>
		<!-- loading15 -->
		<view class="spinner15" v-if="type==14">
			<view class="rect1"></view>
			<view class="rect2"></view>
			<view class="rect3"></view>
			<view class="rect4"></view>
			<view class="rect5"></view>
		</view>
		<!-- loading16 -->
		<view class="spinner16" v-if="type==15">
			<view class="cube1"></view>
			<view class="cube2"></view>
		</view>
		<!-- loading17 -->
		<view class="spinner17" v-if="type==16"></view>
		<!-- loading18 -->
		<view class="spinner18" v-if="type==17">
			<view class="dot1"></view>
			<view class="dot2"></view>
		</view>
		<!-- loading19 -->
		<view class="spinner19" v-if="type==18">
			<view class="bounce1"></view>
			<view class="bounce2"></view>
			<view class="bounce3"></view>
		</view>
		<!-- loading20 -->
		<view class="sk-circle" v-if="type==19">
			<view class="sk-circle1 sk-child"></view>
			<view class="sk-circle2 sk-child"></view>
			<view class="sk-circle3 sk-child"></view>
			<view class="sk-circle4 sk-child"></view>
			<view class="sk-circle5 sk-child"></view>
			<view class="sk-circle6 sk-child"></view>
			<view class="sk-circle7 sk-child"></view>
			<view class="sk-circle8 sk-child"></view>
			<view class="sk-circle9 sk-child"></view>
			<view class="sk-circle10 sk-child"></view>
			<view class="sk-circle11 sk-child"></view>
			<view class="sk-circle12 sk-child"></view>
		</view>
		<!-- loading21 -->
		<view class="sk-cube-grid" v-if="type==20">
			<view class="sk-cube sk-cube1"></view>
			<view class="sk-cube sk-cube2"></view>
			<view class="sk-cube sk-cube3"></view>
			<view class="sk-cube sk-cube4"></view>
			<view class="sk-cube sk-cube5"></view>
			<view class="sk-cube sk-cube6"></view>
			<view class="sk-cube sk-cube7"></view>
			<view class="sk-cube sk-cube8"></view>
			<view class="sk-cube sk-cube9"></view>
		</view>
		<!-- loading22 -->
		<view class="sk-folding-cube" v-if="type==21">
			<view class="sk-cube1 sk-cube"></view>
			<view class="sk-cube2 sk-cube"></view>
			<view class="sk-cube4 sk-cube"></view>
			<view class="sk-cube3 sk-cube"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			type: Number | String
		},
		data() {
			return {};
		},
		methods: {},
		created() {}
	};
</script>

<style lang="scss">
	.loading-box {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.loading-box>view {
		margin: 15upx 20upx;
	}

	@import './loading2';
	@import './loading3';
	@import './loading4';
	@import './loading5';
	@import './loading6';
	@import './loading7';
	@import './loading8';
	@import './loading9';
	@import './loading10';
	@import './loading11';
	@import './loading12';
	@import './loading13';
	@import './loading14';
	@import './loading15';
	@import './loading16';
	@import './loading17';
	@import './loading18';
	@import './loading19';
	@import './loading20';
	@import './loading21';
	@import './loading22';
</style>
