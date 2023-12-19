<template>
  <nav>
    <router-link :to="{ name: 'home' }">Головна</router-link> |
    <router-link :to="{ name: 'friends' }">Друзі</router-link> |
    <router-link :to="{ name: 'gifts' }">Подарунки</router-link> |
    <router-link :to="{ name: 'assignments' }">Призначення подарунків</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import 'assets/style';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
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
