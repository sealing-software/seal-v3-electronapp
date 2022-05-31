<template>
  <div class="page-container">
    <div class="card">
      <div class="card-content">
        <PageHeader pageName="Home" />
        <Button type="text" text="Submit" icon="check" />
      </div>
    </div>
  </div>
</template>
<script>
import PageHeader from "../components/PageHeader";
import Button from "../components/Button.vue";
export default {
  name: "home-view",
  components: {
    PageHeader,
    Button,
  },
};
</script>
<style lang="scss" scoped>
.page-container {
  height: 100%;
  width: 100%;
}
.card {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
}

.card-content {
  padding: 10px;
}
</style>
