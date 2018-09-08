<template>
  <v-layout row justify-center class="animated fadeIn">
    <v-flex xs4 class="mt-5">
      <v-card flat class="white--text">
        <v-card-title class="headline">
          Fila <v-spacer/>
          <input type="text" v-model="add" placeholder="Adicionar a fila" class="ipt">
        </v-card-title>
        <v-list>
          <v-list-tile class="title" v-for="(q, i) in queue" :key="i">
            {{q}}
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <v-flex xs8 class="mt-5">
      <v-card flat class="white--text">
        <v-card-title class="headline">
          Tweet tracker <v-spacer/>
          <v-btn icon>
            <img src="../assets/logo.png" width="40px"/>
          </v-btn>
        </v-card-title>
        <v-list @mouseover="pause = true" @mouseleave="pause = false">
          <v-list-tile class="tile" @mouseover="pause = true" @mouseleave="pause = false" v-for="(t, i) in tweets" :key="i">
            <img style="border-radius: 20px;" class="ma-2" :src="`${t.profile_img}`" width="25px;"/>
            <div>
              {{t.text}}
            </div>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      pause: false,
      add: '',
      tweets: [],
      queue: []
    }
  },
  watch: {
    add: _.debounce(function (val) {
      if (val) this.$socket.emit('addQueue', val)
    }, 700)
  },
  sockets: {
    tweet (val) {
      if (!this.pause) {
        if (this.tweets.length >= 10) this.tweets.pop()
        this.tweets.unshift(val)
      }
    },
    queue (val) {
      this.queue = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tile{
  transition: 0.3s;
}
.tile:hover{
  transform: scale(1.1);
}
</style>
