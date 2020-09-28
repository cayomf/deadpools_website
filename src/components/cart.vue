<template>
  <div class="cart">
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
            <!-- <b-form-input
              size="sm"
              type="text"
              v-model="search"
              class="mr-sm-2"
              placeholder="Buscar o Deadpool"
            ></b-form-input> -->
            <b-nav-item :to="{ name: 'shows'  }">Carrinho</b-nav-item>
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
    </b-navbar>
    <b-row id="RowTitle">
      <h1 id="h1" >Carrinho</h1>
      <p id="h1">total: R${{total}},00</p>
    </b-row>
    <div class="space" v-if="this.$store.state.cart.length == 0">
      <h3>Sem itens no Carrinho</h3>
    </div>
    <b-row class="cart1" v-else>
      <b-table striped hover :items="items"></b-table>
    </b-row>
    <!-- <button id="btn" :to="{ name: 'home' }" @click="Finish()">Finalizar Compra</button> -->
    <b-button v-if="this.$store.state.cart.length != 0" id="btn" :to="{ name: 'home' }" @click="Finish()" variant="success">Finalizar Compra</b-button>
    <b-button v-if="this.$store.state.cart.length != 0" id="btn" :to="{ name: 'home' }" @click="Clear()" variant="danger">Limpar Carrinho</b-button>
    <div class="spaceBtn" v-if="this.$store.state.cart.length != 0">
      <h3></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      //   fields: ['titulo', 'quantidade'],
      items: [],
    };
  },
  methods: {
    Finish(){
      alert("Compra Finalizada")
      this.$store.state.cart.length = 0
      console.log(this.$store.state.cart)
      
    },
    Clear(){
      this.$store.state.cart.length = 0
    }
  },
  computed:{
    total: function(){
      let itens = this.$store.state.cart
      let totalProdutos = 0
      for( let i = 0; i < itens.length; i++){
        let priceElement = itens[i][1]
        let quantityElement = itens[i][2]
        totalProdutos = (priceElement * quantityElement) + totalProdutos
      }
      console.log(totalProdutos)
      return totalProdutos;
    }
  },
  mounted() {
    //   this.$store.state.cart.array.forEach(element => {
    //       this.item.nome = element[0]
    //       this.item.quantidade = element[1]
    //     this.items.push(this.item)
    //   });
    // eslint-disable-next-line no-unused-vars
    // var singleItem
    //   for(let i = 0; i < this.$store.state.cart.length; i++){
    //        this.item.nome = this.$store.state.cart[i][0]
    //        this.item.quantidade = this.$store.state.cart[i][1]
    //        singleItem = this.item
    //        this.items.push(singleItem)
    //        singleItem = null
    //   }

    // console.log(this.items)
    // console.log(this.$store.state.cart);'
    for (let i = 0; i < this.$store.state.cart.length; i++) {
      this.items.push({
        nome: this.$store.state.cart[i][0],
        valor: this.$store.state.cart[i][1],
        quantidade: this.$store.state.cart[i][2],
      });
    }
    console.log(this.items);
  },
};
</script>

<style>
#h1{
  margin: auto;
  color: white;
}
.cart1 {
  
  display: block;
  background: white;
  margin: auto;
   width: 61%;
  
}
#btn{
  margin-left: 20%;
}
.spaceBtn{
  margin: 40%;
}
.space{
  color: white;
  margin: 23%;
}
.navbar{
  flex-wrap: wrap !important;
}
@media (max-width: 380px){
  .cart1{
    width: 75%;
  }
  .spaceBtn{
  margin: 100%;
}
#RowTitle{
  margin-right: 0;
  margin-left: 0;
}
.space{
  margin-bottom: 100%;
}
}
</style>
