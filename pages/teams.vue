<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
        {{teams}}
    </v-col>
    <v-col cols="12" sm="8" md="6">
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue, { PropOptions } from 'vue'
import { NuxtContext } from '~/interfaces/context'
import gql from 'graphql-tag'

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
      const result = await ctx.app.apolloProvider.defaultClient.query({
        query: gql `query getTeams {
          teams {
            data {
              id
            }
          }
        }
        `
      })
      return {teams: result}
      }
  })
</script>
