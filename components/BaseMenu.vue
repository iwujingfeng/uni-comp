<template>
  <view class="menu">
    <view
      class="item"
      :style="{ width: itemWidth, padding: itemPadding }"
      v-for="(item, index) in menuList"
      :key="item.icon"
      @click="$emit('clickItem', item.route)"
    >
      <view class="icon-wrap" :style="{ padding: iconPadding }">
        <image class="icon" :src="item.icon" mode="widthFix"></image>
      </view>
      <view class="title-wrap">
        <text
          class="title"
          :class="bold ? 'bold' : ''"
          :style="{ fontSize: fontSize, color: color }"
          >{{ item.title }}</text
        >
      </view>
      <view class="tag" v-if="showTag && index == 2">
        <image :src="tag" mode="widthFix"></image>
        <text>待领取</text>
      </view>
      <!-- 额外的标签 -->
      <slot name="tag" v-if="index == 2"></slot>
      <!-- 额外的徽章 -->
      <!-- 待付款 -->
      <slot name="badgePay" v-if="item.title == '待付款'"></slot>
      <!-- 待收货 -->
      <slot name="badgeReceive" v-if="item.title == '待收货'"></slot>
      <!-- 待评价 -->
      <slot name="badgeComment" v-if="item.title == '待评价'"></slot>
    </view>
  </view>
</template>

<script>
/**
 * @description 菜单组件
 * 可以换行
 */
export default {
  props: {
    fontSize: {
      type: String,
      default: "28rpx",
    },
    color: {
      type: String,
      default: "#333333",
    },
    showTag: {
      type: Boolean,
      default: true,
    },
    bold: {
      type: Boolean,
      default: false,
    },
    itemWidth: {
      type: String,
      default: "25%",
    },
    itemPadding: {
      type: String,
      default: "22rpx 36rpx", // 支持rpx 不支持upx
    },
    iconPadding: {
      type: String,
      default: "0", // 支持rpx 不支持upx
    },
    tag: {
      type: String,
      default: "",
    },
    menuList: {
      type: Array,
      default: [
        {
          icon: require("@/static/menu/menu1.png"),
          title: "积分商城",
        },
      ],
    },
  },
  data() {
    return {};
  },
  created() {
    //console.log(this.menuList)
  },
};
</script>

<style scoped lang="scss">
.menu {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  .item {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .icon-wrap {
      width: 100%;
      text-align: center;
      box-sizing: border-box;

      .icon {
        width: 100%;
        height: auto;
      }
    }

    .title-wrap {
      width: 100%;
      text-align: center;

      .bold {
        font-weight: bold;
      }
    }

    .tag {
      width: 106upx;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 20upx;
      right: -20upx;

      image {
        width: 90upx;
        height: auto;
      }

      text {
        width: 100%;
        font-size: 24upx;
        color: #ffffff;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
      }
    }
  }
}
</style>
