<template>
  <div class="min-h-screen">
    <navbar></navbar>
    <router-view></router-view>
    <customfooter></customfooter>
  </div>
</template>

<script setup>
import navbar from './components/navbar.vue'
import customfooter from './components/footer.vue'
</script>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
