<template>
  <div class="container p-5">
    <form @submit.prevent="updateEntry">
      <div class="form-group">
        <label>Check In Date</label>
        <input type="date" class="form-control" placeholder="Enter Date" v-model="checkInDate" required />
        <label>Check In Time</label>
        <input type="time" class="form-control" placeholder="Enter Time" v-model="checkInTime" required />
      </div>
      <div class="form-group">
        <label>Check Out Date</label>
        <input type="date" class="form-control" placeholder="Enter Date" v-model="checkOutDate" required />
        <label>Check Out Time</label>
        <input type="time" class="form-control" placeholder="Enter Time" v-model="checkOutTime" required />
      </div>
      <button type="submit" class="btn btn-primary mt-3">Update</button>
    </form>
  </div>
</template>

<script lang="ts" src="./UpdatePunchclock.ts"></script>
