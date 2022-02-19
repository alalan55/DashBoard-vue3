<template>
  <header>
    <nav>
      <div class="btn-close-nav" @click="openOrclose">
        <img src="../../assets/icons/dots.svg" alt="home icon" />
      </div>

      <Transition>
        <div class="content-nav" v-if="isToShow">
          <ul class="items">
            <li class="item">
              <router-link :to="{ name: 'home' }" @click="openOrclose">
                <img src="../../assets/icons/home.svg" alt="home icon" />
                <span> Home</span>
              </router-link>
            </li>
            <li class="item">
              <router-link :to="{ name: 'projects' }" @click="openOrclose">
                <img src="../../assets/icons/projects.svg" alt="home icon" />
                <span> Projects</span>
              </router-link>
            </li>
            <li class="item">
              <router-link :to="{ name: 'teamMembers' }" @click="openOrclose">
                <img src="../../assets/icons/user.svg" alt="home icon" />
                <span> Team Members</span>
              </router-link>
            </li>
            <li class="item">
              <router-link :to="{ name: 'stats' }" @click="openOrclose">
                <img src="../../assets/icons/stats.svg" alt="home icon" />
                <span> Stats</span>
              </router-link>
            </li>
            <li class="item">
              <router-link :to="{ name: 'settings' }" @click="openOrclose">
                <img src="../../assets/icons/settings.svg" alt="home icon" />
                <span> Settings</span>
              </router-link>
            </li>
          </ul>

          <div class="profile">
            <figure class="image-profile">
              <img src="../../assets/icons/user.svg" alt="user image profile" />
              <div class="dot-active"></div>
            </figure>

            <div class="name">
              <span>Alan de Oliveira</span>
            </div>
          </div>
        </div>
         </Transition>
        <div class="content-nav" v-if="!telaMobile">
          <ul class="items">
            <li class="item">
              <router-link :to="{ name: 'home' }">
                <img src="../../assets/icons/home.svg" alt="home icon" />
                <span> Home</span>
              </router-link>
            </li>
            <li class="item">
              <router-link :to="{ name: 'projects' }">
                <img src="../../assets/icons/projects.svg" alt="home icon" />
                <span> Projects</span>
              </router-link>
            </li>
            <li class="item">
              <router-link :to="{ name: 'teamMembers' }">
                <img src="../../assets/icons/user.svg" alt="home icon" />
                <span> Team Members</span>
              </router-link>
            </li>
            <li class="item">
              <router-link :to="{ name: 'stats' }">
                <img src="../../assets/icons/stats.svg" alt="home icon" />
                <span> Stats</span>
              </router-link>
            </li>
            <li class="item">
              <router-link :to="{ name: 'settings' }">
                <img src="../../assets/icons/settings.svg" alt="home icon" />
                <span> Settings</span>
              </router-link>
            </li>
          </ul>

          <div class="profile">
            <figure class="image-profile">
              <img src="../../assets/icons/user.svg" alt="user image profile" />
              <div class="dot-active"></div>
            </figure>

            <div class="name">
              <span>Alan de Oliveira</span>
            </div>
          </div>
        </div>
     
    </nav>
  </header>
</template>

<script>
import { ref, computed, onBeforeUnmount, onMounted } from "vue";
export default {
  setup() {
    const show = ref(false);
    const winWidth = ref(window.innerWidth);
    const telaMobile = computed(() => (winWidth.value > 800 ? false : true));
    const isToShow = computed(() =>
      telaMobile.value && show.value ? true : false
    );
    const resizeScreen = () => {
      winWidth.value = window.innerWidth;
    };

    const openOrclose = () => {
      if (telaMobile.value) {
        show.value == true ? (show.value = false) : (show.value = true);
      }
    };

    onMounted(() => {
      window.addEventListener("resize", resizeScreen);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", resizeScreen);
    });

    return { show, openOrclose, telaMobile, isToShow };
  },
};
</script>

<style  scoped>
header {
  z-index: 999;
  position: relative;
}
nav {
  position: fixed;
  left: 0;
  height: 100vh;
  width: 230px;
  border-right: 1px solid rgb(230, 230, 230);
  transition: 0.1s ease-in-out;
}

/* BOTAO DE FECHAR NAVBAR */
.btn-close-nav {
  padding: 1.5rem 0.9rem;
  height: 12vh;
}
.btn-close-nav img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
/* FIM DO BOTAO DE FECHAR NAVBAR */

.content-nav {
  height: 80vh;
  transition: 0.1s ease-in-out;
}

.items {
}
.items .item {
  list-style: none;
  margin: 1.5rem 0;
}
.item a {
  text-decoration: none;
  display: flex;
  align-items: center;
  padding-left: 0.9rem;
  gap: 1rem;
}
.item .router-link-exact-active {
  border-left: 4px solid black;
}
.item img {
  width: 30px;
}
.item span {
  font-weight: 400;
  color: #000000;
}

/* IMAGEM DE PERFIL */
.profile {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.profile .image-profile {
  border: 1px solid black;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  position: relative;
}
.image-profile img {
  width: 100%;
  height: 100%;
}
.dot-active {
  width: 10px;
  height: 10px;
  background: rgb(18, 207, 18);
  border-radius: 50%;
  position: absolute;
  bottom: -5px;
  right: -5px;
}
.name {
  padding: 0.5rem 0;
}
/* FIM DE IMAGEM DE PERFIL */


/* TRANSICOES */

.v-enter-active,
.v-leave-active {
  transition: opacity .9s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* FIM DAS TRANSICOES */

@media screen and (max-width: 800px) {
  header {
    /* border: 5px solid red; */
    z-index: 1 !important;
  }
  nav {
    position: static;
    height: 70px;
    width: 100%;
    -webkit-box-shadow: -2px 3px 13px 1px rgba(0, 0, 0, 0.05);
    box-shadow: -2px 3px 13px 1px rgba(0, 0, 0, 0.05);
    z-index: 99999 !important;
  }
  nav .content-nav {
    position: fixed;
    left: 0;
    top: 71px;
    height: calc(100vh - 70px);
    width: 230px;
    border-right: 1px solid rgb(230, 230, 230);
    transition: 0.1s ease-in-out;
    background: white;
  }
}
</style>