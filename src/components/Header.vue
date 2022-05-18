<template>
  <div class="header">
    <img src="logo.svg" />
    <h1>Software Extractor and Audit Logger</h1>
  </div>
</template>
<script>
export default {
  name: "header-top",
};
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
}
img {
  width: 50px;
  margin: 0px 5px;
}

h1 {
  margin-left: 10px;
}
</style>
