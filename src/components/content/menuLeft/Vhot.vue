<template>
    <div>
        <div style="margin-bottom: 5px;">
			<el-card class="box-card" shadow="hover">
				<div slot="header" class="clearfix">
					<span><i class="icon iconfont icon-zuire" style="color: red;"></i>最热 Hot</span>
				</div>
				<div v-for="(item,index) in hotData.data" :key="index" class="text item">
					<a class="link-a" href="javascript:void(0)" @click="openDialog(item)" v-cloak>
                        <span class="title">{{item.title}}</span>
                    </a> 
				</div>
                <VsourceCard :resourceDialogTableVisible='resourceDialogTableVisible' @closed='closeDialog' :resourceData='resourceData'></VsourceCard>
			</el-card>
		</div>
    </div>
</template>
<script>
    import VsourceCard from '../common/VsourceCard'
    export default{
        data(){
            return {
                resourceDialogTableVisible:false,
                resourceData:{'data':''}
            }
        },
        methods:{ 
            openDialog(data){
                this.resourceData.data = data
                this.resourceDialogTableVisible = true;
            },
            closeDialog(){
                this.resourceDialogTableVisible = false;
            }
        },
        components:{
            VsourceCard,
        },
        props:{
            hotData:Object,
        }
    }
</script>

<style scoped="scoped">
    .link-a{
        cursor: pointer;
    }
    .link-a:hover{
        color: black
    }
    .title{
        font-size: 18px;
    }
    .time{
        font-size: 14px;
    }
</style>