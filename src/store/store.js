import Vue from 'vue'
import Vuex from 'Vuex'


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
    getters: {
        storedTodoItems(state){
            return state.todoItems;
        }
    },
    mutations:{
        addOneItem(state, todoItem) {
            const obj = {completed: false , item : todoItem};
            //저장하는 로직 (로컬스토리지 저장)
            localStorage.setItem(todoItem, JSON.stringify(obj));
            //this.todoItems.push(obj); state에 접근하기 위해 변경
            state.todoItems.push(obj);
        },
        removeItem(state, payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index,1);
        },
        toggleOne(state, payload){
    
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

            //로컬스토리지에 데이터를 갱신하는것. update가 없어서 새로이 변경된 것을 다시 넣어줌.
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAll(state){
            localStorage.clear();
            state.todoItems = [];
        }


    }

});

