<script setup>
import countries from './countries.js'
</script>

<template>
  <FormKit
    type="autocomplete"
    label="Single-select text input"
    placheolder="Pick a country"
    :options="countries"
    value="FR"
  />
  <FormKit
    type="autocomplete"
    label="Single-select option"
    placheolder="Pick a country"
    :options="countries"
    selection-appearance="option"
    value="FR"
  />
  <FormKit
    type="autocomplete"
    label="Multiple text input"
    placheolder="Pick a country"
    :options="countries"
    multiple
    :value="['FR', 'GR', 'ES']"
  />
  <FormKit
    type="autocomplete"
    label="Multiple option"
    placheolder="Pick a country"
    :options="countries"
    multiple
    selection-appearance="option"
    :value="['FR', 'GR', 'ES']"
  />
</template>
