<script setup>

</script>

<template>
  <div class="main">
    <h1>You did it!</h1>
    <p>Finally</p>
    <router-link to="/nev">nav</router-link>
    <router-view />
  </div>
</template>

<style scoped>

.main{
  margin: 0%;
  padding: 0%;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
