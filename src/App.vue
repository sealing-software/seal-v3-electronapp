<template>
  <div class="app-view">
    <Header />
    <div class="content">
      <Nav />
      <div class="page-view">
        <Home />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home";
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Home,
    Nav,
    Header,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  height: 100%;
}

.content {
  display: flex;
  flex-grow: 1;
}

body {
  height: 100vh;
}

.app-view {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
