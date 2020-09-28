<template>
  <div class="home">
    <b-navbar class="nav" type="dark" variant="dark">
      <b-navbar-brand :to="{name: 'home' }"><h1>DEADPOOL'S</h1></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'theater'  }">Peças</b-nav-item>
        <b-nav-item :to="{ name: 'movies'  }">Filmes</b-nav-item>
        <b-nav-item :to="{ name: 'shows'  }">Shows</b-nav-item>
      </b-navbar-nav>

      
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar o Deadpool"></b-form-input>
          
        </b-nav-form>         -->

        <b-nav-item-dropdown right>          
          <template v-slot:button-content>
            <em>user</em>
          </template>
          <b-dropdown-item :to="{ name: 'login' }">logar</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'register' }">Criar Conta</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
    
    <div id="divcarrousel">
      <h1 id="first-view-title">Destaques</h1>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"

      >
        <!-- Text slides with image -->
        <b-carousel-slide
          id="slide"
          :key="s.id"
          v-for="s in sliders"
          :text-html="s.descricao"
          :caption="s.title"
          :img-src="s.image"
        ></b-carousel-slide>
      </b-carousel>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Item from '../App'

export default {
  name: "Home",
  data() {
    return {
      slide: 0,
      sliding: null,
      sliders: [

        {
          id: 1,
          image:
            "https://media.discordapp.net/attachments/653739756341166139/754110382678736996/deadpoobanner.jpg?width=729&height=335",
          title: "Deadpool",
          descricao: "<h3 style='color: orange' >O heroi da família tradicional</h3>"
        },
        {
          id: 2,
          image:
            "https://media.discordapp.net/attachments/653739756341166139/754112133167448154/unknown.png?width=729&height=332",
          title: "Pantera Negra",
          descricao: "<h3 style='color: orange' >MIAU!</h3>"
        },
        {
          id: 3,
          image:
            "https://media.discordapp.net/attachments/653739756341166139/754114381993738250/deadpool_heart.jpg?width=739&height=341",
          title: "Logan",
          descricao: "<h3 style='color: orange' >Uma história de amor.</h3>"
        },
      ],
      

    };
  },
  mounted () {
   console.log(this.$store.state.cart);
  }
  
};
</script>

<style scoped>
.home{
  background: url('https://media.discordapp.net/attachments/653739756341166139/754109286992314469/deadpool.png?width=100&height=100') !important;
}
#divcarrousel {
  padding-top: 40px;
  height: 700px !important;
  margin-bottom: 50px;
  width: 65%;
  margin: auto;
}

#slide {
  height: 100% !important;
  width: 100%;
  
}
.carousel-caption {
  color: orange !important;
}
.form-control{
  position: relative;
  float: right;
}
#first-view-title{
  color: white;
  text-shadow: 1px 1px 2px white;
}
.navbar{
  flex-wrap: wrap !important;
}
@media (max-width: 380px){
#divcarrousel {
  height: 450px !important;
  margin-top: 30%;
  width: 95%;
  
}

}
</style>