<template>
  <div class="container">
    <h2 class="mb-4">Registrierung</h2>
    <form @submit.prevent="createLogin">
      <div class="form-group">
        <label>Benutzername</label>
        <input type="text" class="form-control" placeholder="Benutzername eingeben" v-model="username" required />
        <label>Passwort</label>
        <input type="password" class="form-control" placeholder="Passwort eingeben" v-model="password" required />
        <label>Passwort wiederholen</label>
        <input type="password" class="form-control" placeholder="Passwort wiederholen" v-model="repeatedPassword" required />
      </div>
      <button type="submit" class="btn btn-primary mt-3">Registrieren</button>
    </form>
  </div>
</template>

<script lang="ts" src="./Registration.ts"></script>
