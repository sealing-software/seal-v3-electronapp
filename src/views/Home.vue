<template>
  <div class="card">
    <PageHeader pageName="Home" />
  </div>
</template>
<script>
import PageHeader from "../components/PageHeader";
export default {
  name: "home-view",
  components: {
    PageHeader,
  },
};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.25);
}
</style>
