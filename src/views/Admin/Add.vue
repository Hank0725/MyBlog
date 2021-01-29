<template>
<div>
    <h1>here is Admin Add page</h1>
   <p> 帳號名稱 : {{ stateAccount }} </p>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  mounted () {
    const account = this.$store.state.account
    this.stateAccount = account
    // this.stateAccount = Object.assign({}, account)
  },
  data () {
    return {
      stateAccount: null
    }
  },
  computed: {
    ...mapState(['account'])
  }
}
</script>
