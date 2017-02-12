<style lang="stylus" scoped>
.inner
    flex 1 1 auto
    .list
        background black
        flex 1 1 auto
        display flex
        justify-content center
        align-items center
.options
    display flex
    justify-content center

</style>

<script>
import HeadBar from "views/headbar"
import Data from "models/data"

export default {
    functional: true,
    components: { HeadBar },
    render(h, ctx) {
        return <div class="content">
            <HeadBar links={["home","encounter"]} title="encounters" />
            <div class="options">
                    <p class="btn">Edit Entities</p>
            </div>
            <div class="inner">
                <div class="list">
                    <div class="row">
                        <p>Nikita</p>
                        <p>ok</p>
                    </div>
                </div>
            </div>
        </div>
    }
}
</script>