<template>
  <div class="tel">
    1454102928
    {{message}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      this.message = mes
    })
  }
}
</script>
<style scoped>
.tel{
  border: 1px solid red;
}
</style>
