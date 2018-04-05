<template>
<div>
  <navigation></navigation>

  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-4">Actions</h1>
    <p class="lead">Choose what to do.</p>
  </div>

  <div class="container">
    <div class="card-deck mb-3 text-center">
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">List Data</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">132 <small class="text-muted">records</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>32 days of data</li>
            <li>2 devices</li>
            <li>19 ads shown</li>
            <li>8 target groups</li>
          </ul>
          <a href="list">
            <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
          </a>
        </div>
      </div>
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Remove Data</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">8 <small class="text-muted">groups</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>5 groups can be altered</li>
            <li>98 connections can be removed</li>
            <li>182 entries of data to check</li>
            <li>One click removal</li>
          </ul>
          <a href="groups">
            <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
          </a>
        </div>
      </div>
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Active Protection</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Active plugin to display changes as you use social media</li>
            <li>Phone and email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navigation from './Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
html {
  font-size: 14px;
}
@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

.container {
  max-width: 960px;
}

.pricing-header {
  max-width: 700px;
}

.card-deck .card {
  min-width: 220px;
}

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }

.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }
</style>
