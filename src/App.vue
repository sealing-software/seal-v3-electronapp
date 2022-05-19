<template>
  <div class="app-view">
    <Header />
    <div class="content">
      <Nav
        :navBtns="navBtns"
        :currentPage="currentPage"
        @page-change="changePage"
      />
      <div class="page-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
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
      currentPage: "Home",
    };
  },
  methods: {
    changePage(pageName) {
      this.currentPage = pageName;
      pageName == "Home"
        ? this.$router.push("/")
        : this.$router.push("/" + pageName);
    },
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

.page-view {
  flex-grow: 1;
  padding: 10px;
  padding-left: 10px;
}
</style>
