import { Client, KeyInfo } from '@textile/hub'

export async function client(): Promise<Client> {
   return await Client.withKeyInfo(keyInfo)
}

export const keyInfo: KeyInfo = {
  key: 'bt7vvbal3bl675lt75emfsjzgqi',
  secret: process.env.VUE_APP_TEXTILE_SECRET
}
