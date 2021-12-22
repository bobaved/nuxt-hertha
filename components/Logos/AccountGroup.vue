<template>
  <img :src="logo">
</template>
<script>
export default {
  name: 'AccountGroup',
  data () {
    return {
      logo: '/account-group.svg'
    }
  }
}
</script>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
