<template>
    <v-toolbar dense>
      <v-toolbar-title>ForumApp</v-toolbar-title>

      <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn text>Forum</v-btn>
      <v-btn text>Ask Question</v-btn>
      <v-btn text>Category</v-btn>
      <v-btn text><router-link to="/login">Login</router-link></v-btn>
    </div>
    </v-toolbar>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>