<template>
  <div id="mainIndex" ref="mainIndex">
    <div
      class="back"
      v-bind:style="{
        backgroundImage: 'url(' + bg + ')',
        backgroundSize: 'contain',
        backgroundRepete: 'no-repete',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }"
    >
      <!-- <p class="typing" v-show="true">BlueBerryPie</p> -->
      <div class="arrow">
        <el-button
          style="background-color: unset"
          icon="el-icon-arrow-down"
          plain
          circle
          @click="upPronbit"
        ></el-button>
      </div>
    </div>
    <div id="pronbit" ref="pronbit">
      <!-- 内容 -->
      <router-view></router-view>
    </div>
    <bottom-info />
    <el-backtop></el-backtop>
  </div>
</template>
<script>
import backImg from "../assets/image4.jpg";
import bottomInfo from "../components/bottomInfo";
export default {
  components: {
    bottomInfo,
  },
  name: "mainIndex",
  data() {
    return {
      bg: backImg,
    };
  },
  methods: {
    upPronbit() {
      this.$refs.pronbit.scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "start", // 上边框与视窗顶部平齐。默认值
      });
    },
  },
};
</script>
<style scoped>
.card-child {
  padding-left: 10px;
  padding-right: 10px;
}
.back {
  height: calc(100vh - 30px) !important;
  width: 100%;
  position: relative;
  /* background-image: url("../../assets/image2.png") no-repeat center top */
}
.typing {
  color: #92caff;
  font-size: 250%;
  font-style: italic;
  width: 6.7em;
  height: 1.5em;
  border-right: 1px solid transparent;
  animation: typing 3.5s steps(14, end), blink-caret 0.75s step-end infinite;
  font-family: Consolas, Monaco;
  word-break: break-all;
  overflow: hidden;
  margin: auto;
  position: absolute;
  top: 0;
  left: 10px;
  bottom: 250px;
  right: 0;
}
/* 打印效果 */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 7em;
  }
}
/* 光标闪啊闪 */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: currentColor;
  }
}

.arrow {
  margin: auto;
  position: absolute;
  bottom: 10%;
  left: 51%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin-left: -1%;
  animation-name: beat;
  /*动画名称*/
  animation-duration: 0.7s;
  /*设置秒数*/
  animation-timing-function: linear;
  /*速度曲线*/
  animation-iteration-count: infinite;
  /*播放次数*/
  animation-direction: alternate;
  /*逆向播放*/
  animation-play-state: running;
  /*正在运行*/
}

@keyframes beat {
  0% {
    bottom: 5%;
  }

  100% {
    bottom: 8%;
  }
}

.arrow a-button {
  width: 30px;
}

#pronbit {
  background-color: #2b2b2b;
  padding-top: 70px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
}

#mainIndex {
  background-color: #2b2b2b;
}
</style>