<template>
  <div>
    I am child {{parentMsg}}
    <button @click="sendMsgToParent">向父组件传值</button>
  </div>
</template>

<script>
export default {
  props: {
    parentMsg: {
      type: String,
      default: 'child'
    }
  },
  methods: {
    sendMsgToParent () {
      this.$emit('listenToChildEvent', 'this message is from child')
    }
  }
}
</script>
