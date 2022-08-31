<template>
  <TCount/>
  <VVote/>
</template>

<script>
import TCount from './components/Tcount.vue'
import VVote from './components/votingList.vue'

export default {
  name: 'App',
  components: {
   TCount,
   VVote
  }
}
</script>

<style>
#app {
  
}
</style>
