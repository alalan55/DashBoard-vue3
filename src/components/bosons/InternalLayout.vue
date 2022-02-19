<template>
  <section>
    <Header />
    <div class="content">
      <router-view />
    </div>
  </section>
</template>

<script>
import Header from "../organisms/HeaderComponent.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style  scoped>
.content {
  padding: 0.8rem;
  width: calc(100vw - 230px);
  min-height: 100vh;
  position: absolute;
  right: 0;
}

@media screen and (max-width: 800px){
  .content{
    position: static;
    min-height: calc(100vh - 70px);
    width: 100%;
  }
}
</style>