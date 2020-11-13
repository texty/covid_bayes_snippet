        
<template>
<div class="container">
  <div class="main-box">
    <p class="row middle-content"><span>100 людей.</span> <span v-if="show_infection_rate"> Відсоток захворюваності 
      <span v-if="pre_test_readonly"> {{pre_test_p}}%</span>
      <adjustable-number v-else :value.sync="pre_test_p" />
      </span>
      </p>
    <div class="legend row">
      <div :class="`split ${split ? 'active' : 'middle-content'}`">
        <div class="microbox">
          <p v-if="all_p"><human class="human ill"/> <span> {{ pre_test_p }} людей хворі на ковід</span></p>  
        </div>
        <div class="microbox">
          <p v-if="all_n"><human class="human healthy"/> <span> {{ 100-pre_test_p }} здорових людей </span></p>  
        </div>
      </div>
    </div>
    <div :class="`people ${this.tested ? 'tested' : ''}`">
      
      <div class="split active" v-if="split">
        <div class="microbox">
          <human v-for="p in people.ill" :key="p.i" 
                :class="`human ${p.covid ? 'ill' : 'healthy'} ${p.test ? 'test_positive' : 'test_negative'}`" />
        </div>
        
        <div class="microbox">
          <human v-for="p in people.healthy" :key="p.i" 
                :class="`human ${p.covid ? 'ill' : 'healthy'} ${p.test ? 'test_positive' : 'test_negative'}`" />
        </div>
      </div>
      <div v-else class="middle-content">
        <human v-for="p in [...people.ill, ...people.healthy]" :key="p.i" 
              :class="`human ${p.covid ? 'ill' : 'healthy'} ${p.test ? 'test_positive' : 'test_negative'}`" />

      </div>
    </div>


    <div class="legend row-after tested" v-if="tested">
      <div :class="`split ${split ? 'active' : 'middle-content'}`">
        <div class="microbox">
          <p v-if="tp"><human class="human ill test_positive"/> <span>  {{ true_positive_p }} хворих на ковід, яких тест визначив правильно як "позитивних" (істинно позитивний результат) </span></p>  
          <p v-if="fn"><human class="human ill test_negative"/> <span> {{ false_negative_p }} хворих на ковід із негативним тестом (хибно негативний результат) </span></p>  
        </div>

        <div class="microbox">
          <p v-if="tn"><human class="human healthy test_negative"/> <span> {{ true_negative_p }} не хворих на ковід з негативним тестом (істинно негативних) </span></p>  
          <p v-if="fp"><human class="human healthy test_positive"/> <span> {{ false_positive_p }} не хворих, яких тест помилково визначив як "позитивних" (хибно позитивний результат) </span></p>    
        </div>
      </div>
    </div>


    <div class="row-after">
      <button @click="() =>tested = !tested">{{this.tested ? 'Скинути' : 'Тестувати за допомогою ПЦР!'}}</button>
    </div>
  </div>
</div>
</template>

<script>
import * as d3 from '../d3-modules'
import Human from './Human'
import AdjustableNumber from './AdjustableNumber'


export default {
  created() {
    let uri = window.location.search; 
    this.params = new URLSearchParams(uri);
  },
  
  mounted() {
    let self = this;

    for (const p of ['pre_test_p', 'pre_test_readonly', 'tp', 'tn', 'fp', 'fn', 'all_p', 
                    'all_n', 'sensitivity', 'specificity', 'tested', 'split']) {
      set_from_query(p);
    }

    function set_from_query(name) {
      let val = self.params.get(name);
      if (val) self[name] = +val;
    }
  },
  
  data() {
    return {
      // total: 100,

      pre_test_p: 80,
      sensitivity: 0.7,
      specificity: 0.97,
      tested: false,
      split: false,
      show_infection_rate: true,
      
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
    people() {

      //let res = [];

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
  // margin:0 3px;

}

.middle-content {
  max-width: 430px;
  margin-left: auto;
  margin-right: auto;
}

.main-box {
  max-width: 600px;
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

.people .split {
  min-height: 16em;
}

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

.people {
}

input[type='number'] {
  max-width: 3em;
  border: 1px solid #333;
  padding: 0.3em;
  padding-right: 0.1em;
}

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

  svg { }

  span {
    width:100%;
  }
}

 </style>

 <style lang="scss">
  svg {
    shape-rendering: crispEdges;
    // border: 1px solid black;
  }
 </style>