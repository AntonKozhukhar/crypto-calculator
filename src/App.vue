<template>
  <div class='wrapper'>
    <loader-component v-if='loading'/>
    <div class='wrapper__content' v-else>
      <currency-buttons
        :currencies='currenciesArray'
      />
      <currency-calculation/>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import CurrencyButtons from '@/components/currency-buttons'
import LoaderComponent from '@/components/loader-component'
import CurrencyCalculation from '@/components/currency-calculation'

export default {
  name: 'App',
  data() {
    return {
      loading: true
    }
  },
  components: { CurrencyCalculation, LoaderComponent, CurrencyButtons },
  computed: {
    ...mapState(['currencies', 'selectedCurrency']),
    ...mapGetters(['currenciesArray'])
  },
  async created() {
    this.loading = true
    await this.getCurrencies()
    if (!this.selectedCurrency?.name) {
      this.SET_SELECTED_CURRENCY(this.currenciesArray[0])
    }
    this.loading = false
  },
  methods: {
    ...mapMutations(['SET_SELECTED_CURRENCY']),
    ...mapActions(['getCurrencies'])
  }
}
</script>

<style lang='scss'>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 370px;
  height: 100vh;
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
  line-height: 132.1%;
  color: #BBBBBB;
  text-transform: uppercase;
  &__content {
    width: 100%;
  }
}
</style>
