<style lang="stylus">

*
	padding 0
	margin 0
	text-rendering: optimizeLegibility
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	text-shadow 1px 1px 1px rgba(0,0,0,0.004)

body
	width 100%
	height 100vh

#app
	box-sizing border-box
	padding 1em
	display flex
	flex-direction column
	width 100%
	height 100%
	font-family "Lato"
	color #fff
	background hsl(200, 10, 10)  

.box
	padding 1em
	background hsla(200, 10, 75, .1)  

</style>

<template>
	<div id="app">
		<Router :path="path"/>
	</div>
</template>

<script>
import Data from "models/data"
import Router from "views/router"

export default {
	name: "App",
	components: { Router },
	computed: {
		path() { return Data.view.path }
	}
}
</script>


