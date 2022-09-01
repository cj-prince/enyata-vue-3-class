<template>
  <div class="nav">
   
     <h5> <router-link to="/" >Home</router-link></h5>
     <h5> <router-link to="vote">Votes</router-link></h5>
  </div>
 
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style>
.nav{
  display: flex;
  justify-content: center;
  gap: 50px;
  text-align: center;
  cursor: pointer;
  
}

a{
  text-decoration-line: none;
  padding: 10px;
  border: 1px solid rgb(220, 210, 210);
  border-radius: 8px;
  background: rgb(192, 227, 255);
}
</style>
