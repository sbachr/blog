<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2" id="left-sidebar">
          <h5 id="name">Hi, name</h5>
          <img src="../assets/logo.png" alt="">
          <div class="vl"></div>
        </div>
        <div class="col-sm-9">
          <articleList></articleList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import articleList from "@/components/ArticleList.vue";
  export default {
    components: {
      articleList
    }
  };
</script>

<style lang="css">
  #left-sidebar {
    padding-top: 1%;
    text-align: center;
  }

  #content-article {
    padding-top: 1%;
    margin-right: 3%;
    text-align: left;
  }

  .vl {
    border-left: 5px solid rgb(245, 248, 232);
    height: 800px;
    position: absolute;
    left: 95%;
    margin-left: -3px;
    top: 0;
  }
</style>