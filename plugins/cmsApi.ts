import { Plugin } from '@nuxt/types'

declare module '@nuxt/types' {
  interface Context {
    $cmsApi: any // should be NuxtAxiosInstance but does not work
  }
}

const cmsApi: Plugin = (context) => {
  context.$cmsApi = context.$axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
        Authorization: `Bearer ${context.$config.cmsApiToken}`
      }
    }
  })
}

export default cmsApi
