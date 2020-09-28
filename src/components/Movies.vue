<template>
  <div class="movies">
    <b-navbar class="nav" type="dark" variant="dark">
      <b-navbar-brand :to="{name: 'home' }">
        <h1>DEADPOOL'S</h1>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'theater'  }">Peças</b-nav-item>
          <b-nav-item :to="{ name: 'movies'  }">Filmes</b-nav-item>
          <b-nav-item :to="{ name: 'shows'  }">Shows</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            
            <b-nav-item :to="{ name: 'cart'  }">Carrinho</b-nav-item>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>user</em>
            </template>
            <b-dropdown-item :to="{ name: 'login' }">logar</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'register' }">Criar Conta</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
      <b-collapse id="nav-collapse" is-nav>
        <b-form-input
        size="sm"
        type="text"
        v-model="search"
        class="mr-sm-2"
        placeholder="Buscar o Deadpool"
      ></b-form-input>
      </b-collapse>

    </b-navbar>

    <div id="teste">
      <h1>
        TODOS OS FILMES
        <p id="p-titulo">do Deadpool</p>
      </h1>
    </div>
    <b-row id="row">
      <div id="cards">
        <b-card
          id="card"
          :title="movie.titulo"
          :img-src="movie.imagem"
          :img-alt="movie.descricao"
          img-top
          tag="article"
          style="max-width: 300px;"
          class="mb-4 text-center"
          :key="movie.id"
          v-for="movie in filteredList"
        >
          <b-card-text>{{movie.descricao}}</b-card-text>
          <b-card-text>R${{movie.valor}},00</b-card-text>

          <b-button @click="addCartItem(movie)" variant="outline-secondary">comprar</b-button>
        </b-card>
      </div>
    </b-row>
  </div>
</template>     

<script>
// eslint-disable-next-line no-unused-vars
//import Item from '../App'
import "../store/index";

export default {
  name: "App",
  data: function () {
    // eslint-disable-next-line no-unused-vars
    let cartItems = [];
    return {
      cartItems: [],
      search: "",
      movies: [
        {
          id: 1,
          titulo: "Deadpool salva o natal",
          descricao: "Um filme de heróis",
          valor: 25,
          imagem:
            "https://media.discordapp.net/attachments/653739756341166139/754081969595351120/deadpool-1.png?width=423&height=650",
          estoqueDisponivel: 3,
        },
        {
          id: 2,
          titulo: "50 tons de Deadpool",
          descricao: "Um filme de gostos peculiares",
          valor: 35,
          estoqueDisponivel: 3,
          imagem:
            "https://media.discordapp.net/attachments/653739756341166139/754082116089938092/91qmrdkBViL.png?width=452&height=669",
        },
        {
          id: 3,
          titulo: "Piscina de la Muerte",
          estoqueDisponivel: 3,
          descricao: "Um filme de mexicano",
          valor: 20,
          imagem:
            "https://media.discordapp.net/attachments/653739756341166139/754085727163383877/e7ae34a1c255691eba7e3f247eb93fe9.png?width=487&height=669",
        },
        {
          id: 4,
          titulo: "3 é demais",
          estoqueDisponivel: 3,
          descricao: "Não conseguimos contratar as irmãs Olsen",
          valor: 40,
          imagem:
            "https://media.discordapp.net/attachments/653739756341166139/754083699154354306/poster-Deadpool2B2-Theater2BWhore-2018-movie2Breview-dante2BRoss-danterants-blogspot-com.png?width=451&height=669",
        },
        {
          id: 5,
          titulo: "Flashdance",
          avaliacao: 2,
          estoqueDisponivel: 3,
          descricao: "Ele é um maniaco!!",
          valor: 10,
          imagem:
            "https://media.discordapp.net/attachments/653739756341166139/754082357556019372/deadpool2_feature-poster_584x800_69bc155b.png?width=488&height=668",
        },
        {
          id: 6,
          titulo: "Deadpool da DC",
          avaliacao: 2,
          estoqueDisponivel: 3,
          descricao: "not great, just ok",
          valor: 10,
          imagem:
            "https://images-ext-1.discordapp.net/external/jv1XCLy4rGgoZkQOYRahhg_-FJLhIcKRNUGWalSMvbw/https/upload.wikimedia.org/wikipedia/pt/f/fb/Exterminador_%2528DC_Comics%2529.jpg",
        },
        {
          id: 7,
          titulo: "Deadpool?",
          estoqueDisponivel: 3,
          descricao: "whaaaat?!",
          valor: 20,
          imagem:
            "https://images-ext-2.discordapp.net/external/H7eK0f3h5Bdr5VC-kdSf1DpA1DG-fLoN66a4sEoWm1g/https/pyxis.nymag.com/v1/imgs/be6/595/cf63209dc7689dd0c53e9fd029c0201b2a-17-deadpool-x-men.rsquare.w1200.jpg?width=668&height=1000",
        },
        {
          id: 8,
          titulo: "Detetive Deadpool",
          estoqueDisponivel: 3,
          descricao: "Gotta Cattch'Em All!!",
          valor: 20,
          imagem:
            "https://images-ext-1.discordapp.net/external/rQbpHZEPy92wXMNnPtuaDAtPbSgb8dhVQ1iscccIIfs/https/otakucid.com.br/wp-content/uploads/2018/08/IA0009-action-figure-boneco-pikachu-deadpool-pokemon-marvel-02.jpg?width=669&height=1000",
        },
        {
          id: 9,
          titulo: "Ashes, Deadpool & Celine",
          estoqueDisponivel: 3,
          descricao: "Beautiful",
          valor: 20,
          imagem:
            "https://images-ext-1.discordapp.net/external/kfJULZcNtLsZoqZLixLuu108vuoX2JfxUcOity2ZFUQ/https/i.pinimg.com/originals/11/a4/46/11a446fdb2a9998ad86c395ff538f8c1.jpg?width=411&height=600",
        },
      ],
    };
  },
  computed: {
    filteredList() {
      return this.movies.filter((movie) => {
        return movie.titulo.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },

  methods: {
    alerta() {
      alert("funfo carai");
    },
    addCartItem(movie) {
      // console.log(movie);
      this.$store.commit("addCart", movie);
    },
  },
  // computed:{
  //     movie: function(){
  //         let movie = this.movies.filter(elem => elem.id == this.$route.params.id)
  //         return movie[0]
  //     }
  // },
};
</script>

<style scoped>
#cards {
  margin-top: 40px;
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  /* justify-content: space-between; */
  margin: 5%;
}
#row {
  width: 95%;
  margin: auto;
}
#row div h1 {
  color: white;
  margin: auto;
}
#card {
  margin: 10px;
  width: 300px;
  /* height: 610px; */
}
#p-titulo {
  font-size: 10px;
  color: white;
}
#teste {
  color: white;
  margin-left: 35%;
}
input{
  width: 200px;
}

.navbar {
  flex-wrap: wrap !important;
}
@media (max-width: 380px){
  #teste{
  color: white;
  margin: 5%;
}
  input{
    width: 80%;
    display: block;
  }
  b-nav-form{
    width: 200px
  }
}

</style>