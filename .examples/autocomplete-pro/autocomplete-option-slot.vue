<script setup>
import carBrands from './car-brands.js'
</script>

<template>
  <FormKit
    type="autocomplete"
    name="autocomplete"
    label="Search for and select a car brand"
    placeholder="Example: Toyota"
    :options="carBrands"
    selection-appearance="option"
  >
    <!--OPTION SLOT-->
      <template #option="{ option, classes }">
        <div :class="classes.option">
          <img
            :src="option.logo"
            :alt="option.label + ' logo'"
          />
          <span>
            {{ option.label }}
          </span>
        </div>
      </template>
    <!--/OPTION SLOT-->
  </FormKit>
</template>

<style>
.formkit-option {
  display: flex;
  align-items: center;
}

.formkit-option img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
