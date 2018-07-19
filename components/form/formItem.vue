<template>
  <div>
    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
      Password
    </label>
    <slot></slot>
    <p class="text-red text-xs italic" v-if="error">
      {{error}}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      error: {}
    }
  }
</script>
