<template>
  <div>
    <header class="jumbotron">
      <div class="container">
        <h1>Create Article Page</h1>
      </div>
    </header>
    <section class="py-5">
      <div class="container">
        <!-- 新增文章表單 -->
        <form>
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>City</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Tags</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Image</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Create Article</button>
          </div>
        </form>
        <!-- 新增文章表單 end -->
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "CreateArticlePage",
  data() {
    return {};
  },
  methods: {},
};
</script>