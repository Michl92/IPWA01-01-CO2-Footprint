<template>


  <nav class="navgationMenue d-none d-lg-flex" style="z-index: 100; transform: translateX(0%); position: fixed; height: calc((100% - 0px) - 0px); top: 64px; bottom: 0px; width: 250px;"> 
    <v-card>
      <v-layout>
        <v-navigation-drawer
        class="bg-white"
        permanent
        >
        <v-list class='navigationMenueText' density="compact" nav>
          <v-list :items="items"></v-list>
        </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </nav>


  <nav class="d-lg-flex" style="z-index: 100; transform: translateX(0%); position: fixed; height: calc((100% - 0px) - 0px); top: 64px; bottom: 0px; width: 100px; right: 0px;">
      <v-menu transition="scroll-x-transition">
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon
            color="primary"
            v-bind="props"
            class="ma-2 pa-2 d-lg-none"
          >
          </v-app-bar-nav-icon>
        </template>
        <v-list :items="items"></v-list>
      </v-menu>
    </nav>
</template>

<script>

export default{

  data: () => ({
    items: [
      {
        title: 'Ernährung',
        value: 'Ernährung',
        props: {
          href: '#Ernährung',
        },
      },
      {
        title: 'Kleidung',
        value: 'Kleidung',
        props: {
          href: '#Kleidung',
        },
      },
      {
        title: 'Mobilität',
        value: 'Mobilität',
        props: {
          href: '#Mobilität',
        },
      },
      {
        title: 'CO2-Ausgleich',
        value: 'CO2Ausgleich',
        props: {
          href: '#CO2-Ausgleich',
        },
      },
    ],
  }),

methods: {
   languageCheck() {
    console.log(navigator.language)
  if(navigator.language.match(/ar*/) || navigator.language.match(/he*/)) {
    const navMenueLocation = document.querySelector('.navgationMenue')
    navMenueLocation.style.right = '0px'
    const navText = document.getElementsByClassName('v-list')
    navText[0].style.textAlign = "right"
    const navDrawer = document.querySelector('.v-navigation-drawer')
    navDrawer.className += " v-navigation-drawer--right"
  }
  else{
    const navMenueLocation = document.querySelector('.navgationMenue')
    navMenueLocation.style.left = '0px'
  }


}
},

mounted() {
  this.languageCheck()
}
}


</script>

<style>
#Ernährung, #Kleidung, #Mobilität, #CO2-Ausgleich{
  scroll-margin-top: 100px;
}
</style>