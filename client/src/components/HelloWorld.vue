<template>
  <div class="HelloWorld">
    <h1>{{ msg }}</h1>
    <h2> {{kucing2}} </h2>
    <article-list ></article-list>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'
export default {
  name: 'HelloWorld',
  props: ['kucing2'],
  data() {
    return {
      msg: "Belajar Vue Basic"
    }
  },

  component: {
    ArticleList
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>