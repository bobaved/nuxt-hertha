import { Inject } from '@nuxt/types/app'
import { NuxtContext } from './context'

export type NuxtPlugin = (ctx: NuxtContext, inject: Inject) => Promise<void> | void
