<template>
  <table-component/>
</template>

<script>
export default {
  components: {
    'table-component': () => import('../components/table/TableComponent.vue')
  }
}
</script>

<style>

</style>
