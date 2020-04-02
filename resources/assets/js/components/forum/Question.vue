<template>
    <v-container fluid >
        <v-card>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-4" style="margin-bottom:10px">
                        <router-link :to="data.path">
                            {{ data.title }}
                        </router-link>
                    </v-list-item-title>                    
                    <v-list-item-subtitle>Author : {{ data.user_name }} Said {{ data.crated_at }}</v-list-item-subtitle>
                    <v-list-item-content>{{ data.body }}</v-list-item-content>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        props: ['data']
    }
</script>
