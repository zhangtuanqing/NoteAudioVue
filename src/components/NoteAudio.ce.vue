<template>
  <div id="shadow-host" ref="shadowHost">
  <div ref="mp3Container" class="mp3-container" @click="handleContainerClick">
    <audio id="note-audio" style="width: 50%; height: 100%; display: none;" controls ref="audioElem"></audio>
    <img ref="playControl" src="../assets/play.png"  alt=" " style="margin-right: 20px; margin-left: 10px;" @click="clickPlayPause"/>
    <el-slider id="audio-progressbar" v-model="sliderValue"></el-slider>
    <img id="more" ref="moreBtn" style="align-content: center" src="../assets/more.png" alt=" " @click="onMoreClick"></img>
  </div>
  <div ref="recordingIcon" class="recording-container">
    <img src="../../src/assets/duer_note_icon_recording_icon.png" alt="" style="height: 100%; user-select: none;">

  </div>
  <div v-if="showModal" ref="modalRef" class="modal" :style="{ top: buttonTop + 'px', left: buttonLeft + 'px' }">
    <div class="modal-content">
      <button @click="onSaveClick" style="margin-bottom: 20px; background-color: transparent; border: none; outline: none;">保存</button>
      <button @click="onDeleteClick" style="margin-bottom: 20px; background-color: transparent; border: none; outline: none;">删除</button>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted, watch} from 'vue';
import { defineExpose } from 'vue'
import { ElSlider } from 'element-plus'
import 'element-plus/dist/index.css'

const props = defineProps({
  width: {
    type: Number,
    default: 500
  },
  height: {
    type: Number,
    default: 200
  },
  recording: {
    type: Boolean,
    default: true,
  },
  audioUrl: {
    type: String,
    default: ''
  }
})

let sliderValue=ref(0);
let playControl = ref<HTMLImageElement>(null);

let playing = false;

const emitters = defineEmits(['save', 'delete'])

let mp3Container = ref(null)
let recordingIcon = ref(null)
let audioElem = ref<HTMLAudioElement>(null)
let moreBtn = ref(null)
let modalRef = ref(null)
let shadowHost = ref(null)

const showModal = ref(false);
const buttonTop = ref(0);
const buttonLeft = ref(0);

const onMoreClick = (e: MouseEvent) => {
  e.stopPropagation();
  if (moreBtn.value) {
    const { top, left } = moreBtn.value.getBoundingClientRect();
    buttonTop.value = top;
    buttonLeft.value = left;
  }
  showModal.value = true;
}

const handleContainerClick = (e: MouseEvent) => {
  if (modalRef.value) {
    if (!modalRef.value.contains(e.target) && showModal.value) {
      showModal.value = false;
    }
  }
}

const clickPlayPause = (e: MouseEvent) => {
  if (playing) {
    playing = false;
    playControl.value.src = "/src/assets/play.png";
    (audioElem.value as HTMLAudioElement).pause();
  } else {
    playing = true;
    playControl.value.src = "/src/assets/pause.png";
    (audioElem.value as HTMLAudioElement).play();
  }
}

onMounted( () => {
  console.log('onMounted')
  updateState();
  (audioElem.value as HTMLAudioElement).addEventListener('timeupdate', () => {
      let curTime = (audioElem.value as HTMLAudioElement).currentTime;
      let duration = (audioElem.value as HTMLAudioElement).duration;
      console.log("playing: " + curTime + ", " + duration);
      sliderValue.value = (curTime / duration) * 100;
  })
});

onUnmounted(() => {

});

const setVolume = (volume: Boolean) => {
  console.log('setVolume', volume)
  updateState()
};

function updateState() {
  console.log('updateState: ' + props.audioUrl)
  audioElem.value!.src = props.audioUrl
  if (props.audioUrl !== '') {
    audioElem.value!.src = props.audioUrl
    mp3Container.value!.style.display = 'flex'
    recordingIcon.value!.style.display = 'none'
    return
  }
  if (props.recording) {
    mp3Container.value!.style.display = 'none'
    recordingIcon.value!.style.display = 'block'
  } else {
    mp3Container.value!.style.display = 'flex'
    recordingIcon.value!.style.display = 'none'
  }
}

watch(() => props.recording, () => {
    console.log('recordingChanged', props.recording)
    updateState()
})

watch(() => props.audioUrl, () => {
  console.log('audioUrlChanged', props.audioUrl)
  audioElem.value!.src = props.audioUrl
  updateState()
})

const onSaveClick = () => {
  showModal.value = false;
  console.log('onSaveClick')
  emitters('save', {
    audioUrl: audioElem.value!.src
  })
}

const onDeleteClick  = () => {
  showModal.value = false;
  console.log('onDeleteClick')
  emitters('delete', {
    audioUrl: audioElem.value!.src
  });
}

defineExpose({
  setVolume,
  onSaveClick,
  onDeleteClick,
  showModal,
  buttonTop,
  buttonLeft,
})
</script>

<style scoped>
.mp3-container {
  position: relative;
  width: 100%;
  height: 60px;
  align-self: start;
  overflow: hidden;
  text-align: start;
  vertical-align: center;
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

}
.recording-container {
  width: 100%;
  height: 60px;
  display: flex;
  text-align: start;
}
.modal {
  position: absolute; /* 使用绝对定位 */
  /* 其他样式可以根据需要添加，例如边框、背景等 */
}

.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>