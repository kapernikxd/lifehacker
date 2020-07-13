import Vue from 'vue'
import App from './App.vue'

import Header from "@/components/Header";
import Main from "@/components/Main";
import Navigation from "@/components/Navigation";
import HowItsWork from "@/components/HowItsWork";
import Win from "@/components/Win";
import Tickets from "@/components/Tickets";
import HowPlay from "@/components/HowPlay";
import Lottery from "@/components/Lottery";
import Result from "@/components/Result";
import TakeMoney from "@/components/TakeMoney";
import Footer from "@/components/Footer";

import './assets/css/style.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faVk } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookF)
library.add(faTwitter)
library.add(faVk)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.component('Header', Header)
Vue.component('Main', Main)
Vue.component('Navigation', Navigation)
Vue.component('HowItsWork', HowItsWork)
Vue.component('Win', Win)
Vue.component('Tickets', Tickets)
Vue.component('HowPlay', HowPlay)
Vue.component('Lottery', Lottery)
Vue.component('Result', Result)
Vue.component('TakeMoney', TakeMoney)
Vue.component('Footer', Footer)




new Vue({
  render: h => h(App)
}).$mount('#app')
