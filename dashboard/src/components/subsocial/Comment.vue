<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <Avatar :value="account" :size="64" />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong><Identity :address="account" :inline="true"/></strong>
            <small>@dateHere</small>
            <br />
            {{ message }}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <b-icon pack="far" icon="thumbs-up" size="is-small" class="level-item"></b-icon>
            <b-icon pack="far" icon="thumbs-down" size="is-small" class="level-item"> </b-icon>
            <b-icon icon="reply" size="is-small" class="level-item"> </b-icon>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script lang="ts" >
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

const components = {
  Avatar: () => import('@/components/shared/Avatar.vue'),
  Identity: () => import('@/components/shared/format/Identity.vue')
};

@Component({ components })
export default class Comment extends Vue {
  @Prop({ default: '' }) public message!: any;
  @Prop({ default: 'Fksmad33PFxhrQXNYPPJozgWrv82zuFLvXK7Rh8m1xQhe98' })
  public account!: string;
}
</script>
