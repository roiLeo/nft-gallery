<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img v-if="avatar" class="is-rounded" :src="avatar">
          <Avatar v-else :value="account" :size="64" />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              <ProfileLink v-if="address" :address="address" :inline="true" />
              <Identity v-else :address="account" :inline="true"/>
            </strong>
            <small>@{{ handle }}</small>
            <br />
            {{ message }}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <b-icon pack="far" icon="thumbs-up" size="is-small" class="level-item comment-action"></b-icon>
            <b-icon pack="far" icon="thumbs-down" size="is-small" class="level-item comment-action"> </b-icon>
            <b-icon icon="reply" size="is-small" class="level-item comment-action"> </b-icon>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script lang="ts" >
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { findProfile } from './utils';
import { ProfileContentType } from './types'
import { ipfsHashToUrl } from '@/components/rmrk/utils';
import { emptyObject } from '@/utils/empty';
import { formatAccount } from '@/utils/account';

const components = {
  Avatar: () => import('@/components/shared/Avatar.vue'),
  Identity: () => import('@/components/shared/format/Identity.vue'),
  ProfileLink: () => import('@/components/rmrk/Profile/ProfileLink.vue')
};

@Component({
  name: 'Comment',
  components
})
export default class Comment extends Vue {
  @Prop({ default: '' }) public message!: any;
  @Prop({ default: '' })
  public account!: string;
  public profile: ProfileContentType = emptyObject<ProfileContentType>();

  get address() {
    return formatAccount(this.account)
  }

  get hasProfile() {
    return Object.keys(this.profile).length
  }

  get handle() {
    return this.profile.name
  }

  get avatar() {
    return ipfsHashToUrl(this.profile?.avatar)
  }

  public async mounted() {
    if (this.account) {
      const profile = await findProfile(this.account)
      console.log(profile, 'profile');
      if (profile) {
        this.profile = profile
      }
    }
  }
}
</script>

<style lang="scss">
.comment-action:hover {
  color: purple;
  cursor: pointer;
}
</style>
