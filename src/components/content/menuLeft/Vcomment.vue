<template>
    <div>
        <div style="margin-bottom: 5px;">
			<el-card class="box-card" shadow="hover">
				<div slot="header" class="clearfix">
					<span><i class="icon iconfont icon-liuyan1" style="color: #1afa29;"></i>留言墙 message board</span>
					<el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true">留言</el-button>					
				</div>			  
				<div v-for="(item,index) in currCommentData.data" class="text item" :key="index">
                    <el-tooltip :content="item.content" placement="right-start" effect="light">
                        <div class="row"><span style="color: #66B1FF;font-size: 16px;" v-cloak>{{item.name }} : </span><span style="color: #000000;" v-cloak>{{item.content}}</span></div> 
                    </el-tooltip> 
				</div>
				<div style="text-align: center;color: #1afa29;cursor: pointer;" @click="messageDialogTableVisible = true">查看更多留言</div>
			</el-card>
		</div>
			  		
        <div class="message-more">
  		    <el-dialog title="更多留言" :visible.sync="messageDialogTableVisible">
			   <el-card class="box-card" style="font-family: '微软雅黑';">
				   <div v-for="(item,index) in moreComment.data.results" class="text item" :key="index">
						<p style="margin-bottom: 10px;"><span style="color: #66B1FF;font-size: 16px;">{{item.name }} : </span><span style="color: #000000;">{{item.content}}</span></p> 
					</div>
				</el-card>
                <div>
                    <el-pagination
                        @current-change="currPage"
                        @size-change="pageSizeChange"
                        :page-size="pageSize"
                        layout="prev, pager, next"
                        :total="moreComment.totialPage">
                    </el-pagination>
                </div>
			</el-dialog>
  	    </div>

        <div class="comment">
            <el-dialog title="留言" :visible.sync="dialogFormVisible" width="40%" :before-close="closeMessageBoard">
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
                        <div :if="commitError">
                            <div v-for="(value,key,index) in commitError" :key="index" class="error">
                                <span>{{key}} </span> : <span> {{value[0]}}</span>
                            </div>
                        </div>
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
    import axios from 'axios';

    axios.interceptors.request.use((config) => {
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        let regex = /.*csrftoken=([^;.]*).*$/; // 用于从cookie中匹配 csrftoken值
        config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1];
        return config
    });

    export default{
        data(){
            return {
                dialogFormVisible:false,
                messageDialogTableVisible:false,
                formLabelWidth: '120px',
                moreComment:{'data':'','totialPage':1},
                pageSize:10,
                messageForm: {
					email:'',
                    nickName: '',
                    content:'',
                },
                commitError:''
            }
        },
        methods:{ 
            openMessageBorad (){
                axios.post('http://39.108.105.106:8000/api/v1/mihonShare/messageBord', {
                        name: this.messageForm.nickName,
                        content: this.messageForm.content,
                        mail: this.messageForm.email,
                    })
                    .then(response=>{
                        if (response.data.code == 10000){
                            this.$message({
                                message: '恭喜你，留言成功！刷新页面后即可看到你的留言！',
                                type: 'success'
                            });
                        this.dialogFormVisible = false;
                        this.messageForm.email = '';
                        this.messageForm.nickName = '';
                        this.messageForm.content = '';
                        }else{
                            this.$message({
                                message: '留言失败！',
                                type: 'error',
                            });
                            this.commitError = response.data.error
                        }
                    }) 
                    .catch(error=>{
                        console.log(error);
                    })
                },
            closeMessageBoard(){
                this.dialogFormVisible = false;
                this.messageForm.email = '';
                this.messageForm.nickName = '';
                this.messageForm.content = '';
                this.commitError = '';
                },
            currPage(data){
                axios.get('http://39.108.105.106:8000/api/v1/mihonShare/messageMore?page=' + data)
                .then(response=>{
                    this.moreComment.data = response.data;
                    this.moreComment.totialPage = response.data.count;
                })
                .catch(error=>{
                    console.log(error)
                }) 
            },
            pageSizeChange(data){
                console.log(data)
            }
        },
        props:{
            commentData:Object,
        },
        mounted(){
           axios.get('http://39.108.105.106:8000/api/v1/mihonShare/messageMore')
            .then(response=>{
                this.moreComment.data = response.data;
                this.moreComment.totialPage = response.data.count;
            })
            .catch(error=>{
                console.log(error)
            }) 
        },
        computed:{
            currCommentData(){
                return this.commentData
            }
        }

    }
</script>

<style scoped="scoped">
    .row{
        width:100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-bottom: 5px;
        cursor: pointer;
    }
    .error{
        color: red;
        margin-left: 120px;
        padding-bottom: 3px;
    }
</style>