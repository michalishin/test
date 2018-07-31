import vue from 'vue'

import BaseInput from '../components/form/input.vue'
import BaseFormItem from '../components/form/formItem.vue'
import BaseButton from '../components/form/button.vue'
import SVGLoader from '../components/directives/loading'

vue.component('BaseInput', BaseInput)
vue.component('BaseButton', BaseButton)
vue.component('BaseFormItem', BaseFormItem)

vue.directive('loading', {
    bind (el, {value}, vnode) { 
        let loading = document.createElement('div')
        loading.classList = 'loading-circle'
        loading.innerHTML = SVGLoader
        el.appendChild(loading)
        el.classList += ' loading'
        if (value) {
            el.classList.add('active-loading')
        }
    },
    update (el, {value}) {
        if (value) {
            el.classList.add('active-loading')
        } else {
            el.classList.remove('active-loading')
        }
    }
})
