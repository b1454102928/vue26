<template>
  <div>
    <!-- {{ $route.params.name }} -->
    {{ name }}
    <button @click="arguApple">跳转到argu/apple</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: [String, Number],
      default: 'lison'
    }
  },
  methods: {
    arguApple () {
      // eslint-disable-next-line no-unused-expressions
      this.$router.push({
        name: 'Argu',
        params: {
          name: 'Apple'
        }
      })
    }
  },
  watch: {
    $route (to, from) {
      console.log(to)
      console.log(from)
    }
  },
  // 路由发生变化组件被复用的时候
  beforeRouteUpdata (to, from, next) {
    console.log(to.name, from.name)
  }
}
</script>
