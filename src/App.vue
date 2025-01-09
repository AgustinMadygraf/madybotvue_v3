<!--
Path: src/App.vue
Este es el componente principal de la aplicación.
-->

<template>
  <div>
    <NetworkCheck />
    <div class="main-content d-flex flex-column">
      <div class="d-flex flex-grow-1">
        <ChatSidebar />
        <ChatBot />
        <div class="flex-grow-1">
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import NetworkCheck from './components/NetworkCheck.vue'
import ChatSidebar from './components/ChatSidebar.vue'
import ChatBot from './components/ChatBot.vue'

export default {
  name: 'App',
  components: {

    NetworkCheck,
    ChatSidebar,
    ChatBot
  }
}
</script>


<style scoped>
.main-content {
  margin-top: 30px;
}
</style>
