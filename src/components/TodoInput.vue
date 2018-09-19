<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
        <!-- <button v-on:click="addTodo">add</button> -->
        <span class="addContainer" v-on:click="addTodo" >
            <i class="fas fa-plus-square addBtn"></i>
        </span>


        <Modal v-if="showModal" @close="showModal = false">
        <!--
        you can use custom content here to overwrite
        default content
        -->
            <!-- 슬롯 커스텀-->
            <h3 slot="header">
                경고~~!
                <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
            </h3>

            <span slot="body">
                입력값이 없습니다. 
            </span>

            <span slot="footer">
                copy right.
            </span>
            

        </Modal>        
    </div>
</template>

<script>
import Modal from './common/Modal'


export default {
    data() {// function 삭제 (향상된 리터럴)
        return {
            newTodoItem : "",
            showModal: false
        }
    },
    methods:{// function 삭제 (향상된 리터럴)
        addTodo(){
            console.log(this.newTodoItem);
            
            if(this.newTodoItem !== ''){
                //this.$emit('이벤트 이름', this.newTodoItem);
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();  
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = '';
        }
    },
    components: {
        //향상된 객체 리터럴 , 축약
        Modal
    }
}
</script>

<style scoped>
    input:focus{
        outline: none;
    }

    .inputBox{
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }

    .inputBox input{
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer{
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn{
        color: white;
        vertical-align: middle;
    }

    .closeModalBtn{
        color: #42b983;
    }



</style>
