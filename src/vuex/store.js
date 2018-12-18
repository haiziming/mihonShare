import Vue from 'vue';
import Vuex from 'vuex';
import { stat } from 'fs';
import axios from 'axios';


Vue.use(Vuex)

const state={
    count:1,
    remote:1,
    searchItem:'',
    searchData:''
}

const mutations={
    add(state,num){
        console.log(num)
        state.count += num;
    },
    reduce(state){
        state.count--;
    },
    getRemote(state){
        state.remote += 1;
    },
    getSearchData(state,args){
        axios.get('http://39.108.105.106:8000/api/v1/mihonShare/resourceMore?category=' + 
        args.category + '&search=' + args.search + '&page=' + args.page)
                    .then(response=>{
                        state.searchData = response.data;
                        state.searchItem = {category:args.category,search:args.search}    
                    })
                    .catch(error=>{
                        console.log(error);
                    })        
    },
}

const getters={
    count:function(state){
        return state.count += 100;
    }
}

const actions={
    addAction(context,num){
        context.commit('add',num);
    },
    reduceAction({commit}){
        commit('reduce')
    },
    getRemoteAction(context){
        context.commit('getRemote')
    },
    getSearchDataAction(context,args){
        context.commit('getSearchData',args)
    }
}

// const moduleA={
//     state,
//     mutations,
//     getters,
//     actions
// }

// export default new Vuex.Store({
//     modules:{a:moduleA}
// })

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})