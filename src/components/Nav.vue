<template>
  <nav>
    <div :key="pageName" v-for="pageName in pageNames">
      <NavButton :name="pageName" />
    </div>
  </nav>
</template>
<script>
import NavButton from "./NavButton";
export default {
  name: "nav-menu",
  props: {
    pageNames: Array,
  },
  components: {
    NavButton,
  },
};
</script>
<style scoped>
nav {
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 100%;
  justify-content: center;
  align-content: center;
}
</style>
