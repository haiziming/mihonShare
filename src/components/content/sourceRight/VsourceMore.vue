<template>
    <div>
        <div class="share-content">
			<div class="item">
			  	<div style="padding-top: 30px;padding-bottom: 7px;">
			  		<span style="font-size: 20px;">{{sourceCategory[sourceTypeValue]}}</span> 
                </div>
                <div v-for="(o, index) in 3" :key="index" class="row" >
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
                <div class="page-item">
                    <span class="pagination">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000">
                        </el-pagination>
                    </span>
                </div>
						  		
			</div>			  		
		</div>
		<VsourceCard :resourceDialogTableVisible='resourceDialogTableVisible' @closed='closeDialog'></VsourceCard>
    </div>
</template>
<script>
    import hamburgerImg from '@/assets/test.png'
	import VsourceCard from '../common/VsourceCard'
    export default{
        name:'sourceMore',
        data(){
            return {
				hamburgerImg,
                resourceDialogTableVisible:false,
                sourceType: '',
                sourceCategory:{
                    1:'视频分享',
                    2:'PDF书籍',
                    3:'软件分享'
                },
                vedioCategory:{
                    '1-1':'videoFlim',
                    '1-2':'videoPython',
                    '1-3':'videoWen',
                    '1-4':'videoOther',
                }
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
        computed:{
            sourceTypeValue(){
                if (this.sourceCategory[this.$route.params.sourceMoreValue]){
                    return this.$route.params.sourceMoreValue;
                }else if(this.vedioCategory[this.$route.params.sourceMoreValue]){
                    return 1;
                }else{
                    this.$router.push('/404');
                }
                
            }

        },
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
	.row{
        margin-bottom: 20px;
    }
    .pagination{
        display: block;
        width: 60%;
        margin: 0 auto;
    }
    .page-item{
        margin-top: 30px;
        margin-bottom: 45px;
    }
</style>