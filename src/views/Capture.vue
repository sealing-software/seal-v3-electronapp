<template>
  <div class="page-container">
    <div class="card">
      <div class="card-content">
        <PageHeader pageName="Capture" />
        <Button type="text" text="Start Capture" ipcChannel="req-reg" />
        <Table :fields="fields" :studentData="studentData"></Table>
      </div>
    </div>
  </div>
</template>
<script>
import PageHeader from "../components/PageHeader.vue";
import Button from "../components/Button.vue";
import Table from "../components/Table.vue";
export default {
  name: "capture-view",
  components: {
    PageHeader,
    Button,
    Table,
  },
  methods: {
    beginCapture() {},
  },
  data() {
    //An array of values for the data
    const studentData = [
      {
        ID: "01",
        Name: "Abiola Esther",
        Course: "Computer Science",
        Gender: "Female",
        Age: "17",
      },
    ];
    const fields = ["ID", "Name", "Course", "Gender", "Age"];
    return { studentData, fields };
  },
};
</script>
<style scoped>
.page-container {
  height: 100%;
  width: 100%;
}
.card {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  overflow: visible;
}

.card-content {
  padding: 10px;
}
</style>
