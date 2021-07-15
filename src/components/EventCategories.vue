<template>
  <div class="event-categories">
    <h5>Category: {{ event.category }}</h5>
    <h5>Organizer: {{ event.organizer }}</h5>
  </div>
</template>

<script>
export default {
  name: 'EventCategories',
  // props: {
  // msg: String
  // }

  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-categories {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
