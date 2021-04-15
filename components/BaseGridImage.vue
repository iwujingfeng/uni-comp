<template>
	<view class="grid">
		<view :class="['item' + index,col == 3 ? 'grid-item-3' : 'grid-item-4',(index-1)%3 ===0 ? 'margin':'']" v-for="(item, index) in gridList"
		 :key="index" @click="gridClick(item, index)">
			<image class="cover" :src="item.imgUrl" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 带有间隙的grid布局
	 * 中间间隙的计算方法 (index-1)%3 ===0 如果符合这个结果 就是中间的元素
	 */
	export default {
		name: 'zy-grid',
		props: {
			col: { // 每行显示格子数，支持每行3个或4个(默认为3)
				type: Number,
				value: 3
			},
			showTip: { // 格子菜单的数字角标(默认显示)
				type: Boolean,
				value: true
			},
			gridList: {
				type: Array,
				value: []
			}
		},

		methods: {
			gridClick(item, index) { //格子菜单点击事件
				console.log(item);
				console.log(index);
			}
		}
	}
</script>

<style lang="less" scoped>
	.grid {
		width: 100%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;

		.margin {
			margin: 0 10upx;
		}

		.grid-item-3,
		.grid-item-4 {
			box-sizing: border-box;
			width: 32%;
			text-align: center;
			position: relative;

			image.cover {
				width: 100%;
				height: auto;
				border-radius: 6upx;
			}

			view {
				font-size: 28upx;
				margin-top: 16upx;
				color: rgba(0, 0, 0, .53);
			}
		}

		.grid-item-4 {
			width: 25%;
		}
	}
</style>
