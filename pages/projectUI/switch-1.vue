<template>
  <view class="about">
    <view class="list-wrapper">
      <view class="item">
        <BaseCeilItem
          title="绑定手机"
          font-size="30rpx"
          color="#363636"
          :show-icon="false"
          :showTitleEnd="false"
          :showSuffix="false"
          padding="26rpx 0 10upx 0"
        >
          <template #title-end>
            <text class="phone">180****9770</text>
            <text class="edit">修改</text>
          </template>
        </BaseCeilItem>
      </view>
      <view class="item">
        <BaseCeilItem
          title="绑定微信"
          font-size="30rpx"
          color="#363636"
          :show-icon="false"
          :showTitleEnd="false"
          :showSuffix="false"
          padding="26rpx 0 10upx 0"
        >
          <template #title-end>
            <switch
              color="rgb(204, 190, 151)"
              :checked="isBindWX"
              @change="switchWXChange"
            />
          </template>
        </BaseCeilItem>
      </view>
      <view class="item border-none">
        <BaseCeilItem
          title="绑定QQ"
          font-size="30rpx"
          color="#363636"
          :show-icon="false"
          :showTitleEnd="false"
          :showSuffix="false"
          padding="26rpx 0 10upx 0"
        >
          <template #title-end>
            <switch
              color="rgb(204, 190, 151)"
              :checked="isBindQQ"
              @change="switchQQChange"
            />
          </template>
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
    return {
      isBindPhone: true, // 用于回显 是否绑定了手机号
      isBindWX: true, // 用于回显 是否绑定了微信
      isBindQQ: false, // 用于回显 是否绑定了QQ
    };
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
}
/deep/.ceil-item .middle {
  padding-bottom: 0;
  border-bottom: none;
}
.list-wrapper {
  width: 100%;
  border-radius: 20upx;
  padding: 20upx 30upx;
  box-sizing: border-box;
  background-color: #ffffff;
  margin-top: 20upx;

  .item {
    border-bottom: 1px solid #e9eaec;
  }
}
.phone {
  font-size: 26upx;
  color: #000000;
}
.edit {
  font-size: 26upx;
  color: #cccccc;
  padding: 10upx 34upx;
  box-sizing: border-box;
}
switch {
  transform: scale(0.7);
}
</style>>
  