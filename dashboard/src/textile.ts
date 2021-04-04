import { Client, KeyInfo } from '@textile/hub'

export async function client(): Promise<Client> {
   return await Client.withKeyInfo(keyInfo)
}

export const keyInfo: KeyInfo = {
  key: 'bdyjjn63dopm5k2m2jovz6jqzwy',
  secret: process.env.VUE_APP_TEXTILE_SECRET
}
