<template>
<div class="level-container">
    <div class="level-meter bg-success" :style="{ width: level + '%' }"/>
</div>
</template>

<script>
export default {
  name: 'Meter',
  props: ['level']
}
</script>

<style>
.level-container {
  background-color: #eee;
  margin-bottom: 10px;
}
.level-meter {
  height: 8px;
}
</style>
