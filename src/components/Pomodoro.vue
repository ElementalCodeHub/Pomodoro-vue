<template>
    <div class="pomodoro">
      <div class="timer">
        {{ minutes }}:{{ seconds < 10 ? '0' + seconds : seconds }}
      </div>
      <div class="controls">
        <button class="start-btn" @click="startTimer" :disabled="isTimerRunning">Start</button>
        <button class="stop-btn" @click="stopTimer" :disabled="!isTimerRunning">Stop</button>
        <button class="reset-btn" @click="resetTimer">Reset</button>
        <button class="break-btn" @click="startBreak(5)">Short Break</button>
        <button class="break-btn" @click="startBreak(10)">Long Break</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'PomodoroTimer',
    setup() {
      const minutes = ref(25);
      const seconds = ref(0);
      const isTimerRunning = ref(false);
      let timer = 0;
  
      const startTimer = () => {
        isTimerRunning.value = true;
        timer = setInterval(() => {
          if (seconds.value > 0) {
            seconds.value--;
          } else if (minutes.value > 0) {
            seconds.value = 59;
            minutes.value--;
          } else {
            stopTimer();
            // Play sound when timer ends
            playSound();
          }
        }, 1000);
      };
  
      const stopTimer = () => {
        isTimerRunning.value = false;
        clearInterval(timer);
      };
  
      const resetTimer = () => {
        stopTimer();
        minutes.value = 25;
        seconds.value = 0;
      };
  
      const startBreak = (duration:any) => {
        stopTimer();
        minutes.value = duration;
        seconds.value = 0;
        startTimer();
      };
  
      const playSound = () => {
        // Play your sound here
        // For example:
        // const audio = new Audio('sound.mp3');
        // audio.play();
      };
  
      return {
        minutes,
        seconds,
        isTimerRunning,
        startTimer,
        stopTimer,
        resetTimer,
        startBreak,
      };
    },
  });
  </script>
  
  <style scoped>
  .pomodoro {
    text-align: center;
    font-size: 2rem;
  }
  
  .timer {
    font-family: 'Courier New', monospace;
    color: #333;
  }
  
  .controls {
    margin-top: 20px;
  }
  
  button {
    font-size: 1rem;
    padding: 10px 20px;
    margin: 0 5px;
  }
  
  .start-btn {
    background-color: #4caf50;
    color: white;
    border: none;
  }
  
  .stop-btn {
    background-color: #f44336;
    color: white;
    border: none;
  }
  
  .reset-btn {
    background-color: #008CBA;
    color: white;
    border: none;
  }
  
  .break-btn {
    background-color: #555;
    color: white;
    border: none;
  }
  </style>
  