<script setup>
  import { watch, ref} from "vue"
  import { onMounted } from "vue"
  import axios from "axios";

  onMounted(async () => {
    await axios
        .get('http://localhost:3000/companies')
        .then(response => {
          companiesdata.value = companies.value
          companies.value = response.data
  
        })
        companiesdata.value = companies.value
  })

  const companies = []
  const companiesdata = ref(companies)
  const search = ref("")

  watch(search, () => {
    companiesdata.value = companies.value.filter(company => company.Land.toLowerCase().includes(search.value.toLowerCase()))
  })
</script>

<template>
  <main>
    <h1>CO2 Table view</h1>
    <input v-model.trim="search" type="text" placeholder="Search for Land...">
    <table width ="50%" border ="4">
    <caption>Titel</caption>
      <thead>
        <tr>
          <th>Land</th>
          <th>Rang</th> 
          <th>Unternehmen</th>
          <th>MtCO2/year</th>
        </tr>
      </thead>
      <!-- itterate through the companies reseved from the GET request -->
      <tbody>
        <tr v-for="company in companiesdata" :key="company.Rang" :company="company">
          <td>{{ company.Land }}</td>
          <td>{{ company.Rang }}</td>
          <td>{{ company.Unternehmen }}</td>
          <td>{{ company["MtCO2/year"] }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>

</style>