<template>
    <div>
        <h2>{{msg}}</h2><hr>
        <h3>{{count}}</h3>
        <p>
            <button @click="$store.commit('add',10)">+</button>
            <button @click="reduce">-</button>
        </p>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>
<script>
    import store from '@/vuex/store';
    import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
    import axios from 'axios';
    export default{
        data(){
            return {
                msg:'Hello Vuex'
            }
        },
        // computed:{
        //     count(){
        //         return this.$store.state.count
        //     }
        // },
        computed:{
            ...mapState(['count']),
            //...mapGetters(['count'])
            // count(){
            //     return this.$store.getters.count;
            // }
        },
        

        methods:{
            ...mapMutations(['reduce']),
            ...mapActions(['addAction','reduceAction'])
        },
        created(){
            axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
        },
        
        store
    }
</script>

<style scoped="scoped">
</style>