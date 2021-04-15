<template>
	<view class="waterfalls-box" :style="{ height: height + 'px' }">
		<!--  #ifdef  MP-WEIXIN -->
		<view v-for="(item, index) of list" class="waterfalls-list" :key="item[idKey]" :id="'waterfalls-list-id-' + item[idKey]"
		 :ref="'waterfalls-list-id-' + item[idKey]" :style="{
        '--offset': offset + 'px',
        '--cols': cols,
        top: allPositionArr[index].top || 0,
        left: allPositionArr[index].left || 0,
      }"
		 @click="$emit('click-item', item)">
			<view class="image-wrap">
				<image class="waterfalls-list-image" mode="widthFix" :class="{ single }" :style="imageStyle" :src="item[imageSrcKey] || ' '"
				 @load="imageLoadHandle(index)" @error="imageLoadHandle(index)" @click="$emit('image-click', item)" />
				<!-- 添加额外标签 -->
				<!-- <slot name="tag"></slot> -->
			</view>

			<slot name="slot{{index}}" />
		</view>
		<!--  #endif -->

		<!--  #ifndef  MP-WEIXIN -->
		<view v-for="(item, index) of list" class="waterfalls-list" :key="item[idKey]" :id="'waterfalls-list-id-' + item[idKey]"
		 :ref="'waterfalls-list-id-' + item[idKey]" :style="{
        '--offset': offset + 'px',
        '--cols': cols,
        ...listStyle,
        ...(allPositionArr[index] || {}),
      }"
		 @click="$emit('click-item', item)">
			<view class="image-wrap">
				<image class="waterfalls-list-image" :class="{ single }" mode="widthFix" :style="imageStyle" :src="item[imageSrcKey] || ' '"
				 @load="imageLoadHandle(index)" @error="imageLoadHandle(index)" @click="$emit('image-click', item)" />
				<!-- 添加额外标签 -->
				<!-- <slot name="tag"></slot> -->
				<template v-if="item.type==0 || item.type==1">
					<view class="tag-bg">
						<text>500人付款</text>
					</view>
					<view class="tag" v-if="item.sale">
						<image src="../static/tag-bg1.png" mode="widthFix"></image>
						<view class="tag-text">
							<text class="title">SALE</text>
							<text class="count">1.5</text>
						</view>
					</view>
					<view class="tag" v-if="item.reduce">
						<image src="../static/tag-bg1.png" mode="widthFix"></image>
						<view class="tag-text">
							<text class="title">立减</text>
							<view class="count">
								<text style="font-size: 24upx;">￥</text>
								<text class="count">20</text>
							</view>
						</view>
					</view>
				</template>
				<!-- <template v-if="item.type==1">
					<view class="tag-common">
						<text>360天最低价</text>
					</view>
				</template> -->

			</view>
			<slot v-bind="item" />
		</view>
		<!--  #endif -->
	</view>
</template>
<script>
	export default {
		props: {
			// index: {
			// 	type: Number,
			// 	default: 0
			// },
			list: {
				type: Array,
				required: true
			},
			// offset 间距，单位为 px
			offset: {
				type: Number,
				default: 10
			},
			// 列表渲染的 key 的键名，值必须唯一，默认为 id
			idKey: {
				type: String,
				default: "id"
			},
			// 图片 src 的键名
			imageSrcKey: {
				type: String,
				default: "image_url"
			},
			// 列数
			cols: {
				type: Number,
				default: 2,
				validator: (num) => num >= 2
			},
			imageStyle: {
				type: Object
			},

			// 是否是单独的渲染图片的样子，只控制图片圆角而已
			single: {
				type: Boolean,
				default: false
			},

			// #ifndef MP-WEIXIN
			listStyle: {
				type: Object
			},
			// #endif
		},
		data() {
			return {
				topArr: [], // left, right 多个时依次表示第几列的数据
				allPositionArr: [], // 保存所有的位置信息
				allHeightArr: [], // 保存所有的 height 信息
				height: 0, // 外层包裹高度
				oldNum: 0,
				num: 0,
			};
		},
		created() {
			this.refresh();
		},
		methods: {
			imageLoadHandle(index) {
				const id = "waterfalls-list-id-" + this.list[index][this.idKey],
					query = uni.createSelectorQuery().in(this);
				query
					.select("#" + id)
					.fields({
						size: true
					}, (data) => {
						this.num++;
						this.$set(this.allHeightArr, index, data.height);
						if (this.num === this.list.length) {
							for (let i = this.oldNum; i < this.num; i++) {
								const getTopArrMsg = () => {
									let arrtmp = [...this.topArr].sort((a, b) => a - b);
									//console.log('arrtmp',arrtmp)
									return {
										shorterIndex: this.topArr.indexOf(arrtmp[0]),
										shorterValue: arrtmp[0],
										longerIndex: this.topArr.indexOf(arrtmp[this.cols - 1]),
										longerValue: arrtmp[this.cols - 1],
									};
								};

								const {
									shorterIndex,
									shorterValue
								} = getTopArrMsg();
								const position = {
									top: shorterValue + "px",
									left: (data.width + this.offset) * shorterIndex + "px",
								};
								this.$set(this.allPositionArr, i, position);
								this.topArr[shorterIndex] =
									shorterValue + this.allHeightArr[i] + this.offset;
								this.height = getTopArrMsg().longerValue - this.offset;
							}
							this.oldNum = this.num;
							// 完成渲染 emit `image-load` 事件
							this.$emit("image-load");
						}
					})
					.exec();
			},
			refresh() {
				let arr = [];
				for (let i = 0; i < this.cols; i++) {
					arr.push(0);
				}
				this.topArr = arr;
				this.num = 0;
				this.oldNum = 0;
			},
		},
	};
</script>
<style lang="scss" scoped>
	// 这里可以自行配置
	$border-radius: 6px;

	.waterfalls-box {
		position: relative;
		width: 100%;
		overflow: hidden;

		.waterfalls-list {
			width: calc((100% - var(--offset) * (var(--cols) - 1)) / var(--cols));
			position: absolute;
			background-color: #fff;
			border-radius: $border-radius;
			// 防止刚开始渲染时堆叠在第一幅图的地方
			left: calc(-50% - var(--offset));

			.image-wrap {
				width: 100%;
				position: relative;
			}

			.waterfalls-list-image {
				width: 100%;
				will-change: transform;
				border-radius: $border-radius $border-radius 0 0;
				display: block;

				&.single {
					border-radius: $border-radius;
				}
			}

			.tag-bg {
				width: 100%;
				padding: 8upx 12upx;
				background-color: #ffe431;
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				text-align: right;

				text {
					font-size: 24upx;
					color: #682004;
					transform: scale(0.9);
				}
			}

			.tag {
				width: 155upx;
				height: 79upx;
				position: absolute;
				left: 0;
				bottom: 0;
				padding-right: 20upx;

				image {
					width: 155upx;
					height: auto;
					position: absolute;
					top: 0;
					left: 0;
				}

				.tag-text {
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding-top: 4upx;
					box-sizing: border-box;
					color: #FF6C00;


					.title {
						font-size: 24upx;
						transform: scale(0.8);
						margin-bottom: -10upx;
					}

					.count {
						color: #FF6C00;
						font-size: 40upx;
						font-weight: bold;
						z-index: 10;
					}
				}
			}

			.tag-common {
				width: 170upx;
				height: 40upx;
				background-color: #ffe431;
				border-radius: 18upx;
				border-bottom-left-radius: 0;
				position: absolute;
				left: 0;
				bottom: 0;
				display: flex;
				justify-content: center;
				align-items: center;

				text {
					font-size: 24upx;
					color: #682004;
					transform: scale(0.9);
				}
			}
		}
	}
</style>
