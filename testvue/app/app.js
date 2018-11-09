import Vue from "nativescript-vue";

import routes from './router';

import Home from './components/Home.vue';

Vue.prototype.$changeRoute = (to, options) => {
    Vue.navigateTo(routes[to], options)
  }

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
