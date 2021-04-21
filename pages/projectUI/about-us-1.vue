<template>
  <view class="about">
    <view class="header">
      <image src="@/static/test/cover-test1.png" />
      <text class="title">嗨 高考</text>
      <text class="version">v1.0.0</text>
    </view>
    <view class="list-wrapper">
      <view class="item">
        <BaseCeilItem
          title="检查更新"
          font-size="30rpx"
          color="#363636"
          :show-icon="false"
          :showTitleEnd="false"
          :showSuffix="false"
          padding="26rpx 0 10upx 0"
        >
        </BaseCeilItem>
      </view>
      <view class="item border-none">
        <BaseCeilItem
          title="客服热线"
          font-size="30rpx"
          color="#363636"
          :show-icon="false"
          :showTitleEnd="false"
          :showSuffix="false"
          padding="26rpx 0 10upx 0"
        >
        </BaseCeilItem>
      </view>
    </view>
  </view>
</template>

<script>
import BaseCeilItem from "components/BaseCeilItem.vue";
export default {
  components: { BaseCeilItem },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.about {
  height: 100vh;
  background-color: #f7f7f7;
  padding: 30upx;
  box-sizing: border-box;
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	padding-top: 100upx;
	padding-bottom: 60upx;
    image {
      width: 100upx;
      height: 100upx;
      border-radius: 10upx;
    }
    text {
      font-size: 24upx;
      color: #cccccc;
    }
    .title {
      font-size: 34upx;
      color: #000000;
	  margin: 20upx 0;
    }
  }
}
/deep/.ceil-item .middle {
  padding-bottom: 0;
  border-bottom: none;
}
.list-wrapper {
  width: 100%;
  //   min-height: 85vh;
  border-radius: 20upx;
  padding: 20upx 30upx;
  box-sizing: border-box;
  background-color: #ffffff;
  margin-top: 20upx;

  .item {
    border-bottom: 1px solid #e9eaec;
  }
}
</style>>
