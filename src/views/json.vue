<template>
    <div class="box"><pre><code>{{ toJson }}</code></pre></div>
</template>

<style lang="stylus" scoped>

div
    flex 0

</style>

<script>

export default {
    props: ["data"],
    name: "JSON",
    computed: {
        toJson() { return JSON.stringify(this.data, null, '\t') }
    }
}

</script>