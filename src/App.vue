<template>
  <div class="app-view">
    <Header />
    <div class="content">
      <Nav :navBtns="navBtns" />
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
  data() {
    return {
      navBtns: [
        {
          name: "Home",
          icon: "home",
        },
        {
          name: "View",
          icon: "eye",
        },
        {
          name: "Capture",
          icon: "camera",
        },
        {
          name: "Check",
          icon: "check",
        },
        {
          name: "Settings",
          icon: "gear",
        },
      ],
    };
  },
};
</script>

<style>
@font-face {
  font-family: "Inter";
  src: local("Inter"), url(./fonts/Inter/Inter.ttf) format("truetype");
}

* {
  padding: 0;
  margin: 0;
  font-family: "Inter";
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
