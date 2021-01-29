<template>
<div>
    <h1>Admin-Home</h1>
    <p> 帳號名稱 : {{ account }} </p>
    <b-button @click="fetchArticles">Disptch fetchArticles</b-button>
    <pre> {{ articles }}</pre>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      test: 'test'
    }
  },
  methods: {
    ...mapActions(['fetchArticles'])
  },
  computed: {
    ...mapState(['account', 'articles'])
  }
}
</script>
