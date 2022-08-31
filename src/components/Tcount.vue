<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <button @click="increment">add</button>
    <button @click="decrement">subtract</button>
    
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
  background-color: rgb(213, 148, 148);
  width: 250px;
  height: 150px;
  text-align: center;
} 
button{
  margin-right: 10px;
  border: none;
  padding: 10px;
  cursor: pointer;
}
h1{
  color: #fff;
}
</style>