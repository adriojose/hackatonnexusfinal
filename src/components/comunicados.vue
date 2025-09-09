<script setup>
import { ref } from "vue"

// lista de comunicados (poderia vir de uma API também)
const comunicados = ref([
  { id: 1, titulo: "Título do comunicado 1", img: "@/assets/Nexus 2.png" },
  { id: 2, titulo: "Título do comunicado 2", img: "@/assets/Nexus 2.png" },
  { id: 3, titulo: "Título do comunicado 3", img: "@/assets/Nexus 2.png" },
  { id: 4, titulo: "Título do comunicado 4", img: "@/assets/Nexus 2.png" },
])
</script>

<template>
  <div class="main">
    <div class="down">
      <div class="comunicados">
        <!-- iteração sobre a lista -->
        <div v-for="comunicado in comunicados" :key="comunicado.id" class="comunicado">
          <img :src="comunicado.img" alt="profile" />
          <p>{{ comunicado.titulo }}</p>
          <p class="seta">></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.down {
    padding-top: 15vh;
    position: absolute;
    left: 20vw;
    width: 80%;
    height: 100vh;
    overflow-y: auto;
    background-color: #3D3D3D;
  
    justify-content: flex-start;
}
.comunicados {
  margin-top: 18vh;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}
.comunicado {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2c2c2c;
  padding: 12px;
  border-radius: 8px;
  color: #fff;
}
.comunicado img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.seta {
  font-weight: bold;
}
</style>