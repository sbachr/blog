<template>
  <div class="card border-primary mb-3" style="max-width: 20rem;">
    <div class="card-header" >Header</div>
    <div class="card-body">
      <h4 class="card-title">Primary card title</h4>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListArticle",
  data: function() {
    return {
      articles: []
    };
  },
  created: function() {
    this.documentReady();
  },
  methods: {
    documentReady: function() {
      let self = this;
      axios({
        method: "get",
        url: "http://localhost:3000/article/articles/"
      })
        .then(function(response) {
          self.articles = response.data.data;
          let emitArticle = self.articles;
          self.$emit("articlesfromlist", emitArticle);
        })
        .catch(function(err) {
          console.log(err.response);
        });
    }
  }
};
</script>

<style>
</style>