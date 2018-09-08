<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  /*
  'Grand Hotel'
  'Aladin'
  'Gamja Flower'
  'Delius Swash Caps'
  'Sriracha'
  */
  font-family: 'Gamja Flower', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ipt{
  background: white;
  border-radius: 5px;
  width: 250px;
  animation: slide 2s ease-in-out 1;
  outline: none;
  color: black;
  padding: 5px;
  line-height: 20px;
  transition: 0.2s;
  /* max-width: 250px; */
}
@keyframes slide {
  0%{
    opacity: 0;
    width: 0px;
  }
  25%{
    opacity: 1;
    width: 0px;
  }
  100%{
    width: 250px;
  }
}
body {
  background: black;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
