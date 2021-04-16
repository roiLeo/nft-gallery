<template>
  <div class="box">
    <b-field :label="$i18n.t('subsocial.message.reply')">
      <b-input v-model="message" size="is-small" type="textarea"></b-input>
    </b-field>
    <b-button type="is-dark" @click="addComment" icon-left="plus" outlined>Add Comment</b-button>
  </div>
</template>

<script lang="ts" >
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { resolveSubsocialApi } from './subsocial';
import exec, { execResultValue } from '@/utils/transactionExecutor';
import { notificationTypes, showNotification } from '@/utils/notification';

@Component({})
export default class Reply extends Vue {
  protected message: string = '';
  @Prop({ default: '' }) public postId!: string;

  protected async addComment() {
    const ss = await resolveSubsocialApi();
    if (!this.postId) {
      showNotification('No postId for Item!', notificationTypes.warn);
      return
    }
  }
}
</script>
