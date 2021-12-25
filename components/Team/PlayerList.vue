<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="player in players"
        :key="player.id"
        col=4
        md=4
        sm=12
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card>
              <v-img
                src="https://placeimg.com/640/480/sport/sepia"
              >
              </v-img>
              <v-card-title>
                {{player.attributes.Name}} {{player.attributes.LastName}}
                
              </v-card-title>

              <v-expand-transition>
                <v-card
                  v-if="hover"
                  class="transition-fast-in-fast-out v-card--reveal"
                  style="height: 100%;"
                >
                  <v-card-title>
                    {{player.attributes.Name}} {{player.attributes.LastName}}
                  </v-card-title>
                  <v-card-text>
                    Nochn bissl Fließtext
                  </v-card-text>
                  <v-list one-line>
                    <v-list-item>
                      <v-list-item-content>
                        <v-btn
                          color="blue-grey"
                          class="white--text"
                          @click="openTab(player.attributes.Link)"
                        >
                          QTTR Profil
                        <v-icon right color="white">
                          mdi-account
                        </v-icon>
                        </v-btn>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-expand-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { Player } from '~/types/types'

@Component({
  name: 'PlayerList',

})
export default class PlayerList extends Vue {
  @Prop({required: true, type: Array as () => Player[] })
  players!: Player[]

  openTab(link:string) {
    window.open(link, '_blank')
  }
}
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 0.9 !important;
  position: absolute;
  width: 100%;
}
</style>