<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <notifications group="createError" position="top center" />
    <router-view />
  </div>
</template>

<style></style>
