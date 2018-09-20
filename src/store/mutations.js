
const addOneItem = (state, todoItem) => {
    const obj = {completed: false , item : todoItem};
    //저장하는 로직 (로컬스토리지 저장)
    localStorage.setItem(todoItem, JSON.stringify(obj));
    //this.todoItems.push(obj); state에 접근하기 위해 변경
    state.todoItems.push(obj);
}

const removeItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index,1);
}

const toggleOne = (state, payload) => {

    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

    //로컬스토리지에 데이터를 갱신하는것. update가 없어서 새로이 변경된 것을 다시 넣어줌.
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAll = (state) => {
    localStorage.clear();
    state.todoItems = [];
}


export {addOneItem, removeItem, toggleOne, clearAll}