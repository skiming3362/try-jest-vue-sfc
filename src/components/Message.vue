<template>
    <div>{{msg}}</div>
</template>

<script>
export default {
  props: ["msg"],
  methods: {
    testMethod() {
      console.log(this.msg)
    }
  }
}
</script>

<style>
</style>
