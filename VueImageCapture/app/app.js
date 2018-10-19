import Vue from "nativescript-vue" ;
import VueDevtools from "nativescript-vue-devtools";
import routes from "./router";

Vue.use(VueDevtools);
// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    render: h => h('frame', [h(routes.home)])

}).$start();