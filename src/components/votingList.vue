<template>
 <div>
   <VotingCard v-for="voter,index in sortedVote" :key="voter.id"
   :name='voter.name'
    :description='voter.description'
    :id='voter.id'
    :vote='voter.vote'
    :index='index'
    @add='addVote(voter.id)'
    @subtract='subVote(voter.id)'
   />
 </div>
</template>

<script>

import {intialData} from './dataFile'
import VotingCard from "./votingCard.vue"
export default {
  components: {
   VotingCard
  },
  data: () => ({
    'voting': intialData
  }),
  methods:{
    addVote(id){
      const voteUpdate = this.voting.map((votes) =>{
        console.log("votes.id");
        if(votes.id === id){
          console.log(votes.id)
          const updated = {...votes, vote:votes.vote +1}
        return updated
        }else{
          return votes
        }
        
      })
      this.voting = voteUpdate
    },
    subVote(id){
      const voteUpdate = this.voting.map((votes) =>{
        if(votes.id === id){
          const updated = {...votes, vote:votes.vote -1}
        return updated
        }else{
          return votes
        }
        
      })
      this.voting = voteUpdate
    },
  },
  computed: {
    sortedVote() {
      return [...this.voting].sort((a, b) => b.vote- a.vote)
    }
  }
}
</script>

<style scoped>

</style>