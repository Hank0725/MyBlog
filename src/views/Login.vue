<template>
  <div>
    <b-form >
    <b-form-group
        id="input-group-1"
        label="輸入會員帳號:"
        label-for="input-1"
    >
        <b-form-input
        id="input-1"
        v-model="form.account"
        type="text"
        placeholder="輸入您的帳號"
        required
        ></b-form-input>
    </b-form-group>

      <b-form-group id="input-group-2" label="您的密碼:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="輸入您的密碼"
          required
        ></b-form-input>
      </b-form-group>

    <b-button @click.prevent="routerToAdmin()" type="submit" variant="primary">會員登入</b-button>
    </b-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    routerToAdmin: function () {
      this.$router.push({ name: 'Admin' })
      console.log('enter' + this.$router.name)
    }
  }
}
</script>
