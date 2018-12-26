<template>
  <div id="app">
    <p>configured on github</p>
    <nav>
      <router-link to ="/">Home</router-link>
      <router-link to ="/about">About</router-link>
      <router-link to ="/test">test</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<!-- You can scope in App.vue as well

<style  scoped>
body {
    background-color: blue;
  }
</style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700'); -->
-->
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}

</style>
