<template>
  <div class="container">
    <h2 class="mb-4">Anmeldung</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label>Benutzername</label>
        <input type="text" class="form-control" placeholder="Benutzername eingeben" v-model="username" required />
        <label>Passwort</label>
        <input type="password" class="form-control" placeholder="Passwort eingeben" v-model="password" required />
      </div>
      <button type="submit" class="btn btn-primary mt-3">Anmelden</button>
    </form>
    <button class="btn btn-secondary mt-3" @click="$router.push('/registration')">Registrierung</button>
  </div>
</template>

<script lang="ts" src="./Login.ts"></script>
