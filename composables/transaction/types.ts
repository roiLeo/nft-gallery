import { Interaction } from '@kodadot1/minimark'
import { ShoppingActions } from '@/utils/shoppingActions'

export type ActionConsume = {
  interaction: Interaction.CONSUME
  urlPrefix: string
  nftId: string
  successMessage?: string
  errorMessage?: string
}

export type ActionBuy = {
  interaction: Interaction.BUY
  urlPrefix: string
  price: string
  nftId: string
  tokenId: string
  currentOwner: string
  successMessage?: string
  errorMessage?: string
}

export type ActionList = {
  interaction: Interaction.LIST
  urlPrefix: string
  price: string
  nftId: string
  successMessage?: string
  errorMessage?: string
}

export type ActionMintToken = {
  interaction: Interaction.MINTNFT
  urlPrefix: string
  metadata: string
  price?: string
  collectionId: string
  royalty?: {
    address: string
    amount: number
  }
  successMessage?: string
  errorMessage?: string
}

export type ActionSend = {
  interaction: Interaction.SEND
  urlPrefix: string
  tokenId: string
  address: string
  nftId: string
  successMessage?: string
  errorMessage?: string
}

export type ActionOffer = {
  interaction: typeof ShoppingActions.MAKE_OFFER
  urlPrefix: string
  tokenId: string
  day: number
  price: number
  currentOwner: string
  successMessage?: string
  errorMessage?: string
}

export type ActionWithdrawOffer = {
  interaction: typeof ShoppingActions.WITHDRAW_OFFER
  nftId: string
  maker: string
  successMessage?: string
  errorMessage?: string
}

export type ActionAcceptOffer = {
  interaction: typeof ShoppingActions.WITHDRAW_OFFER
  nftId: string
  maker: string
  successMessage?: string
  errorMessage?: string
}

export type Actions =
  | ActionBuy
  | ActionList
  | ActionSend
  | ActionOffer
  | ActionConsume
  | ActionWithdrawOffer
