<template>
	<div>
		<!-- <Vmain v-show="is_main"></Vmain>
        <VsourceMore v-show="is_sourceMores" :sourceType='2'></VsourceMore> -->
        <router-view/>
        <!-- <VnotFoundSource></VnotFoundSource> -->
	</div>
</template>
<script>
    import Vmain from './sourceRight/Vmain';
    import VsourceMore from './sourceRight/VsourceMore';
    import VnotFoundSource from './sourceRight/VnotFoundSource';
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
            VnotFoundSource,
		}
    }
</script>

<style scoped="scoped">

</style>