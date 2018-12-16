<template>
    <div>
        <h2>{{msg}}</h2><hr>
        <h3>{{count}}</h3>
        <p>
            <button @click="$store.commit('add',10)">+</button>
            <button @click="reduce">-</button>
        </p>
        <p>
            <button @click="addAction(3)">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>
<script>
    import store from '../vuex/store.js';
    import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
    import axios from 'axios';
    export default{
        data(){
            return {
                msg:'Hello Vuex',
                num:3
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
            // ...mapMutations(['reduce']),
            // ...mapActions(['addAction','reduceAction'])
            addAction(){
                console.log(this.$store)
                this.$store.dispatch('addAction',this.num);
            },
            reduceAction(){
                this.$store.dispatch('reduceAction');
            },
            reduce(){
                this.$store.commit({
                    type: 'reduce'
                });
            }
            
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