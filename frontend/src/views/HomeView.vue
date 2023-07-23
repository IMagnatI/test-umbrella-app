<template>
  <div class="v-homeView">
    <Filters />
    <HomeTable />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import HomeTable from '@/components/views/HomeView/HomeTable.vue'
import { rateService } from '@/main'
import Filters from '@/components/views/HomeView/Filters.vue'

@Component({
  components: {
    Filters,
    HomeTable,
  },
})
export default class HomeView extends Vue {
  public async mounted(): Promise<void> {
    await rateService.loadData()
  }
}
</script>

<style></style>
