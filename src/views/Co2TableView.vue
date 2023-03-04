<script setup>
  import {ref, watch} from "vue"
  import companiesdata from "../data/Companies.json"

  const companies = ref(companiesdata)
</script>

<template>
  <main>
    <h1>CO2 Table view</h1>
    <table width ="50%" border ="4">
    <caption>Titel</caption>
      <tr>
        <th>Land</th>
        <th>Rang</th> 
        <th>Unternehmen</th>
        <th>MtCO2/year</th>
      </tr>
      <tr v-for="company in companies">
        <td>{{ company.Land }}</td>
        <td>{{ company.Rang }}</td>
        <td>{{ company.Unternehmen }}</td>
        <td>{{ company["MtCO2/year"] }}</td>
      </tr>
    </table>
  </main>
</template>

<style scoped>

</style>