<script setup>
import countries from './countries.js'
</script>

<template>
  <FormKit
    type="autocomplete"
    label="Autocomplete (option appearance) with max prop set to 2"
    :options="countries"
    selection-appearance="option"
    multiple
    max="2"
  />
  <FormKit
    type="autocomplete"
    label="Autocomplete (text-input appearance) with max prop set to 2"
    :options="countries"
    selection-appearance="text-input"
    multiple
    max="2"
  />
</template>
