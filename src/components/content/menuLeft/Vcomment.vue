<template>
    <div>
        <div style="margin-bottom: 5px;">
			<el-card class="box-card" shadow="hover">
				<div slot="header" class="clearfix">
					<span><i class="icon iconfont icon-liuyan1" style="color: #1afa29;"></i>留言墙 message board</span>
					<el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true">留言</el-button>					
				</div>			  
				<div v-for="(item,index) in recommend" class="text item" :key="index">
					<p style="margin-bottom: 10px;"><span style="color: #66B1FF;font-size: 16px;" v-cloak>{{item.nickName }} : </span><span style="color: #000000;" v-cloak>{{item.content}}</span></p> 
				</div>
				<div style="text-align: center;color: #1afa29;cursor: pointer;" @click="messageDialogTableVisible = true">查看更多留言</div>
			</el-card>
		</div>
			  		
        <div class="message-more">
  		    <el-dialog title="更多留言" :visible.sync="messageDialogTableVisible">
			   <el-card class="box-card" style="font-family: '微软雅黑';">
				   <div v-for="(item,index) in recommend" class="text item" :key="index">
						<p style="margin-bottom: 10px;"><span style="color: #66B1FF;font-size: 16px;">{{item.nickName }} : </span><span style="color: #000000;">{{item.content}}</span></p> 
					</div>
				</el-card>
                <div>
                    <el-pagination
                        layout="prev, pager, next"
                        :total="1000">
                    </el-pagination>
                </div>
			</el-dialog>
  	    </div>

        <div class="comment">
            <el-dialog title="留言" :visible.sync="dialogFormVisible" width="40%">
                <div v-on:keyup.enter="openMessageBorad">
                    <el-card class="box-card">
                        <el-form :model="messageForm">
                            <el-form-item label="邮箱" :label-width="formLabelWidth">
                                <el-input v-model="messageForm.email" placeholder="请输入邮箱" ></el-input>
                            </el-form-item>
                            <el-form-item label="昵称" :label-width="formLabelWidth">
                                <el-input v-model="messageForm.nickName" placeholder="请输入昵称" ></el-input>
                            </el-form-item>
                            <el-form-item label="内容" :label-width="formLabelWidth">
                                <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 2, maxRows: 4}"
                                    placeholder="请输入内容"
                                    v-model="messageForm.content">
                                </el-input>
                            </el-form-item>
                        </el-form>
				    </el-card>
                </div>
				<div slot="footer" class="dialog-footer">
					<el-button type="info" @click="closeMessageBoard">取 消</el-button>
					<el-button type="success" @click="openMessageBorad">确 定</el-button>
				</div>
			</el-dialog>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                dialogFormVisible:false,
                messageDialogTableVisible:false,
                formLabelWidth: '120px',
                recommend:{
                    1:{
                        nickName:"mihon.zhong",
                        content:"thank you !"
                    },
                    2:{
                        nickName:"allon.lu",
                        content:"today is luck day!"
                    },
                    3:{
                        nickName:"jinyu.wang",
                        content:"waht do you mean?"
                    },
                    4:{
                        nickName:"sin.lin",
                        content:"good night everyone!"
                    }
                },
                messageForm: {
					email:'',
                    nickName: '',
                    content:'',
                },
            }
        },
        methods:{ 
            openMessageBorad (){
                this.dialogFormVisible = false;
                this.$message({
                    //从这里发送一个aiox.post请求，为了避免刷留言导致内存崩溃，要进行节流限制，匿名用户的节流使用IP限制，一天内只允许留言5条，建议使用这种方式
                    //还有一种做法就是利用跨域，只对我这个域名开放，其他的拒绝。
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
                this.messageForm.email = '';
                this.messageForm.nickName = '';
                this.messageForm.content = '';
                },
            closeMessageBoard(){
                this.dialogFormVisible = false;
                this.messageForm.email = '';
                this.messageForm.nickName = '';
                this.messageForm.content = '';
                }
        }
    }
</script>

<style scoped="scoped">

</style>