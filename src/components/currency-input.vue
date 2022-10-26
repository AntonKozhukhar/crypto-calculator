<template>
  <div
    :style="{ marginBottom: label === 'USD' ? '10px' : '0' }"
    class='currency'
  >
    <label
      class='currency__label input-label'
      for='input'
    >
      {{ label }}
    </label>
    <input
      id='input'
      v-model='value'
      class='currency__input'
      type='number'
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'currency-input',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: 1
    }
  },
  watch: {

  },
  computed: {
    ...mapState(['selectedCurrency'])
  },
  methods: {

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
  width: 100%;
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