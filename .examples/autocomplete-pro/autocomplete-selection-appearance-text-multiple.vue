<script setup>
import countries from './countries.js'
</script>

<template>
  <FormKit
    type="form"
    #default="{ value }"
    :actions="false"
  >
    <FormKit
      type="autocomplete"
      name="autocomplete"
      label="Search and select multiple countries"
      :options="countries"
      selection-appearance="text-input"
      multiple
      open-on-click
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

