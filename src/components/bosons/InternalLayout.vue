<template>
    <section>
        <Header/>

        <div class="content">
            <router-view />
        </div>
        
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
}
.content{
    border: 1px solid;
    width: calc(100vw - 230px);
    height: 100vh;
    position: absolute;
    right: 0;
    
}
</style>