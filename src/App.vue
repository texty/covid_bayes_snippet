<template>
  <div id="app">
    <Calculator />
    <p></p>
    <p></p>
    <p></p>  
  </div>
</template>

<script>

import Matrix from './components/Matrix';
import Calculator from './components/Calculator';


export default {
  name: 'app',
  // data() {

  // },
  components: {
    // Matrix,
    Calculator,
  },
  
  mounted() {
  },
  
  methods: {
    
  }
}
</script>

<style lang="scss">
html {
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