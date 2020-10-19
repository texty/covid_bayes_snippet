        
<template>
<div class="container">


  <known-dimensions-block @dimensions_changed="(val) => this.box_dimensions = val" class="main-box">
    <div class="background" v-if="box_dimensions">
      <div class="left" :style="{width: left +'px'}">
        <draggable-horizontal-line :top="top2" @change="(val) => top2=val"/>
      </div>

      <div class="right" >
        <draggable-horizontal-line :top="top1" @change="(val) => top1=val"/>
      </div>
    </div>
    <draggable-vertical-line :left="left" @change="(val) => left=val"/>
    

  </known-dimensions-block>

{{box_dimensions}}
{{left}}
</div>
</template>

<script>
import DraggableVerticalLine from './DraggableVerticalLine'
import DraggableHorizontalLine from './DraggableHorizontalLine'
import KnownDimensionsBlock from './KnownDimensionsBlock'
import * as d3 from 'd3-fetch'

export default {
  mounted() {
    let self = this
    
    
  },
  
  data() {
    return {
        sensitivity: 0.65,
        specificity: 0.99,
        prior: 0.4,

        top1: 0,
        top2: 0,
        left: 0,

        box_dimensions: null,

        width: 400,
        height: 400,
    }
  },
  computed: {
    

  },

  components: {
    DraggableVerticalLine,
    DraggableHorizontalLine,
    KnownDimensionsBlock,
  }
}
</script>
 

 <style lang="scss" scoped>
  .container {
    width: 100%;
  }

  .main-box {
    border: 1px solid black;

    width: 400px;
    height: 400px;
    margin: 100px auto;
    position: relative
  }

  .background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    // background-color: red;
    display: flex;

    > * {
      height: 100%;
      position: relative;
      // width: 50%;
      // border: 1px solid yellow;
    }

    .left {
      // background: linear-gradient(to left, pink, transparent);
      background: rgba(255, 192, 203, 0.41);
    }

    .right {
      // background: linear-gradient(to right, greenyellow, transparent);
      background: rgba(172, 255, 47, 0.311);
      flex-grow: 1;
    }
  }

 </style>