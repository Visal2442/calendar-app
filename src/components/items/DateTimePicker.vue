<template>
  <v-card>
    <!-- Date picker  -->
    <v-menu
      ref="dateMenu"
      v-model="dateMenu"
      :close-on-content-click="false"
      :return-value.sync="date"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="date"
          label="Start Date"
          prepend-icon="mdi-calendar"
          v-on="on"
        >
        </v-text-field>
      </template>
      <v-date-picker v-model="date">
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="dateMenu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.dateMenu.save(date)">
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>
    <!-- Time picker  -->
    <v-menu
      ref="timeMenu"
      v-model="timeMenu"
      :close-on-content-click="false"
      :return-value.sync="time"
    >
      <template #activator="{ on }">
        <v-text-field
          v-model="time"
          label="Start Time"
          prepend-icon="mdi-calendar"
          v-on="on"
        >
        </v-text-field>
      </template>
      <v-time-picker v-model="time">
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="timeMenu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.timeMenu.save(time)">
          OK
        </v-btn>
      </v-time-picker>
    </v-menu>
    <!-- End Datetime  -->

    <!-- Date picker  -->

    <v-menu
      ref="dateMenu"
      v-model="dateMenu"
      :close-on-content-click="false"
      :return-value.sync="date"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="date"
          label="Start Date"
          prepend-icon="mdi-calendar"
          v-on="on"
        >
        </v-text-field>
      </template>
      <v-date-picker v-model="date">
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="dateMenu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.dateMenu.save(date)">
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>
    <!-- Time picker  -->
    <v-menu
      ref="timeMenu"
      v-model="timeMenu"
      :close-on-content-click="false"
      :return-value.sync="time"
    >
      <template #activator="{ on }">
        <v-text-field
          v-model="time"
          label="Start Time"
          prepend-icon="mdi-calendar"
          v-on="on"
        >
        </v-text-field>
      </template>
      <v-time-picker v-model="time">
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="timeMenu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.timeMenu.save(time)">
          OK
        </v-btn>
      </v-time-picker>
    </v-menu>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      dateMenu: false,
      timeMenu: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substring(0, 10),
      time: null,
    };
  },
};
</script>
<style></style>
