<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명 ""></TodoInput> -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" 
              v-on:removeItem="removeOneItem" 
              v-on:toggleOne="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>

import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

 

export default {
    data(){// function 삭제 (향상된 리터럴)
      return{
        todoItems: []
      }
      
    },
    methods: { // function 삭제 (향상된 리터럴)
      addOneItem(todoItem) {
        const obj = {completed: false , item : todoItem};
        //저장하는 로직 (로컬스토리지 저장)
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
      },
      removeOneItem(todoItem, index) {
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index,1);
      },
      toggleOneItem(todoItem, index) {
        // todoItem.completed = !todoItem.completed; 아래처럼 변경해 준다.
        this.todoItems[index].completed = !this.todoItems[index].completed;

        //로컬스토리지에 데이터를 갱신하는것. update가 없어서 새로이 변경된 것을 다시 넣어줌.
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      },
      clearAllItems() {
        localStorage.clear();
        this.todoItems = [];
      }
    },

     created() {
        console.log("created!");

        if(localStorage.length > 0){
            for(let i=0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    // this.todoItems.push(localStorage.key(i));
                    
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

                };
            }
        }
        
        
    },




  components: { 
    //향상된 객체 리터럴 , 축약
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: bisque;
}

input{
  border-style: groove;
  width: 200px;
}

button{
  border-style: groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

</style>
