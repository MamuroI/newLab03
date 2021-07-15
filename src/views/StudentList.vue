<template>
  <h1>Student List</h1>
  <div class="students">
    <StudentCard v-for="student in students" :key="student.id" :studentProp="student" />
  </div>
</template>

<script>
// @ is an alias to /src
import StudentCard from '../components/StudentCard.vue'
import StudentService from '../services/StudentService.js'

export default {
  name: 'StudentList',
  components: {
    StudentCard
  },
  data() {
    return {
      students: null
    }
  },
  created() {
    StudentService.getStudents()
      .then((response) => {
        this.students = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h4 {
  font-size: 20px;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
