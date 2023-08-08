<template>
  <div class="flex ">
      <div class="w-7/12 grid-cols-3 space-y-4 my-28 ml-3 ">
        <h2 class="p-5">Hello! My name is</h2>
        <h1 class="ml-5 p-5">Grant McPherson</h1>

        <h2 class="p-5">I'm a CIT major an intersted in Data Engineering</h2>

        <p>
          Welcome to my website. Go ahead and take a look at my work or learn a
          little about me. Then if you like my work and wouls like to talk
          contact me! Let's make something cool!
        </p>
      </div>

      <div class="w-5/12">
        <img src="#" alt="Photo of Grant McPherson" />
      </div>
    </div>
    <div>
      <CallToAction></CallToAction>
    </div>
   
  </template>
  
  <script>
  import CallToAction from '../components/call-to-action.vue';
  // Your JavaScript logic goes here
  export default {
    name: 'Home-Page',
    data() {
        return {};
    }
    // Other component options like methods, computed properties, etc., can go here
    ,
    components: { CallToAction }
}
  </script>
  
  <style scoped>
    
  </style>
  