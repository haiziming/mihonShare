<template>
    <div class="menu-left" style="background-color: #FBFDFF;height: auto;min-height:900px;padding: 5px;">
		<Vuser></Vuser>	  		
        <Vrecommend :recommendData="recommendData"></Vrecommend>
        <Vnew :newData="newData"></Vnew>
        <Vhot :hotData="hotData"></Vhot>
        <Vcomment :commentData="commentData"></Vcomment>
    </div>
    
</template>
<script>
    import Vuser from './menuLeft/Vuser';
    import Vsearch from './menuLeft/Vsearch';
    import Vrecommend from './menuLeft/Vrecommend';
    import Vnew from './menuLeft/Vnew';
    import Vhot from './menuLeft/Vhot';
    import Vcomment from './menuLeft/Vcomment';
    import axios from 'axios';

    export default{
        components:{
            Vuser,
            Vsearch,
            Vrecommend,
            Vnew,
            Vhot,
            Vcomment
        },
        data(){
            return {     
                remoteData:{'asd':123},
                newData:{'data':''},
                hotData:{'data':''},
                commentData:{'data':''},
                recommendData:{'data':''}
            }
        },
        methods:{

        },
        created(){
            axios.get('http://127.0.0.1:8000/api/v1/mihonShare/left')
            .then(response=>{
                this.remoteData = response;
                this.newData.data = this.remoteData.data.data.new;
                this.hotData.data = this.remoteData.data.data.hot;
                this.commentData.data = this.remoteData.data.data.message;
                this.recommendData.data = this.remoteData.data.data.recommend;
            })
            .catch(error=>{
                console.log(error)
            })
        }

    }
</script>

<style scoped="scoped">
    p{
        display: block;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    h4{
        display: block;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

</style>