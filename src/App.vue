<template>
  <div id="app">
    <Navbar />
    <notifications group="errors" position="top center" />
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar/Navbar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Navbar
  }
});
</script>

<style></style>
