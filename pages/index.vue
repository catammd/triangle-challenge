<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        Triangle-challenge
      </h1>
      <form id="triangle-form" action="#">
      <input-field 
        v-for="(side, index) in sides"
        :name="side.name"
        :placeholderText="side.placeholderText"
        :label="side.label"
        :key="index" />
    </form>  
    </div>
  </section>
</template>

<script>
import inputField from '@/components/InputField'
export default {
  components: {
    inputField
  },
  data() {
    return {
      sides: [
        {
          name: 'side-A',
          label: 'A:',
          placeholderText: 'Enter side A length'
        }
      ]
    }
  }
}
</script>
