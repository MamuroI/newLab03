<template>
  <div class="student-card">
    <h3>Name: {{studentProp.name}}</h3>
    <h3>Surname: {{studentProp.surname}}</h3>
    <h3>GPA: {{studentProp.gpa}}</h3>
  </div>
</template>

<script>

export default {
  name: 'StudentCard',
  // props: {
  // msg: String
  // }
  props: {
    studentProp: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.student-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
