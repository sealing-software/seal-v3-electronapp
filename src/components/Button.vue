<template>
  <div class="container">
    <div v-if="type == 'text'">{{ text }}</div>
    <div v-if="type == 'icon-text'">
      <font-awesome-icon :icon="icon" />
      {{ text }}
    </div>
    <div v-if="type == 'text-icon'">
      {{ text }}
      <font-awesome-icon :icon="icon" />
    </div>
    <div v-if="type == 'icon'">
      <font-awesome-icon :icon="icon" />
    </div>
  </div>
</template>
<script>
//options for text only, icon text, text icon, or icon only
export default {
  name: "standard-btn",
  props: {
    type: String,
    text: String,
    icon: String,
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: inline-block;
  background: #34c759;
  border: 2px #34c759 solid;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.1s ease-out 0s;
  z-index: 1;

  &:hover {
    background: white;
    color: #34c759;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  }
}
</style>
