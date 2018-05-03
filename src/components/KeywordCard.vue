<template>
<div class="col-md-4">
    <div class="card mb-4 box-shadow" v-on:click="viewDetails()">
      <img class="card-img-top" :src="data.img" alt="Card image cap" style="height: 225px">
      <div class="card-body">
        <h4 class="card-title">{{ data.keyword }}</h4>
        <div class="row">
          <div class="col icon">
            <div><i class="fas fa-camera-retro fa-fw text-primary"></i> <span>{{ data.photos.length }}</span></div>
          </div>
          <div class="col icon">
            <div><i class="fas fa-pencil-alt fa-fw text-primary"></i> <span>{{ data.posts.length }}</span></div>
          </div>
          <div class="col icon">
            <div><i class="fas fa-thumbs-up fa-fw text-primary"></i> <span>{{ data.likes.length }}</span></div>
          </div>
          <div class="col icon">
            <div><i class="fas fa-info fa-fw text-primary"></i> <span>{{ data.metadata.length }}</span></div>
          </div>
          <div class="col icon">
            <div><i class="fas fa-sitemap fa-fw text-primary"></i> <span>{{ data.thirdparty.length }}</span></div>
          </div>
        </div>
        <br />
        <div>
          <small class="text-muted">Relevance: {{ data.relevance }} %</small>
          <level-meter :level="data.relevance"></level-meter>
        </div>
        <small class="text-muted float-right">{{ data.first_date }} - {{ data.last_date }}</small>
      </div>
    </div>
</div>
</template>

<script>
import LevelMeter from './LevelMeter'
import router from '../router'

export default {
    name: 'KeywordCard',
    components: {
        LevelMeter
    },
    props: ['data'],
    methods: {
      viewDetails() {
        router.push({ name: 'details', params: { data: this.data }});
      }
    }
}
</script>

<style>
.icon {
  font-size: 20px;
  text-align: center;
}
.card {
  cursor: pointer; 
}
</style>