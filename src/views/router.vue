<style lang="stylus" scoped>
    .router
        flex 1 1 auto
        display flex
        flex-direction column
</style>
<style lang="stylus">
    .content
        display flex
        flex 1 1 auto
        flex-direction column
</style>

<template>
    <div class="router">
        <Contents :path="path"/>
    </div>
</template>

<script>
import Paths from "models/paths"
import HeadBar from "./headbar"

import Home from "views/home"
import Rolls from "views/rolls"
import Encounter from "views/encounter"

const Contents = {
    components: { HeadBar, Home, Rolls },
    props: ["path"],
    name: "Contents",
    render(h) {
        switch(this.path) {
            case Paths.rolls:
                return <Rolls />
            case Paths.encounter:
                return <Encounter />
            default:
                return <Home />
                // return <HeadBar links={["home", "rolls"]} title={this.path}/>
        }
    }
}

export default {
    props: ["path"],
    name: "Router",
    components: { Contents }
}
</script>