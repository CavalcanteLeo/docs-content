---
title: Radio
description: A native HTML radio input with support for one or many nested options elements.
---

<InputPageHero
title="Radio input"
icon="IconInputRadio"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `radio` input uses HTML's [native radio inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) to allow a user to select one value from a series of options. The `options` prop is required for radio inputs and can be provided in 3 ways:

- An array of strings
- An object of value/label pairs
- An array of objects with `label` and `value` properties (the same as the [checkbox](/inputs/checkbox) and [select](/inputs/select) inputs)

### Array of strings

The simplest way to provide options is an array of strings. The provided strings will be used for both the label and the value of the option.

<example
name="Radio input"
file="/_content/examples/radio-strings/radio-strings.vue"></example>

### Value / Label object

You may also provide the `options` prop where the keys are values and the values of each property are labels.

<example
name="Radio input"
file="/_content/examples/radio-object/radio-object.vue"></example>

### Array of objects

The most flexible way to define options is by providing an array of objects. The objects _must_ include `value` and `label` properties — but may also include a `help` property as well as an `attrs` object of additional attributes to apply to each radio input tag.

<example
name="Radio input"
file="/_content/examples/radio-objects/radio-objects.vue"></example>

## Props & Attributes

<reference-table input="radio" :data="[{prop: 'options', type: 'Array/Object', default: '[]', description: 'An object of value/label pairs or an array of strings, or an array of objects that <em>must</em> contain a label and value property.'}]">
</reference-table>

## Section keys

<reference-table type="sectionKeys" primary="section-key" :data="[{'section-key': 'decorator', description: 'Responsible for the element immediately following the input element — usually used for styling.'}, { 'section-key': 'legend', description: 'Responsible for the fieldset’s legend element.'}, {'section-key': 'fieldset', description: 'Responsible for the fieldset when multiple options are available.'}, {'section-key': 'options', description: 'Responsible for the wrapper element around all of the option items.'},{'section-key': 'option', description: 'Responsible for the wrapper around each item in the options.'}]">
</reference-table>
