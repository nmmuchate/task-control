<template>
    <tbody>
      <tr>
        <td class="number">
          {{ data.number }}
        </td>
        <td class="tasks">
          {{ data.name }}
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
</template>

<script>

  export default {
    props: ['data', 'id'],
    computed: {
      showTask() {
        console.log('task::', this.tasks)
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
