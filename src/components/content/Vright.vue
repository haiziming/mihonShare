<template>
    <div>
        <div class="share-content" style="background-color: #FBFDFF;height: auto;min-height: 900px;padding-bottom: 30px;">
			<div style="margin-left: 35px;">
			  	<div style="padding-top: 30px;padding-bottom: 7px;">
			  		<span style="font-size: 20px;">视频分享</span>
			  		<span style="float: right;padding-right: 45px;color: #66b1ff;cursor: pointer;">
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
							        <el-button type="text" class="button"  @click="resourceDialogTableVisible = true">百度网盘获取</el-button>
							    </div>
							</div>
						</el-card>
					</el-col>
			    </el-row>		  		
			</div>
			  		
			<div style="margin-left: 35px;">
			  	<div style="padding-top: 30px;padding-bottom: 7px;">
			  		<span style="font-size: 20px;">PDF书籍</span>
			  		<span style="float: right;padding-right: 45px;color: #66b1ff;cursor: pointer;">
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
							        <el-button type="text" class="button" @click="resourceDialogTableVisible = true">百度网盘获取</el-button>
							    </div>
							</div>
						</el-card>
					</el-col>
				</el-row>		  		
			</div>
			  					  	
			<div style="margin-left: 35px;">
			  	<div style="padding-top: 30px;padding-bottom: 7px;">
			  		<span style="font-size: 20px;">软件分享</span>
			  		<span style="float: right;padding-right: 45px;color: #66b1ff;cursor: pointer;">
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
							        <el-button type="text" class="button" @click="resourceDialogTableVisible = true">百度网盘获取</el-button>
							    </div>
							</div>
						</el-card>
					</el-col>
				</el-row>		  		
			</div>
			  	
			</div>
    </div>
</template>
<script>
    import hamburgerImg from '@/assets/hamburger.50e4091.png'
    export default{
        data(){
            return {
                hamburgerImg,
            }
        },
        methods:{ 
        }
    }
</script>

<style scoped="scoped">

</style>