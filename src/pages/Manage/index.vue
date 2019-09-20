<template>
  <view>
    <view class="b-option">
      <view class="b-option__item">
        <view class="b-option__item-left">
          店铺Logo
        </view>
        <view class="b-option__item-right">
          <image></image>
          <uniIcons
            type="arrowright"
            size="22"
            color="#aaa"
          ></uniIcons>
        </view>
      </view>
      <view class="b-option__item">
        <view class="b-option__item-left">
          店铺名称
        </view>
        <view class="b-option__item-right">
          <text>三只蚂蚁</text>
          <uniIcons
            type="arrowright"
            size="22"
            color="#aaa"
          ></uniIcons>
        </view>
      </view>
      <view class="b-option__item">
        <view class="b-option__item-left">
          店铺背景图
        </view>
        <view class="b-option__item-right">
          <uniIcons
            type="arrowright"
            size="22"
            color="#aaa"
          ></uniIcons>
        </view>
      </view>
    </view>
    <view class="b-explain">
      <view class="b-explain__title">店铺介绍</view>
      <textarea placeholder="请输入店铺的详细介绍"></textarea>
    </view>
    <view class="b-btn">
      确认
    </view>
  </view>
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons"
export default {
  components: { uniIcons }
}
</script>


<style lang="scss" scoped>
@import '@/scss';
@include b(option) {
  background: #fff;
  @include e(item) {
    @include flex-bw;
    height: 100upx;
    padding: 0 34upx;
    border-bottom: 1px solid #ddd;
  }
  @include e(item-left) {
  }
  @include e(item-right) {
    display: flex;
    align-items: center;
    image {
      @include size(70upx, 70upx);
      background: yellow;
      border-radius: 4upx;
      margin-right: 10upx;
    }
  }
}
@include b(explain){
  background: #fff;
  padding-bottom: 40upx;
  @include e(title){
    height: 110upx;
    line-height: 110upx;
    padding: 0 30upx;
  }
  textarea{
    @include size(670upx,360upx);
    border: 1px solid #bbb;
    margin: 0 auto;
    padding:12upx 0 0 14upx;
  }
}
@include b(btn){
  @include size(670upx,88upx);
  background: #0099FF;
  color: #fff;
  font-size: 32upx;
  margin: 40upx auto 0 auto;
  text-align: center;
  line-height: 80upx;
  border-radius: 12upx;
}
</style>