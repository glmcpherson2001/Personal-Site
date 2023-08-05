<template>
  <header class="sticky top-0 bg-white">
    <nav>
      <ul class="flex align-middle justify-around p-5" :class="{'bg-blue-500': scrolledDown}">
        <li v-for="(item, index) in navLinks" :key="index"><router-link to="/">{{ item.name }}</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import router from './../router'

export default {
  name: 'Top-Navbar',
  data() {
    return {
      scrolledDown: false,
      navLinks: router.options.routes
    };
  },
  methods: {
    handleScroll() {
      // Check the scroll position and update the 'scrolledDown' data property
      this.scrolledDown = window.scrollY > 0;
    },
  },
  mounted() {
    // Add a scroll event listener to the window
    console.log(this.navLinks)
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // Don't forget to remove the event listener when the component is unmounted
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>

</style>
