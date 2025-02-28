---
title: Color Input
description: A native HTML color picker.
---

::InputPageHero
---
type: "Color"
---
::

:PageToc

The `color` input uses HTML's [native color picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) to allow users to easily select a hexadecimal color.

## Basic example

::Example
---
  name: "Color input"
  file: "_content/_examples/color-example/color-example.vue"
---
::

## Props & Attributes

The `color` input has no unique props but can make use of the following universal
FormKit props.

:ReferenceTable

## Sections

:SectionKeysIntro

::FormKitInputDiagram
---
label-content: "Favorite color"
input-content: "Color selector here"
help-content: "Select your favorite color."
message-content: "Only primary colors allowed."
prefix-icon-content: "🎨"
suffix-icon-content: "👍"
---
::

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
---
::

