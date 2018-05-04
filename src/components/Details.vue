<template>
<div>
    <div class="back">
        <router-link to="/">
            <i class="fas fa-chevron-circle-left"></i>
        </router-link>
    </div>
    <div class="container">
        <div>
            <canvas id="pieChart"></canvas>
        </div>
    </div>
    <div class="jumbotron">
        <div class="container">
            <h1 class="text-primary font-weight-bold">{{ data.keyword }}</h1>
            <p>Here you can manage your data that can be connected with the keyword <span class="text-primary">{{ data.keyword }}</span>.
            This includes all the content shared by you as well as automatically collected metadata and tracking data from third-party applications.</p>
            <p>Start by browsing the data below and select the data you want to save.
            When you're done, use the buttons below to either permanently remove all the data you selected or just hide them.</p>
            <button type="button" class="btn btn-lg btn-danger" data-toggle="modal" data-target="#modalRemove">Remove Data</button>
            <button type="button" class="btn btn-outline-danger btn-lg" data-toggle="modal" data-target="#modalHide">Hide Data</button>
        </div>
    </div>
    <div class="container">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="pills-photos-tab" data-toggle="pill" href="#pills-photos" role="tab" aria-controls="pills-photos" aria-selected="true">Photos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-posts-tab" data-toggle="pill" href="#pills-posts" role="tab" aria-controls="pills-posts" aria-selected="false">Posts</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-likes-tab" data-toggle="pill" href="#pills-likes" role="tab" aria-controls="pills-likes" aria-selected="false">Likes</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-meta-tab" data-toggle="pill" href="#pills-meta" role="tab" aria-controls="pills-meta" aria-selected="false">Meta</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-thirdparty-tab" data-toggle="pill" href="#pills-thirdparty" role="tab" aria-controls="pills-thirdparty" aria-selected="false">Third-party</a>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-photos" role="tabpanel" aria-labelledby="pills-photos-tab"><item-grid :data="data.photos" :image="true"></item-grid></div>
            <div class="tab-pane fade" id="pills-posts" role="tabpanel" aria-labelledby="pills-posts-tab"><item-grid :data="data.posts" :image="false"></item-grid></div>
            <div class="tab-pane fade" id="pills-likes" role="tabpanel" aria-labelledby="pills-likes-tab"><item-grid :data="data.likes" :image="false"></item-grid></div>
            <div class="tab-pane fade" id="pills-meta" role="tabpanel" aria-labelledby="pills-meta-tab"><item-grid :data="data.metadata" :image="false"></item-grid></div>
            <div class="tab-pane fade" id="pills-thirdparty" role="tabpanel" aria-labelledby="pills-thirdparty-tab"><item-grid :data="data.thirdparty" :image="false"></item-grid></div>
        </div>
    </div>
    <div class="modal fade" id="modalRemove" tabindex="-1" role="dialog" :aria-labelledby="'modal'+index" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Remove {{ data.keyword }}?</h2>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to remove all selected data? If yes, choose whether you want to use our premium GDPR-compatible hard removal tool or just regular API tools. The process may take up to 24 hours to be fully completed.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                    <router-link to="/">
                        <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Remove Data</button>
                    </router-link>
                    <router-link to="/">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Hard Remove Data with GDPR</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalHide" tabindex="-1" role="dialog" :aria-labelledby="'modal'+index" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Hide {{ data.keyword }}?</h2>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to hide all selected data? Hiding is performed using the service's open API. The process may take up to 24 hours to be fully completed.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                    <router-link to="/">
                        <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Hide Data</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
</div>
</template>

<script>
import Navigation from './Navigation'
import ItemGrid from './ItemGrid'

export default {
  name: 'Details',
  components: {
    Navigation,
    ItemGrid
  },
  props: ['data'],
  methods: {
  /* eslint-disable */
  initChart() {
      //pie
      var ctxP = document.getElementById("pieChart").getContext('2d');
      var myPieChart = new Chart(ctxP, {
          type: 'pie',
          data: {
              labels: ["Photos", "Posts", "Likes", "Metadata", "Third-party sites/apps"],
              datasets: [
                  {
                      data: [
                          this.data.photos.length, 
                          this.data.posts.length, 
                          this.data.likes.length, 
                          this.data.metadata.length, 
                          this.data.thirdparty.length
                      ],
                      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                  }
              ]
          },
          options: {
              responsive: true
          }    
      });
    }
  /* eslint-enable */
  },
  mounted () {
    this.initChart()
  }
}
</script>

<style>
.nav-pills .nav-link {
    color: #666;
}
.nav-pills .active {
    background-color: #a6c!important;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
}
.jumbotron {
    margin: 25px 0;
}
.text-primary {
    color: #a6c!important;
}
.back {
    font-size: 48px;
    padding: 25px 0 0 50px;
}
</style>
