<template>
  <div :class="['main', {'is-first': index===0,'is-second': index===1}]" v-for="voter,index in sortedVote" :key="voter.id">
  <div>
    <h5>{{voter.name}}</h5>
    <p>{{voter.description}}</p>
  </div>
  <div class="score-div">
    <div class="voting-score">
       <p>{{voter.vote}}</p>
    </div>
   
    <div class="btn">
      <button @click="addVote(voter.id)">+</button>
      <button @click="subVote(voter.id)">-</button>
    </div>
  </div>

  </div>
</template>

<script>

import {intialData} from './dataFile'
export default {
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
.main{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 12px 20px;
  box-sizing: border-box; 
  width: 641px;
  height: 72px;
  background: #FFFFFF;
  border: 3px solid #9ba89f;
  border-radius: 8px;
  margin-top:20px
}
.score-div{
  display: flex;
  justify-content: space-between;
}

.voting-score {
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 5px;
  background: #EFEFEF;
  border-radius: 8px;
  width: 48px;
  height: 38px;
  margin-right: 10px;
}

.btn{
  display: flex;
  flex-flow: column;
}

.is-first{
  border-color: rgb(194, 241, 194);
}

.is-second{
  border-color: #F8D34F;
}
</style>