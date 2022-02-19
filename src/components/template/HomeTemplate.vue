<template>
  <div class="home-template">
    <div class="card-1">
        <span>card 1</span>
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

<script>
export default {};
</script>

<style  scoped>
.home-template {
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
.card-1 {
  grid-area: card-1;
}
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
  padding: 0.5rem;
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