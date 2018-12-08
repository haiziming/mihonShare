import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';


Vue.use(Vuex)

const state={
    count:1
}

const mutations={
    add(state,num){
        state.count += num;
    },
    reduce(state){
        state.count--;
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