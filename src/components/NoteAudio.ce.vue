<template>
  <div id="shadow-host" ref="shadowHost">
    <div ref="mp3Container" class="mp3-container" @click="handleContainerClick">
      <audio id="note-audio" style="width: 50%; height: 100%; display: none;" controls ref="audioElem"></audio>
      <img ref="playControl" src="../assets/play.png" alt=" "
           style="margin-right: 13px; margin-left: 17px; width: 36px; height: 36px;" @click="clickPlayPause"/>
      <el-slider id="audio-progressbar" v-model="sliderValue"></el-slider>
      <div id="audio-time" v-text="audioTimeValue"
           style="width: 55px; height: 20px;display: inline-flex; margin-left: 10px; margin-right: 10px; font-size: 14px;"/>
      <img id="more" ref="moreBtn" style="align-content: center; width: 65px; height: 30px;" src="../assets/more.png"
           alt=" " @click="onMoreClick"></img>
    </div>
    <div ref="recordingIcon" class="recording-container">
      <img src="../../src/assets/duer_note_icon_recording_icon.png" alt="" style="height: 60px; user-select: none;">
    </div>
    <div v-if="showModal" ref="modalRef" class="modal" :style="{ top: buttonTop + 'px', left: buttonLeft + 'px' }">
      <div class="modal-content">
        <button @click="onSaveClick"
                style="margin-bottom: 20px; background-color: transparent; border: none; outline: none;">保存
        </button>
        <button @click="onDeleteClick"
                style="margin-bottom: 20px; background-color: transparent; border: none; outline: none;">删除
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineExpose, onMounted, onUnmounted, ref, watch} from 'vue';
import {ElSlider} from 'element-plus'
import {ElText} from 'element-plus'

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

let sliderValue = ref(0);
let playControl = ref<HTMLImageElement>(null);

let playing = false;

const emitters = defineEmits(['save', 'delete', 'onMounted'])

let mp3Container = ref(null)
let recordingIcon = ref(null)
let audioElem = ref<HTMLAudioElement>(null)
let moreBtn = ref(null)
let modalRef = ref(null)
let shadowHost = ref(null)
let audioTimeValue = ref<string>("00:00:00")

const showModal = ref(false);
const buttonTop = ref(0);
const buttonLeft = ref(0);

const onMoreClick = (e: MouseEvent) => {
  e.stopPropagation();
  if (moreBtn.value) {
    const {top, left} = moreBtn.value.getBoundingClientRect();
    buttonTop.value = top + window.scrollY;
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
    console.log("pause_audio");
    playControl.value.src = new URL('../assets/play.png', import.meta.url).href;
    (audioElem.value as HTMLAudioElement).pause();
  } else {
    playing = true;
    console.log("play_audio");
    playControl.value.src = new URL('../assets/pause.png', import.meta.url).href;
    (audioElem.value as HTMLAudioElement).play();
  }
}

onMounted(() => {
  console.log('onMounted: ' + props.audioUrl);
  updateState();
  (audioElem.value as HTMLAudioElement).addEventListener('timeupdate', () => {
    let curTime = (audioElem.value as HTMLAudioElement).currentTime;
    let duration = (audioElem.value as HTMLAudioElement).duration;
    console.log("playing: " + curTime + ", " + duration);
    sliderValue.value = (curTime / duration) * 100;
  })
  emitters('onMounted', {
    audioUrl: props.audioUrl,
  });
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
    audioElem.value!.addEventListener('loadedmetadata', function () {
      console.log("audio length: " + audioElem.value!.duration);
      const duration = audioElem.value!.duration;
      if (duration >= 0) {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const remainingSeconds = Math.round(duration % 60);

        let result = "";

        if (hours > 0) {
          result += hours.toString().padStart(2, "0") + ":";
        } else {
          result += "00:"
        }

        result += minutes.toString().padStart(2, "0") + ":";
        result += remainingSeconds.toString().padStart(2, "0");
        console.log("setAudioDuration" + result);
        audioTimeValue.value = result;
      } else {
        audioTimeValue.value = "00:00:00";
      }
    })
    return;
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

const onDeleteClick = () => {
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

<style scoped lang="scss">
.mp3-container {
  position: relative;
  width: 458px;
  height: 60px;
  align-self: start;
  overflow: hidden;
  text-align: start;
  vertical-align: center;
  display: flex;
  align-items: center;
  background-color: #3B77FB0A;
  border-radius: 12px;
}

.recording-container {
  width: 100%;
  height: 60px;
  display: flex;
  text-align: start;
  margin-bottom: 30px;
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

::v-deep .el-slider {
  .el-slider__button {
    background-color: #ffffff !important;
    width: 28px;
    height: 28px;
    box-shadow: 0 0 8px 2px rgba(53, 53, 53, 0.1);
    border-radius: 50%;
    border: none !important;
  }

  /* 修改滑块轨道的样式 */
  .el-slider__bar {
    background-color: #3F91FB !important;
  }

  padding-left: 14px;
  padding-right: 14px;
}
</style>