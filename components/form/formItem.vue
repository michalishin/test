<template lang="pug">
div.form-item
  label.label(:for="name" v-if="label" v-text="label")
  slot
  p.info(v-if="error" v-text="error")
</template>

<script>
  export default {
    props: {
      error: {},
      label: {
        default: null
      },
      name: {
        default: null
      }
    },
    provide () {
      return {
        name: this.name
      }
    }
  }
</script>
