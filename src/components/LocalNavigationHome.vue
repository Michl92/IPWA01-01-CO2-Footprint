<template>
    <nav style="left: 0px; z-index: 1008; transform: translateX(0%); position: fixed; height: calc((100% - 64px) - 0px); top: 64px; bottom: 0px; width: 300px;">

            <v-layout>
                <v-navigation-drawer
                class="bg-blue"
                theme="dark"
                permanent
                >
                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-box" title="Account" value="account"></v-list-item>
                    <v-list-item prepend-icon="mdi-gavel" title="Admin" value="admin"></v-list-item>
                </v-list>
        
                <template v-slot:append>
                    <div class="pa-2">
                    <v-btn block>
                        Logout
                    </v-btn>
                    </div>
                </template>
                </v-navigation-drawer>

            </v-layout>

    </nav>
</template>