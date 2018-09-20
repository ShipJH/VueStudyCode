import Vue from 'vue'
import Vuex from 'Vuex'


//use는 vue의 플러그인이라는 기능 일반적으로 사용할때 전역으로 사용 할때 사용 (글로벌 펑션)
// 만약 다른 컴포넌트에서 this.$vue 이런식으로 접근 가능.
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        price: 100
    },
    getters:{
        originalPrice(state){
            return state.price;
        },
        doublePrice(state){
            return state.price * 2;
        },
        triplePrice(state){
            return state.price * 3;
        }
    }
});