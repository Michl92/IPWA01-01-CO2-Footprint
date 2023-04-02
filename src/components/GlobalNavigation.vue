<template>
    <header>
        <!-- <v-toolbar color="purple">
        <template v-slot:prepend>
            <div class="text-h5">Title</div>
        </template>
    
        <v-divider
            class="ms-3"
            inset
            vertical
        ></v-divider>
    
        <v-toolbar-title>My Home</v-toolbar-title>
    
        <v-spacer></v-spacer>
    
        <v-spacer></v-spacer>
    
        <v-toolbar-items>
            <v-btn variant="text" href="/">Home</v-btn>
    
            <v-divider vertical></v-divider>
    
            <v-btn variant="text" href="/about">About</v-btn>
    
            <v-divider vertical></v-divider>
    
            <v-btn variant="text">Music</v-btn>
        </v-toolbar-items>
    
        <v-divider vertical></v-divider>
    
        <v-app-bar-nav-icon class="ms-2"></v-app-bar-nav-icon>
        </v-toolbar> -->
        <v-app>
        <v-app-bar :elevation="0">
            <v-app-bar-title>Test</v-app-bar-title>
            <template v-slot:append>
                <v-btn href="/">Home</v-btn>

                <v-btn href="/about">About</v-btn>

                <v-btn icon="mdi-dots-vertical"></v-btn>
            </template>
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        </v-app-bar>
    </v-app>
    </header>
  </template>
  