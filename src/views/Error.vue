<template>
    <div>
        <h1>NotFound404 Error</h1>
        <p> 此網頁已經掛掉了喔! </p>
        <b-button @click="BackToHome()">回到首頁</b-button>
    </div>
</template>

<script>
export default {
  methods: {
    BackToHome: function () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
