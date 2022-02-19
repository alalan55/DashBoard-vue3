<template>
    <section>
        <Header/>
        <span>
            Internal layout
        </span>

        <router-view />
    </section>
</template>

<script>
import Header from '../organisms/HeaderComponent.vue'
    export default {
        components:{
            Header
        }
    }
</script>

<style  scoped>
section{
    border: 1px solid red;
}
</style>