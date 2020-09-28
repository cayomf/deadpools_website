<template>
  <div class="Login">

    <b-navbar class="nav" type="dark" variant="dark">
      <b-navbar-brand :to="{name: 'home'}">
        <h1>DEADPOOL'S</h1>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'theater' }">Peças</b-nav-item>
          <b-nav-item :to="{ name: 'movies' }">Filmes</b-nav-item>
          <b-nav-item :to="{ name: 'shows' }">Shows</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" type="text" v-model="search" class="mr-sm-2" placeholder="Buscar o Deadpool"></b-form-input>            
            <b-nav-item :to="{ name: 'shows' }">Carrinho do Deadpool</b-nav-item>
          </b-nav-form> -->

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

    <b-form @submit="onSubmit" @reset="onReset">
      <div class="form-row">
        <div class="form-group">
          <label for="form.email">Email</label>
          <input
            type="text"
            class="form-control"
            id="form_email"
            placeholder="Digita o seu email"
            v-model.trim.lazy="form.email"
          />
        </div>       
          <div class="form-group">
          <label for="form.password">Senha</label>
          <input
            type="text"
            class="form-control"
            id="endereco"
            placeholder="Digite a senha"
            v-model.trim.lazy="form.password"
          />
        </div>
      </div>
       
    <b-button type="submit" class="btn-login" variant="info" @click="aletar()" :to="{ name: 'home' }" >Cadastrar</b-button>
    <div class="spaceBtn">
      <h3></h3>
    </div>
    </b-form> 
  </div>
</template>

<script>
export default {
name: 'Login',
data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
      },
    };
  },
  methods:{
    aletar(){
      console.log(this.form)
      
    },
    onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
      }
  }
}
</script>

<style scoped>
  .form-group{
    margin: auto;
    margin-top: 40px;
    width: 51%;
  }
  .form-row{
    margin: auto;
  }
  
  .btn-login{
    margin: 40px;
    width: 20%;
    margin-bottom: 210px;
    margin-top: 40px;
  }
  .Login, label{
    color: white;
    font-size: 20px;
    text-align: center;
  }
  .spaceBtn{
  margin: 15%;
}

</style>