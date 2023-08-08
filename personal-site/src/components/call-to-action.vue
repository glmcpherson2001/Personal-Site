<template>
     <div class="flex align-middle justify-center inset">
      <a class="px-7"
      href="Resume.pdf" 
      target="_blank"
        ><button>Download my Resume</button></a
      >
      <a class="px-7" href="mailto:glmcpherson2001@gmail.com"><button>Email Me!</button></a>
      <router-link class="px-7" to="/portfolio"><button>Portfolio</button></router-link>
      <router-link class="px-7" to="/contact"><button>Contact Me!</button></router-link>
    </div>
    
  </template>
  
  <script>
  // Your JavaScript logic goes here
  export default {
    name: 'Home-Page',
    data() {
      return {
      };
    }
    // Other component options like methods, computed properties, etc., can go here
  }
  </script>
  
  <style scoped>
    .inset{
      box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.5);
    }
  </style>
  