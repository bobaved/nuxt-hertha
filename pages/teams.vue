<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
        {{teams}}
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue, { PropOptions } from 'vue'
import { NuxtContext } from '~/interfaces/context'

interface TeamsData {
  teams: any
}

export default Vue.extend({
    data () {
        return {
            teams: null,
        }
    },

async asyncData (ctx: NuxtContext): Promise<TeamsData> {
    const response = await ctx.$cmsApi.get(`${ctx.$config.cmsApiBaseUrl}teams`)
    return {teams: response.data}
    }
})
</script>
