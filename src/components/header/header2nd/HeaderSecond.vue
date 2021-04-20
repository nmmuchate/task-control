<template>
  <div class="constrain">
    <div class="row">
      <div class="col-6 row wrap justify-start items-start">
        <q-btn
        to="/tasks"
        color="orange-5"
        icon="pending_actions"
        flat
        label="Task Control"
      />
      </div>
      <div class="col-6 row wrap justify-end items-end">
        <q-btn round>
          <q-avatar size="42px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
