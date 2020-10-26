<template>
    <div class="line" ref="line" :style="{ top: this.top + 'px' }">
        <div class="handle"></div>
        <p>{{ p(top/400) }}</p>
    </div>

</template>
<script>
import * as d3 from '../d3-modules'

export default {
    mounted() {
        let element = this.$refs.line;
        this.drag = d3.drag()
        this.drag.on('drag', this.dragged)

        d3.select(element)
            .call(this.drag)
    },
    props: ['top'],

    methods: {
        dragged: function(event) {
            this.$emit("change", event.y);
        },

        dragstart: function(event) {

        },

        p: d3.format(".0%")


    }
}
</script>

<style lang="scss" scoped>
    .line {
        position: absolute;
        background: green;
        height: 2px;
        width: 100%;
    }

    .handle {
        top: -5px;
        left: 0;
        height: 10px;
        width: 100%;
        position: absolute;
        background: rgba(255,1,1,0);

        cursor: row-resize;
    }
</style>