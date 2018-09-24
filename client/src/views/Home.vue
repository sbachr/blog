<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <HelloWorld :kucing2="kucing" ></HelloWorld>
  <h2> {{kucing}} </h2>
  <h1>{{testbeforbind}}</h1>
  <input type="text" v-model="pesan">
  <button @click="gantiAnjing">Ganti jadi anjing</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  props: ['kucing','testbeforbind'],
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      pesan: ''
    }
  },
  methods: {
    gantiAnjing () {
      this.$emit('gantisuara', this.pesan)
    }
  }
}
</script>
