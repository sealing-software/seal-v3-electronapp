<template>
  <div class="container">
    <div class="button">
      <v-icon>mdi-account</v-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-btn",
  props: {
    name: String,
  },
};
</script>
<style>
.container {
  height: 40px;
  width: 40px;
  margin: 20px 10px;
}

.button {
  background: rgb(49, 200, 200);
  border-radius: 50%;
  height: 100%;
}
</style>
