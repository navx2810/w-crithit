<style lang="stylus">
.inner-content
        flex 1 1 auto
        display flex
</style>

<script>
import HeadBar from "views/headbar"
import RollArea from "./newarea"
import Data from "models/data"


export default {
    functional: true,
    components: { HeadBar, RollArea },
    render(h, ctx) {
        return <div class="content">
            <HeadBar links={["home","rolls"]} title="dice roller" />
            <div class="inner-content">
                <RollArea last={Data.rolls.stacks[Data.rolls.stacks.length-1]}/>
            </div>
        </div>
    }
}
</script>