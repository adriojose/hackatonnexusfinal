<script> 
 import { ref } from "vue"
</script>
<template>
      <div class="tela">
        <div class="meio">
          
            <div class="matricula">
                  <h1>Login</h1>
                <input type="text" placeholder="matricula">
                <input type="text" placeholder="senha">
                <button>Entrar</button>
                   <p><a href="#">Nao possui uma conta? Cadastre-se</a></p>
            </div>
        </div>
        <div class="imagem">
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
 .tela {
    width: 100%;
    height: 100vh;
    display: flex;
 }
 .meio {
    width: 50%;
    height: 100vh;
    background-color: #3D3D3D;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
 }
.matricula h1 {
    text-align: center;
    color: white;
    margin-bottom: 4vw;
}
 .matricula {
    display: flex;
    flex-direction: column;
    gap: 2vw;
    width: 45%;
    margin-top: 20vw;
 }
 .matricula input {
    height: 2.4vw;
    border-radius: 4px;
    border: none;
    border-color: #575757;
    background-color: #575757;
    outline: none;
    color: white;
    
 }
 .meio .matricula {
    margin-top: 4vw;
 }
 .matricula button {
    height: 2.4vw;
     background: linear-gradient(to right, #1e90ff, #3399ff);
     border-radius: 4px;
     border-color:  #1e90ff, #3399ff;
     border: none;
     color: white;
 }
 .imagem {
      width: 50%;
  height: 100vh;
  background-image: url("@/assets/araquaralho.png");
  background-size: cover;   
  background-position: center; 
}
.matricula p a{
    color: white;
}
.matricula p {
 margin-top: 8vw;
}
    </style>
