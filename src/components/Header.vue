<template>
  <div class="header-container">
    <div class="header">
      <img :src="require('@/assets/logo.svg')" />
      <h1>Software Extractor and Audit Logger</h1>
    </div>
    <div class="connect-status">
      <font-awesome-icon icon="cloud" />
    </div>
  </div>
</template>
<script>
export default {
  name: "header-top",
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
}
img {
  width: 60px;
  margin: 0px 5px;
}

h1 {
  margin-left: 10px;
}

.header-container {
  display: flex;
  justify-content: space-between;
}

.connect-status {
  color: #ff3a30;
  font-size: 1.5em;
  margin: auto 0;
  margin-right: 10px;
}
</style>
