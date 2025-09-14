<script>
export default {
  name: "Perfil"
}
</script>

<template>
  <div class="container">
    <!-- Sidebar -->
    <div class="side">
      <div class="profile">
        <img src="" alt="profile" />
        <p>Nexus</p>
      </div>
      <div class="navigation">
        <ul>
          <li><router-link to="/">Principal</router-link></li>
          <li><router-link to="/seusclubes">Seus Clubes</router-link></li>
          <li><router-link to="/explorar">Explorar Clubes</router-link></li>
          <li><router-link to="/perfil" class="on">Ver Perfil</router-link></li>
        </ul>
      </div>
    </div>

    <!-- Conteúdo -->
    <div class="main">
      <div class="up">
        <p>Ver Perfil</p>
      </div>

      <div class="down">
        <div class="profile-card">
          <div class="banner"></div>
          <div class="profile-info">
            <img src="" alt="Foto de perfil" class="profile-img" />
            <h2>Nome do Usuário</h2>
            <p>Matrícula: 12345678</p>
            <p>Turma: 4INFO4</p>
            <p>Email: seuemailopcional@gmail.com</p>
          </div>
          <div class="botao">
            <router-link to="/perfilEditado">
              <button class="edit-btn">Editar Perfil ✏️</button>
            </router-link>
          </div>
          <h3 class="subtitulo">Seus Clubes</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;
}

.container {
  display: flex;
  height: 100vh;
  background-color: #2c2c2c;
  color: #fff;
}

/* Sidebar */
.side {
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 100vh;
  background-color: #2c2c2c;
  border-right: 2px solid #66B2FF;
  border-top: 2px solid #66B2FF;
  text-align: center;
}

.side .profile {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 15vh;
  width: 100%;
  padding: 0 20px;
  border-bottom: 2px solid #66B2FF;
}

.side .profile img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #fff;
}

.side .profile p {
  font-size: 18px;
  font-weight: bold;
}

.side .navigation ul {
  list-style: none;
  margin-top: 2vw;

}

.side .navigation ul li {
  margin-bottom: 15px;
    padding: 15px 0 ;
}

.side .navigation ul li a,
.side .navigation ul li router-link {
  text-decoration: none;
  color: #ccc;
  font-size: 16px;
  transition: 0.3s;
}

.side .navigation ul li a:hover,
.side .navigation ul li .router-link-exact-active {
  color: #1e90ff;
}

/* Main */
.main {
  margin-left: 20%;
  width: 80%;
  height: 100vh;
  padding: 30px;
  background-color: #2c2c2c;
}

/* Topo */
.up {
  position: fixed;
  top: 0;
  left: 20%;
  width: 80%;
  height: 15vh;
  display: flex;
  align-items: center;
  padding: 0 30px;
  font-size: 20px;
  border-bottom: 2px solid #66B2FF;
  background-color: #2c2c2c;
  z-index: 5;
}

/* Card Perfil */
.down {
  margin-top: 14vh;
}

.profile-card {
  position: relative;
  background-color: #2c2c2c;
  padding-bottom: 20px;
}

.banner {
  height: 140px;
  background: linear-gradient(to right, #1e90ff, #3399ff);
  border-radius: 3px 3px 0 0;
  margin-bottom: 2vw;
}

.profile-info {
  padding: 20px;
}

.profile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: -50px;
  border: 4px solid #fff;
  background: #fff;
}

.profile-info h2 {
  margin-top: 10px;
  font-size: 22px;
}

.profile-info p {
  margin: 8px 0;
  font-size: 16px;
  color: #ccc;
}

/* Botão Editar */
.botao {
  position: absolute;
  top: 15vw;
  right: 20px;
}

.edit-btn {
  padding: 8px 15px;
  background-color: #2c2c2c;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.edit-btn:hover {
  background-color: #1e90ff;
}

/* Subtítulo abaixo */
.subtitulo {
  margin-top: 30px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
}
</style>
