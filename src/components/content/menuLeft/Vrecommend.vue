<template>
    <div>
        <div style="margin-bottom: 5px;">
			<el-card class="box-card" shadow="hover">
				<div slot="header" class="clearfix">
					<span><i class="icon iconfont icon-tuijian2 recommend-icon"></i>推荐 Recommend</span>
				</div>
				<div v-for="(item,index) in recommendData.data" :key="index" class="text item">
					<a class="link-a" @click="openDialog" v-cloak href="javascript:void(0)">
                        <span class="title">{{item.title}}</span> 
                        <span class="time">--{{item.ctime}}</span>    
                    </a> 
				</div>
                <VsourceCard :resourceDialogTableVisible='resourceDialogTableVisible' @closed='closeDialog'></VsourceCard>
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
            }
        },
        methods:{ 
            openDialog(){
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
            recommendData:Object,
        }
    }
</script>

<style scoped="scoped">
    .recommend-icon{
        color: #1afa29;
        width: 20px;
        height: 20px;
    }
    .link-a{
        cursor: pointer;
    }
    .link-a:hover{
        color: black;
    }
    .title{
        font-size: 18px;
    }
    .time{
        font-size: 14px;
    }
</style>