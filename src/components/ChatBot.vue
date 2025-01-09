<!--
Path: src/components/ChatBot.vue
Este componente es el encargado de mostrar el chatbot en la interfaz de usuario.
-->

<template>
  <div :class="{'streamer-mode': isStreamerMode}" class="container-fluid d-flex background-image">
    <div class="chatbot_card">
      <div class="card_header">
        <img
          src="../../src/assets/chatbot-icon.jpg"
          alt="Chatbot"
          class="chatbot_icon"
        />
        <div>
          <h3>MadyBot</h3>
          <p class="status">en línea</p>
        </div>
      </div>
      <div class="card_body" ref="messageContainer">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="{
            'message-received': message.type === 'bot',
            'message-sent': message.type === 'user'
          }"
        >
          <div v-html="message.text"></div>
          <div class="message-time">{{ message.time }}</div>
        </div>
      </div>
      <div class="card_footer">
        <div class="input-group mb-2">
          <input
            v-model="userMessage"
            @keyup.enter="SendHandleMessage"
            placeholder="Mensaje"
            class="form-control"
          />
          <button
            @click="SendHandleMessage"
            :disabled="!userMessage"
            class="btn btn-primary"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isStreamerMode: false,
      userMessage: '',
      messages: []
    };
  },
  methods: {
    SendHandleMessage() {
      // Your message handling logic here
    }
  }
};
</script>


<style src="../assets/style.css"></style>
