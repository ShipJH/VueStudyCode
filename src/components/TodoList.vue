<template>
    <div>
            <!-- 리스트 아이템 트렌지션 효과와 name과의 관계가 있다. -->
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in this.todoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeList({todoItem, index})">
                    <i class="fas fa-trash"></i>
                </span>
            </li>
        </transition-group>

        <div> MapState Test value : {{this.getStateNumber}} </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'



export default {
    // props: ['propsdata'], vuex를 사용하므로 삭제

    methods:{ // function 삭제 (향상된 리터럴)
        //removeList(todoItem, index) {
            // this.$emit("removeItem",todoItem, index); store.js의 뮤테이션스로 바꿈

            // const obj = {
            //     todoItem, // ( 축약형 todoItem:todoItem, ) 
            //     index
            // } 이걸 아래처럼 바로 정의가 가능
            
            // this.$store.commit('removeItem', {todoItem, index}); // 뒤에 바로 obj형태로 전송하면 받기 가능.
            // console.log(todoItem, index);
        //},
        // toggleComplete(todoItem, index) {
        //     // this.$emit('toggleOne', todoItem, index); store.js의 뮤테이션스로 바꿈
        //     this.$store.commit('toggleOne', {todoItem, index});  // 뒤에 바로 obj형태로 받기 가능.
        // }
        ...mapMutations({
            removeList:'removeItem', // 컴포넌트의 기존메서드 명 : store.js에 있는 명 
                                    // todoItem과 index를 인자로 넘기지 않아도, 자동으로 넘어감 
                                    // 단, removeList(todoItem, index)처럼 하면 인자가 2개가 넘어가기 때문에, 처음 넘길때 1개로 바꿔주도록. removeList({todoItem, index})
            toggleComplete:'toggleOne' // 마찬가지로 toggleComplete({todoItem, index}) 로 인자를 1개로 넘겨주도록 미리 세팅한다.
        }),
        
    },
    computed: {
        // todoItems(){
        //     return this.$store.getters.storedTodoItems;
        // } 

        // 아래처럼 mapGetters를 import하여 사용한것
        //...mapGetters(['storedTodoItems'])
        ...mapGetters({
            todoItems : 'storedTodoItems',
            getStateNumber: 'getStateNumber'
        }),
        
 
    }

}
</script>

<style scoped>
    ul{
        list-style-type: none; 
        padding-left: 0px;
        margin-top: 0px;
        text-align: left;
    }

    li{
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    
    .checkBtn{
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .checkBtnCompleted{
        color: #b3adad;
    }

    .textCompleted{
        text-decoration: line-through;
        color: #b3adad;
    }

    .removeBtn{
        margin-left: auto;
        color: #de4343;
    }



    /* 리스트 아이템 트렌지션 효과 */
    .list-enter-active, .list-leave-active {
    transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
    }


</style>
