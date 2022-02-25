<template>
  <div class="home-template">
    <div class="card-1">
      <div class="input">
        <input type="text" placeholder="Search for stats" />
        <img src="@/assets/icons/search.svg" alt="search" class="icon-search" />
      </div>
      <div class="names">
        <span class="greeting">Hello Alan!</span>
        <span class="welcome">Welcome back!</span>
      </div>
      <div class="btn-filter">
        <span>Filter</span>
        <img src="@/assets/icons/filter.svg" alt="" />
      </div>
    </div>

    <div class="card-2">
      <div class="card-2-content">
        <div class="item-card">
          <div class="img">
            <figure>
              <img src="@/assets/icons/eye.svg" alt="" />
            </figure>
            <span class="sub-text">Views</span>
          </div>
          <div class="value">
            <span class="value-title">500</span>
            <span class="sub-text">Per Day</span>
          </div>
        </div>
        <div class="item-card">
          <div class="img">
            <figure>
              <img src="@/assets/icons/pin.svg" alt="" />
            </figure>
            <span class="sub-text">Visits</span>
          </div>
          <div class="value">
            <span class="value-title">200</span>
            <span class="sub-text">Per minutes</span>
          </div>
        </div>
        <div class="item-card">
          <div class="img">
            <figure>
              <img src="@/assets/icons/store.svg" alt="" />
            </figure>
            <span class="sub-text">Orders</span>
          </div>
          <div class="value">
            <span class="value-title">5100</span>
            <span class="sub-text">Per Day</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card-3">
      <div class="small-content-card">
        <div class="conts">
          <div>
            <div class="title-small">
              <span>Sales</span>
            </div>
          </div>
          <div class="subtitle-small">
            <span> Total Sales Today </span>
          </div>
          <div class="value-small">
            <span> $500 </span>
          </div>
        </div>

        <div>
          <div class="percentage">
            <span>55%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card-4">
      <div class="small-content-card">
        <div class="conts">
          <div>
            <div class="title-small">
              <span>Profit</span>
            </div>
          </div>
          <div class="subtitle-small">
            <span> Per day ratio </span>
          </div>
          <div class="value-small">
            <span> $150 </span>
          </div>
        </div>

        <div>
          <div class="percentage">
            <span>30%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card-5">
      <div class="small-content-card">
        <div class="conts">
          <div>
            <div class="title-small">
              <span>Orders</span>
            </div>
          </div>
          <div class="subtitle-small">
            <span> Total Order Today </span>
          </div>
          <div class="value-small">
            <span> 1500 </span>
          </div>
        </div>

        <div>
          <div class="percentage">
            <span>80%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card-6">
      <div class="small-content-card">
        <div class="conts">
          <div>
            <div class="title-small">
              <span>Visits</span>
            </div>
          </div>
          <div class="subtitle-small">
            <span> Total Visit Today </span>
          </div>
          <div class="value-small">
            <span> 400 </span>
          </div>
        </div>

        <div>
          <div class="percentage">
            <span>70%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card-7">
      <div class="content-card-7">
        <div class="title-card-7">
          <span>Sales Revenue</span>
        </div>

        <div class="itens-card-7">
          <div class="item-card-7">
            <div class="img-card-7">
              <img src="@/assets/icons/percent.svg" alt="percent" class="icon-percent" />
            </div>
            <div class="data-card-7">
              <span class="title-data-card-7">230k</span>
              <span class="sub-title-data-card-7">Sales</span>
            </div>
          </div>
          <div class="item-card-7">
            <div class="img-card-7">
              <img src="@/assets/icons/user.svg" alt="user" class="icon-user" />
            </div>
            <div class="data-card-7">
              <span class="title-data-card-7">8.549k</span>
              <span class="sub-title-data-card-7">Customers</span>
            </div>
          </div>
          <div class="item-card-7">
            <div class="img-card-7">
              <img src="@/assets/icons/box.svg" alt="box" class="icon-box" />
            </div>
            <div class="data-card-7">
              <span class="title-data-card-7">1.423k</span>
              <span class="sub-title-data-card-7">Products</span>
            </div>
          </div>
          <div class="item-card-7">
            <div class="img-card-7">
              <img src="@/assets/icons/pie.svg" alt="pie" class="icon-pie" />
            </div>
            <div class="data-card-7">
              <span class="title-data-card-7">$9745</span>
              <span class="sub-title-data-card-7">Revenue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style  scoped>
.sub-text {
  font-weight: 500;
  color: #afafae;
  font-size: 0.8em;
}
.home-template {
  color: black;
  min-height: 96vh;
  display: grid;
  gap: 0.6rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "card-1 card-1 card-7"
    "card-2 card-2 card-7"
    "card-3 card-4 card-7"
    "card-5 card-6 card-7";
}
.home-template > div {
  /* border: 1px solid rgb(223, 223, 223); */
  border-radius: 20px;
  -webkit-box-shadow: 1px 1px 13px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 1px 1px 13px 1px rgba(0, 0, 0, 0.05);
  padding: 0.8rem 1rem;
}

/* SMALL CONTENT STYLES */
.small-content-card {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.small-content-card > div {
  flex: 1 1 100px;
  height: 100%;
}
.small-content-card .conts {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.small-content-card .conts .title-small span {
  font-weight: 600;
  font-size: 1.2em;
}
.small-content-card .conts .subtitle-small span {
  font-size: 0.8em;
  color: rgb(138, 138, 138);
}
.small-content-card .conts .value-small span {
  font-size: 1.6em;
  font-weight: 700;
}

.small-content-card .percentage {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.small-content-card .percentage span {
  font-weight: 700;
  font-size: 1.4em;
}

/* FIM SMALL CONTENT STYLES */

/* CARD 1 */
.card-1 {
  background: none !important;
  box-shadow: none !important;
}
/* FIM DO CARD 1 */
/* CARD 3 */
.card-3 {
  background: #ffeee2;
}
/* FIM DO CARD 3 */

/* CARD 4 */
.card-4 {
  background: #eefcef;
}
/* FIM DO CARD 4 */

/* CARD 5 */
.card-5 {
  background: #e6f5fa;
}
/* FIM DO CARD 5 */

/* CARD 6 */
.card-6 {
  background: #f4f5f9;
}
/* FIM DO CARD 6 */

/* CARD 7 */
.card-7 {
  background: black;
  color: white;
}
.content-card-7 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title-card-7 {
  font-weight: 600;
  font-size: 1.2em;
}
.itens-card-7{
}
.itens-card-7>div{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin: .7rem 0;
}
.itens-card-7 .img-card-7{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e2e2e2;
}
.itens-card-7 .img-card-7 img{
  width: 60%;
}

.data-card-7{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}
.data-card-7 span{
  display: block;
}
.data-card-7 .title-data-card-7{
  font-size: 1.5em;
  font-weight: 600;
}
.data-card-7 .sub-title-data-card-7{
  font-size: .7em;
  color: #a7a7a7;
}
/* FIM DO CARD 7 */

/* CARD 2 */
.card-2 {
  grid-area: card-2;
  background: #f9f8f3;
}

.card-2-content {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
}
.card-2-content > div {
  flex: 1 1 120px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
.card-2-content > div .img figure {
  background: #e4e0d5;
  width: 30px;
  height: 30px;
  padding: 0.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-2-content > div .img figure img {
  width: 80%;
}
.card-2-content > div .value span {
  display: block;
}
.card-2-content > div .value .value-title {
  font-size: 1.8em;
  font-weight: 500;
}

/* FIM DO CARD 2 */

/* CARD 1 */
.card-1 {
  grid-area: card-1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
}

.card-1 .input {
  width: 60%;
  position: relative;
}
.card-1 .input input {
  width: 100%;
  padding: 0.4rem 0.2rem 0.4rem 1.5rem;
  border-radius: 10px;
  border: 2px solid rgb(223, 223, 223);
  outline: none;
}
.card-1 .btn-filter {
  border: 1px solid rgb(189, 189, 189);
  display: flex;
  align-items: center;
  gap: 0.2rem;
  position: absolute;
  bottom: 15px;
  right: 15px;
  border-radius: 10px;
  padding: 0.3rem;
  cursor: pointer;
}
.card-1 .btn-filter img {
  width: 25px;
}
.card-1 .btn-filter span {
  font-weight: 500;
  color: rgb(189, 189, 189);
}
.card-1 .input .icon-search {
  width: 15px;
  position: absolute;
  left: 7px;
  top: 11px;
}
.card-1 .names span {
  display: block;
}
.card-1 .names .greeting {
  font-weight: 600;
  font-size: 1.6em;
}
.card-1 .names .welcome {
  color: grey;
}
/* FIM DO CARD 1 */

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

  .home-template>div>div{
    border: 2px solid red !important;
    /* height: auto !important; */
    min-height: 10vh !important;

    /* BUSCAR FORMA DE COMPONENTE SE AJUSTAR PERFEITAMENTE, 
    USANDO HEIGHT AUTO FUNCIONA, MAS FICA BIZARRO, VERIFICAR
    MELHOR ISSO AE */
  }
}
</style>