<template>
  <div id="app">
    <Calculator @height_changed="onresize"/>

  </div>
</template>

<script>

import Matrix from './components/Matrix';
import Calculator from './components/Calculator';


export default {
  name: 'app',
  data() {
    return {
      height: 200,
    }
  },

  components: {
    Calculator,
  },
  
  mounted() {
     this.$nextTick(function(){
        this.onresize();
        window.addEventListener("resize", this.onresize)
    })
  },

  destroyed() {
    window.removeEventListener("resize", this.onresize)
  },

  methods: {
    onresize(e) {
      this.$nextTick(function(){
        this.height = document.documentElement.offsetHeight

      })
    }
  },

    watch: {
      height: {
          handler(val) {
            console.log(this.height)
            
            window.parent.postMessage(this.height
              // set target domain
              ,"*"
            )},
          //deep: true,
      }
    }


}
</script>

<style lang="scss">
section.chart-container {
  padding: 0 2em;
  max-width: 600px; 
  margin: 0 auto;
}

html, svg {
  font-family:
    'ProximaNova',
    'Helvetica Neue',
    Arial,
    sans-serif;
  
  font-size: 12px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

:root {
  --col-salmon: #ff673f; 
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  line-height: 1.5;
  font-size: 14px;
  margin: 0 auto;
}

input {
  font-size: 16px;
}

p {
  margin-bottom: 1em;
}

a {
  color: inherit;
}


</style>