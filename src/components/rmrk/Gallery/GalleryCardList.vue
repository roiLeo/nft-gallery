<template>
  <div class="columns is-multiline">
    <div
      class="column is-one-third-desktop is-one-third-tablet"
      v-for="nft in items.slice(0, 2)"
      :key="nft.id"
    >
      <GalleryCard :id="nft.id"
                   :name="nft.name"
                   :type="type"
                   :link="link"
                   :metadata="nft.metadata"
                   :price="nft.price"
                   :emoteCount="nft.emoteCount"
                   :currentOwner="nft.currentOwner"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { RmrkType } from '@/components/rmrk/service/scheme';

const components = {
  GalleryCard: () => import('./GalleryCard.vue')
};

@Component({ components })
export default class GalleryCardList extends Vue {
  @Prop({ default: 'nftDetail' }) public type!: string;
  @Prop({ default: 'rmrk/detail' }) public link!: string;
  @Prop() public items!: RmrkType[];
  public limit: number = 5

  /**
   * name
   */
  public computedItems() {
    return this.limit ? this.items.slice(0, this.limit) : this.items;
  }
}
</script>
