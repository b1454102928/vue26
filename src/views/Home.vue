<template>
  <div class="home">
    <b>{{ food }}</b>
    <!-- <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到Argu</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  methods: {
    handleClick (type) {
      if (type === 'back') {
        // this.$router.go(-1)
        this.$router.back()
      } else if (type === 'push') {
        this.$router.push({
          // name: 'Parent',
          // query: {
          //   name: 'lison'
          // }
          name: 'Argu',
          params: {
            name: 'lison'
          }
        })
      } else if (type === 'replace') this.$router.replace('/parent')
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm.food) // 在next中才能获取this
    })
  },
  beforeRouteLeave (to, from, next) {
    // 离开页面提醒用户没保存是否离开
    const leave = confirm('您确定要离开吗？')
    if (leave) next()
    else next(false)
  }
}
</script>
