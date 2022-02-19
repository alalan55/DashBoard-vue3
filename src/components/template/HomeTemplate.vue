<template>
  <div class="home-template">
    <div class="card-1">
      <div class="input">
        <input type="text" placeholder="Search for stats" />
        <img src="@/assets/icons/search.svg" alt="search" class="icon-search">
       
      </div>
      <div class="names">
        <span class="greeting">Hello Alan!</span>
        <span class="welcome">Welcome back!</span>
      </div>
       <div class="btn-filter">
            <span>Filter</span>
            <img src="@/assets/icons/filter.svg" alt="">
        </div>
    </div>
    <div class="card-2">
      <span>card 2</span>
    </div>
    <div class="card-3">
      <span>card 3</span>
    </div>
    <div class="card-4">
      <span>card 4</span>
    </div>
    <div class="card-5">
      <span>card 5</span>
    </div>
    <div class="card-6">
      <span>card 6</span>
    </div>
    <div class="card-7">
      <span>card 7</span>
    </div>
  </div>
</template>

<style  scoped>
.home-template {
  color: black;
  min-height: 96vh;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "card-1 card-1 card-7"
    "card-2 card-2 card-7"
    "card-3 card-4 card-7"
    "card-5 card-6 card-7";
}



/* CARD 1 */
.card-1 {
  grid-area: card-1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
}

.card-1 .input{
    width: 60%;
    position: relative;
}
.card-1 .input input{
    width: 100%;
    padding: .4rem .2rem .4rem 1.5rem;
    border-radius: 10px;
    border: 2px solid rgb(223, 223, 223);
    outline: none;
}
.card-1  .btn-filter{
    border: 1px solid rgb(189, 189, 189);
    display: flex;
    align-items: center;
    gap: .2rem;
    position: absolute;
    bottom: 15px;
    right: 15px;
    border-radius: 10px;
    padding: .3rem;
    cursor: pointer;
}
.card-1  .btn-filter img{
  width: 25px;
}
.card-1  .btn-filter span{
 font-weight: 500;
 color:rgb(189, 189, 189);
}
.card-1 .input .icon-search{
    width: 15px;
    position: absolute;
    left: 5px;
    top: 11px;
}
.card-1 .names span {
  display: block;
}
.card-1 .names .greeting {
  font-weight: 600;
  font-size: 1.6em;
}
.card-1 .names .welcome{
    color: grey;
}
/* FIM DO CARD 1 */




.card-2 {
  grid-area: card-2;
}
.card-3 {
  grid-area: card-3;
}
.card-4 {
  grid-area: card-4;
}
.card-5 {
  grid-area: card-5;
}
.card-6 {
  grid-area: card-6;
}
.card-7 {
  grid-area: card-7;
}
.home-template > div {
  border: 1px solid rgb(223, 223, 223);
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 13px 1px rgba(0, 0, 0, 0.03);
  box-shadow: 1px 1px 13px 1px rgba(0, 0, 0, 0.03);
  padding: 0.8rem 1rem;
}

@media screen and (max-width: 800px) {
  .home-template {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-template-areas:
      "card-1 card-1"
      "card-2 card-2"
      "card-3 card-4"
      "card-5 card-6 "
      "card-7 card-7"
      "card-7 card-7"
      "card-7 card-7";
  }
}
</style>