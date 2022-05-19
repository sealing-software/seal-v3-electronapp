<template>
  <div class="container">
    <div
      :class="[navBtn.name == currentPage ? 'selected' : '', 'button']"
      @mouseenter="expandButton"
      @mouseleave="closeButton"
      @click="$emit('page-change', navBtn.name)"
    >
      <div class="content">
        <!-- implicit style (fas is assumed) -->
        <div class="icon">
          <font-awesome-icon :icon="navBtn.icon" />
        </div>
        <div class="btn-name">{{ navBtn.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-btn",
  props: {
    navBtn: Object,
    currentPage: String,
  },
  methods: {
    expandButton() {
      var contentArea = this.$el.querySelector(".content");
      var button = this.$el.querySelector(".button");

      var contentWidth = contentArea.offsetWidth;

      button.style.width = contentWidth + "px";
    },
    closeButton() {
      var button = this.$el.querySelector(".button");

      button.style.width = "50px";
    },
  },
};
</script>
<style lang="scss">
.container {
  position: relative;
  margin: 20px 0px;
  margin-left: 5px;

  .button {
    display: flex;
    align-items: center;
    margin: auto;
    //justify-content: center;
    background: #31c8c8;
    border-radius: 30px;
    border: 2px solid #31c8c8;
    height: 50px;
    width: 50px;
    cursor: pointer;
    transition: width 0.1s ease-out 0s;
    overflow: hidden;

    &:hover {
      background: white;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);

      .content {
        color: #31c8c8;
      }
    }

    .content {
      display: flex;
      font-size: 25px;
      color: white;
      text-align: center;
      font-weight: 600;

      .icon {
        width: 50px;
      }

      .btn-name {
        padding-right: 20px;
      }
    }
  }

  .selected {
    background: white;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);

    .content {
      color: #31c8c8;
    }
  }
}
</style>
