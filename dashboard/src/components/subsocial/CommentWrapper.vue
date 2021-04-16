<template>
  <div>
    <b-button type="is-link is-light" @click="commentsVisible = true" >{{ $t('subscan.showComments') }} {{ comments.length }}</b-button>
    <template v-if="commentsVisible">
      <Comment v-for="(comment, i) in comments" :key="i" :comment="comment"/>
    </template>
  </div>
</template>

<script lang="ts" >
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { resolveSubsocialApi, subsocial } from './subsocial'
import { PostType } from './types'
import BN from 'bn.js';
import { findCommentsForPost } from './utils'

const components = {
  Comment: () => import('./CommentAdapter.vue')
}

@Component({ components })
export default class CommentWrapper extends Vue {
  @Prop() public postId!: string;
  protected comments: PostType[] = [];
  protected commentsVisible: boolean = false;
  protected loading: boolean = false;


  public async mounted() {
    const ss = await resolveSubsocialApi();

    if (this.postId) {
      const commentIds = await ss.substrate.getReplyIdsByPostId(new BN(this.postId))
      const commentPromises =  commentIds.map(cm => ss.findPublicPost(cm))
      this.comments = await Promise.all(commentPromises)
    }

  }
}
</script>
