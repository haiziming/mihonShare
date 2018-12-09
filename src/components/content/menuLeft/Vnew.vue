<template>
    <div>
        <div style="margin-bottom: 5px;">
			<el-card class="box-card" shadow="hover">
				<div slot="header" class="clearfix">
					<span><i class="icon iconfont icon-icon-test new-icon"></i>最新 New</span>
				</div>
				<div v-for="(item,index) in newData.data" :key="index" class="text item">
					<a class="link-a" href="javascript:void(0)" @click="openDialog" v-cloak>
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
            closeDialog(){
                this.resourceDialogTableVisible = false
            },
            openDialog(){
                this.resourceDialogTableVisible = true
            }
        },
        components:{
            VsourceCard,
        },
        props:{
            newData:Object,
        },
        mounted(){
            
        }
    }
</script>

<style scoped="scoped">
    .new-icon{
        color: red;
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