<template>
    <div class='known-dimensions-block'>
        <slot/>
    </div>
</template>

<script>
export default {
    name: "known-dimensions-block",

    data() {
        return {
            d: {
                height: 0,
                width: 0,
                left: 0,
                top: 0,
            }
        }
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
            this.d.height = this.$el.offsetHeight
            this.d.width = this.$el.offsetWidth
            this.d.left = this.$el.offsetLeft
            this.d.top = this.$el.offsetTop
        }
    },

    watch: {
        d: {
            handler(val) {
                this.$emit("dimensions_changed", this.d)
            },
            deep: true,
        }
    }
}
</script>
