<template>
 <div class="headerMd constrain row">
        <div class="col-6">
          <div class="row">
            <div class="col-4 column">
              <strong>12</strong>
              <small>Projecto ao total</small>
            </div>
            <div class="column col-4">
              <strong>12</strong>
              <small>Em andamentos</small>
            </div>
            <div class="col-4 column">
              <strong>4</strong>
              <small>Concluidos</small>
            </div>
          </div>
        </div>
        <div class="col-6 row justify-end ">
          <q-btn
            color="orange-5"
            class="btnJob"
            icon="add_box"
            label="Adicionar novo Job"
          />
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>
.headerMd {
  margin-top: 31px;
}
strong,small{
  font-family: 'Inter', sans-serif;
  font-style: normal;
}

.btnJob{
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 10px;
}
</style>
