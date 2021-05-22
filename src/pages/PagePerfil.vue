<template>
  <div class="constrain flex flex-center">
    <q-card class="row wrap justify-center items-center content-center">
      <q-card-section>
        <q-item clickable v-ripple>
          <q-avatar>
            <img src="https://scontent.fjnb10-1.fna.fbcdn.net/v/t1.6435-0/c0.8.206.206a/p206x206/105185955_2709423306006325_8509105222969314454_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=da31f3&_nc_eui2=AeHTTnSIm_pSo5uSoHhEDYqVYpiBXu-HwIVimIFe74fAhbGnAF7B5YEGpNY6N89UZq7Hj4J52uoY0qqQYEg30PqU&_nc_ohc=tkUw6qYNtv0AX_8wR9Z&_nc_ht=scontent.fjnb10-1.fna&tp=27&oh=4390384fd2c9b4fcbb3771d74cc5c2cb&oe=60B3521F" alt="Picture Perfil">
          </q-avatar>
        </q-item>
      </q-card-section>
    </q-card>
  </div>
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
