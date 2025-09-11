<script setup>
import { ref } from "vue";

// Contadores de apoio
const apoioCount = ref(0);
const naoApoioCount = ref(0);

const apoia = () => {
  apoioCount.value++;
};

const naoApoia = () => {
  naoApoioCount.value++;
};
</script>
<template>
  <div class="container">
    <div class="side">
      <div class="profile">
        <img src="" alt="profile" />
        <p>Nexus</p>
      </div>

      <div class="navigation">
        <ul>
          <li>
            <RouterLink to="/teste" class="on">Principal</RouterLink>
          </li>
          <li>
            <RouterLink to="/seusclubes">Seus Clubes</RouterLink>
          </li>
          <li>Explorar Clubes</li>
          <li>
            <RouterLink to="/editarPerfil">Ver Perfil</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="main">
      <div class="up">
        <RouterLink to="/seusclubes">
          <img src="" alt="Frame." />
          voltar
        </RouterLink>
      </div>

      <div class="down">
        <div class="titulo">
          <h1>Comunicado para as Olimpíadas 2025</h1>
        </div>
        <div class="subtitulo">
          <p>Por Nome do Líder, 05/08/2025 08h59</p>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo efficitur dapibus. In hac habitasse
          platea dictumst. Integer rutrum fringilla lectus et aliquam. Nullam lobortis, arcu non tempor auctor, metus mi
          faucibus lectus, quis volutpat turpis felis id mauris. Pellentesque pulvinar congue tempor. Quisque venenatis
          ultricies augue, non vestibulum odio dictum id.
        </p>
        <p>
          Donec bibendum arcu nec enim tempor interdum. Nunc dignissim consectetur nibh id rhoncus. Quisque at eros
          efficitur, pretium lorem ut, viverra mi. Etiam consequat sem augue, vel finibus tellus posuere ut. Cras
          mollis, sem nec feugiat feugiat, justo erat tristique elit, ac mollis est felis egestas nisi. Mauris pulvinar
          iaculis scelerisque. Cras facilisis ipsum sit amet neque pellentesque porttitor. Nullam risus lorem, rhoncus
          at neque sit amet, ultrices interdum orci.
        </p>

        <div class="votacao">
          <div class="apoia">
            <img src="" alt="apoio" class="btn-apoia" @click="apoia" />
            <span class="contador-apoio">{{ apoioCount }}</span>
          </div>

          <div class="nao-Apoia">
            <img src="" alt="nao-apoio" class="btn-naoApoia" @click="naoApoia" />
            <span class="contador-naoApoio">{{ naoApoioCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Reset básico */
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  /* Impede o scroll da página */
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
  background-color: #3D3D3D;
  /* ou #3D3D3D */
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

.profile p {
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

.navigation ul {
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

.navigation ul li {
  padding: 20px 30px 20px 30px;
  width: 100%;
}

.navigation ul li a {
  color: white;
  text-decoration: none;
}

.navigation ul li a.on {
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

/* Topo fixo */
.up {
  position: fixed;
  top: 0;
  left: 20%;
  /* começa onde a sidebar termina */
  width: 80%;
  height: 15vh;
  background-color: #3D3D3D;
  /* ou #3D3D3D */
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

/* Área dos comunicados (rolável) */
.down {
  margin-top: 14vh;
  position: absolute;
  justify-content: center;
  left: 0;
  width: 100%;
  height: calc(100vh - 15vh);
  overflow-y: auto;
  display: flex;
  overflow-x: hidden;
  background-color: #3D3D3D;
  padding: 30px;
}

.up {
  display: flex;
  align-items: center;
}

.up a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 1.7vw;
  gap: 1.5vw;
}

.up img {
  width: 2.5vw;
  height: auto;
}

.down {
  display: flex;
  justify-content: left;
  flex-direction: column;
  color: #ffffff;
}

.down h1 {
  font-size: 3vw;
}

.subtitulo {
  margin-top: -2.7vw;
}

.down button {
  width: 0vw;
  height: 0vh;
}

.votacao {
  display: flex;
  justify-content: space-between;
}

.votacao img {
  width: 1.7vw;
}

.nao-Apoia {
  margin-right: 60vw;
}
</style>
