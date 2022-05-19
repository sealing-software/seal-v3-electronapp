<template>
  <h2>{{ pageName }}</h2>
</template>
<script>
export default {
  name: "page-header",
  props: {
    pageName: String,
  },
};
</script>
