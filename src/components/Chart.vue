<template>
    <known-dimensions-block class="chart-container"
        @dimensions_changed="dimensions_changed" :style="{height: height + 'px'}">

        <svg ref="svg">
            <defs>            
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
                    markerWidth="10" markerHeight="10"
                    orient="auto-start-reverse">
                <path d="M 0 2 L 10 5 L 0 8 z" />
            </marker>
            </defs>
            <g :transform="`translate(0, ${height - margin.bottom})`" class="x axis" ref="x_axis"> </g>
            <g :transform="`translate(${margin.left}, 0)`" class="y axis" ref="y_axis"> </g>

            <path ref="path" :d="path_data"  class="line"/>

            <circle v-for="c in chart_data" :key="c.day" r="3" :cx="x(c.day)" :cy="y(c.sensitivity)"/> 
        </svg>        
    </known-dimensions-block>
</template>


<script>

import KnownDimensionsBlock from './KnownDimensionsBlock';
import * as d3 from '../d3-modules';
import chart_data from './../assets/chart_data.csv'

chart_data.forEach(r => {
    r.sensitivity = 1 - r.antisensitivity;
});

export default {
    name: "top-chart",
    components: {
        KnownDimensionsBlock,
    },

    props: {
        data: Array,
        params: Object,
    },

    data() {
        return {
            margin: {top: 10, right: 0, bottom: 20, left: 0},
            d: {width: 100, height: 100, left: 0, top: 0},
            chart_data: chart_data,
            valueline: d3.line()
                .x( d => this.x(d.day) )
                .y( d => this.y(d.sensitivity) )
                .curve(d3.curveMonotoneX),
        }
    },

    computed: {
        height(){
            return Math.max(100, this.d.width * 0.3) 
        },

        x() {
            return d3.scaleLinear()
                .domain([0, 20])
                .range([this.margin.left, this.d.width - this.margin.right])
        },

        y() {
            return d3.scaleLinear()
                .domain([0, 1])
                .range([this.height - this.margin.bottom, this.margin.top])
        },

        xAxis(){
            return d3.axisBottom(this.x)
                .tickSize(0)
                .tickPadding(5)
        },

        yAxis(){
            return d3.axisLeft(this.y)
                .ticks(5)
                .tickSize(0)
                .tickPadding(5)
                .tickFormat(d3.format(".0%"))

        },

        path_data() {
            return this.valueline(chart_data)
        }

    },

    methods: {
        dimensions_changed(val) {
            this.d = val; 
            
            d3.select(this.$refs.x_axis)
                .call(this.xAxis)
                .select("path").attr("marker-end", "url(#arrow)")


            d3.select(this.$refs.y_axis)
                .call(this.yAxis)
                .select("path").attr("marker-end", "url(#arrow)")

            console.log('change')
        }
    },

    mounted() {
        let svg = d3.select(this.$refs.svg)

        var valueline = d3.line()
            .x( d => this.x(d.day) )
            .y( d => this.y(d.pcr_sensitivity) )
            .curve(d3.curveMonotoneX);


            // this.$nextTick(() =>
            //     tippy(this.$el.querySelectorAll('.row'), {
            //         duration: 0, 
            //         arrow: false
            //     })
            // )
        },
}
</script>

<style lang="scss" scoped>

.chart-container {
    width: 100%;
    // border: 1px solid black;
}

svg {
    width: 100%;
    height: 100%;
    overflow: visible;
    shape-rendering: unset;

}

/deep/ svg {
    .axis .tick line {
        display: none;
    }

    text {
        font-size: 1rem;

    }
}

.line {
    fill: none;
    stroke: #ffab00;
    stroke-width: 3;
}
</style>
