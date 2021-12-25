<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      {{ teams }}
      <ul>
        <li v-for="team in teams" :key="team.attributes.id">
          {{ team.attributes}}
        </li>
      </ul>
    </v-col>
    <v-col cols="12" sm="8" md="6">
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'
import { NuxtContext } from '~/interfaces/context'
import { Team } from '~/types/types'
import teamsQuery from '~/apollo/queries/teams.gql'
export default Vue.extend({

  async asyncData (ctx: NuxtContext): Promise<{teams: Team[]}> {
    const result = await ctx.app.apolloProvider.defaultClient.query({
      query: teamsQuery
    })
    console.log(result.data.teams.data)
    return { teams: result.data.teams.data }
  },
  data () {
    return {
      teams: null
    }
  }
})
</script>
