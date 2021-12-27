<template>
    <v-list three-line>
      <template v-for="(item, index) in results.data">

        <v-divider
          :key="item.id + 'divider'"
          inset
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
import { Component, Vue } from 'nuxt-property-decorator'
import resultsQuery from '~/apollo/queries/results.gql'
import "vue-apollo"
import { ResultEntity } from '~/types/types'


@Component({
  apollo: {
    results: resultsQuery
  }
})
export default class Results extends Vue {
  getHomeTeam(result: ResultEntity): string {
    return (
      result.attributes!.homeGame ?
      result.attributes!.team!.data!.attributes!.Titel :
      result.attributes!.against
      ) || ''
  }
  getAwayTeam(result: ResultEntity): string {
    return (
      !result.attributes!.homeGame ?
      result.attributes!.team!.data!.attributes!.Titel :
      result.attributes!.against
      ) || ''
  }
}
</script>
