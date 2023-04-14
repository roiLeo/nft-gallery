<template>
  <Story title="NeoModal">
    <Variant title="Modal">
      <button @click="modalActive = !modalActive">Toggle modal</button>
      <NeoModal v-model="modalActive" @close="modalActive = false">
        Modal Content
      </NeoModal>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import NeoModal from './NeoModal.vue'

const modalActive = true
</script>
