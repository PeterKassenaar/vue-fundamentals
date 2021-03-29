import Vue from 'vue'
import App from './App.vue'

// 1. import wc wrapper stuff
import wrap from '@vue/web-component-wrapper'

// 2. create your web component
const wrappedElement = wrap(Vue, App);

// 3. register custom components on the browser
window.customElements.define('v-card', wrappedElement);
