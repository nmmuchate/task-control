<template>
  <q-layout class="constrain" view="lHh Lpr lFf">
    <q-header class="header">
      <q-tabs
          v-model="tab"
          dense
          class="text-orangeJ tabs constrain"
          active-color="orange-7"
          indicator-color="orange-7"
          align="justify"
          narrow-indicator
        >
          <q-route-tab
            to="/tasks"
            name="mails"
            label="Tarefas Gerais"
          />
          <q-route-tab
            to="/individualtasks"
            name="alarms"
            label="Tarefas Individuais"
          />
          <q-route-tab
            to="/perfil"
            name="movies"
            label="Perfil"
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
  height: 250px;
}
.layout {
  width: min(1440px, 90vw);
}
.tabs {
  margin-top: 210px;
}
</style>
