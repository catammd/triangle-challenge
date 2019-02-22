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
          :key="index"
          :name="side.name"
          :placeholder-text="side.placeholderText"
          :label="side.label"
        />
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
        },
        {
          name: 'side-B',
          label: 'B:',
          placeholderText: 'Enter side B length'
        },
        {
          name: 'side-C',
          label: 'C:',
          placeholderText: 'Enter side C length'
        }
      ]
    }
  }
}
</script>
