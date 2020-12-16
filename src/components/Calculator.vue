        
<template>
<div class="container">
  <div class="main-box">
    <p class="row middle-content">
      <span v-if="show_infection_rate">
        Початкові шанси захворіти (відсоток захворюваності):
        <span v-if="pre_test_readonly"> {{pre_test_p}}%</span>
        <adjustable-number v-else :value.sync="pre_test_p" >
          <template v-slot:post_text> %</template>
        </adjustable-number>
      </span>
      
      <span v-if="Number.isInteger(day_after_exposure)">
        ПЛР тест зроблений на 
        <adjustable-number id="day-after-exposure-an" 
            :value.sync="day_after_exposure" 
            :min="0" :max="20" 
            :tooltip_fixed="false" 
        >
          <template v-slot:post_text>-ий</template>
        </adjustable-number>
        <span class="pre">&nbsp;&nbsp; день після контакту із вірусом. </span>
         
      </span>
      <template v-if="show_sensitivity || show_specificity">
        <br>  
        <span class="grey">
        (<span v-if="show_sensitivity">чутливість: ~{{pf(sensitivity)}};</span>
          &nbsp; 
          <span v-if="show_specificity">специфічність: ~{{pf(specificity)}}</span>)
        </span>
      </template>
    </p>    

    <p class="row middle-content">
      <span v-if="show_total_title">{{lgd_total_txt}}</span> 
    </p>
    
    <div :class="`main-grid ${this.tested ? 'tested' : ''}`" v-if="split">
      <div class="microbox legend pre-legend ill margin-top-mobile">      
        <p v-if="all_p"><human class="human ill" :circle="circle" /> <span> {{ pre_test_p }} {{lgd_ill_txt}}:</span></p>  
      </div>

      <div class="microbox people ill">
        <human v-for="p in people.ill" :key="p.i" 
              :class="`human ${p.covid ? 'ill' : 'healthy'} ${p.test ? 'test_positive' : 'test_negative'}`" :circle="circle" />
      </div>

      <div class="microbox legend post-legend margin-left-mobile">
        <p v-if="tp"><human class="human ill test_positive" :circle="circle" /> <span>- {{ true_positive_p }} {{lgd_tp_txt}} </span></p>  
        <p v-if="fn"><human class="human ill test_negative" :circle="circle" /> <span>- {{ false_negative_p }} {{lgd_fn_txt}} </span></p>  
      </div>

      <div class="microbox legend pre-legend healthy margin-top-mobile">      
        <p v-if="all_n"><human class="human healthy" :circle="circle"/> <span> {{ 100-pre_test_p }} {{lgd_healthy_txt}}</span></p>  
      </div>

      <div class="microbox people healthy">
        <human v-for="p in people.healthy" :key="p.i" 
              :class="`human ${p.covid ? 'ill' : 'healthy'} ${p.test ? 'test_positive' : 'test_negative'}`" :circle="circle" />
      </div>

      <div class="microbox legend post-legend margin-left-mobile">
        <p v-if="tn"><human class="human healthy test_negative" :circle="circle"/> <span>- {{ true_negative_p }} {{lgd_tn_txt}} </span></p>  
        <p v-if="fp"><human class="human healthy test_positive" :circle="circle"/> <span>- {{ false_positive_p }} {{lgd_fp_txt}} </span></p>    
      </div>
    </div>

    <template v-else>

      <div class="legend row">
        <div class="split middle-content">
          <p v-if="all_p"><human class="human ill" :circle="circle"/> <span> {{ pre_test_p }} {{lgd_ill_txt}}:</span></p>  
          <!-- <div class="hugging-line"></div> -->
          <p v-if="all_n"><human class="human healthy" :circle="circle"/> <span> {{ 100-pre_test_p }} {{lgd_healthy_txt}}</span></p>  
          <!-- <div class="hugging-line"></div> -->
        </div>
      </div>

      <div :class="`people ${this.tested ? 'tested' : ''}`">
        <div class="middle-content">
          <human v-for="p in [...people.ill, ...people.healthy]" :key="p.i" 
                :class="`human ${p.covid ? 'ill' : 'healthy'} ${p.test ? 'test_positive' : 'test_negative'}`" :circle="circle" />
        </div>
      </div>

      <div class="legend row-after tested" v-if="tested">
        <div :class="`split ${split ? 'active' : 'middle-content'}`">
          <div class="microbox">
            <p v-if="tp"><human class="human ill test_positive" :circle="circle"/> <span>- {{ true_positive_p }} {{lgd_tp_txt}} </span></p>  
            <p v-if="fn"><human class="human ill test_negative" :circle="circle"/> <span>- {{ false_negative_p }} {{lgd_fn_txt}} </span></p>  
          </div>

          <div class="microbox">
            <p v-if="tn"><human class="human healthy test_negative" :circle="circle"/> <span>- {{ true_negative_p }} {{lgd_tn_txt}} </span></p>  
            <p v-if="fp"><human class="human healthy test_positive" :circle="circle"/> <span>- {{ false_positive_p }} {{lgd_fp_txt}} </span></p>    
          </div>
        </div>
      </div>

    </template>

    <div class="row-after" v-if="show_btn">
      <button @click="() =>tested = !tested">{{this.tested ? 'Скинути' : 'Тестувати за допомогою ПЦР!'}}</button>
    </div>
  </div>
</div>
</template>

<script>
import * as d3 from '../d3-modules'
import Human from './Human'
import AdjustableNumber from './AdjustableNumber'

import chart_data from './../assets/chart_data.csv'

chart_data.forEach(r => {
    r.sensitivity = 1 - r.antisensitivity;
});

let sensitivity_map = new Map(chart_data.map(o => [o.day, o.sensitivity]))


export default {
  created() {
    let uri = window.location.search; 
    this.params = new URLSearchParams(uri);
  },
  
  mounted() {
    let self = this;

    for (const p of ['pre_test_p', 'pre_test_readonly', 'tp', 'tn', 'fp', 'fn', 'all_p', 
                    'all_n', 'sensitivity_default', 'specificity', 'tested', 'split', 
                    'show_btn', 'show_sensitivity', 'show_specificity', 'show_total_title',
                    'day_after_exposure', 'circle']) {
      set_from_query(p);
    }

    function set_from_query(name) {
      let val = self.params.get(name);
      if (val) self[name] = +val;
    }
  },
  
  data() {
    return {
      pre_test_p: 80, // _p means in percents
      sensitivity_default: 0.7,
      specificity: 0.99,
      day_after_exposure: 5,
      tested: true,
      split: true,
      show_infection_rate: true,
      show_sensitivity: false,
      show_specificity: false,
      show_total_title: true,
      circle: false,

      show_btn: false,
      
      pre_test_readonly: false,

      all_p: true,
      all_n: true,
      
      tp: true, 
      tn: true, 
      fp: true, 
      fn: true,

      pf: d3.format(".0%"),
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

    people() {
      let people_counter = 0;

      let ill = [];

      for (let i=0; i < this.pre_test_p; i++) {
        ill.push({ key: people_counter, covid: true, test: i < this.true_positive_p })
        people_counter++;
      }

      let healthy = [];

      for (var i=0; i < (100 - this.pre_test_p); i++) {
        healthy.push({ key: people_counter, covid: false, test: !(i < Math.round((1 - this.pre_test) * this.specificity * 100))})
        people_counter++
      }

      return {ill, healthy};
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

    
    lgd_total_txt() {return this.circle ? "100 «шансів». Із них:" : "100 людей. Із них:"},
    lgd_ill_txt() {return this.circle ? "шансів бути хворим на ковід" : "людей хворих на ковід"},
    lgd_healthy_txt() {return this.circle ? "шансів бути здоровим:" : "здорових людей:"},

    lgd_tp_txt() {return this.circle ? 
      'шансів бути хворим, і отримати правильний "позитивний" тест (істинно позитивний результат)' : 
      'хворих на ковід, яких тест визначив правильно як "позитивних" (істинно позитивний результат)'},
    
    lgd_fp_txt() {return this.circle ? 
      'шансів бути здоровим, і отримати помилковий "позитивний" тест (хибно позитивний результат)' : 
      'не хворих, яких тест помилково визначив як "позитивних" (хибно позитивний результат)'},
    
    lgd_tn_txt() {return this.circle ? 
      'шансів бути здоровим, і отримати негативний тест (істинно негативний)' : 
      'не хворих на ковід з негативним тестом (істинно негативних)'},
    
    lgd_fn_txt() {return this.circle ? 
      'шансів бути хворим, і отримати хибний "негативний" тест (хибно негативний результат)': 
      'хворих на ковід із негативним тестом (хибно негативний результат)'},
  },

  watch: {
    tested: function(val) {
      this.$emit('height_changed');
    }
  },

  components: {
    Human,
    AdjustableNumber,
  }
}
</script>
 

 <style lang="scss" scoped>
.container {
  width: 100%;
}

.row {
  margin-bottom: 1em;
}

p {
  margin-bottom: 0
}

.human {
  vertical-align: middle;
  height: 24px;
  width: 16px;
}

.middle-content {
  max-width: 430px;
  margin-left: auto;
  margin-right: auto;
}

.main-box {
  max-width: 630px;
  margin: 0 auto;
  padding-top: 2em;

  .human {    
    &.ill {
      fill: #000;
    }

    &.healthy {
      opacity: 0.5;
    }
  }
  
  .row-after {
    margin-top: 1em;
    width: 100%;
    button {
      margin: 0 auto;
    }
  }
}

.people {
  .human {
    margin-right: 5px;
    margin-bottom: 5px;;
    flex-shrink: 0;
  }
}






// .people .split {
//   min-height: 16em;
// }






.split.active {
  display: flex;
  gap: 3em;

  .microbox {
    display: flex;
    flex-flow: wrap;
    align-content: flex-start;
    
    min-width: 300px;
    max-width: 430px;
  }
}



// .hugging-line {
//   width: 100%;
//   height: 1em;
//   border-top: 1px solid black;
//   border-left: 1px solid black;
//   border-right: 1px solid black;
// }


.tested .human {
  &.test_positive {
    &.ill {
      fill: #377eb8;
    }

    &.healthy {
      fill: #e41a1c;
    }
  }

  &.test_negative {
    &.ill {
      fill: #ff7f00
    }

    &.healthy {
      fill: #4daf4a;
    }
  }
}

button {
  cursor: pointer;
  display: block;
  border-radius: 0;
  border: none;
  background: #ff7f00;
  color: white;
  height: 4em;
  min-width: 15em;

  transition: ease-out 0.2s background-color;

  &:hover {
    background: #4daf4a;
  }
}

.legend p {
  display: flex;
  gap: 1em;
  margin-bottom: 0.5em;;
  span {
    width:100%;
  }
}

.main-grid {
  display: grid;
  grid-template-columns: 300px 300px;
  grid-column-gap: 3em;

  grid-template-rows: auto minmax(14em, auto);
  grid-row-gap: 1em;

  .microbox {
    &.pre-legend {grid-row: 1}
    &.people {grid-row: 2}
    &.post-legend {grid-row: 3}
  }

  @media only screen and (max-width: 650px)  {
      display: block;
      max-width: 430px;
      margin: 0 auto;
      .microbox {margin-bottom: 0.5em;}
      .margin-top-mobile {margin-top: 3em;}
      .margin-left-mobile {margin-left: 2em;}
    }
}

.grey {
  color: grey;
}

</style>

<style lang="scss">
svg {
  shape-rendering: crispEdges;
  circle {
    shape-rendering: geometricPrecision;
  }
  // border: 1px solid black;
}

.adjustable-number-span {
  display: inline-block;
  min-width: 3em;
}

#day-after-exposure-an {
  .adjustable-number-span {
    min-width: 1.5em;
  }
}
</style>