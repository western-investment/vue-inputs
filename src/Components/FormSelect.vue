<template>
    <div :class="{'form-group': true, 'row': inline}">
        <label :for="name" v-text="label" :class="labelClass"></label>
        <div :class="{'col-md-8': inline}">
            <select v-bind="$attrs"
                    :class="inputClass"
                    v-on:change="$emit('input', $event.target.value)">
                <option v-for="option in options"
                        :key="option.value"
                        :value="option.value"
                        :selected="value == option.value"
                >{{ option.text }}</option>
            </select>
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
    inheritAttrs: false,

    inject: ['$validator'],

    name: 'FormSelect',

    props: {
      name: String,
      label: String,
      value: [String, Number],
      options: Array,
      inline: {
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
