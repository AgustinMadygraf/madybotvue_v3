<!--
Path: src/components/NetworkCheck.vue
Este componente se encarga de mostrar un mensaje de conexión o desconexión a internet.
-->

<template>
  <div :class="['alert', isConnected ? 'alert-success' : 'alert-danger', 'fixed-top', 'py-1', 'rounded-0', 'text-center']">
    <p class="mb-0">{{ isConnected ? 'Conectado' : 'Sin conexión' }}</p>
  </div>
</template>

<script>
console.log('         [INFO ] [src/components/NetworkCheck.vue          ]');

import NetworkCheckScript from '@/JS/NetworkCheck/index.js';

export default {
  ...NetworkCheckScript
}
</script>