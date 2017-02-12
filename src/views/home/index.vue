<style lang="stylus">
    .links
        flex 1 1 auto
        display flex
        justify-content center
        flex-wrap wrap
    .inner
        flex 1 1 auto
        display flex
        align-items center
        justify-content center
</style>

<script>
import HeadBar from "views/headbar"
import PathLink from "./link"
import Links from "./links"
import Data from "models/data"
import Actions from "models/actions"

export default {
    components: { HeadBar, PathLink },
    functional: true,
    render(h, ctx) {
        let link_array = Links.map( l => <PathLink on-PathChanged={Actions.ChangePath} name={l.name} desc={l.desc} route={l.route} icon={l.icon} /> )

        return <div class="content">
            <HeadBar title="home"/>
            <div class="inner">
                <div class="links">
                    {link_array}
                </div>
            </div>
        </div>
    }
}
</script>