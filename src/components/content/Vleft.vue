<template>
    <div class="menu-left" style="background-color: #FBFDFF;height: auto;min-height:900px;padding: 5px;">
		<Vuser></Vuser>	  		
        <Vrecommend></Vrecommend>
        <Vnew></Vnew>
        <Vhot></Vhot>
        <Vcomment></Vcomment>
    </div>
    
</template>
<script>
    import Vuser from './menuLeft/Vuser'
    import Vsearch from './menuLeft/Vsearch'
    import Vrecommend from './menuLeft/Vrecommend'
    import Vnew from './menuLeft/Vnew'
    import Vhot from './menuLeft/Vhot'
    import Vcomment from './menuLeft/Vcomment'

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
                
            }
        },
        methods:{

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