<template>

  <v-sheet class="ma-3 pa-3 d-none d-lg-block">
    <nav style="left: 0px; z-index: 100; transform: translateX(0%); position: fixed; top: 64px; bottom: 0px; width: 250px;"> 
      <v-card>
        <v-layout>
          <v-navigation-drawer
          class="bg-blue order-1"
          theme="dark"
          permanent
          >
          <v-list density="compact" nav style="text-align: left;">
              <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>
              <v-list-item prepend-icon="mdi-account-box" title="Account" value="account"></v-list-item>
              <v-list-item prepend-icon="mdi-gavel" title="Admin" value="admin"></v-list-item>
          </v-list>
          </v-navigation-drawer>
        </v-layout>
      </v-card>
    </nav>
  </v-sheet>


    <v-menu transition="scroll-x-transition">
      <template v-slot:activator="{ props }">
        <v-app-bar-nav-icon
          color="primary"
          v-bind="props"
          class="ma-2 pa-2 d-lg-none order-3"
        >
        </v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-account-box" title="Account" value="account"></v-list-item>
        <v-list-item prepend-icon="mdi-gavel" title="Admin" value="admin"></v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
// export default {
//   data () {
//     return {
//       drawer: null,
//     }
//   }
// }
</script>