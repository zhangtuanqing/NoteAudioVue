<template>
  <div ref="canvasContainer" class="canvas-container">
    <canvas ref="canvas" :width="width" :height="height"></canvas>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted, watch, provide} from 'vue';
import {defineExpose} from 'vue'
import { } from 'vue-scrolll'

let scrollContainer = null;

const props = defineProps({
  asrText: {
    type: Array,
    default: () => []
  },
  curVolume: {
    type: Number,
    default: 0
  },
  width: {
    type: Number,
    default: 500
  },
  height: {
    type: Number,
    default: 200
  },
  waveformData: {
    type: Array,
    default: () => []
  },
  waveColor: {
    type: String,
    default: '#f00'
  },
  backgroundColor: {
    type: String,
    default: '#fff'
  },
  lineWidth: {
    type: Number,
    default: 1
  },
  speed: {
    type: Number,
    default: 1
  }
})
let canvasContainer = ref(null)
let asrTextContainer = ref(null)
let canvas = ref(null)
let ctx = null;
let animationFrameId = null;
let dataOffset = 0;
const volumeData = Array<number>();
let asrContent = "";

const initCanvas = () => {
  console.log("canvas: " + canvas);
  ctx = canvas.value.getContext('2d');
  // drawWaveform();
  // animate();
};

const drawWaveform = () => {
  if (ctx == null) {
    setTimeout(() => {
      drawWaveform()
    }, 100);
    return;
  }
  ctx.color = "#fff";
  ctx.clearRect(0, 0, props.width, props.height);
  ctx.fillStyle = props.backgroundColor;
  ctx.fillRect(0, 0, props.width, props.height);

  ctx.beginPath();
  ctx.moveTo(0, props.height / 2);

  const normalizedData = volumeData.map(value => (value));

  let i = 0;
  while (i < normalizedData.length) {
    let volume: number = normalizedData[i]
    let top: number = props.height / 2 - (volume / 2)
    let bottom: number = props.height / 2 + (volume / 2)
    ctx.lineTo(i, top)
    ctx.lineTo(i, bottom)
    i++
  }
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(props.width, props.height / 2);
  ctx.lineTo(props.width, props.height / 2);
  ctx.color = "#f00";
  ctx.lineWidth = 1;
  ctx.stroke();
};

const animate = () => {
  dataOffset = (dataOffset + 1) % props.waveformData.length;
  drawWaveform();
  animationFrameId = requestAnimationFrame(animate);
};

onMounted(() => {
  // initCanvas();
  scrollContainer = new iScroll(asrTextContainer.value);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
});

watch(
    () => props.waveformData,
    newData => {
      dataOffset = 0; // Reset offset when new data arrives
      console.log("call drawWaveform");
      drawWaveform();
      // animate();
    },
    {immediate: true}
);

watch(
    () => props.curVolume,
    newData => {
      startAnim(newData);
    },
);

watch(
    () => props.asrText,
     newData => {
      console.log("asrText: " + newData[0]);
      if (asrTextContainer.value != undefined) {
        asrTextContainer.value.innerHTML += newData[0];
      }
    },
    {immediate: true}
);

const name = ref("myName")
let animStart = false
const startAnim = (testParam: number) => {
  volumeData.push(testParam);
  while (volumeData.length > props.width) {
    volumeData.shift();
  }
  if (!animStart) {
    animate();
    animStart = true;
  }
};

const updateAsrText = (testParam: string) => {
  asrContent += testParam;
  asrTextContainer.value.innerHTML = asrContent;
  scrollContainer.refresh();
};

defineExpose({
  startAnim,
  updateAsrText,
})
</script>

<style scoped>
.canvas-container {
  width: 100%;
  height: 50%;
}
.asr-container {
  width: 100%;
  max-height: 300px;
  overflow: hidden;
}
.mp3-container {
  width: 100%;
  height: 100px;
  overflow: hidden;
}
</style>