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
import Vue from 'vue'
import gql from 'graphql-tag'
import { NuxtContext } from '~/interfaces/context'

interface TeamsData {
  teams: any
}

export default Vue.extend({

  async asyncData (ctx: NuxtContext): Promise<TeamsData> {
    const result = await ctx.app.apolloProvider.defaultClient.query({
      query: gql`query getTeams {
        teams {
          data {
            id
          }
        }
      }
      `
    })
    return { teams: result }
  },
  data () {
    return {
      teams: null
    }
  }
})
</script>
