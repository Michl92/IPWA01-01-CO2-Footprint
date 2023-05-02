<template>
  <LocalNavigationNachhaltigkeit />
  <main>
    <v-container style="max-width: 750px;">
      <div>
      <h1 id="NachhaltigerLeben">Nachhaltiger Leben</h1>
        <p class="nachhaltigerLebenText">Die Industrie hat durch ihren enormen CO2 Ausstoß den größten Einfluss auf die globale Klimaerwärmung.
          Diese kann einerseits durch die Politik beeinflusst werden aber auch durch unser Konsumverhalten. 
          <p style="font-weight: bold;">Es gibt verschiedene Möglichkeiten seinen eignen CO2-Fußabdruck zu veringern.</p>  
        </p>
      </div>

      <template v-for="temp in temps">
        <div v-bind:class="temp.pos" v-bind:id="temp.header"> 
          <h2>{{ temp.header }}</h2>
          <p>{{ temp.text }}</p>
          <v-img v-bind:src=temp.img></v-img>
        </div>
      </template>
    </v-container>
  </main>
</template>

<script setup>
  import LocalNavigationNachhaltigkeit from '@/components/LocalNavigationNachhaltigkeit.vue';
</script>

<script>
  export default {
    data: () => ({
      temps: [
        {
          header: 'Ernährung',
          img: "greenforce.png",
          text: "Durch die Umstellung auf eine pflanzliche Ernährung",
          pos: "left"
        },
        {
          header: 'Kleidung',
          img: "goodOnYou.png",
          text: "Durch die Auswhal bestimmter CO2 neutralen Kleidungsmarken",
          pos: "right"
        },
        {
          header: 'Mobilität',
          img: "carSharing.png",
          text: "Durch die Nutzung von Car Sharing anbietern oder öffentlichen Verkehrsmitteln",
          pos: "left"
        },
        {
          header: 'CO2-Ausgleich',
          img: "wildInt.png",
          text: "Durch den Kauf von Regenwald zum Ausgleich seines CO2-Fußabdrucks",
          pos: "right"
        },
      ]
    })
  }
</script>

<style>
h1 {
  display: block;
  text-align: center;
}

.nachhaltigerLebenText {
  text-align: center;
  display: block;
  margin-bottom: 10em
}

.left {
  text-align: left;
  display: block;
}

.right {
  text-align: right;
  display: block;
}

.left, .right {
  margin-bottom: 10em
}

main .v-img {
  max-width: 500px;
  max-height: 320px;
}
main .right .v-img {
  max-width: 500px;
  max-height: 320px;
  margin-left: auto;
}
</style>