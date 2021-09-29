<template>
  <div class="container">
    <modal name="updateUser" :width="400" :height="'auto'">
      <form @submit.prevent="updateUserSubmit" class="p-5">
        <div class="form-group">
          <label>Benutzername</label>
          <input type="text" class="form-control" placeholder="Benutzernam eingeben" v-model="updatedUsername" required />
        </div>
        <button type="submit" class="btn btn-primary mt-3">Aktualisieren</button>
      </form>
    </modal>
    <h1>Administration</h1>
    <h2>Alle Einträge</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">CheckIn</th>
          <th scope="col">CheckOut</th>
          <th scope="col">Kategorie</th>
          <th scope="col">Benutzer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in entries" :key="entry.id">
          <th>{{ index }}</th>
          <td>{{ entry.checkIn }}</td>
          <td>{{ entry.checkOut }}</td>
          <td>{{ entry.category.name }}</td>
          <td>{{ entry.user.username }}</td>
        </tr>
      </tbody>
    </table>
    <h2>Benutzer verwalten</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Benutzername</th>
          <th scope="col">Rolle</th>
          <th scope="col">Bearbeiten</th>
          <th scope="col">Löschen</th>
          <th scope="col">Rolle wechseln</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <th>{{ index }}</th>
          <td>{{ user.username }}</td>
          <td>{{ user.role ? user.role.name : 'User' }}</td>
          <td><BIconPencilSquare font-scale="1.5" @click="updateUser(user)" /></td>
          <td><BIconTrash variant="danger" font-scale="1.5" @click="deleteUser(user.id)" /></td>
          <td><BIconPencilSquare font-scale="1.5" @click="toggleRole(user)" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" src="./Admin.ts"></script>
