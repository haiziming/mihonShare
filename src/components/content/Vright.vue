<template>
	<div>
		<!-- <Vmain v-show="is_main"></Vmain>
        <VsourceMore v-show="is_sourceMores" :sourceType='2'></VsourceMore> -->
        <router-view/>
	</div>
</template>
<script>
    import Vmain from './sourceRight/Vmain'
    import VsourceMore from './sourceRight/VsourceMore'
    export default{
        data(){
            return {
                is_main:false,
                is_sourceMores:true,
            }
        },
        methods:{ 
        },
		components:{
            Vmain,
            VsourceMore,
		}
    }
</script>

<style scoped="scoped">

</style>