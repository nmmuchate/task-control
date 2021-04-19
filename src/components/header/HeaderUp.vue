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
    <div class="col-4 text-center">
      Você tem apenas dois dias de trabalho livre
    </div>
    <div class="col-4 constrain">
      <q-item class="fit row wrap justify-end items-end q-pr-none">
        <div class="column">
          <q-item-label class="" caption>
            Ester Da Graça
          </q-item-label>
          <q-item-section>
            <div class="text-yellow-1 q-gutter-sm">
              <q-btn
                class="q-pa-none"
                size="9px"
                flat
                dense
              >
                <small>Ver perfil</small>
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
small {
  margin-left: 41px;
}
</style>
