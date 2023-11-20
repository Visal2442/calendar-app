<template>
  <v-card>
    <div>
      <v-date-picker
        v-if="showDate"
        no-title
        width="300px"
        :return-value-synce="dateTime.date"
        first-day-of-week="1"
        @input="showDate = false"
      >
      </v-date-picker>

      <v-time-picker v-else :return-value-synce="dateTime.time"></v-time-picker>
    </div>
    <v-card-actions>
      <v-btn text @click="showDate=true" >
        Cancel
      </v-btn>
      <v-btn text @click="event" >
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  created(){
    const date = new Date()
    this.dateTime.date = date.toISOString().substring(0, 10)
    let h = date.getHours()
    if(h.toString().length === 1) h = `0${h}`
    let m = date.getMinutes()
    if(m.toString().length === 1) m = `0${m}`
    this.dateTime.time = `${h}:${m}`
  },
  data() {
    return {
      showDate: true,
      dateMenu: false,
      timeMenu: false,
      dateTime: {
        time: '',
        date: ''
      },
    };
  },
  computed:{
    dateTimeString(){
      const [h, m] = this.dateTime.time.split(':')
      const d = this.dateTime.date
      d.setHours(h, m, 0)
      return d
    }
  },
  methods:{
    event(){
      this.$emit('input', this.dateTimeString)
    }
  }
};
</script>
<style></style>
