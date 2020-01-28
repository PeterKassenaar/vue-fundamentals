import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import WebComponentVue from "./components/WebComponentVue";

const customElement= wrap(Vue, WebComponentVue);
window.customElements.define('wc-vue', customElement)
