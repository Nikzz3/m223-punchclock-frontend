<template>
  <div class="container p-5">
    <form @submit.prevent="updateEntry">
      <b-dropdown id="dropdown-1" text="Kategorie auswählen" class="mb-3">
        <b-dropdown-item v-for="category in categories" :key="category.id" @click="selectCategory(category)">{{ category.name }}</b-dropdown-item>
      </b-dropdown>
      <div class="form-group">
        <label>Check In Date</label>
        <input type="date" class="form-control" placeholder="Datum eingeben" v-model="checkInDate" required />
        <label>Check In Time</label>
        <input type="time" class="form-control" placeholder="Zeit eingeben" v-model="checkInTime" required />
      </div>
      <div class="form-group">
        <label>Check Out Date</label>
        <input type="date" class="form-control" placeholder="Datum eingeben" v-model="checkOutDate" required />
        <label>Check Out Time</label>
        <input type="time" class="form-control" placeholder="Zeit eingeben" v-model="checkOutTime" required />
      </div>
      <button type="submit" class="btn btn-primary mt-3">Aktualisieren</button>
    </form>
  </div>
</template>

<script lang="ts" src="./UpdatePunchclock.ts"></script>
