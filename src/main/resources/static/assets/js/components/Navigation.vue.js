Vue.component('custom-navigation', {
    template: `
      <v-navigation-drawer v-model="drawerState" app clipped>
        <v-list dense>
          <v-list-item @click="route('/dashboard')">
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="route('/not-found')">
            <v-list-item-action>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>      
    `,
    props: {
        drawer: {
            type: Boolean,
            required: true
        },
    },
    computed: {
        drawerState: {
            get() {
                return this.drawer
            },
            set(newValue) {
                this.$emit('update:drawer', newValue)
            }
        }
    },
    methods: {
        route(path) {
            this.$router.push(path, () => {})
        }
    }
})