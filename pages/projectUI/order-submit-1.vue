<template>
  <view class="order-submit bg-gray padding-bottom">
    <uni-nav-bar
      title="确认订单"
      :statusBar="true"
      :border="false"
      background-color="#ffd101"
      @clickLeft="routerBack()"
    >
      <block slot="left">
        <image
          src="@/static/back-icon.png"
          mode="widthFix"
          style="width: 24upx"
        ></image>
      </block>
    </uni-nav-bar>
    <!-- 地址 -->
    <view class="address">
      <BaseAddressItem
        icon-path="../../static/address.png"
        icon-width="69rpx"
        title="张咩咩"
        font-size="26rpx"
        color="#333333"
        sub-title="内蒙古呼和浩特新城区中山东路99号
    	新世纪广场2层"
        suffix-path="../../static/arrow-r.png"
        suffix-width="15rpx"
        @click-item="$Router.push({ name: 'address-list' })"
      ></BaseAddressItem>
    </view>
    <view class="goods-list">
      <view class="card">
        <view class="title-main">
          <image src="@/static/title-icon111.png" mode="widthFix"></image>
          <text>优优王国（商家名称）</text>
        </view>
        <view class="item">
          <image class="cover" src="@/static/test/cover-test1.png"></image>
          <view class="content">
            <text class="title"
              >量身定制高数数学1对1系列课程量身定制高数数学1对1系列课程</text
            >
            <view class="bottom">
              <text class="des">1对1系列课程</text>
              <view class="price">
                <text class="t1">￥</text>
                <text class="price-count">49.80</text>
                <text class="count">x1</text>
              </view>
            </view>
          </view>
        </view>
        <view class="item border-none">
          <image class="cover" src="@/static/test/cover-test1.png"></image>
          <view class="content">
            <text class="title"
              >量身定制高数数学1对1系列课程量身定制高数数学1对1系列课程</text
            >
            <view class="bottom">
              <text class="des">1对1系列课程</text>
              <view class="price">
                <text class="t1">￥</text>
                <text class="price-count">49.80</text>
                <text class="count">x1</text>
              </view>
            </view>
          </view>
        </view>
        <view class="info">
          <view class="col col2">
            <view class="prefix prefix-image">
              <image src="@/static/stu-icon.png" mode="widthFix"></image>
            </view>
            <view class="text" style="padding-left: 10upx">
              <text style="color: #000000; font-weight: bold">绑定儿童</text>
            </view>
            <view class="input-wrap select-input" @click="selectStudent">
              <text>无儿童资料</text>
              <image
                :src="
                  showStudentList
                    ? '../static/arrow-t.png'
                    : '../static/arrow-b.png'
                "
                mode="widthFix"
                style="width: 20upx; height: auto; margin-left: 10upx"
              ></image>
            </view>
          </view>
          <template v-if="showStudentList">
            <view class="col col3">
              <view class="text" style="padding-left: 0">
                <text>儿童姓名</text>
              </view>
              <view class="input-wrap">
                <input
                  value=""
                  placeholder="输入儿童姓名"
                  placeholder-style="color:#333333;font-size:26upx"
                />
              </view>
            </view>
            <view class="col col3">
              <view class="text" style="padding-left: 0">
                <text>儿童性别</text>
              </view>
              <view class="input-wrap sex-wrap">
                <view class="sex-item" @click="selectSex(1)">
                  <image
                    :src="
                      currentSexId == 1
                        ? '../static/sex1-on.png'
                        : '../static/sex1.png'
                    "
                    mode="widthFix"
                  ></image>
                  <text>男</text>
                </view>
                <view class="sex-item" @click="selectSex(2)">
                  <image
                    :src="
                      currentSexId == 2
                        ? '../static/sex2-on.png'
                        : '../static/sex2.png'
                    "
                    mode="widthFix"
                  ></image>
                  <text>女</text>
                </view>
              </view>
            </view>
            <view class="col col3">
              <view class="text" style="padding-left: 0">
                <text>出生日期</text>
              </view>
              <view class="input-wrap">
                <input
                  value=""
                  placeholder="/年/月/日"
                  placeholder-style="color:#999999;font-size:26upx"
                />
              </view>
            </view>
            <view class="col col3">
              <view class="text" style="padding-left: 0">
                <text>家长姓名</text>
              </view>
              <view class="input-wrap">
                <input
                  value=""
                  placeholder="请输入家长姓名"
                  placeholder-style="color:#999999;font-size:26upx"
                />
              </view>
            </view>
            <view class="col col3" style="margin-bottom: 20upx">
              <view class="text" style="padding-left: 0">
                <text>联系方式</text>
              </view>
              <view class="input-wrap">
                <input
                  value=""
                  placeholder="请输入家长电话"
                  placeholder-style="color:#999999;font-size:26upx"
                />
              </view>
            </view>
          </template>

          <view class="col col1" @click="showCouponModal">
            <view class="prefix">
              <text>优</text>
            </view>
            <view class="text">
              <text>优惠卷立减</text>
            </view>
            <text class="suffix">- ¥100</text>
          </view>
          <view class="col col2">
            <view class="prefix">
              <text>享</text>
            </view>
            <view class="text">
              <text>享学币抵扣</text>
            </view>
            <view class="input-wrap">
              <input
                type="text"
                value="59999"
                placeholder="输入享学币使用数量"
                placeholder-style="color:#333333;font-size:26upx"
              />
              <view class="input-wrap-info">
                <image src="@/static/info.png" @tap="showCoinInfo"/>
                <text>已抵扣￥599</text>
              </view>
            </view>
          </view>
          <view class="col col3">
            <view class="text" style="padding-left: 48upx">
              <text>订单备注</text>
            </view>
            <view class="input-wrap">
              <textarea
                value=""
                placeholder="输入备注"
                auto-height
                placeholder-style="color:#333333;font-size:26upx"
              />
            </view>
          </view>
          <view class="total">
            <text class="t1">共2件</text>
            <text class="t2">小计：</text>
            <text class="t3">￥1200</text>
          </view>
        </view>
      </view>
      <view class="card">
        <view class="title-main">
          <image src="@/static/title-icon111.png" mode="widthFix"></image>
          <text>优优王国（商家名称）</text>
        </view>
        <view class="item">
          <image class="cover" src="@/static/test/cover-test1.png"></image>
          <view class="content">
            <text class="title"
              >量身定制高数数学1对1系列课程量身定制高数数学1对1系列课程</text
            >
            <view class="bottom">
              <text class="des">1对1系列课程</text>
              <view class="price">
                <text class="t1">￥</text>
                <text class="price-count">49.80</text>
                <text class="count">x1</text>
              </view>
            </view>
          </view>
        </view>
        <view class="item border-none">
          <image class="cover" src="@/static/test/cover-test1.png"></image>
          <view class="content">
            <text class="title"
              >量身定制高数数学1对1系列课程量身定制高数数学1对1系列课程</text
            >
            <view class="bottom">
              <text class="des">1对1系列课程</text>
              <view class="price">
                <text class="t1">￥</text>
                <text class="price-count">49.80</text>
                <text class="count">x1</text>
              </view>
            </view>
          </view>
        </view>
        <view class="info">
          <view class="col col1" @click="showCouponModal">
            <view class="prefix">
              <text>优</text>
            </view>
            <view class="text">
              <text>优惠卷立减</text>
            </view>
            <text class="suffix">- ¥100</text>
          </view>
          <view class="col col2">
            <view class="prefix">
              <text>享</text>
            </view>
            <view class="text">
              <text>享学币抵扣</text>
            </view>
            <view class="input-wrap">
              <input
                type="text"
                value="59999"
                placeholder="输入享学币使用数量"
                placeholder-style="color:#333333;font-size:26upx"
              />
              <text>已抵扣￥599</text>
            </view>
          </view>
          <view class="col col3">
            <view class="prefix" style="background: #ffffff">
              <text></text>
            </view>
            <view class="text">
              <text>订单备注</text>
            </view>
            <view class="input-wrap">
              <textarea
                value=""
                placeholder="输入备注"
                auto-height
                placeholder-style="color:#333333;font-size:26upx"
              />
            </view>
          </view>
          <view class="total">
            <text class="t1">共2件</text>
            <text class="t2">小计：</text>
            <text class="t3">￥1200</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 脚部菜单 -->
    <view class="pd-20 footer">
      <text class="count">共5件</text>
      <view class="right-box">
        <view class="total-cost">
          <text>实付款：</text><text class="unit">￥</text
          ><text class="sum-price">600</text>
        </view>
        <view class="account" @click="$Router.push({ name: 'order-detail' })"
          ><text>提交订单</text></view
        >
      </view>
    </view>
    <!-- 优惠券弹窗 -->
    <UniPopup ref="couponPopup" type="bottom">
      <view class="modal">
        <view class="title">
          <text>优惠券立减</text>
        </view>
        <view class="close" @click="closeCouponModal">
          <image src="@/static/close-icon.png"></image>
        </view>

        <radio-group @change="radioChange">
          <label class="label" v-for="(item, index) in items" :key="item.value">
            <text>{{ item.value }}</text>
            <view class="checkbox">
              <radio
                :value="item.value"
                :checked="index === current"
                color="#F1583E"
              />
            </view>
          </label>
        </radio-group>

        <view class="popup-btn-wrap">
          <BaseButton
            width="100%"
            height="80rpx"
            font-size="30upx"
            color="#ffffff"
            bg="linear-gradient(to right,#ff7800,#fe4200)"
            @click-button="onSubmitCoupon"
            >确认</BaseButton
          >
        </view>
      </view>
    </UniPopup>
  </view>
</template>

<script>
import BaseAddressItem from "@/components/BaseAddressItem.vue";
import UniPopup from "@/components/uni-popup/uni-popup.vue";
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: {
    BaseAddressItem,
    UniPopup,
    BaseButton,
  },
  data() {
    return {
      showStudentList: false,
      currentSexId: 1,
      items: [
        {
          value: "省200：满500减200 ￥200.00",
          name: "",
        },
        {
          value: "不使用优惠券",
          name: "",
          checked: "true",
        },
      ],
      current: 0,
    };
  },
  methods: {
    selectStudent() {
      this.showStudentList = !this.showStudentList;
    },
    selectSex(id) {
      console.log(id);
      this.currentSexId = id;
    },
    showCouponModal() {
      this.$refs.couponPopup.open();
    },
    onSubmitCoupon() {
      this.$refs.couponPopup.close();
    },
    closeCouponModal() {
      this.$refs.couponPopup.close();
    },
    radioChange: function (evt) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].value === evt.target.value) {
          this.current = i;
          break;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.order-submit {
  width: 100%;
  min-height: 100vh;

  .address {
    padding: 30upx;
    padding-bottom: 20upx;
    box-sizing: border-box;
  }

  .goods-list {
    width: 100%;
    padding: 0 30upx 30upx 30upx;
    box-sizing: border-box;

    .card {
      width: 100%;
      background-color: #ffffff;
      border-radius: 12upx;
      padding: 36upx 30upx 10upx 30upx;
      box-sizing: border-box;
      margin-bottom: 40upx;

      .title-main {
        width: 100%;
        display: flex;
        align-items: center;

        image {
          width: 28upx;
          height: 28upx;
          margin-right: 10upx;
        }

        text {
          font-size: 28upx;
          color: #333333;
          font-weight: bold;
        }
      }

      .item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 30upx;
        padding-top: 30upx;
        box-sizing: border-box;
        border-bottom: 1px solid #eeeeee;

        .cover {
          width: 180upx;
          height: 180upx;
          border-radius: 6upx;
        }

        .content {
          width: 0;
          flex-grow: 1;
          height: 180upx;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          margin-left: 26upx;

          .title {
            font-size: 28upx;
            color: #333333;
            margin-bottom: 10upx;
            line-height: 1.5;
          }

          .bottom {
            width: 100%;

            .des {
              font-size: 24upx;
              color: #999999;
              background-color: #f7f9fc;
              border-radius: 10upx;
              padding: 4upx 10upx;
            }

            .price {
              font-size: 33upx;
              color: #f1583e;
              margin-top: 10upx;
              display: flex;
              justify-content: space-between;
              align-items: center;

              .t1 {
                font-size: 24upx;
              }
              .price-count {
                width: 0;
                flex-grow: 1;
                text-align: left;
              }
              .count {
                font-size: 24upx;
                color: #d6d6d6;
              }
            }
          }
        }

        .button {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;

          .btn-wrap {
            margin-bottom: 26upx;
          }
        }
      }

      .border-none {
        border-bottom: none;
      }

      .info {
        width: 100%;
        color: #383838;
        font-size: 26upx;
        padding-top: 10upx;
        padding-bottom: 24upx;
        .total {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-top: 50upx;
          .t1 {
            font-size: 24upx;
            color: #999999;
            margin-right: 10upx;
          }
          .t2 {
            font-size: 26upx;
            color: #333333;
          }
          .t3 {
            font-size: 26upx;
            color: #f1583e;
          }
        }
        .input-wrap {
          width: 0;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          input {
            text-align: right;
            font-size: 26upx;
            color: #333333;
          }
          textarea {
            text-align: right;
            font-size: 26upx;
            color: #333333;
          }
          // 新增
          .input-wrap-info {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-top: 10upx;
            image {
              width: 30upx;
              height: 30upx;
              margin-right: 20upx;
            }
          }
        }
        .sex-wrap {
          flex-direction: row;
          justify-content: flex-end;
          .sex-item {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-left: 50upx;
            image {
              width: 26upx;
              height: auto;
              margin-right: 10upx;
            }
          }
        }

        .select-input {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          position: relative;
        }

        .col {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10upx;

          .prefix {
            width: 28upx;
            height: 28upx;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f1583e;
            border-radius: 6upx;
            font-size: 24upx;
            color: #ffffff;
          }

          .prefix-image {
            width: 40upx;
            height: 40upx;
            background: none;
            image {
              width: 100%;
              height: auto;
            }
            text {
              padding-left: 10upx !important;
            }
          }

          .suffix {
            color: #333333;
          }

          .text {
            width: 0;
            flex-grow: 1;
            text-align: left;
            padding: 10upx 20upx;
            box-sizing: border-box;
            color: #999999;
            font-size: 26upx;
          }
        }

        .col1 {
          font-size: 26upx;
        }

        .col2 {
          font-size: 26upx;
        }

        .col-info {
          .text {
            padding-left: 0;
            color: #84898b;
          }

          .suffix {
            color: #333333;
          }
        }
      }
    }
  }
  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16upx 30upx;
    box-sizing: border-box;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .count {
      font-size: 24upx;
      color: #999999;
    }

    .all {
      font-size: 26upx;
      color: #333333;
    }

    .goods-remove {
      border: solid 2rpx #f06c7a;
      color: #f06c7a;
      padding: 0 30upx;
      height: 50upx;
      border-radius: 30upx;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .right-box {
      width: 70%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .total-cost {
        width: 0;
        flex-grow: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 26upx;
        color: #000000;

        .unit {
          font-size: 24upx;
          color: #f1583e;
        }

        .sum-price {
          font-size: 36upx;
          color: #f1583e;
        }
      }

      .account {
        width: 240upx;
        height: 80upx;
        line-height: 80upx;
        background: linear-gradient(to right, #ff7800, #fe4200);
        font-size: 34upx;
        color: #ffffff;
        text-align: center;
        border-radius: 40upx;
      }
    }
  }
  // 优惠券弹窗
  .modal {
    width: 100vw;
    padding: 0upx 30upx 30upx 30upx;
    box-sizing: border-box;
    background-color: #ffffff;
    position: relative;
    .title {
      width: 100%;
      font-size: 32upx;
      color: #333333;
      text-align: center;
      padding: 30upx 0;
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
      margin-bottom: 40upx;
      text {
        font-size: 26upx;
        color: #333333;
      }
      radio {
        transform: scale(0.7);
      }
    }
    .close {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 100;
      padding: 30upx;
      image {
        width: 32upx;
        height: 32upx;
      }
    }
    .popup-btn-wrap {
      width: 100%;
      margin-top: 100upx;
    }
  }
}
</style>
