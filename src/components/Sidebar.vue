<template>
  <div class="sideBar">
    側邊頁面顯示
    <article  v-for="(art, index) in articles" :key="index">
      <h3 @click="routerToArticle(art.id)">{{ art.title }}</h3>
      <i>{{ art.date }}</i>
      <span> {{ art.content | subContent }}</span>
    </article>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Sidebar',
  mounted () {
    const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
    axios.get(api)
      .then(result => {
        console.log(result.data.data)
        this.articles = result.data.data
      })
  },
  data () {
    return {
      articles: null
    }
  },
  filters: {
    subContent: (content) => {
      return content.substring(0, 200)
    }
  },
  methods: {
    routerToArticle: function (id) {
      this.$router.push({ name: 'Article', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.sideBar{
  width: 30%;
  article{
    display: flex;
    flex-direction:column;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    padding-left: 3rem;
    padding-right: 3rem;
    margin: 2rem ;
    background-color: #dddddd;
    border-radius: 16px;
    h3{
      padding: 2rem 0;
    }
    i{
      color: #cccccc;
    }
    span{
      text-align: left;
      padding: 2rem 1rem;
    }
  }
}
</style>
