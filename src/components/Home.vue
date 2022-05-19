<template>
  <div class="card">
    <router-link to="/settings">Go to settings</router-link>
  </div>
</template>
<script>
export default {
  name: "home-view",
  components: {},
};
</script>
<style scoped>
.card {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.25);
}
</style>
