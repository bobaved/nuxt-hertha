import { NuxtContext } from '~/interfaces/context'
import { NuxtPlugin } from '~/interfaces/plugin'
const cmsApi: NuxtPlugin = (context: NuxtContext) => {
  context.$cmsApi = context.$axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
        Authorization: `Bearer ${process.env.cmsApiToken}`
      }
    }
  })
}

export default cmsApi
