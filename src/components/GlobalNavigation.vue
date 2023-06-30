<template>
    <header>
        <v-app>
        <v-app-bar :elevation="0" image="/climateSpiral.png">
            <v-img style="max-width: 80px;" src="tree.png"> </v-img>
            <v-app-bar-title>CO2 Infos</v-app-bar-title>
            <template v-slot:append>
                <v-btn href="/">Klimawandel</v-btn>
                <v-btn href="/nachhaltigkeit">Nachhaltigkeit</v-btn>
            </template>
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        </v-app-bar>
        </v-app>
    </header>
</template>
  