<template>
  <view>
    <view class="b-nav">
      <view class="b-nav__item  b-nav__item--active">首页</view>
      <view class="b-nav__item">商城</view>
      <view class="b-nav__item">关于</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import '@/scss';

// @include b(nav) {
//   @include flex-sa;
//   @include e(item) {
//     flex: 1;
//     text-align: center;
//     @include m(active) {
//       color: blue;
//     }
//   }
// }

.b-nav{
  @include flex-sa;
  &__item{
    flex: 1;
    text-align: center;
    &--active{
      color: blue;
    }
  }
}

</style>