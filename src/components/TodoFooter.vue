<template>
    <div class="clearAllcontainer">
        <span class="clearAllBtn" v-on:click="clearTodo">
            Clear All
        </span>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods:{

        // 헬퍼사용으로 변경.
        ...mapMutations({
            clearTodo:'clearAll' 
        })

        // clearTodo: function(){
        //     // this.$emit('clearAll'); // store.js에서 관리하도록 바꿈
        //     this.$store.commit('clearAll');
        // }
    }
}
</script>

<style scoped>
.clearAllcontainer{
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
}

.clearAllBtn{
    color: red;
    display: block;
}


</style>
