<template>
  <div class="container">
    <div class="button">
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
      width: 150px;

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
}
</style>
