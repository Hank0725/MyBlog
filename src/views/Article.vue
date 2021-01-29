<template>
    <article v-if=" articles!='' " >
        <h1> {{ filterById.title }} </h1>
        <i>{{ filterById.date }}</i>
        <p v-html="filterById.content"> </p>
    </article>
</template>

<script>
import axios from 'axios'

export default {
  mounted () {
    // const id = this.$route.params.id
    this.artId = this.$route.params.id
    const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
    axios.get(api)
      .then(result => {
        console.log(result.data.data)
        this.articles = result.data.data
      })
  },
  data () {
    return {
      artId: null,
      articles: []
    }
  },
  computed: {
    filterById: function () {
      return this.articles.filter(art => art.id === this.artId)[0]
    }
  }
}
</script>

<style lang="scss" scoped>
    h1{
        color: seagreen;
        padding: 2rem;
    }
    i{
        color:green;
    }
    p{
        text-align: left;
        padding: 2rem;
    }
</style>
