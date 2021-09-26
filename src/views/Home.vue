<template>
  <div class="container">
    <punch-clock />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PunchClock from '@/components/Punchclock/Punchclock.vue'; // @ is an alias to /src
export default Vue.extend({
  name: 'Home',
  components: { PunchClock }
});
</script>
