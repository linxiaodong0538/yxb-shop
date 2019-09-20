<template>
  <view>
    <view class="b-head">
      <view class="b-head__title">
        <view class="b-head__title-left">首页</view>
        <view class="b-head__title-right">
          <text class="">买家</text>
        </view>
      </view>
      <view class="b-head__msg">
        <view class="b-head__msg-top">
          <image></image>
          <view class="group">
            <text class="text1">这是店铺名称</text>
            <text class="text2">共有99款商品</text>
          </view>
        </view>
        <view class="b-head__msg-bottom">
          <view class="item">
            <text class="text1">11</text>
            <text class="text2">今日访客</text>
          </view>
          <view class="item">
            <text class="text1">21</text>
            <text class="text2">今日收藏</text>
          </view>
          <view class="item">
            <text class="text1">11</text>
            <text class="text2">今日点赞</text>
          </view>
        </view>
      </view>
    </view>

    <view class="b-nav">
      <view
        class="b-nav__item"
        @tap="handleUrl('/pages/Manage/index')"
      >
        <image></image>
        <text>店铺管理</text>
      </view>
      <view class="b-nav__item">
        <image></image>
        <text>橱窗管理</text>
      </view>
      <view class="b-nav__item">
        <image></image>
        <text>商品管理</text>
      </view>
    </view>
    <view class="b-swiper">
      <swiper
        class="swiper"
        :indicator-dots="true"
        :autoplay="true"
      >
        <swiper-item>
          <image src="../../static/img/face.jpg"></image>
        </swiper-item>
        <swiper-item>
          <image src="../../static/img/p10.jpg"></image>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>
<script>
export default {
  onLoad() {

  },
  methods: {
    handleUrl(url) {
      uni.navigateTo({
        url
      });
    }
  },

}
</script>

<style lang="scss" scoped>
@import '@/scss';
@include b(head) {
  @include size(100%, 320upx);
  background: #f06671;
  position: relative;
  @include e(title) {
    @include flex-bw;
    padding: 0 40upx;
    height: 88upx;
    color: #fff;
  }
  @include e(msg) {
    @include size(685upx, 280upx);
    background: #fff;
    @include position--absolute(140upx, null, null, 50%);
    transform: translateX(-50%);
    border-radius: 20upx;
    box-shadow: 0upx 4upx 20upx rgba(0, 0, 0, 0.4);
    &-top {
      display: flex;
      align-items: center;
      height: 144upx;
      padding: 0 30upx;
      image {
        @include size(90upx, 90upx);
        background: yellow;
        border-radius: 10upx;
      }
      .group {
        @include flex-cl-notc;
        padding-left: 20upx;
        .text1 {
          font-weight: 600;
        }
        .text2 {
          font-size: 24upx;
          color: #666;
          padding-top: 4upx;
        }
      }
    }
    &-bottom {
      display: flex;
      padding: 0 40upx;
      margin-top: 24upx;
      .item {
        @include flex-cl;
        margin-right: 50upx;
        .text1 {
          font-weight: 600;
        }
        .text2 {
          padding-top: 4upx;
          color: #888;
        }
      }
    }
  }
}
@include b(nav) {
  background: #fff;
  height: 360upx;
  padding: 0 40upx;
  @include flex-sa;
  @include e(item) {
    @include flex-cl;
    padding-top: 120upx;
    image {
      @include size(54upx, 54upx);
      background: #f06671;
    }
    text {
      padding-top: 6upx;
      color: #888;
    }
  }
}
@include b(swiper) {
  @include size(100%, 240upx);
  margin-top: 20upx;
  .swiper {
    height: 100%;
  }
  image {
    @include size(100%, 100%);
  }
}
</style>