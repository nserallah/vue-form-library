<template>
  <div id="app">
    <RegisterForm />
  </div>
</template>
<script>
// @ is an alias to /src
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  components: {
    RegisterForm
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "kufi-bold";
  src: url('assets/fonts/DroidKufi-Bold.ttf');
}
@font-face {
  font-family: "kufi-regular";
  src: url('assets/fonts/DroidKufi-Regular.ttf');
}
.kufi-bold {
  font-family: "kufi-bold";
}
.kufi-regular {
  font-family: "kufi-regular";
}
#app {
  
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
