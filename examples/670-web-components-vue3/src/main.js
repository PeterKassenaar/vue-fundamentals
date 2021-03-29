
import { createApp, h } from "vue";
import wrapper from "vue3-webcomponent-wrapper";
import App from "./App";

const CustomElement = wrapper(App, createApp, h);
window.customElements.define("v-card-vue3", CustomElement);
