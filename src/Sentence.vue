<template>
  <div>
    <p>
      На 
      <adjustable-number :value.sync="day_after_exposure" :min="0" :max="20"  >
        <template v-slot:post_text> -ий</template>
      </adjustable-number> 
      день після інфікування, за умови того, що початкова ймовірність захворіти була 
      <adjustable-number :value.sync="pre_test_p" :tooltip_fixed="false" >
        <template v-slot:post_text> %</template>
      </adjustable-number>, ймовірність 
      що ваш негативний результат справжній (тобто ви справді не хворієте), 
      буде складати <span class="result">{{negative_result_is_true_p}}% </span>
    </p>
  </div>
</template>

<script>
import AdjustableNumber from './components/AdjustableNumber'
import chart_data from './assets/chart_data.csv'

chart_data.forEach(r => {
    r.sensitivity = 1 - r.antisensitivity;
});

let sensitivity_map = new Map(chart_data.map(o => [o.day, o.sensitivity]))


export default {
  components: { AdjustableNumber },
  name: 'sentence',
  
  data() {
    return {
      day_after_exposure: 5,
      pre_test_p: 80,
      sensitivity_default: 0.7,
      specificity: .99
      // negative_result_is_true: 


    }
  },

  computed: {
    sensitivity() {
      if (Number.isInteger(this.day_after_exposure)) {
        return sensitivity_map.get(this.day_after_exposure)
      } else {
        return this.sensitivity_default
      }
    },

    pre_test() {
      return this.pre_test_p / 100;
    },

    true_positive_p() {
      return Math.round(this.pre_test * this.sensitivity * 100)
    },

    false_negative_p() {
      return this.pre_test_p - this.true_positive_p
    },

    true_negative_p() {
      return Math.round((100 - this.pre_test_p) * this.specificity)
    },

    false_positive_p() {
      return (100 - this.pre_test_p) - this.true_negative_p 
    },

    negative_result_is_true_p() {
      return Math.round(this.true_negative_p / (this.true_negative_p + this.false_negative_p) * 100);
    }
  }
}

</script>


<style lang="scss">

.adjustable-number .hint {
  bottom: 120% !important;
  left: 0 !important;
}
.result {
  font-weight: bold;
  font-family: monospace;
}

html, svg {
  font-family:
    'ProximaNova',
    'Helvetica Neue',
    Arial,
    sans-serif;
  
  font-size: 18px;
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
  padding-top: 2em;
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
  line-height: 1.6;
  font-size: 20px;
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