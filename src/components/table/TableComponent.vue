<template>
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
    <tbody>
      <tr v-for="data in datas" :key="data">
        <td class="number">
          {{ data.number }}
        </td>
        <td class="tasks">
          {{ data.tasks }}
        </td>
        <td class="date">
          <small>{{ data.deadLine }}</small>
        </td>
        <td class="site">
          {{ data.site }}
        </td>
        <td class="important">
          {{ data.importance ? 'Obrigatorio' : 'Não obrigatorio' }}
        </td>
        <td class="checkbox">
         <q-checkbox v-model="data.checkbox" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    data(){
      return {
        datas: [
          {
            number: 1,
            tasks: 'taskcontrol',
            deadLine: '24/04/2021',
            site: 'www.google.com',
            importance: true,
            checkbox: false
          },
          {
            number: 2,
            tasks: 'eCalloiro',
            deadLine: '24/05/2021',
            site: 'www.google.com',
            importance: true,
            checkbox: true
          },
          {
            number: 3,
            tasks: 'API de eCalloiro',
            deadLine: '04/04/2021',
            site: 'www.google.com',
            importance: false,
            checkbox: false
          },

        ]
      }
    }
  }
</script>

<style>
  table thead tr th:first-child,
  table tbody tr td:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  table thead tr th:last-child,
  table tbody tr td:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }


  #data-table {
    width: 90%;
    border-spacing: 0 0.5rem;
  }

  table th {
    background: #ffffff;

    font-family: 'Inter', sans-serif;
    font-weight: normal;
    padding: 1rem 2rem;

    text-align: left;
    color: #969cb3;
  }

  table tr {
    opacity: 0.7;
  }
  table tbody tr:hover {
    opacity: 1;
  }

  table td {
    background: #ffffff;
    padding: 1rem 2rem;
    color: #969cb3;
  }
  .tasks{
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #5A5A66;
  }
  .number{
    font-family: 'IBM Plex Sans', sans-serif;
  }
</style>
