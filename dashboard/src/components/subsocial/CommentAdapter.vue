<template>
  <div v-if="comment">
    <Comment v-if="account" :message="message" :account="account"  />
  </div>
</template>

<script lang="ts" >
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { PostType } from './types'
import { findCommentsForPost } from './utils'

const components = {
  Comment: () => import('./Comment.vue')
}

@Component({ components })
export default class CommentAdapter extends Vue {
  @Prop() public comment!: PostType;


  get message() {
    return this.comment?.content?.body
  }

  get account() {
    return this.comment?.struct.owner.toHuman()
  }

  public mounted() {
    if (this.comment?.struct.replies_count.toNumber()) {

    }
  }
}
</script>
