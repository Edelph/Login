<template>
    <div class="menu">
        <img src="@/assets/SoaZara.png" alt="">
        <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">login</router-link>
    </nav>
  </div>
</template>

<script>
    export default {
        name:"NavBar",
        
    }
</script>

<style scoped>
    nav {
    text-align: right;
    }
    .menu{
    padding: 10px;
    margin: 0 0 10px;
    text-align: right;
    background-color: #42b9833f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .menu img{
    width: 150px;
    }

    nav a {
    font-weight: bold;
    text-transform: capitalize;
    text-decoration: none;
    color: #2c3e50;
    }
    nav a:hover{
    color: #42b983a2;
    }

    nav a.router-link-exact-active {
    color: #42b983;
    }
</style>