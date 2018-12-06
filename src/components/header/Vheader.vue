<template>
    <div>
	    <div class="header">
			<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
				<el-menu-item index="1" style="margin-right: 35%;">Share首页</el-menu-item>
				<el-submenu index="2">
					<template slot="title">视频分享</template>
					<el-menu-item index="2-1">影视视频</el-menu-item>
					<el-submenu index="2-2">
						<template slot="title">教学视频</template>
						<el-menu-item index="2-2-1">Python</el-menu-item>
						<el-menu-item index="2-2-2">前端</el-menu-item>
						<el-menu-item index="2-2-3">其他</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="3">PDF书籍</el-menu-item>
				<el-menu-item index="4">学习软件</el-menu-item>
				<el-menu-item index="5" v-if='imgUpload' @click="imgUploadDialogTableVisible = true">图片上传</el-menu-item>
				<el-menu-item index="6" style="float: right;" @click="loginDialogTableVisible = true" v-if='loginDisplay'>登入</el-menu-item>
				<el-menu-item index="7" style="float: right;" v-if='userDisplay' v-cloak>{{user}}</el-menu-item>
			</el-menu>
		</div>
		  	<div class="login-card">
				<el-dialog title="登入" :visible.sync="loginDialogTableVisible">
						<el-card class="box-card">
							<el-form :model="loginForm">
								<el-form-item label="账号" :label-width="formLabelWidth">
									<el-input v-model="loginForm.account" ></el-input>
								</el-form-item>
								<el-form-item label="密码" :label-width="formLabelWidth">
									<el-input type="password" v-model="loginForm.password"></el-input>
								</el-form-item>
							</el-form>
						</el-card>
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
    import Vheader from './Vheader'
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

    		}
    	},
        components:{ Vheader },
        methods:{
			handleSelect(key, keyPath) {
		        console.log(key, keyPath);
			},
			openLogin(){
				if(this.loginForm.account == '10021' && this.loginForm.password == '123'){
					this.imgUpload = true;
					this.loginDisplay = false;
					this.userDisplay = true;
				this.$notify({
				message: '登入成功！',
				type: 'success',
				position: 'top-left',
				duration:2000
				});
				}
				this.loginDialogTableVisible = false;
				this.loginForm.account = '';
				this.loginForm.password = '';
			},
			closeLogin(){
				this.loginDialogTableVisible = false;
				this.loginForm.account = '';
				this.loginForm.password = '';
			},
			closeUpload(){
				this.imgUploadDialogTableVisible = false;
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
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
			}
        }
    }
</script>
<style>

</style>