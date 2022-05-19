<template>
  <nav>
    <div :key="navBtn.name" v-for="navBtn in navBtns">
      <NavButton
        :navBtn="navBtn"
        :currentPage="currentPage"
        @page-change="$emit('page-change', navBtn.name)"
      />
    </div>
  </nav>
</template>
<script>
import NavButton from "./NavButton";
export default {
  name: "nav-menu",
  props: {
    navBtns: Array,
    currentPage: String,
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
