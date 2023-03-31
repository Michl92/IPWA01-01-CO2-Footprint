<template>
  <nav style="right: 0px; z-index: 1008; transform: translateX(0%); position: fixed; height: calc((100% - 64px) - 0px); top: 64px; bottom: 0px; width: 300px;">
    <v-card>
      <v-layout>
        <v-navigation-drawer
          permanent
          location="right"          
        >
          <template v-slot:prepend>
            <v-list-item>Test</v-list-item>
          </template>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main></v-main>
      </v-layout>
    </v-card>
  </nav>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
      }
    },
  }
</script>