<template>
    <div>
        <div class="share-content">
			<div class="item">
			  	<div style="padding-top: 30px;padding-bottom: 7px;">
			  		<span style="font-size: 20px;">视频分享</span>
			  		<span class="get-more">
			  			获取更多>>
			  		</span>
			  	</div>
				<el-row>
					<el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<img :src="hamburgerImg" class="image">
							<div style="padding: 14px;">
							    <span>好吃的汉堡</span>
							    <div class="bottom clearfix">
							        <time class="time">2018-8-15</time>
							        <el-button type="text" class="button"  @click="openDialog">百度网盘获取</el-button>
							    </div>
							</div>
						</el-card>
					</el-col>
			    </el-row>		  		
			</div>
			  		
			<div class="item">
			  	<div style="padding-top: 30px;padding-bottom: 7px;">
			  		<span style="font-size: 20px;">PDF书籍</span>
			  		<span class="get-more">
			  			获取更多>>
			  		</span>
			  	</div>
				<el-row>
					<el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<img :src="hamburgerImg" class="image">
							<div style="padding: 14px;">
							    <span>好吃的汉堡</span>
							    <div class="bottom clearfix">
							        <time class="time">2018-8-15</time>
							        <el-button type="text" class="button" @click="openDialog">百度网盘获取</el-button>
							    </div>
							</div>
						</el-card>
					</el-col>
				</el-row>		  		
			</div>
			  					  	
			<div class="item">
			  	<div style="padding-top: 30px;padding-bottom: 7px;">
			  		<span style="font-size: 20px;">软件分享</span>
			  		<span class="get-more">
			  			获取更多>>
			  		</span>
			  	</div>
				<el-row>
					<el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<img :src="hamburgerImg" class="image">
							<div style="padding: 14px;">
							    <span>好吃的汉堡</span>
							    <div class="bottom clearfix">
							        <time class="time">2018-8-15</time>
							        <el-button type="text" class="button" @click="openDialog">百度网盘获取</el-button>
							    </div>
							</div>
						</el-card>
					</el-col>
				</el-row>		  		
			</div>

		</div>
		<VsourceCard :resourceDialogTableVisible='resourceDialogTableVisible' @closed='closeDialog'></VsourceCard>
    </div>
</template>
<script>
    import hamburgerImg from '@/assets/test.png'
	import VsourceCard from '../common/VsourceCard'
    export default{
        data(){
            return {
				hamburgerImg,
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
    img{
		width: 244px;
		height: 236px;
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
</style>