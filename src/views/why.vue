<template>
    <div>
        <p>{{propMessage}}</p>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    propMessage: String
  }
})
export default class App extends Vue {

}

</script>