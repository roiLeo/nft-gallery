<template>
  <div class="box">
    <b-field :label="$i18n.t('subsocial.message.reply')">
      <b-input v-model="message" maxlength="500" type="textarea"></b-input>
    </b-field>
  </div>
</template>

<script lang="ts" >
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class Reply extends Vue {
  protected message: string = '';
  @Prop() public value!: any;
}
</script>
