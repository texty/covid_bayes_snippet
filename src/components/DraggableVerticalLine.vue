<template>
    <div class="line" ref="line" :style="{left: this.left + 'px'}">
        <div class="handle"></div>
        <p>{{ p(left/400) }}</p>
    </div>

</template>
<script>
import * as d3 from '../d3-modules'

export default {
    props: ['left'],

    mounted() {
        let element = this.$refs.line;
        console.log(element)

        this.drag = d3.drag()
        this.drag.on('drag', this.dragged)

        d3.select(element)
            .call(this.drag)
    },

    methods: {
        dragged: function(event) {
            this.$emit("change", event.x)
        },

        dragstart: function(event) {

        },
        
        p: d3.format(".0%"),



    }
}
</script>

<style lang="scss" scoped>
    .line {
        position: absolute;
        background: black;
        width: 2px;
        height: 140%;
        top: -20%;
    }

    .handle {
        left: -5px;
        width: 10px;
        height: 100%;
        position: absolute;
        background: rgba(255,1,1,0);

        cursor: col-resize;
    }
</style>