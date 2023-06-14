<template>
  <div>
    <Loader v-model="isLoading" />

    <div class="title is-size-3">
      {{ $t('transfer') }} {{ unit }}
      <span class="has-text-primary"
        >${{ fiatStore.getCurrentTokenValue(unit) }}</span
      >
    </div>

    <div class="columns is-variable is-mobile">
      <div class="column">
        <div class="is-size-6 has-text-weight-bold">Sender</div>
        <NeoField class="my-4">
          <Auth />
        </NeoField>
      </div>
      <div class="column">
        <div class="is-size-6 has-text-weight-bold has-text-right">
          {{ $t('general.balance') }}
        </div>
        <NeoField>
          <Money :value="balance" inline />
        </NeoField>
      </div>
    </div>

    <hr />

    <div
      v-for="(destinationAddress, index) in destinationAddresses"
      :key="index">
      <AddressInput
        v-model="destinationAddresses[index]"
        :strict="false"
        label="Recipient"
        class="mb-2" />

      <div
        v-show="index == destinationAddresses.length - 1"
        class="has-text-weight-bold has-text-centered my-4">
        <a @click="addAddress"> Add recipient <NeoIcon icon="plus" /></a>
      </div>

      <!-- <DisabledInput
        v-show="
          correctAddress(destinationAddress) &&
          correctAddress(destinationAddress) !== destinationAddress
        "
        :label="$t('general.correctAddress')"
        :value="correctAddress(destinationAddress)" /> -->
    </div>

    <NeoField label="Amount">
      <NeoInput type="number" expanded />
      <NeoSelect />
    </NeoField>
  </div>
</template>

<script lang="ts" setup>
import { useFiatStore } from '@/stores/fiat'
import { useIdentityStore } from '@/stores/identity'
import { calculateKsmFromUsd, calculateUsdFromKsm } from '@/utils/calculation'
import { encodeAddress, isAddress } from '@polkadot/util-crypto'
import { NeoField, NeoIcon, NeoInput, NeoSelect } from '@kodadot1/brick'

const fiatStore = useFiatStore()
const identityStore = useIdentityStore()
const { urlPrefix } = usePrefix()
const { unit } = useChain()

const isLoading = ref(false)
const destinationAddresses = ref([''])
const transactionValue = ref('')
const price = ref(0)
const usdValue = ref(0)
const balance = computed(() => identityStore.getAuthBalance)

const addAddress = () => {
  destinationAddresses.value.push('')
}

const checkQueryParams = () => {
  const { query } = useRoute()
  const targets = Object.entries(query)
    .filter(([key]) => key.startsWith('target'))
    .filter(([_, address]) => {
      if (isAddress(address as string)) {
        return true
      }
      // showNotification(
      //   `Unable to use target address ${address}`,
      //   notificationTypes.warn
      // )
      return false
    })
    .map(([_, address]) => address as string)
  if (targets.length > 0) {
    destinationAddresses.value = targets
  }

  if (query.amount) {
    price.value = Number(query.amount)
  }

  if (query.usdamount) {
    usdValue.value = Number(query.usdamount)

    price.value = calculateKsmFromUsd(
      Number(fiatStore.getCurrentTokenValue(unit.value)),
      usdValue.value
    )
  }
}

onMounted(() => {
  fiatStore.fetchFiatPrice().then(checkQueryParams)
})
</script>
