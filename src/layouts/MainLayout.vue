<template>
  <q-layout class="constrain" view="lHh Lpr lFf">
    <q-header class="header">
      <header-up/>
      <q-separator class="constrain" inset dark/>
      <header-md/>
      <q-tabs
        v-model="tab"
        dense
        class=" tabs constrain"
        indicator-color="orange-7"
        align="justify"
        narrow-indicator
      >
        <q-route-tab
          to="/tasks"
          label="Tarefas Gerais"
        />
        <q-route-tab
          to="/individualtasks"
          label="Tarefas Individuais"
        />
        <q-route-tab
          to="/perfil"
          label="Tarefas Pessoais"
        />
      </q-tabs>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    name: 'MainLayout',
    components: {
      'header-up': () => import('../components/header/HeaderUp.vue'),
      'header-md': () => import('../components/header/HeaderMd.vue')
    },
    data() {
      return {
        tab: 'mails'
      }
    }
  }
</script>
<style>
.header{
  width: 1440;
  height: 280px;
}

.tabs {
  margin-top: 85px;
  position: initial;
}

</style>
