<!--
Path: src/components/ChatSidebar.vue
Este componente representa una barra lateral de chat similar a la de WhatsApp Web.
-->

<template>
  <div class="chat-sidebar d-none d-md-block">
    <div class="sidebar-header p-3 bg-primary text-white">
      <h5>Chats</h5>
    </div>
    <div class="sidebar-content p-3">
      <ul class="list-group">
        <li class="list-group-item" v-for="chat in chats" :key="chat.id">
          <div class="d-flex align-items-center">
            <img :src="`${baseUrl}${chat.avatar}`" class="rounded-circle me-3" alt="Avatar" width="40" height="40">
            <div>
              <h6 class="mb-0">{{ chat.name }}</h6>
              <small class="text-muted">{{ chat.lastMessage }}</small>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import config from '@/config';

export default {
  name: 'ChatSidebar',
  data() {
    return {
      baseUrl: config.BASE_URL,
      chats: [
        { id: 1, name: 'John Doe',    lastMessage: 'Hello!',        avatar: 'img1.jpg' },
        { id: 2, name: 'Jane Smith',  lastMessage: 'How are you?',  avatar: 'img2.jpg' },
        { id: 3, name: 'Alice',       lastMessage: 'Hi!',           avatar: 'img3.jpg' },
        { id: 4, name: 'Bob',         lastMessage: 'Good morning!', avatar: 'img4.jpg' },
      ]
    };
  }
}
</script>

<style scoped>
.chat-sidebar {
  width: calc(30px + 30%);
  border-right: 1px solid #000000;
  height: calc(100vh - 30px); 
  overflow-y: auto;
}
</style>