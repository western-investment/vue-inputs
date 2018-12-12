import FormInput from './Components/FormInput.vue'
import FormSelect from './Components/FormSelect.vue'
import FormTextarea from './Components/FormTextarea.vue'
import FormCheckbox from './Components/FormCheckbox.vue'
import FormRadio from './Components/FormRadio.vue'

const VueForms = {
  install: (Vue, options) => {
    Vue.component('form-input', FormInput)
    Vue.component('form-select', FormSelect)
    Vue.component('form-textarea', FormTextarea)
    Vue.component('form-checkbox', FormCheckbox)
    Vue.component('form-radio', FormRadio)
  }
}

export default VueForms
