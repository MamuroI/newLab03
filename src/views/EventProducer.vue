<template>
  <div class="producer">
    <div class="producer-content">
      <h1>Events Producer</h1>
      <EventCategories v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
import EventCategories from '../components/EventCategories.vue'

export default {
  name: 'EventProducer',
  // props: {
  // msg: String
  // }
  components: {
    EventCategories
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: 'animal welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new faline friend at this event.',
          location: 'Meow Town',
          date: 'January 28, 2022',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kat Laydee'
        },
        {
          id: 4582797,
          category: 'food',
          title: 'Community Gardening',
          description: 'Join us as we tend to the community edible plants.',
          location: 'Flora City',
          date: 'March 14, 2022',
          time: '10:00',
          petsAllowed: true,
          organizer: 'Fern Pollin'
        },
        {
          id: 8419988,
          category: 'sustainability',
          title: 'Beach Cleanup',
          description: 'Help pick up trash along the shore.',
          location: 'Playa Del Carmen',
          date: 'July 22, 2022',
          time: '11:00',
          petsAllowed: false,
          organizer: 'Carey Wales'
        }
      ]
    }
  }
}
</script>

<style scoped>
.producer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.producer-content {
  border: 1px solid blue;
  padding: 15px;
  width: 300px;
}
h4 {
  font-size: 20px;
}
</style>
