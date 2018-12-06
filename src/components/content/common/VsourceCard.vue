<template>
    <div>
        <div class="source-card">
  		    <el-dialog title="资源信息卡" :visible.sync="resourceDialogTableVisible" :before-close="handleClose">
			    <el-card class="box-card" style="font-family: '微软雅黑';">
				    <p class="p-padding"><span class="font-size"><b>资源名称：</b></span>有道天下，没道理！</p>
				    <p class="p-padding"><span style="font-size"><b>创建时间：</b></span>2018-9-5 11:11:01</p>
				    <p class="p-padding"><span style="font-size"><b>资源简介：</b></span>这就是最好的，没有之一。</p>
				    <p class="p-padding"><span style="font-size"><b>网盘地址：</b></span><a href="http://mihon.cn" target="_blank">http://mihon.cn</a></p>
				    <div class="p-padding">
				  	    <el-row :gutter="5">
						    <el-col :span="3"><div style="font-size">网盘密码:</div></el-col>
						    <el-col :span="4"><div><el-input value="http://www.baidu.com" id="input" size="mini" readonly></el-input></div></el-col>
						    <el-col :span="8"><div><el-button type="success" round @click="copyPWD" size="mini">点击复制密码</el-button></div></el-col>
						</el-row>
				    </div>
				</el-card>
			</el-dialog>
  	    </div>
    </div>
</template>
<script>
    export default{
        props:{
            resourceDialogTableVisible:Boolean,
        },
        data(){
            return {
               
            }
        },
        methods:{ 
            copyPWD(){
                var Url=document.getElementById("input");  
                Url.select(); // 选择对象  
                document.execCommand("Copy"); // 执行浏览器复制命令  
                this.$notify({
                message: '成功复制到粘贴板！',
                type: 'success'
                });
            },
            handleClose(){
                this.$emit('closed');
            }
        },
        mounted(){
            console.log('have be mounted!')
        }
        
    }
</script>

<style scoped="scoped">
    .p-padding{
        padding-bottom: 20px;
    }
    .font-size{
        font-size: 18px;
    }
</style>