<template>
    <span class="adjustable-number">
        <input v-model.number="value" 
                @change="$emit('update:value', value);" 
                type="number" :max="max" :min="min" :step="step"
                hidden="true">
        <span class="adjustable-number-span" ref="draggable">{{ value }} %</span> 
        <span :class="`hint ${tooltip_fixed ? 'fixed' : ''}`"> тягни! </span>
    </span> 
</template>а

<script>

import * as d3 from '../d3-modules'

export default {
    props: {
        value: Number,
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        step: {
            type: Number,
            default: 1
        },

    },

    data() {
        return {
            domain: 450,
            dragging: false,
            tooltip_fixed: true,
        }
    },

    mounted() {
        let element = this.$refs.draggable;
        this.drag = d3.drag()
        this.drag
            .on('drag', this.dragged)
            .on('start', this.dragstart)
            .on('end', this.dragend)
    
        d3.select(element)
            .call(this.drag)
    },

    methods: {
        dragged: function(event) {
            let range = this.max - this.min;
            let multiplier = range / this.domain;
            // this.$emit("change", event.dx);
            
            let newVal = this.start_v + Math.round((event.x - this.start_x) * multiplier);
            newVal = Math.max(Math.min(newVal, this.max), this.min);
            this.$emit('update:value', newVal);
        },

        dragstart: function(event) {
            this.tooltip_fixed = false;
            this.dragging = true;
            this.$refs.draggable.setPointerCapture(event.identifier);

            this.start_x = event.x;
            this.start_v = this.value;
        },
    
        dragend: function(event) {
            this.dragging = false;
            this.$refs.draggable.releasePointerCapture(event.identifier);
        },

    }
}

</script>

<style lang="scss" scoped>

.adjustable-number {
    position: relative;

    .hint {
        position: absolute;
        bottom: 120%;
        left: 0;
        color: #46f;
        z-index: 100000;

        display: none;

        &.fixed {
            display: block;
        }
    }

    &:hover, &:focus {
        .hint {
            display: block;
        }
    }
}

.adjustable-number-span {
    position: relative;
    color: #46f;
    border-bottom: 2px dotted #46f;
    padding: 0 0.2em;

    cursor: col-resize;
}

</style>