import Vue from 'vue'
import Vuex from 'Vuex'
// 스토어 속성 모듈화.
import * as getters from './getters'
import * as mutations from './mutations'

//use는 vue의 플러그인이라는 기능 일반적으로 사용할때 전역으로 사용 할때 사용 (글로벌 펑션)
// 만약 다른 컴포넌트에서 this.$vue 이런식으로 접근 가능.
Vue.use(Vuex);

const storge = {
    fetch(){ // fetch function()
        
        const arr = [];

            if(localStorage.length > 0){
                for(let i=0; i < localStorage.length; i++){
                    if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                        // this.todoItems.push(localStorage.key(i));
                        
                        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

                    }
                }
            }
        return arr;   
    }
};

// export 해줬기 때문에 다른 파일에서 store를 import 할 수 있음.
export const store = new Vuex.Store({
    //
    state:{
        todoItems: storge.fetch() ,
        stateNum : '01055002890'
    },
    getters, //getters: getters,
    mutations, //mutations: mutations, 이름이 같으니 축약 가능.

});

