<template>
  <b-navbar-item>
    <b-button
      type="is-primary"
      :icon-left="$colorMode.preference === 'dark-mode' ? 'moon' : 'sun'"
      :title="$colorMode.preference === 'dark-mode' ? 'Dark Theme' : 'Light Theme'"
      @click="$colorMode.preference = $colorMode.preference === 'dark-mode' ? 'light' : 'dark-mode'"
      class="theme"
    />
  </b-navbar-item>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class ThemeSwitch extends Vue {

}
</script>
