<template>
     <v-card style="margin: 20px auto">
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                <v-list-item-subtitle class="float-right text-gray">{{ data.crated_at }}</v-list-item-subtitle>
                    <router-link :to="data.path">
                        {{ data.title }}
                    </router-link>
                </v-list-item-title>
                <v-list-item-subtitle>Author : {{ data.user }}</v-list-item-subtitle>
                <v-list-item-content>{{ data.body }}</v-list-item-content>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>
    export default {
        props: ['data']
    }
</script>
