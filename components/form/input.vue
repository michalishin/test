<template>
  <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight"
           @input="$emit('input', value)"
           :value="value"
           :type="type"
           :placeholder="placeholder">
</template>

<script>
  export default {
    props: {
      error: {},
      value: {},
      type: {
        default: 'text'
      },
      placeholder: {
        default: ''
      }
    }
  }
</script>
