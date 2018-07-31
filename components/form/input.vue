<template lang="pug">
input.input(
  @input="change"
  :name="name"
  :value="value"
  :type="type"
  :placeholder="placeholder"
  )
</template>

<script>
  export default {
    inject: ['name'],
    props: {
      error: {},
      value: {},
      type: {
        default: 'text'
      },
      placeholder: {
        default: ''
      }
    },
    methods: {
      change (e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>
