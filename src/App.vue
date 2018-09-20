<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명 ""></TodoInput> -->
    <!-- <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> store.js에서 관리하도록 하여 주석 -->
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>

import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

 

export default {
    
    // 메서드 store.js의 mutation으로 변경으로 인해 아래 주석
    
    // data(){// function 삭제 (향상된 리터럴)
    //   return{
    //     todoItems: []
    //   }
      
    // },    
    //methods: { // function 삭제 (향상된 리터럴) 
      // addOneItem(todoItem) {
      //   const obj = {completed: false , item : todoItem};
      //   //저장하는 로직 (로컬스토리지 저장)
      //   localStorage.setItem(todoItem, JSON.stringify(obj));
      //   this.todoItems.push(obj);
      // },
      // removeOneItem(todoItem, index) {
      //   localStorage.removeItem(todoItem.item);
      //   this.todoItems.splice(index,1);
      // },
      // toggleOneItem(todoItem, index) {
      //   // todoItem.completed = !todoItem.completed; 아래처럼 변경해 준다.
      //   this.todoItems[index].completed = !this.todoItems[index].completed;

      //   //로컬스토리지에 데이터를 갱신하는것. update가 없어서 새로이 변경된 것을 다시 넣어줌.
      //   localStorage.removeItem(todoItem.item);
      //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      // },
      // clearAllItems() {
      //   localStorage.clear();
      //   this.todoItems = [];
      // }
    //},

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
