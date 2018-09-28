<template>
  <div id="app">
    <navbar></navbar>
    <sidebar></sidebar>
    <!-- <button type="button" class="btn btn-outline-success">Login</button> -->
    <!-- <router-view :kucing="meong" :testbeforbind="testbind" @gantisuara="prosesubahsuara"></router-view> -->
  </div>
</template>

<script>

import navbar from '@/components/navbar.vue'
import sidebar from '@/components/sidebar.vue'

export default {
  name: "app",
  components : {
    navbar,
    sidebar,
  },
  data() {
    return {
      // testbind: 'ini suara test bind',
      // meong: "Suara Kucing gggggg"
    };
  }, 
  methods: {
    // prosesubahsuara (x) {
    //   this.meong = x
    }
  }

</script>


<style lang='css'>

</style>
