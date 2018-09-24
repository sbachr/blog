<template>
  <div class="about">
    <articleList :kucingaja="kucing"></articleList>
    <h1>This is an about page {{kucing}}</h1>
  </div>
</template>

<script>
import articleList from '@/components/ArticleList.vue'
export default {
  props: ['kucing'],
  components : {
    articleList
  }

}
</script>

