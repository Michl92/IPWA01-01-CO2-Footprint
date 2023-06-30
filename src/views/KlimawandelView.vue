<template>    
  <LocalNavigationKlimawandel />
  <main>
    <v-container>
    <h1 id="GlobalWarming">Globale Erwämung</h1>
    <blockquote src="https://www.ipcc.ch/report/ar6/syr/resources/spm-headline-statements/">
      "Human activities, principally through emissions of 
      greenhouse gases, have unequivocally caused global 
      warming, with global surface temperature reaching 
      1.1°C above 1850–1900 in 2011–2020. Global greenhouse 
      gas emissions have continued to increase, with unequal 
      historical and ongoing contributions arising from 
      unsustainable energy use, land use and land-use change, 
      lifestyles and patterns of consumption and production 
      across regions, between and within countries, 
      and among individuals"</blockquote>
      <p class="IPPC">- AR6 Synthesis Report of IPCC</p>

    <div style="margin-top: 10em; margin-bottom: 10em;">
      <h1 id="ClimaSpiral">Klima Spirale</h1>
      <p class="climaSpiralText">Diese Visualisierung zeigt monatliche globale Temperaturanomalien. 
        Weiße und blaue Farben zeigen kühlere Temperaturen an, während orange 
        und rote Farben wärmere Temperaturen anzeigen. Wie Sie sehen können, 
        haben sich die globalen Temperaturen im Laufe der Zeit vor allem durch 
        menschliche Aktivitäten erwärmt.</p>
      <div>
        <v-img style="max-width: 50%; margin-left: 25%;" src="climateSpiralOnSide.png"></v-img>
      </div>
      <p  style="text-align: center;">https://svs.gsfc.nasa.gov/4975</p>
    </div>
    <Co2Table />
    </v-container>
  </main>
</template>

<script setup>
  import Co2Table from '@/components/Co2Table.vue'
  import LocalNavigationKlimawandel from '@/components/LocalNavigationKlimawandel.vue';
</script>

<style>
h1 {
  display: block;
  text-align: center;
}

.IPPC{
  text-align: center;
  margin-bottom: 10em;
  font-size: large;
}

blockquote {
  text-align: center;
  display: block;
  margin-top: 2em;
  margin-bottom: 1em;
  margin-left: 40px;
  margin-right: 40px;
  font-style: italic;
}

.climaSpiralText{
  text-align: center;
  display: block;
}

@media (max-width: 1920px) {
  .v-container{
    max-width: 760px;
  }
}

@media (min-width: 1920px) {
  .v-container{
    max-width: 1400px;
  }
}



</style>