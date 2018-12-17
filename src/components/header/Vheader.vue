<template>
    <div>
	    <div class="header">
			<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
				<el-menu-item index="1" :id="classInit ? 'title-marginA' : 'title-marginB'"><router-link to="/" tag="span">Share首页</router-link></el-menu-item>
				<el-submenu index="2">
					<template slot="title"><router-link to="/sourceMore/1" tag="span">视频分享</router-link></template>
					<el-menu-item index="2-1"><router-link to="/sourceMore/1-1" tag="span">影视视频</router-link></el-menu-item>
					<el-submenu index="2-2">
						<template slot="title">教学视频</template>
						<el-menu-item index="vedioPthon"><router-link to="/sourceMore/1-2" tag="span">Python</router-link></el-menu-item>
						<el-menu-item index="vedioWeb"><router-link to="/sourceMore/1-3" tag="span">前端</router-link></el-menu-item>
						<el-menu-item index="vedioOther"><router-link to="/sourceMore/1-4" tag="span">其他</router-link></el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="3"><router-link to="/sourceMore/2" tag="span">PDF书籍</router-link></el-menu-item>
				<el-menu-item index="4"><router-link to="/sourceMore/3" tag="span">学习软件</router-link></el-menu-item>
				<el-menu-item index="5" v-if='imgUpload' @click="imgUploadDialogTableVisible = true">图片上传</el-menu-item>
				<el-menu-item index="6" style="float: right;" @click="loginDialogTableVisible = true" v-if='loginDisplay'>登入</el-menu-item>
				<span index="7" style="float: right;" v-if='userDisplay' v-cloak>
					
                    <el-dropdown :hide-on-click="false">
                        <span class="el-dropdown-link">
                            <img src="../../assets/avtar/a13.jpg" class="avtar" :alt="user">
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>{{user}}</el-dropdown-item>
                            <el-dropdown-item disabled>头像设置</el-dropdown-item>
                            <el-dropdown-item divided><a @click="loginOut">注销</a></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
				</span>
				<span index="8" style="float: right;margin-top:10px" @keyup.enter="searchHandller">
					<el-input placeholder="请输入内容" v-model="search" class="input-with-select" style="float: right;" >
						<el-select v-model="select" slot="prepend" placeholder="请选择">
						    <el-option label="教学视屏" value="video"></el-option>
						    <el-option label="PDF书籍" value="PDFbook"></el-option>
						    <el-option label="软件分享" value="software"></el-option>
							<hr>
							<el-option label="全部" value="" class="allOption"></el-option>
						</el-select>
						<el-button slot="append" @click="searchHandller" icon="el-icon-search">
							<!-- <router-link :to="{name:'sourceSearch',params:{category:select,search:search}}" tag="span" class="el-icon-search"></router-link> -->
						</el-button>
					</el-input>
				</span>
			</el-menu>
		</div>
		  	<div class="login-card">
				<el-dialog title="登入" :visible.sync="loginDialogTableVisible">
						<div v-on:keyup.enter="openLogin">
							<el-card class="box-card">
								<el-form :model="loginForm">
									<el-form-item label="账号" :label-width="formLabelWidth">
										<el-input v-model="loginForm.account"></el-input>
									</el-form-item>
									<el-form-item label="密码" :label-width="formLabelWidth">
										<el-input type="password" v-model="loginForm.password"></el-input>
									</el-form-item>
								</el-form>
							</el-card>
						</div>
						<div slot="footer" class="dialog-footer">
							<el-button type="info" @click="closeLogin">取 消</el-button>
							<el-button type="success" @click="openLogin">确 定</el-button>
						</div>
				</el-dialog>
			</div>
			<div class="imgUpload-card">
				<el-dialog title="图片上传" :visible.sync="imgUploadDialogTableVisible">
						<el-card class="box-card">
							<el-upload
							class="upload-demo"
							action="https://jsonplaceholder.typicode.com/posts/"
							:on-preview="handlePreview"
							:on-remove="handleRemove"
							:on-error="handleError"
							:file-list="fileList2"
							:on-success="handleSuccess"
							:before-upload="handleBeforeUpload"
							list-type="picture">
							<el-button size="small" type="primary">点击上传</el-button>
							<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
							</el-upload>
						</el-card>
						<div slot="footer" class="dialog-footer">
							<el-button type="success" @click="closeUpload">退出</el-button>
						</div>
					</el-dialog>
			</div>
    </div>
</template>
<script>
	import Vheader from './Vheader';
	import st from '../../vuex/store.js';
	import store from '../../vuex/store.js';
	import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
	import axios from 'axios';
    export default{
    	data(){
    		return {
				visible: false,
    			activeIndex: '1',
				activeIndex2: '1',
				imgUpload:false,
				loginDisplay:true,
				userDisplay:false,
				user:'mihon.zhong',
				loginDialogTableVisible: false,
				imgUploadDialogTableVisible:false,
				formLabelWidth: '120px',
				loginForm:{
						account:'',
						password:'',
				},
				fileList2:[
					{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
					{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
				],
				search:'',
				select:'',
				classInit:true,
				sourceTypeValue:1,
    		}
    	},
		components:{ 
			Vheader,
		},
		mounted(){
			if (this.$route.params.sourceMoreValue){
                this.activeIndex2 = this.$route.params.sourceMoreValue;
                this.activeIndex2 = parseInt(this.activeIndex2) + 1;
                if (this.activeIndex2 == 2){
                    this.activeIndex2 = '2-1'
                }else{
                    this.activeIndex2 =this.activeIndex2.toString()
                }
            }else{
                this.activeIndex2 = '1'
            }
		},
        methods:{
			handleSelect(key, keyPath) {
		        console.log(1);
			},
			openLogin(){
				axios.post('http://127.0.0.1:8000/api/v1/mihonShare/login',
				{account:this.loginForm.account,password:this.loginForm.password})
                    .then(response=>{
                        if (response.data.code == 10000){
							this.imgUpload = true;
							this.loginDisplay = false;
							this.userDisplay = true;
							this.classInit = false;
							this.$notify({
								message: '登入成功！',
								type: 'success',
								position: 'top-left',
								duration:2000
							});
							this.loginDialogTableVisible = false;
							this.loginForm.account = '';
							this.loginForm.password = '';
						}else{
							this.$notify({
								message: response.data.error,
								type: 'error',
								position: 'top-left',
								duration:5000
							});
						}
                    })
                    .catch(error=>{
                        this.$notify({
							message: '服务器暂时无法响应，请稍后在尝试登入！',
							type: 'error',
							position: 'top-left',
							duration:5000
						});
                    });
				
			},
			closeLogin(){
				this.loginDialogTableVisible = false;
				this.loginForm.account = '';
				this.loginForm.password = '';
            },
            loginOut(){
                this.loginDisplay = true;
				this.userDisplay = false;
				this.imgUpload = false;
                this.$notify({
						message: '注销成功！',
						type: 'success',
						position: 'top-left',
						duration:2000
					});
            },
			closeUpload(){
				this.imgUploadDialogTableVisible = false;
			},
			handleRemove(file, fileList) {
				console.log(1);
			},
			handlePreview(file) {
				console.log(1);
			},
			handleError(file){
				var text = this.currentUploadFileName + ",图片上传失败！"
				this.$message.error(text);
			},
			handleSuccess(file){
				var text = this.currentUploadFileName + ",图片上传成功！"
				this.$message.success(text);
			},
			handleBeforeUpload(file){
				this.currentUploadFileName = file.name
			},
			searchHandller:function(){
				this.$store.dispatch('addAction',1)
				this.$store.dispatch('getSearchDataAction',{category:this.select,search:this.search,page:1});
				this.$router.push({
					name:"sourceSearch"
				})
			}
        }
    }
</script>
<style>
	.avtar{
		width: 52px;
		height: 52px;
		border-radius:50%;
		padding-top: 3px;
		margin-left: 5px;
		padding-right: 5px;
		cursor: pointer;
	}
	#title-marginA{
		margin-right: 35%;
	}
	#title-marginB{
		margin-right: 30%;
	}
	hr{
		color: #cccccc;
		opacity: 0.4;
	}
	.allOption{
		text-align: center;
	}
</style>