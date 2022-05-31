<template>
  <div class="page-container">
    <div class="card">
      <div class="card-content">
        <PageHeader pageName="Capture" />
        <Button type="text" text="Start Capture" ipcChannel="req-reg" />
      </div>
      <Table :fields="fields" :studentData="studentData"></Table>
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
      {
        ID: "02",
        Name: "Robert V. Kratz",
        Course: "Philosophy",
        Gender: "Male",
        Age: "19",
      },
      {
        ID: "03",
        Name: "Kristen Anderson",
        Course: "Economics",
        Gender: "Female",
        Age: "20",
      },
      {
        ID: "04",
        Name: "Adam Simon",
        Course: "Food science",
        Gender: "Male",
        Age: "21",
      },
      {
        ID: "05",
        Name: "Daisy Katherine",
        Course: "Business studies",
        Gender: "Female",
        Age: "22",
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
}

.card-content {
  padding: 10px;
}
</style>
