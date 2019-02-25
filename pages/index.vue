<template>
  <section class="container">
    <div>
      <h1 class="title">
        Triangle-challenge
      </h1>
      <form id="triangle-form" @submit.prevent="validateForm">
        <fieldset>
          <label for="side-A">A:</label>
          <input 
            id="side-A" 
            v-model="sideA" 
            type="number" 
            name="side-A" 
            autocomplete="off"
            placeholder="Enter side A length" 
          >
        </fieldset>
        <fieldset>
          <label for="side-B">B:</label>
          <input 
            id="side-B"
            v-model="sideB"  
            type="number" 
            name="side-B" 
            autocomplete="off" 
            placeholder="Enter side B length" 
          >
        </fieldset>
        <fieldset>
          <label for="side-C">C:</label>
          <input 
            id="side-C" 
            v-model="sideC" 
            type="number" 
            name="side-C" 
            autocomplete="off" 
            placeholder="Enter side C length" 
          >
        </fieldset>
        <fieldset>
          <button class="ts-primary" type="submit">
            <span>Generate triangle</span>
          </button>
        </fieldset>
      </form>  
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sideA: '',
      sideB: '',
      sideC: ''
    }
  },
  computed: {
    noValidInputs: function() {
      return (
        this.isNumeric(this.sideA) === false ||
        this.sideA < 1 ||
        this.isNumeric(this.sideB) === false ||
        this.sideB < 1 ||
        this.isNumeric(this.sideC) === false ||
        this.sideC < 1
      )
    }
  },
  methods: {
    isNumeric: function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    },
    validateForm: function(e) {
      // eslint-disable-next-line no-console
      console.log('are inputs valid', !this.noValidInputs)
      e.preventDefault()
    }
  }
}
</script>
