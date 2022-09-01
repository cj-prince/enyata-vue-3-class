<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <div class="btn">
      <button class="btn1" @click="increment">add</button>
      <button class="btn2" @click="decrement">subtract</button>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'TCount',
  data:() =>({
    count:0,
  }),
  methods:{
    increment(){
    this.count++
    },
    decrement(){
      this.count--
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: rgb(148, 177, 213);
  width: 250px;
  height: 150px;
  text-align: center;
  margin: auto;
  border-radius: 10px;
} 

.btn{
  display: flex;
}

button{
  margin: auto;
  border: none;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
}

.btn1{
  color: #08833f;
}

.btn2{
  color: #830808;
}

h1{
  padding: 10px;
  color: #fff;
}
</style>