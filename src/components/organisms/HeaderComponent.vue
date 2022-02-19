<template>
  <header>
    <nav>
        <div class="btn-close-nav">
            <img src="../../assets/icons/dots.svg" alt="home icon" />
        </div>
      <ul class="items">
        <li class="item">
          <router-link to="/">
            <img src="../../assets/icons/home.svg" alt="home icon" />
            <span> Home</span>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/">
            <img src="../../assets/icons/projects.svg" alt="home icon" />
            <span> Projects</span>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/">
            <img src="../../assets/icons/user.svg" alt="home icon" />
            <span> Team Members</span>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/">
            <img src="../../assets/icons/stats.svg" alt="home icon" />
            <span> Stats</span>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/">
            <img src="../../assets/icons/settings.svg" alt="home icon" />
            <span> Settings</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style  scoped>
header {
  position: fixed;
  height: 100vh;
  width: 230px;
  left: 0;
  z-index: 999;
  border: 1px solid;
}
.items {
}
.items .item {
  list-style: none;

  margin: 0.5rem 0;
}
.item a {
  text-decoration: none;
  display: flex;
  align-items: center;
  padding-left: .9rem;
  gap: 1rem;
}
.item .router-link-exact-active{
    border-left: 4px solid black;
}
.item img {
  width: 30px;
}
.item span {
  font-weight: 400;
  color: #000000;
}
.btn-close-nav{
    padding-left: .9rem;
    cursor: pointer;
}
.btn-close-nav img{
    width: 30px;
    height: 30px;
}
</style>