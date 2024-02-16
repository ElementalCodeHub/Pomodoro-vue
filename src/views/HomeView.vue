<template>
  <main>
    <div class="centre">
      <span id="text">Pomodoro Timer in Vue3</span>
    </div>
    <br/>
    <PomodoroTimer/>
  </main>
</template>

<script setup lang="ts">
import PomodoroTimer from "@/components/Pomodoro.vue";
</script>

<style scoped>
.centre {
  display: flex;
  justify-content: center;
  align-items: center;
}

#text {
  font: 2em sans-serif;
}
</style>
