<template>
  <div class="constrain headerUp row">
    <div class="col-4">
      <q-btn
        to="/tasks"
        color="orange-5"
        icon="pending_actions"
        flat
        label="Task Control"
      />
    </div>
    <div class="col-4 text-center items-center justify-center">
      <q-icon size="sm" name="info"/>
      <small>Você tem apenas dois dias de trabalho livre</small>
    </div>
    <div class="col-4 constrain">
      <q-item class="fit row wrap justify-end items-end q-pr-none">
        <div class="column">
          <q-item-label class="name" caption>
            <strong>Ester Da Graça</strong>
          </q-item-label>
          <q-item-section>
            <div class="text-yellow-1 q-gutter-sm">
              <q-btn
                to="/perfil"
                class="q-pa-none"
                size="9px"
                flat
                dense
              >
                <small class="btnPerfil">Ver perfil</small>
              </q-btn>
            </div>
          </q-item-section>
        </div>
        <q-item-section class="q-pa-none" side>
          <q-avatar>
            <img src="">
          </q-avatar>
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.headerUp {
  margin-top: 20px;
  margin-bottom: 13px;
}
.btnPerfil {
  margin-left: 41px;
}
small{
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}
strong {
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  color: aliceblue;
}
</style>
