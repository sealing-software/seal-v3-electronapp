<template>
  <h1>{{ pageName }}</h1>
</template>
<script>
export default {
  name: "page-header",
  props: {
    pageName: String,
  },
};
</script>
