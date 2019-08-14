<template>
  <div class="container">
    <h1>
      ando
    </h1>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const userData = await $axios.$get('http://localhost:4000/person/get-all')
    return { items: userData }
  }
}
</script>
