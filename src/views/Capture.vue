<template>
  <div class="page-container">
    <div class="card">
      <div class="card-content">
        <PageHeader pageName="Capture" />
        <Button type="text" text="Start Capture" ipcChannel="req-reg" />
      </div>
    </div>
  </div>
</template>
<script>
import PageHeader from "../components/PageHeader.vue";
import Button from "../components/Button.vue";
export default {
  name: "capture-view",
  components: {
    PageHeader,
    Button,
  },
  methods: {
    beginCapture() {},
  },
};
</script>
<style scoped>
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
