<script setup lang="ts">
import NoteAudio from "./components/NoteAudio.ce.vue";
import {onMounted, reactive, ref } from "vue";

const waveForm = ref();
const noteAudio = ref();
function generateWaveformData() {
  let curRecording = recordingState.recording;
  recordingState.recording = !curRecording;
  if (curRecording) {
    recordingUrl.url = "../../src/assets/note.mp3"
  }
}

  onMounted(() => {
    console.log("onMounted");
    noteAudio.value.addAudioEventListener(function (event: Event) {
      console.log(event.type + "," + event.detail.audioUrl);
    });
  });

const recordingState = reactive(
    {
      recording: true,
    }
);
const recordingUrl = reactive({
  url: ''
});
</script>

<template>
  <div style="width: 800px">
    <NoteAudio :width="800" :height="200" ref="noteAudio" :recording="recordingState.recording" :audio-url="recordingUrl.url"/>
    <button type="button" @click="generateWaveformData()">Hahaha</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
