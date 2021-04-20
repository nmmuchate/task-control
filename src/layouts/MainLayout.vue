<template>
  <q-layout class="constrain" view="lHh Lpr lFf">
    <div v-if='showHeader1'>
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
            to="/personaltasks"
            label="Tarefas Pessoais"
          />
        </q-tabs>
      </q-header>
    </div>
    <div v-else>
      <q-header class="headerSCD">
        <header-second/>
      </q-header>
    </div>
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
      'header-md': () => import('../components/header/HeaderMd.vue'),
      'header-second': () => import('../components/header/header2nd/HeaderSecond.vue')

    },
    data() {
      return {
        tab: 'mails',
        showHeader: true
      }
    },
    computed: {
      showHeader1(){
        let currentPath = this.$route.fullPath
        if (currentPath === '/tasks') return this.showHeader
        else if (currentPath === '/individualtasks') return this.showHeader
        else if (currentPath === '/personaltasks') return this.showHeader
      }
    }
  }
</script>
<style>
.header{
  width: 1440;
  height: 280px;
}

.headerSCD {
  width: 1440;
  height: 50px;
}
.tabs {
  margin-top: 85px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
}

</style>
