<template>
        <h1 id="CO2Tabelle">Co2 Tabelle</h1>
      <p class="CO2TabelleText">Folgende Tabelle beinhaltatet die Top 50 der Firmen mit dem höchsten CO2 Ausstoß</p>
  <v-sheet class="ma-3 pa-3">
  <v-container>
    <v-responsive class="d-flex align-center text-center fill-height">
          <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              sm="1"
              md="1"
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
          </v-data-table>
        </v-responsive>
  </v-container>
</v-sheet>
</template>

<script>
import axios from 'axios'

  export default {
    data () {
      return {
        itemsPerPage: 10,
        search: '',
        headers: [
          { title: 'Rang', align: 'start', key: 'Rang' },
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
    },
    methods: {
    },

  }


</script>

<style>
.v-sheet {
  margin-top: 10em;
}

.CO2TabelleText{
  text-align: center;
}
</style>