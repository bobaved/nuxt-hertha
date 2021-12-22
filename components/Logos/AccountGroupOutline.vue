<template>
  <img :src="logo" :class="dark ? 'filter-dark' : '' ">
</template>
<script>
export default {
  name: 'AccountGroup',
  props: {
    dark: Boolean
  },
  data () {
    return {
      logo: '/account-group-outline.svg'
    }
  }
}
</script>

<style>
.nuxt-logo {
  height: 180px;
}
.filter-dark {
  filter: invert(100%)
}
</style>
