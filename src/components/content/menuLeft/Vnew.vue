<template>
    <div>
        <div style="margin-bottom: 5px;">
			<el-card class="box-card" shadow="hover">
				<div slot="header" class="clearfix">
					<span><i class="icon iconfont icon-icon-test new-icon"></i>最新 New</span>
				</div>
				<div v-for="o in 5" :key="o" class="text item">
					<a  style="cursor: pointer;" @click="openDialog" v-cloak>{{'列表内容 ' + o }}</a> 
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
        }
    }
</script>

<style scoped="scoped">
    .new-icon{
        color: red;
        width: 20px;
        height: 20px;
    }
</style>