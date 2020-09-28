<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view />
    <!-- <div class="caixa‐footer">
      <footer>
        <div id="teste">
          <h3>&copy; Copyright Reserved</h3>
          <ul class="social">
            <li>
              <a id="Facebook" href="http://www.facebook.com/gkfashion">Facebook</a>
            </li>
            <li>
              <a id="Twitter" href="http://www.twitter.com/gkfashion">Twitter</a>
            </li>
            <li>
              <a
                id="Google"
                href="http://plus.google.com/gkfashion
                        "
              >Google+</a>
            </li>
          </ul>
        </div>
      </footer>
    </div> -->
    <nav class=”navbar navbar-default navbar-static-bottom>
      <div id="thisNav" class="nav">
        <div class="navHeader">
          <h3>&copy; Copyright Reserved</h3>
          <ul class="social">
            <li>
              <a id="Facebook" href="http://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a id="Twitter" href="http://www.twitter.com">Twitter</a>
            </li>
            <li>
              <a
                id="Google"
                href="http://plus.google.com
                        "
              >Google+</a>
            </li>
          </ul>
        
      </div>
      </div>
</nav>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

// eslint-disable-next-line no-unused-vars
class Item {
  Id = null;
  Number = 0;

  constructor(id, number) {
    this.Id = id;
    this.Number = number;
  }

  addCartItem(movie) {
    console.log(movie.name);
    this.$store.commit("addCart", movie);
  }
}

export default {
  name: "App",

  components: {
    // HelloWorld
  },
};
</script>

<style>

* {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
*:before,
*:after {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
html {
  background: #60262c;
}
#app {
  background: #60262c;
}
.nav {
  background: #292b2c;
  
  
  margin-bottom: 0;
}
#thisNav{
  height: 117px;
}

.nav h3 {
  color: whitesmoke;
  display: inline;
  font-size: 16px;
}
footer {
  margin-top: 30px;
}
.social {
  float: right;
  display: inline;
  margin: 20px;
}
.social li {
  display: inline;
  padding: 10px;
}
/* nav{
  background: white;
  
} */
</style>
