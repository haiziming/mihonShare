<template>
    <div>
        <div class="share-content">
			<div class="item">
			  	<div class="title">
			  		<span style="font-size: 20px;">视频分享</span>
			  		<span class="get-more">
			  			<router-link to="/sourceMore/1" tag="span">获取更多>></router-link>
			  		</span>
			  	</div>
				<el-row>
					<el-col :span="6" v-for="(item, index) in videoData" :key="index" :offset="index > 0 ? 2 : 0">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<img :src="'http://share.mihon.cn' + item.img" class="image" :title="item.title">
							<div style="padding: 14px;">
							    <div class="more-text">{{item.title}}</div>
							    <div class="bottom clearfix">
							        <time class="time">{{item.ctime}}</time>
							        <el-button type="text" class="button"  @click="openDialog(item)">百度网盘获取</el-button>
							    </div>
							</div>
						</el-card>
					</el-col>
			    </el-row>		  		
			</div>
			  		
			<div class="item">
			  	<div class="title">
			  		<span style="font-size: 20px;">PDF书籍</span>
			  		<span class="get-more">
			  			<router-link to="/sourceMore/2" tag="span">获取更多>></router-link>
			  		</span>
			  	</div>
				<el-row>
					<el-col :span="6" v-for="(item, index) in PDFbookData" :key="index" :offset="index > 0 ? 2 : 0">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<img :src="'http://share.mihon.cn' + item.img" class="image" :title="item.title">
							<div style="padding: 14px;">
							    <div class="more-text">{{item.title}}</div>
							    <div class="bottom clearfix">
							        <time class="time">{{item.ctime}}</time>
							        <el-button type="text" class="button" @click="openDialog(item)">百度网盘获取</el-button>
							    </div>
							</div>
						</el-card>
					</el-col>
				</el-row>		  		
			</div>
			  					  	
			<div class="item">
			  	<div class="title">
			  		<span style="font-size: 20px;">软件分享</span>
			  		<span class="get-more">
			  			<router-link to="/sourceMore/3" tag="span">获取跟多>></router-link>
			  		</span>
			  	</div>
				<el-row>
					<el-col :span="6" v-for="(item, index) in softwareData" :key="index" :offset="index > 0 ? 2 : 0">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<img :src="'http://share.mihon.cn' + item.img" class="image" :title="item.title">
							<div style="padding: 14px;">
							    <div class="more-text">{{item.title}}</div>
							    <div class="bottom clearfix">
							        <time class="time">{{item.ctime}}</time>
							        <el-button type="text" class="button" @click="openDialog(item)">百度网盘获取</el-button>
							    </div>
							</div>
						</el-card>
					</el-col>
				</el-row>		  		
			</div>

		</div>
		<VsourceCard :resourceDialogTableVisible='resourceDialogTableVisible' @closed='closeDialog' :resourceData='resourceData'></VsourceCard>
    </div>
</template>
<script>
    import hamburgerImg from '@/assets/test.png';
	import VsourceCard from '../common/VsourceCard';
	import axios from 'axios';
    export default{
		name:'vmain',
        data(){
            return {
				hamburgerImg,
				resourceDialogTableVisible:false,
				videoData:'',
				PDFbookData:'',
				softwareData:'',
				resourceData:{'data':''}
            }
        },
        methods:{ 
			closeDialog(){
                this.resourceDialogTableVisible = false
            },
            openDialog(data){
				this.resourceData.data = data
                this.resourceDialogTableVisible = true
            }
        },
		components:{
			VsourceCard,
		},
		created(){
			axios.get('http://share.mihon.cn/api/v1/mihonShare/mainPage')
            .then(response=>{
				if (response.data.code == 10000){
					this.videoData = response.data.data.video;
					this.PDFbookData = response.data.data.PDFbook;
					this.softwareData = response.data.data.software;	
				}
            })
            .catch(error=>{
                console.log(error)
            }) 
		}
    }
</script>

<style scoped="scoped">
    img{
		width: 100%;
		height: 160px;
	}
	.share-content{
		background-color: #FBFDFF;
		height: auto;
		min-height: 900px;
		padding-bottom: 30px;
	}
	.item{
		margin-left: 35px;
	}
	.get-more{
		float: right;
		padding-right: 45px;
		color: #66b1ff;
		cursor: pointer;
	}
    .title{
        padding-top: 38px;
        padding-bottom: 7px;
    }
	.more-text{
		overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
	}
</style>