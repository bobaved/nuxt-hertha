import { Context } from '@nuxt/types'

export interface NuxtContext extends Context {
  $cmsApi: any, // should be NuxtAxiosInstance but does not work
}