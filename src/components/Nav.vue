<template>
  <nav>
    <div :key="navBtn.name" v-for="navBtn in navBtns">
      <NavButton :navBtn="navBtn" />
    </div>
  </nav>
</template>
<script>
import NavButton from "./NavButton";
export default {
  name: "nav-menu",
  props: {
    navBtns: Array,
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
  width: 60px;
  height: 100%;
  justify-content: center;
  align-content: center;
}
</style>
