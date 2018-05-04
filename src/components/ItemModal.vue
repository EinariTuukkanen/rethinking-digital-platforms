<template>
<div class="modal fade" :id="'modal'+index" tabindex="-1" role="dialog" :aria-labelledby="'modal'+index" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <img v-if="data.url" class="card-img-top" :src="data.url" alt="Card image cap">
            </div>
            <div class="modal-body">
                <div class="float-left"><small class="text-muted">{{ data.timestamp }}</small></div>
                <br />
                {{ data.description }}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ItemModal',
  props: ['data', 'index']
}
</script>
