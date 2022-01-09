<template>
  <b-navbar-item>
    <b-button
      type="is-primary"
      :icon-left="theme === 'dark' ? 'moon' : 'sun'"
      :title="theme == 'dark' ? 'Dark Theme' : 'Light Theme'"
      @click="toggleTheme()"
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
  protected theme: string|null = localStorage.getItem('theme')

  public toggleTheme(): void {
    if (this.theme == 'dark') {
      this.theme = 'light'
      document.body.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    } else {
      this.theme = 'dark'
      document.body.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    }
  }
}
</script>
