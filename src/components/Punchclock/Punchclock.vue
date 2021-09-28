<template>
  <div class="container">
    <modal name="updateEntry" :width="400" :height="'auto'">
      <UpdatePunchclock
        :idProp="entryToUpdate.id"
        :checkInDateProp="entryToUpdate.checkInDate"
        :checkInTimeProp="entryToUpdate.checkInTime"
        :checkOutDateProp="entryToUpdate.checkOutDate"
        :checkOutTimeProp="entryToUpdate.checkOutTime"
        @updated="getEntries"
      />
    </modal>
    <form @submit.prevent="createEntry">
      <div class="form-group">
        <label>Eincheckdatum</label>
        <input type="date" class="form-control" placeholder="Enter Date" v-model="checkInDate" required />
        <label>Eincheckzeit</label>
        <input type="time" class="form-control" placeholder="Enter Time" v-model="checkInTime" required />
      </div>
      <div class="form-group">
        <label>Auscheckdatum</label>
        <input type="date" class="form-control" placeholder="Enter Date" v-model="checkOutDate" required />
        <label>Auscheckzeit</label>
        <input type="time" class="form-control" placeholder="Enter Time" v-model="checkOutTime" required />
      </div>
      <button type="submit" class="btn btn-primary mt-3">Speichern</button>
    </form>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">CheckIn</th>
          <th scope="col">CheckOut</th>
          <th scope="col">Bearbeiten</th>
          <th scope="col">Löschen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in entries" :key="entry.id">
          <th>{{ entry.id }}</th>
          <td>{{ entry.checkIn }}</td>
          <td>{{ entry.checkOut }}</td>
          <td><BIconPencilSquare font-scale="1.5" @click="updateEntry(entry)" /></td>
          <td><BIconTrash variant="danger" font-scale="1.5" @click="deleteEntry(entry.id)" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" src="./Punchclock.ts"></script>
