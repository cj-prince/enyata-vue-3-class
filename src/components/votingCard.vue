<template>
   <div :class="['main', {'is-first': index===0,'is-second': index===1}]" >
  <div>
    <h5>{{name}}</h5>
    <p class="d">{{description}}</p>
  </div>
  <div class="score-div">
    <div class="voting-score">
       <p>{{vote}}</p>
    </div>
   
    <div class="btn">
      <i class="fa fa-caret-up" id="upArrow" aria-hidden="true" @click="$emit('add')"></i>
      <i class="fa fa-caret-down" aria-hidden="true" @click="$emit('subtract')"></i>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: "votingCard",
  props:['name', 'description', 'vote', 'id', 'index'],
  computed:{
    isFirst(){
      return this.index===0
    },
    isSecond(){
      return this.index===1
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
  justify-content: space-around;
  cursor: pointer;
}


.is-first{
  border-color: rgb(194, 241, 194);
}
.d{
      margin-top: -10px;
}
.is-second{
  border-color: #F8D34F;
}
</style>