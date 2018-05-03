<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand">SCI</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link active" to="/">Home</router-link>
      <router-link to="list" class="nav-item nav-link" href="/list">List Data</router-link>
      <router-link class="nav-item nav-link" to="/groups">Remove Data</router-link>
    </div>
  </div>
</nav>
</template>
