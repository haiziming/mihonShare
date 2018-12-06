<template>
    <div class="menu-left" style="background-color: #FBFDFF;height: auto;min-height:900px;padding: 5px;">
		<Vuser></Vuser>	  		
        <Vrecommend></Vrecommend>
        <Vnew></Vnew>
        <Vhot></Vhot>
        <Vcomment></Vcomment>
		<!-- <div style="margin-bottom: 5px;">
			<el-card class="box-card">
				<div style="margin-top: 15px;">
					<el-input placeholder="请输入内容" v-model="search" class="input-with-select">
						<el-select v-model="select" slot="prepend" placeholder="请选择">
						    <el-option label="教学视屏" value="1"></el-option>
						    <el-option label="PDF书籍" value="2"></el-option>
						    <el-option label="软件分享" value="3"></el-option>
						</el-select>
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</div>
			</el-card>
		</div> -->

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