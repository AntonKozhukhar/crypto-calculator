<template>
  <div>
    <div class='currency'>
      <label class='currency__label input-label'>
        USD
      </label>
      <input
        v-model.number='usd'
        class='currency__input'
        min='0'
        type='number'
        @input='calculateCurrency'
      >
    </div>
    <div class='currency'>
      <label class='currency__label input-label'>
        {{ selectedCurrency.name }}
      </label>
      <input
        v-model.number='currency'
        class='currency__input'
        min='0'
        type='number'
        @input='calculateUsd'
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'currency-calculation',
  data() {
    return {
      usd: 0,
      currency: 1
    }
  },
  watch: {
    selectedCurrency: {
      handler() {
        this.currency = 1
        this.usd = this.selectedCurrency.exchange
      },
      deep: true,
      immediate: true
    },
    currency() {
      if (this.currency < 0) this.currency = 0
    },
    usd() {
      if (this.usd < 0) this.usd = 0
    }
  },
  computed: {
    ...mapState(['selectedCurrency'])
  },
  methods: {
    calculateCurrency() {
      this.currency = this.usd / this.selectedCurrency.exchange
    },
    calculateUsd() {
      this.usd = this.currency * this.selectedCurrency.exchange
    }
  }
}
</script>

<style
  lang='scss'
  scoped
>
.currency {
  display: flex;
  flex-direction: column;
  &__input {
    border: 1px solid #C9C9C9;
    border-radius: 6px;
    height: 46px;
    padding: 0 10px;
    color: #222222;
    font-weight: 700;
    font-size: 24px;
    transition: .2s;
    &:focus {
      border: 1px solid #6b6b6b;
    }
    &:focus-visible {
      outline: none;
    }
  }
}
</style>