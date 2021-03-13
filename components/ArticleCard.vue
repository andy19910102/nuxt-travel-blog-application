<template>
  <div class="card mb-3">
    <div
      class="card-img-top"
      :style="{ backgroundImage: `url(${article.image})` }"
    ></div>
    <div class="card-body">
      <h4 class="card-title">{{ article.title }}</h4>
      <p class="card-text">{{ article.city }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ArticleCard",
  props: ["article"],
};
</script>
<style scoped>
.card-img-top {
  width: 100%;
  height: 100px;
  background-size: cover;
}
</style>