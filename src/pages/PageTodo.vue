<template>
  <q-page class="constrain">
    <table id="data-table">
      <thead>
        <tr>
          <th>Nº</th>
          <th>Actividades</th>
          <th>Prazo</th>
          <th>site</th>
          <th>Importante</th>
          <th></th>
        </tr>
      </thead>
      <table-component
        v-for="(data, key) in tasks"
        :key="key"
        :data="data"
      ></table-component>
    </table>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    components: {
      'table-component': () => import('../components/table/TableComponent.vue')
    },
    computed: {
      ...mapGetters('tasks', ['tasks']),
    }
  }
</script>

<style>

</style>
