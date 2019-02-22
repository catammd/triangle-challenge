<template>
    <fieldset>
        <label :for="name">{{ label }}</label>
        <input type="number" :name="name" id="sideA" autocomplete="off" :placeholder="placeholderText" />
      </fieldset>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholderText: {
      type: String,
      default: ''
    }
  }
}
</script>
