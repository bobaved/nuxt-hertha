<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="12">
      <v-card>
        <v-toolbar
          flat
          color="primary"
          dark
        >
          <v-toolbar-title>Unsere Mannschaften</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
          <v-tab
            v-for="team in teams"
            :key="team.attributes.id"
          >
            {{ team.attributes.Titel}}
          </v-tab>
          <v-tab-item
            v-for="team in teams"
            :key="team.attributes.id"
          >
            <v-card flat>
              <v-card-text>
                Hier könnte noch eine kleine Beschreibung der Mannschaft stehen. Vllt die Tabelle
              </v-card-text>              
              <player-list v-if="team.attributes.players.data" :players="team.attributes.players.data"/>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { NuxtContext } from '~/interfaces/context'
import { Team } from '~/types/types'
import teamsQuery from '~/apollo/queries/teams.gql'
import PlayerList from '~/components/Team/PlayerList.vue'
export default Vue.extend({
  components: {
    PlayerList
  },

  async asyncData (ctx: NuxtContext): Promise<{teams: Team[]}> {
    const result = await ctx.app.apolloProvider.defaultClient.query({
      query: teamsQuery
    })
    console.log(result.data.teams.data)
    return { teams: result.data.teams.data }
  },
})
</script>
