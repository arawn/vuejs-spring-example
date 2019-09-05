export default {
    name: 'Dashboard',
    template: `
      <v-container fluid fill-height>
        <v-row>
          <v-col>
            <p class="text-center display-2">Dashboard</p>
            <p class="text-center title">(Health Status: {{ health.status }})</p>
          </v-col>
        </v-row>
      </v-container>
    `,
    data() {
        return {
            health: {
                status: 'unknown'
            }
        }
    },
    created() {
        this.$http.get(`/actuator/health`).then(response => {
            this.health = response.data
        }).catch(error => alert(error))
    }
}