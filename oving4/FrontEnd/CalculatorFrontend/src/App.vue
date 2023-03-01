<template>
  <div id="navbar-container">
    <nav>
      <router-link to="/">Calculator</router-link> |
      <router-link to="/form">Form</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>

nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #4caf50;
}

nav a:hover {
  text-decoration: underline;
}

nav a:active {
  color: #3e8e41;
}

nav a:visited {
  color: #3e8e41;
}

nav a:link {
  color: #4caf50;
}
</style>
