<template>
  <div>
    I am parent
    <vue-child @listenToChildEvent="showMsgFromChild" parentMsg="来自父亲的值"></vue-child>
    <router-view/>
  </div>
</template>

<script>
import vueChild from './child.vue'
export default {
  components: {
    vueChild
  },
  methods: {
    showMsgFromChild (data) {
      console.log(data)
    }
  }
}
</script>
