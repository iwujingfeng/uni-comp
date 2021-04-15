<!--
 * @Author: your name
 * @Date: 2020-12-15 10:24:19
 * @LastEditTime: 2021-01-05 15:32:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tcc/Users/wujingfeng/development/work/daogu_page/components/BaseRadioGroup.vue
-->
<template>
  <view class="radio-group" :style="{ justifyContent: justifyContent }">
    <label class="radio" v-for="item in radioList" :key="item.value">
      <radio :color="color" :value="item.value" :checked="item.checked" />{{
        item.name
      }}</label
    >
  </view>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#ffcc57",
    },
    radioList: {
      type: Array,
      default: [
        {
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
    },
    justifyContent: {
      type: String,
      default: "flex-start",
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.radio-group {
  display: flex;
  align-items: center;
  label {
    color: #333333;
    font-size: 26upx;
    display: flex;
    align-items: center;
    margin-right: 24upx;
  }

  radio {
    transform: scale(0.8);
  }
}
</style>
