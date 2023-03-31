<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-card-title>
        Co2 Table
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          v-model:items-per-page="itemsPerPage"
          :headers="headers"
          :items="companies"
          :search="search"
          item-value="name"
          class="elevation-1"
        >
        <!-- summieren der werte funktioniert noch nicht -->
        <template v-slot:item.MtCO2year="{ item }">
          <v-chip >
            {{ getColor(item.raw.MtCO2year) }}
          </v-chip>
        </template>


      </v-data-table>

      <h1>asdf</h1>
    </v-responsive>
  </v-container>
</template>

<script>
import axios from 'axios'

  export default {
    data () {
      return {
        itemsPerPage: 10,
        search: '',
        headers: [
          {title: 'Rang', align: 'start', key: 'Rang' },
          { title: 'Land', align: 'end', key: 'Land' },
          { title: 'Unternehmen', align: 'end', key: 'Unternehmen' },
          { title: 'CO2 per year (Mt) ', align: 'end', key: 'MtCO2year' },
        ],
        companies: []
      }
    },
    mounted() {
    axios
      .get('http://localhost:3000/companies')
      .then((response) => {
        this.companies = response.data
      })
    }
  }


</script>
<script setup>


  function sumMtCO2year(tablerows) {
      let sum = 0
      tablerows.forEach(data => {
      sum = sum + parseFloat(data.MtCO2year)
    })
    return sum;
  }

  function getColor (value) {
    let sum = 0
        sum = sum + parseFloat(value)
        console.log(sum)
        return sum;
    }
    
</script>
