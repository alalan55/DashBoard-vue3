<template>
  <header>
    <nav>
      <div class="btn-close-nav">
        <img src="../../assets/icons/dots.svg" alt="home icon" />
      </div>

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
          <span>Fulano da silva</span>
        </div>
      </div>
    </nav>
  </header>
</template>

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
</style>