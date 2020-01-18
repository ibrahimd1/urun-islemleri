<template>
  <div>
    <app-header></app-header>
    <transition name="animation" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style>
.animation-enter {
  opacity: 0;
}
.animation-enter-active {
  transition: opacity 1s ease;
}
.animation-leave {
  opacity: 0;
}
.animation-leave-active {
  transition: opacity 1s ease;
}
</style>
