<style lang="stylus" scoped>
    .link
        cursor pointer
        flex 0 0 auto
        display flex
        flex-direction column
        align-items center
        max-width 150px
        min-width 150px
        margin .5em 0
        text-align center
        .icon
            width 128px
            height 128px
        h3
            font-family "Amaranth"
            margin .5em 0
            font-weight 500
            font-size 1.2em
</style>

<template>
    <div @click="changePath" class="link">
        <div :style="iconRel" class="icon"></div>
        <h3>{{ this.name }}</h3>
        <p>{{ this.desc }}</p>
    </div>
</template>

<script>
export default {
    name: "Link",
    props: ["name", "desc", "route", "icon"],

    computed: {
        iconRel() { return { background: `url(${this.icon})` } }
    },

    methods: {
        changePath(e) { this.$emit("PathChanged", this.route) }
    }
}
</script>