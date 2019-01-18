<template>
    <div :class="{'form-group': true, 'row': inline}">
        <label :for="name" v-text="label" :class="labelClass"></label>

        <textarea v-bind="$attrs"
                  :rows="rows"
                  :value="value"
                  :class="inputClass"
                  v-on:input="$emit('input', $event.target.value)"
        ></textarea>
        <div v-if="errors.has(name)"
             class="invalid-feedback"
             role="alert"
             v-text="errors.first(name)"
        ></div>
    </div>
</template>

<script>
  export default {
    name: 'FormTextarea',

    inheritAttrs: false,

    /**
     * We must inject the validator for form errors to work properly.
     */
    inject: ['$validator'],

    props: {
      name: String,
      label: String,
      rows: Number,
      value: [String, Number],
      inline: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      labelClass () {
        return {
          'control-label': true
        }
      },

      inputClass () {
        return {
          'form-control': true,
          'is-invalid': this.errors.has(this.name)
        }
      }
    }
  }
</script>
