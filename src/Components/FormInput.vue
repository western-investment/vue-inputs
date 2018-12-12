<template>
    <div :class="{'form-group': true, 'row': inline}">
        <label v-if="label !== false" :for="name" v-text="label" :class="labelClass"></label>

        <div :class="{'col-md-8': inline, 'input-group': inputGroup}">
            <input v-bind="$attrs"
                   :value="value"
                   :class="inputClass"
                   v-on:input="$emit('input', $event.target.value)"
            >
            <div class="input-group-append" v-if="inputGroup">
                <slot name="input-group-append"></slot>
            </div>

            <div v-if="errors.has(name)"
                 class="invalid-feedback"
                 role="alert"
                 v-text="errors.first(name)"
            ></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'FormInput',

    inheritAttrs: false,

    /**
     * We must inject the validator for form errors to work properly.
     */
    inject: ['$validator'],

    props: {
      name: String,
      label: [String, Boolean],
      value: [String, Number],
      inline: {
        type: Boolean,
        default: false
      },
      inputGroup: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      labelClass () {
        return {
          'control-label': true,
          'col-md-4 col-form-label text-md-right': this.inline
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
