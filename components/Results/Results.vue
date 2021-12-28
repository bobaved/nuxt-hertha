<template>
    <v-list three-line>
      <template v-for="(item, index) in results">

        <v-divider
          :key="item.id + 'divider'"
        ></v-divider>

        <v-list-item
          :key="item.id"
        >
          <v-list-item-content>
            <v-list-item-title v-html="item.attributes.team.data.attributes.League"></v-list-item-title>
            <v-list-item-subtitle>
              {{getHomeTeam(item)}} {{item.attributes.resultHome}} : {{item.attributes.resultAway}} {{ getAwayTeam(item) }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
import resultsQuery from '~/apollo/queries/results.gql'
import { ResultEntity } from '~/types/types'


export default Vue.extend({
  data () {
    return {
      results: [] as ResultEntity[]
    }
  },
  fetch: async function() {
    /* @ts-ignore */
    const response = await this.$apolloProvider.defaultClient.query({
      query: resultsQuery
    })
    this.results = response.data.results.data
  },
  methods: {
    getHomeTeam(result: ResultEntity): string {
      return (
        result.attributes!.homeGame ?
        result.attributes!.team!.data!.attributes!.Titel :
        result.attributes!.against
        ) || ''
    },
    getAwayTeam(result: ResultEntity): string {
      return (
        !result.attributes!.homeGame ?
        result.attributes!.team!.data!.attributes!.Titel :
        result.attributes!.against
        ) || ''
    }
  }
})


</script>
