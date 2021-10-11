<template>
  <layout-normal v-if="isAuth"></layout-normal>
  <layout-auth v-else></layout-auth>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LayoutNormal from '@/components/layout/normal.vue'
import LayoutAuth from '@/components/layout/auth.vue'

@Component({
  components: {
    LayoutNormal,
    LayoutAuth
  }
})
export default class App extends Vue {
  isAuth = false
}
</script>
<style lang="scss">
</style>
