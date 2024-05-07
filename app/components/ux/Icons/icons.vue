<template>
  <svg style="display: none;">
    <symbol id="expand" viewBox="0 -960 960 960">
      <Expand />
    </symbol>
    <symbol id="calendar" viewBox="0 -960 960 960">
      <Calendar />
    </symbol>
    <symbol id="search" viewBox="0 -960 960 960">
      <Search />
    </symbol>
    <symbol id="settings" viewBox="0 -960 960 960">
      <Settings />
    </symbol>
    <symbol id="notification" viewBox="0 -960 960 960">
      <Notification />
    </symbol>
  </svg>
</template>

<script>
import Expand from './icon/Expand.vue';
import Calendar from './icon/Calendar.vue';
import Search from './icon/Search.vue';
import Settings from './icon/Settings.vue';
import Notification from './icon/Notification.vue';

export default {
  components: {
    Expand,
    Calendar,
    Search,
    Settings,
    Notification
  }
}
</script>