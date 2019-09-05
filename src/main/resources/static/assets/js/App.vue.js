import './components/Navigation.vue.js'

export default {
    name: 'App',
    template: `
      <div>
        <template>
          <v-app id="inspire">
            <custom-navigation v-bind:drawer="drawer"></custom-navigation>
        
            <v-app-bar app clipped-left>
              <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
              <v-toolbar-title>Spring Examples</v-toolbar-title>
            </v-app-bar>
        
            <v-content>
              <router-view></router-view>
            </v-content>
            <v-footer app>
              <span>&copy; 2019</span>
            </v-footer>
          </v-app>
        </template>
      </div>
    `,
    data() {
        return {
          drawer: true
        }
    },
    methods: {

    }
}