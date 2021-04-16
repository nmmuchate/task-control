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
            <tr>
              <td class="number">1</td>
              <td class="tasks">taskcontrol</td>
              <td class="date">23/02/2021</td>
              <td class="site">23/02/2021</td>
              <td class="important">icon checkbox</td>
              <td>jsaklfçksç</td>
            </tr>

            <tr>
              <td class="description">2</td>
              <td class="income">Knowlodge</td>
              <td class="date">23/02/2021</td>
              <td class="site">23/02/2021</td>
              <td class="important">icon checkbox</td>
              <td>jsaklfçksç</td>
            </tr>
            <tr>
              <td class="description">3</td>
              <td class="expense">API de knowlodge</td>
              <td class="date">23/02/2021</td>
              <td class="site">23/02/2021</td>
              <td class="important">icon checkbox</td>
              <td>jsaklfçksç</td>
            </tr>
          </tbody>
        </table>
</template>

<script>
export default {

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
  background: #fff;

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
  background: #fff;
  padding: 1rem 2rem;
  color: #969cb3;
}

/* td.description {
  color: var(--dark-blue);
}

td.income {
  color: #12a454;
}

td.expense {
  color: var(--red);
} */
</style>
