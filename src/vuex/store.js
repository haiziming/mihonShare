import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';


Vue.use(Vuex)

const state={
    count:1,
    remote:1,
}

const mutations={
    add(state,num){
        state.count += num;
    },
    reduce(state){
        state.count--;
    },
    getRemote(state){
        state.remote += 1;
    }
}

const getters={
    count:function(state){
        return state.count += 100;
    }
}

const actions={
    addAction(context){
        context.commit('add',10);
    },
    reduceAction({commit}){
        commit('reduce')
    },
    getRemoteAction(context){
        context.commit('getRemote')
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