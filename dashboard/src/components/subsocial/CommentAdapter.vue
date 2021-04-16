<template>
  <div v-if="comment">
    <Comment v-if="account" :message="message" :account="account"  />
    <CommentWrapper v-if="postId" class="comment-adapter__nested" :postId="postId" nested />
  </div>
</template>

<script lang="ts" >
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { PostType } from './types'

const components = {
  Comment: () => import('./Comment.vue'),
  CommentWrapper: () => import('./CommentWrapper.vue')
}

@Component({
  name: 'CommentAdapter',
  components
})
export default class CommentAdapter extends Vue {
  @Prop() public comment!: PostType;
  protected postId: string = '';

  get message() {
    return this.comment?.content?.body
  }

  get account() {
    return this.comment?.struct.owner.toHuman()
  }



  public async mounted() {
    if (this.comment?.struct.replies_count.toNumber()) {
      this.postId = this.comment.struct.id.toString();
    }
  }
}
</script>

<style>
.comment-adapter__nested {
  margin-left: 44px;
}

.box:last-child {
  margin-bottom: 1.5rem;
}
</style>
