<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
}
</style>

<style lang="scss">
  @import "~vue-material/dist/theme/engine";
  @import "~vue-material/dist/theme/all";
  @include md-register-theme("default", (
          primary: md-get-palette-color(blue, A200), // The primary color of your application
          accent: md-get-palette-color(red, A200) // The accent or secondary color
  ));
</style>
