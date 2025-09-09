
<script>
import Sidebar from "@/components/sidebar.vue"
import Comunicados from "./components/comunicados.vue"

export default {
  components: { Sidebar, Comunicados }
}
</script>

<template>
  <div>
    <sidebar :username="'Gustavo'" />
    
  </div>
  <Comunicados/>
</template>

<style scoped>

</style>
