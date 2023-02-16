<template>
  <nav>
    <router-link to="/">Calculator</router-link> |
    <router-link to="/form">Form</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #3eaf7c;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a:hover {
  color: #42b983;
}

nav a:active {
  color: #42b983;
}

nav a:visited {
  color: #42b983;
}

nav a:link {
  color: #42b983;
}
</style>