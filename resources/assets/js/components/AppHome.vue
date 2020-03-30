<template>
    <div>
        <toolbar/>
        <router-view></router-view>
        <foter/>
    </div>
</template>

<script>
import toolbar from './ToolBar'
import foter from './AppFooter'
import login from './login/Login'
    export default {
        components: {
            toolbar,
            foter,
            login
        }
    }
</script>

<style lang="scss" scoped>

</style>