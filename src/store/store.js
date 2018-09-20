import Vue from 'vue'
import Vuex from 'Vuex'

//모듈나누기
import todoApp from './modules/todoApp'

//use는 vue의 플러그인이라는 기능 일반적으로 사용할때 전역으로 사용 할때 사용 (글로벌 펑션)
// 만약 다른 컴포넌트에서 this.$vue 이런식으로 접근 가능.
Vue.use(Vuex);



// export 해줬기 때문에 다른 파일에서 store를 import 할 수 있음.
export const store = new Vuex.Store({
    modules:{
        todoApp //todoApp:todoApp 
    }
});

