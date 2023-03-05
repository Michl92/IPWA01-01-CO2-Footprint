<script setup>
  import {ref} from "vue"
  import { onMounted } from "vue"
  import axios from "axios"

  const companies = []
  const companiesdata = ref(companies)

  onMounted(async () => {
    await axios
        .get('http://localhost:3000/companies')
        .then(response => {
          companies.value = response.data
  
        })
        companiesdata.value = companies.value
  })
</script>

<script>
export default {
    name: 'TheBasics',
    data: () => ({
      filters: {
        Land: { value: '', keys: ['Land'] },
        Age: { value: '', keys: ['Age'] },
        Email: { value: '', keys: ['Email'] },
        MtCO2year: { value: '', keys: ['MtCO2year'] }
      }
    }),
    methods: {
      co2Sort (row) {
        return parseFloat(row.MtCO2year)
      }
    }
}
</script>

<template>
    <main>
      <h1>CO2 Table view</h1>
        <label>Filter by Name:</label>
        <input v-model="filters.Land.value"/>
        <VTable 
        :data="companiesdata"
        :filters="filters"
        >
          <template #head>
              <VTh sortKey="Land">Land</VTh>
              <VTh sortKey="Rang">Rang</VTh>
              <VTh sortKey="Unternehmen">Unternehmen</VTh>
              <VTh :sortKey="co2Sort">MtCO2/year</VTh>
          </template>
          <template #body="{rows}">
            <tr v-for="row in rows" :key="row.id">
              <td>{{ row.Land }}</td>
              <td>{{ row.Rang }}</td>
              <td>{{ row.Unternehmen }}</td>
              <td>{{ row.MtCO2year }}</td>
            </tr>
          </template>
        </VTable>
    </main>
</template>