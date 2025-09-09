<script>
export default {
  name: "Sidebar",
  props: {
    username: {
      type: String,
      default: "Nome de Usuário"
    }
  }
}
</script>



  <template>
  <div class="side">
    <div class="profile">
      
      <p>{{ username }}</p>
    </div>
    <div class="navigation">
      <ul>
        <li>
          <router-link to="/" exact-active-class="on">Principal</router-link>
        </li>
        <li>
          <router-link to="/seusclubes">Seus Clubes</router-link>
        </li>
        <li>
          <router-link to="/explorar">Explorar Clubes</router-link>
        </li>
        <li>
          <router-link to="/perfil">Ver Perfil</router-link>
        </li>
      </ul>
    </div>
  </div>
  <div class="up">
    <p>Principal</p>
</div>
</template>




<style scoped>
.up {
  position: fixed;
  top: 0;
  left: 20%; /* começa onde a sidebar termina */
  width: 80%;
  height: 15vh;
  background-color: #3D3D3D;
  border-bottom: 2px solid #66B2FF;
  z-index: 10;
  padding: 24px;
}

.up p {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  width: 100%;
  text-decoration: underline;
}




/* Reset básico */
* {
    box-sizing: border-box;
}

html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden; /* Impede o scroll da página */
    font-family: jost;
}

/* Container principal com flexbox para estrutura */
.container {
    display: flex;
    height: 100vh;
    background-color: #3D3D3D;
}

/* Sidebar (fixa à esquerda) */
.side {
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100vh;
    background-color: #3D3D3D; /* ou #3D3D3D */
    border-right: 2px solid #66B2FF;
    display: flex;
    flex-direction: column;
    z-index: 10;
}

.profile {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 5%;
    height: 15vh;
    width: 100%;
    background-color: inherit;
    border-bottom: 2px solid #66B2FF;
}
.profile p{
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
}

.navigation {
    display: flex;
    justify-content: flex-start;
    height: 85vh;
    width: 100%;
    background-color: inherit;
    padding: 20px;
}
.navigation ul{
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    list-style-type: none;
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
    width: 100%;
}
.navigation ul li{
    padding: 20px  30px 20px 30px;
    width: 100%;
}
.navigation ul li a{
    color: white;
    text-decoration: none;
}
.navigation ul li a.on{
    color: #66B2FF;
}
/* Área principal (ao lado da sidebar) */
.main {
    margin-left: 20%;
    width: 80%;
    height: 100vh;
    background-color: #3D3D3D;
    position: relative;
}
</style>
