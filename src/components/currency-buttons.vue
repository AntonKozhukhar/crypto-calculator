<template>
  <div class='currencies'>
    <div
      v-for='(cur, i) in currencies'
      :key='i'
      class='currencies__block'
    >
      <span class='currencies__label btn-label'>{{ cur.name }}</span>
      <button
        :class="{'currencies__btn-active': cur.name === selectedCurrency.name}"
        class='currencies__btn'
        @click='selectCurrency(cur)'
      >
        <img
          :alt='cur.name'
          :src='cur.img'
        >
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'currency-buttons',
  props: {
    currencies: {
      type: Array,
      required: true,
      default: []
    }
  },
  computed: mapState(['selectedCurrency']),
  methods: {
    ...mapMutations(['SET_SELECTED_CURRENCY']),
    selectCurrency(currency) {
      this.SET_SELECTED_CURRENCY(currency)
    }
  }
}
</script>

<style
  lang='scss'
  scoped
>
.currencies {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 46px;
    background: rgba(223, 223, 223, 0.7);
    border-radius: 6px;
    border-color: transparent;
    cursor: pointer;
    transition: .2s;
    &-active, &:hover {
      background: #fff;
      border: 1px solid #C9C9C9;
    }
  }
}
</style>