<template>
  <div class="modal">
    <div class="modal-dialog">
      <slot></slot>
    </div>
    <div class="modal-bg"></div>
  </div>
</template>
<script>
export default {
  name: "Modal",
};
</script>