<style lang="stylus" scoped>
.area
    display flex

.roller
    flex 0 0 auto
    display flex
    flex-direction column
    input
        padding 1em
        border none
        color #fff
        text-align center
        font-size 1.2em
    input::-webkit-input-placeholder
        color hsla(200, 10, 10, .65)
    p
        margin-top .2em
        color #999
.hrow
    display flex
    justify-content space-between
    align-items center

.btn
    padding 1em
    background hsl(125, 50, 50)
    font-weight 800

.pad
    margin .25em 0   

.rolls, .history
    margin 1em
</style>

<template>
    <div class="area">
        <div class="rolls">
            <div class="box roller">
                <input class="box" v-model="calc" type="text" placeholder="1d6+1" @keyup.enter="submit">
                <p v-show="isEmpty">Enter an input like "1d6+1" and press enter</p>
            </div>
            <div class="stack box">
                <div class="hrow">
                    <h2>Roll Stack</h2>
                    <p class="btn">New</p>
                </div>
                <div class="hrow pad box rolls"></div>
                <p>Total: <strong>30</strong></p>
            </div>
        </div>
        <div class="history box">
            <h2>History</h2>
            <div class="box">
                <h3>Stack Total: 3</h3>
                <p>1d6+1</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Roll Area",
    data() {
        return { calc: null }
    },

    computed: {
        isEmpty() { return this.calc == null || this.calc === "" }
    },

    methods: {
        submit() {
            // let result = /(d[0-9]*)|[0-9\+\-\ ]*/g.test(this.calc)
            let result = /^[d0-9\+\-\ ]*$/g.test(this.calc)
            if( result ) { console.log("This is a GOOD entry") }
            else { console.log("This is a BAD entry") }
            this.calc = null
        }
    }
}
</script>