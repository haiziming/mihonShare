<template>
    <div class="container content">
		<el-row :gutter="24">
			<el-col :span="5" :offset="3" >
                <Vleft></Vleft>
            </el-col>
			    
			<el-col :span="13" >
                <Vright></Vright>
            </el-col>
        </el-row>
    </div>
                
</template>

<script>
    import Vleft from './Vleft'
    import Vright from './Vright'
    export default{
        data(){
            return {}
        },
        components:{ 
            Vleft,
            Vright
        },
        methods:{
           
        }
    }
</script>

<style scoped="scoped">
    .content{
        height: 100%;
        background-color: #ECECEC;
        padding-bottom: 20px;
    }
</style>