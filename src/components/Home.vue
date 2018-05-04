<template>
<div>
  <div class="jumbotron text-center">
    <h1>Hello <span class="text-primary">You</span>.</h1>
    <br />
    <h4 class="text-muted">We analyzed your profile and our algorithms paired you with the following topics.</h4>
    <br />
    <h4 class="text-muted">Go ahead and select one.</h4>
    {{ message }}
  </div>
  <div class="container">
    <div class="row">
      <keyword-card v-for="kw in keywords" :key="kw.keyword" :data="kw"></keyword-card>
    </div>
  </div>
  <br />
  <br />
  <br />
</div>
</template>

<script>
import KeywordCard from './KeywordCard'
import mockData from '../assets/mock.json'

export default {
  name: 'Home',
  components: {
    KeywordCard
  },
  data () {
    return {
      keywords: mockData
    }
  }
}
</script>

<style>
.text-primary {
  color: #a6c!important;
}
</style>
