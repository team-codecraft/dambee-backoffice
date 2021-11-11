<template>
  <div>
    <Default />
    보류중인 홈
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  // import HelloWorld from '../components/HelloWorld.vue'
  import Default from '../components/Default.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      Default,
    },
  })
</script>
