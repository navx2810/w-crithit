<style lang="stylus" scoped>
.area
    flex 1 1 auto
    display flex
    flex-wrap wrap
    justify-content center
    align-items center

.small-box
    padding .5em
    background hsla(200, 5, 5, .2)

.total
    margin-top 1em

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
    .hint
        margin-top .2em
        text-align center
        color #999
.hrow
    margin .4em 0
    display flex
    justify-content space-between
    align-items center

.btn
    cursor pointer
    padding .5em
    background hsl(125, 50, 50)
    font-weight 800

.pad
    margin-left 1em 
    .pad
        margin-left 1.5em  

.roller, .history
    margin 1em

.results
    text-align center

.history
    flex 0 0 auto
    min-width 150px
    .old
        color #888
</style>

<template>
    <div class="area">
        <div class="roller box">
            <input type="text" @keyup.enter="submit" v-model="calc" class="box" placeholder="1d6+1">
            <p v-show="isEmpty" class="hint">Enter a value and press enter.</p>
            <div class="hrow">
                <h2>Stack</h2>
                <p v-show="isLastNotEmpty" @click="newStack" class="btn">New</p>
            </div>
            <div class="box">
                <template v-for="roll in last.rolls">
                    <div class="hrow">
                        <p>{{roll.dice}}</p>
                        <p>{{roll.roll}}</p>
                    </div>
                    <p class="small-box results">{{roll.results}}</p>
                </template>
            </div>
            <p class="total">Total: <strong>{{ stackTotal(last) }}</strong></p>
        </div>

        <div class="history box">
            <h2>History</h2>
            <div v-for="stk in stacks" class="pad" :class="{ old: isNotLast(stk) }">
                <div class="hrow">
                    <h3>Stack</h3>
                    <p><strong>{{ stackTotal(stk) }}</strong></p>
                </div>
                <div class="pad">
                    <div v-for="roll in stk.rolls" class="hrow">
                        <p>{{roll.dice}}</p>
                        <p>{{roll.roll}}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Data from "models/data"
import Actions from "models/actions"
import Droll from "droll"

export default {
    props: ["last"],
    name: "Roll-Area",
    data() {
        return { calc: null }
    },

    computed: {
        isEmpty() { return this.calc == null || this.calc === "" },
        isLastNotEmpty() { return this.last.rolls.length !== 0 },
        stacks() { return Data.rolls.stacks }
        // last() { return Data.rolls.stacks[Data.rolls.stacks.length-1] }
    },

    methods: {
        submit() {
            // let result = /(d[0-9]*)|[0-9\+\-\ ]*/g.test(this.calc)
            // let result = /^[d0-9\+\-\ ]*$/g.test(this.calc)
            
            if( Droll.validate(this.calc) ) { 
                let roll = Droll.roll(this.calc)
                console.log(`Rolling ${this.calc}, total: ${roll}`)
                Actions.CreateRoll( this.last, this.calc, roll.total, roll.toString() ) 
            }
            this.calc = null
        },

        newStack: Actions.CreateStack,

        stackTotal(stack) {
            let total = 0
            stack.rolls.forEach( r => total += r.roll )
            return total
        },

        isNotLast(stack) {
            return stack !== this.last
        }
    }
}
</script>