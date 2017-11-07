<template>
  <div class="localsite">
  </div>
</template>

<script>
  export default {
    name: 'localsite',
    mounted () {
      let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
      this.$nextTick(() => {
        navigator.geolocation.getCurrentPosition(this.success, this.error, options)
      })
    },
    methods: {
      success (pos) {
        let crd = pos.coords

        console.log('Your current position is:')
        alert('Latitude : ' + crd.latitude)
        console.log('Longitude: ' + crd.longitude)
        console.log('More or less ' + crd.accuracy + ' meters.')
      },
      error (err) {
        console.warn('ERROR(' + err.code + '): ' + err.message)
      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">

</style>