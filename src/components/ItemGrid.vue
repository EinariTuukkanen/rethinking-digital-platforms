<template>
<div class="row">
  <div class="col-md-4" v-for="item in data" :key="item.id">
    <div class="card mb-4 box-shadow">
      <img v-if="image" class="card-img-top" :src="item.url" alt="Card image cap" style="height: 225px">
      <div class="card-body">
        <p class="card-text">{{ item.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" :data-target="'#modal'+item.id">View</button>
            <button type="button" data-toggle="button" class="delete-button btn btn-sm btn-outline-secondary active" style=""><span></span></button>
          </div>
          <small class="text-muted">{{ item.timestamp }}</small>
        </div>
      </div>
    </div>
    <item-modal :index="item.id" :data="item"></item-modal>
  </div>
</div>
</template>

<script>
import ItemModal from './ItemModal'

export default {
  name: 'ItemGrid',
  components: {
    ItemModal
  },
  props: ['count', 'data', 'image']
}
</script>

<style>
.btn-outline-secondary:not([disabled]):not(.disabled).active, .btn-outline-secondary:not([disabled]):not(.disabled):active, .show>.btn-outline-secondary.dropdown-toggle {
  background-color: #a6c!important;
  color: #fff!important;
}
.delete-button span {
  display: none;
}
.delete-button:after {
  content: 'Delete';
}
.delete-button.active:after {
  content: 'Save';
}
.card-text {
  min-height: 45px;
  max-height: 45px;
  overflow: hidden;
}
</style>
