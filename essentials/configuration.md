# Configuration

FormKit uses a unique hierarchical configuration system that is well suited for forms. To understand how this configuration works there are 4 questions we need to answer:

1. [What are core nodes](#what-are-core-nodes)?
2. [What are node options](#what-are-node-options)?
3. [What are node props?](#what-are-node-props)
4. [What is node config?](#what-is-node-config)?

## What are core nodes?

Every `<FormKit>` component has its own instance of a core node object. This node is responsible for almost all of the component’s functionality. There are 3 types of nodes: inputs, lists, and groups (forms are just a type of group!).

There is no global FormKit instance that controls the application — instead you can think of each node as it's own little application. Complete with its own configuration.

One last thing about nodes — they can all have parent nodes. Groups and lists can also have children. For example, a login form might have two children — the email and password inputs. You can draw this relationship as a simple tree diagram:

<figure>
  <simple-tree></simple-tree>
  <figcaption>Hover over each node to see its initial options.</figcaption>
</figure>

## What are node options?

When creating one of these "mini applications" that we call core nodes some options can be passed in. Except in extremely advanced use cases, you wont be creating your own core nodes — this is normally done for you by the `<FormKit>` component. However, it can be useful to define some of the node options globally. This is done with the `@formkit/vue` plugin — 💡 **core node options are the same as the `@formkit/vue` plugin options**.

For example in a typical FormKit Vue registration we use `defaultConfig` which is just a function that returns core node options:

<client-only>

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { plugin, defaultConfig } from '@formkit/vue'

// 👀 defaultConfig is just a function that returns core node options!
createApp(App).use(plugin, defaultConfig)
```

</client-only>

### Available node options

The following is a list of all the available options that can be used when registering FormKit or creating a node individually. Options that are passed to the `@formkit/vue` plugin will be applied to every `<FormKit>` component’s core node when it is created.

<client-only>

```js
createNode({
  /**
   * Used to rename the global "FormKit" component.
   */
  alias: 'FormKit',
  /**
   * This array is normally built for you by the FormKit component.
   */
  children: [],
  /**
   * An object of config settings. Keep reading for more on this.
   */
  config: {},
  /**
   * The name of the node — normally this is mapped to the name of your input.
   */
  name: 'inputName',
  /**
   * Parent — this is normally set for you by the FormKit component.
   */
  parent: null,
  /**
   * An array of plugin functions
   */
  plugins: [],
  /**
   * Default prop values, keep reading to learn more.
   */
  props: {},
  /**
   * Used to rename the global "FormKitSchema" component.
   */
  schemaAlias: 'FormKitSchema',
  /**
   * All are only 1 of 3 values: 'input', 'group', or 'list'
   */
  type: 'input',
  /**
   * The initial value of the node.
   */
  value: 'foobar',
})
```

</client-only>

### What is `defaultConfig`?

Developers familiar with FormKit will notice that the above list of node options differs slightly from the values that can be passed into the `defaultConfig` function.

Many of FormKit’s features, like validation, inputs and vue support are provided courtesy of first-party plugins. The `defaultConfig` function configures many of these plugins before they are given over to the vue plugin as node options. So, `defaultConfig` can accept any of the above node options, but also a few extras:

<client-only>

```js
defaultConfig({
  /**
   * Validation rules to add or override.
   * See validation documentation.
   */
  rules: {},
  /**
   * Locales to register.
   * See internationalization docs.
   */
  locales: {},
  /**
   * Inputs definitions to add or override.
   * See docs on custom inputs.
   */
  inputs: {},
  /**
   * Explicit locale messages to override.
   * See internationalization documentation.
   */
  messages: {},
  /**
   * The currently active locale. This is actually a config setting, but
   * defaultConfig accepts it as a top-level value to improve the DX.
   */
  locale: 'en',
  /**
   * Any of the above node options are accepted.
   */
  ...nodeOptions,
})
```

</client-only>

## What are node props?

All core node’s have a `props` object (`node.props`). FormKit core, and any third party plugins or code can read and write values to this object. In fact, nearly every feature of FormKit references `node.props` to determine how it should operate.

For example, the validation plugin looks at `node.props.validation` to determine if there are any rules it needs to run. So the real question is — how are these props being set? There are 3 primary mechanisms for setting props:

- direct assignment
- component props
- Vue plugin options

Let’s see how we can set the validation rules of an input (`node.props.validation`) these three ways:

### 1. Direct assignment

If you have an node instance, you can directly assign it a prop value:

<example
  name="Direct node assignment"
  file="/_content/examples/node-assignment/node-assignment.vue">
</example>

### 2. Component props

Any props passed to the `<FormKit>` input are assigned to the `node.props` object (you know the drill).

<example
  name="Component props"
  file="/_content/examples/component-props/component-props.vue">
</example>

### 3. Vue plugin options

When registering the the `@formkit/vue` plugin, you can provide prop values to be injected into to all `<FormKit>` components.

<example
  name="Component props"
  :file="[
    '/_content/examples/vue-plugin-props/vue-plugin-props.vue',
    '/_content/examples/vue-plugin-props/formkit.config.js',
  ]"
  init-file-tab="formkit.config.js">
</example>

## What is node config?

Props are pretty powerful, but in addition to `node.props` core nodes all have a config object `node.config`. This is where configuration hierarchy comes in. The `node.config` object acts like initial values for `node.props` — if a given prop is requested, like `node.props.validation`, and that property is not explicitly set using any of the [methods discussed above](#what-are-node-props), then FormKit will check the `node.config` object to see if it has a value — if it does not have a value, then it recursively checks the node’s parent config object until a value is found or it reaches a node with no parent.

<figure>
  <img src="/img/props-config-flow.svg" class="props-diagram">
  <figcaption>This diagram describes how a request for property of node.props resolves.</figcaption>
</figure>

What does this mean in practice? When you combine the tree like structure of forms (and their corresponding core nodes) and this hierarchical configuration you can do some pretty exciting things. For example, here we set the validation visibility of an entire form:

<example
  name="Validation visibility"
  file="/_content/examples/validation-visibility/validation-visibility.vue">
</example>

It’s worth noting that plugins have their own inheritance model which differs from `config` and `props` — it is described in more detail in the [core documentation](/advanced/core).
