<template>
    <div class="custom-control custom-radio" :class="{'col-md-8 col-md-offset-4': inline}">
        <input v-bind="$attrs"
               :id="id"
               type="radio"
               :name="name"
               class="custom-control-input"
               :class="{'is-invalid': errors.has(name)}"
               :value="value"
               :checked="value === $attrs.value"
               v-on:change="$emit('input', $attrs.value)"
        >
        <label class="custom-control-label"
               :for="id"
               v-text="label"
        ></label>
        <div v-if="errors.has(name)"
             class="invalid-feedback"
             role="alert"
             v-text="errors.first(name)"
        ></div>
    </div>
</template>

<script>
  export default {
    name: 'FormRadio',

    /**
     * We must inject the validator for form errors to work properly.
     */
    inject: ['$validator'],

    props: {
      name: String,
      label: String,
      value: [String, Number],
      inline: {
        type: Boolean,
        default: false
      },
      id: {
        type: String,
        default: () => {
          return Math.random().toString(36).substring(7)
        }
      }
    }
  }
</script>
