<template>
  <div class="container">
    <div class="button">
      <div class="icon">
        <!-- implicit style (fas is assumed) -->
        <font-awesome-icon icon="phone" />
      </div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(49, 200, 200);
  border-radius: 50%;
  height: 100%;
}

.icon {
  font-size: 20px;
  color: white;
}
</style>
