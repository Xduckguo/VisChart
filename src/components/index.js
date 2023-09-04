import BgAnimation from './BgAnimation/BgAnimation.vue'
import RingPie from './ringPie/RingPie.vue'

export default {
    install(Vue) {
        Vue.component('BgAnimation', BgAnimation),
        Vue.component('RingPie', RingPie)
    }
}