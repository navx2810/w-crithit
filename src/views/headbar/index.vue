<style lang="stylus" scoped>
.headbar
    flex 0 0 auto
    display flex
    justify-content space-between
    align-items center
div
    flex 0 0 auto
.title
    font-size 1.5em
    text-transform capitalize
    text-align center

.links
    display flex
.btn
    cursor pointer
    display flex
    align-items center
    color hsl(200, 80, 60)
    font-size 1.2em
    .arrow
        flex 0
        font-size 1.5em
        padding 0 .5em
        color hsl(200, 80, 60)
.btn:hover
    color #fff
</style>

<script>
import Data from "models/data"
import Actions from "models/actions"

export default {
    name: "HeadBar",
    props: ["links", "title"],
    render(h) {
        let t = (!!this.title) ? <p class="title">{this.title}</p> : null
        let l = (!!this.links) ? this.links.map( li => <p onClick={() => this.changePath(li)} class="btn"><span class="arrow">{'<'}</span> {li}</p> ) : null
        let ld = (!!l) ? <div class="links">{l}</div> : <div></div>
        let space_div = <div></div>

        // return <div class="headbar">{ld} {t} {space_div}</div>
        return <div>
            <div class="headbar">{ld}</div>
            {t}
        </div>
    },

    methods: {
        changePath: Actions.ChangePath
    }
}

</script>