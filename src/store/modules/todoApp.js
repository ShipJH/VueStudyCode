
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

const state = {
    todoItems: storge.fetch() ,
    stateNum : '01055002890'
};

const getters = {
    
    getStateNumber(state){
        return state.stateNum;
    },
    
    storedTodoItems(state){
        return state.todoItems;
    }
    
};

const mutations = {
    
    addOneItem(state, todoItem) {
        const obj = {completed: false , item : todoItem};
        //저장하는 로직 (로컬스토리지 저장)
        localStorage.setItem(todoItem, JSON.stringify(obj));
        //this.todoItems.push(obj); state에 접근하기 위해 변경
        state.todoItems.push(obj);
    },
    
    removeItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index,1);
    },
    
    toggleOne(state, payload) {
    
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    
        //로컬스토리지에 데이터를 갱신하는것. update가 없어서 새로이 변경된 것을 다시 넣어줌.
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    
    clearAll(state) {
        localStorage.clear();
        state.todoItems = [];
    }
}

export default {
    state,
    getters,
    mutations
}