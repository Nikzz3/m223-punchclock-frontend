<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Punchclock</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/login">Anmeldung</router-link>
        <router-link class="nav-link" to="/registration">Registrierung</router-link>
        <router-link class="nav-link" to="/admin" v-if="isAdmin">Admin</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto"><button class="btn btn-primary" @click="logOut">Abmelden</button></b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!-- <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Punchclock</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/login">Anmeldung</router-link>
            <router-link class="nav-link" to="/registration">Registrierung</router-link>
            <router-link class="nav-link" to="/admin" v-if="isAdmin">Admin</router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div> -->
</template>

<script lang="ts" src="./Navbar.ts"></script>
