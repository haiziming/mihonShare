<template>
    <div>
        <div class="share-content">
			<div class="item">
			  	<div style="padding-top: 30px;padding-bottom: 7px;">
			  		<span style="font-size: 20px;">{{sourceCategory[sourceTypeValue].title}}</span> 
                </div>
                <div v-for="(currRow, index) in dataRow" :key="index" class="row" >
                    <el-row v-if="currRow < dataRow">
                        <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                                <img :src="'http://127.0.0.1:8000' + sourceComputedData.data.results[(currRow-1)*3 + index].img" class="image"
                                 :title="sourceComputedData.data.results[(currRow-1)*3 + index].title">
                                <div style="padding: 14px;">
                                    <div class="more-text">{{sourceComputedData.data.results[(currRow-1)*3 + index].title}}</div>
                                    <div class="bottom clearfix">
                                        <time class="time">{{sourceData.data.results[(currRow-1)*3 + index].ctime}}</time>
                                        <el-button type="text" class="button"  @click="openDialog(sourceComputedData.data.results[(currRow-1)*3 + index])">百度网盘获取</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
			        </el-row>
                    <el-row v-else>
                        <el-col :span="6" v-for="(o, index) in dataLength-((currRow-1)*3)" :key="o" :offset="index > 0 ? 2 : 0">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                                <img :src="'http://127.0.0.1:8000' + sourceComputedData.data.results[(currRow-1)*3 + index].img" class="image" 
                                :title="sourceComputedData.data.results[(currRow-1)*3 + index].title">
                                <div style="padding: 14px;">
                                    <div class="more-text">{{sourceComputedData.data.results[(currRow-1)*3 + index].title}}</div>
                                    <div class="bottom clearfix">
                                        <time class="time">{{sourceComputedData.data.results[(currRow-1)*3 + index].ctime}}</time>
                                        <el-button type="text" class="button"  @click="openDialog(sourceComputedData.data.results[(currRow-1)*3 + index])">百度网盘获取</el-button>
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
                            @current-change="currPage"
                            :page-size="pageSize"
                            layout="prev, pager, next"
                            :total="sourceData.data.count">
                        </el-pagination>
                    </span>
                </div>
						  		
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
        name:'sourceMore',
        data(){
            return {
				hamburgerImg,
                resourceDialogTableVisible:false,
                sourceType: '',
                sourceCategory:{
                    1:{"title":"视频分享","category":"video"},
                    2:{"title":"PDF书籍","category":"PDFbook"},
                    3:{"title":"软件分享","category":"software"},
                },
                vedioCategory:{
                    '1-1':'videoFilm',
                    '1-2':'videoPython',
                    '1-3':'videoWeb',
                    '1-4':'videoOther',
                },
                value:'',
                category:'',
                dataLength:0,
                dataRow:0,
                dataCor:0,
                sourceData:{'data':''},
                resourceData:{'data':''},
                pageSize:12,
            }
        },
        methods:{ 
			closeDialog(){
                this.resourceDialogTableVisible = false
            },
            openDialog(data){
                this.resourceData.data = data
                this.resourceDialogTableVisible = true
            },
            currPage(data){
                axios.get('http://127.0.0.1:8000/api/v1/mihonShare/resourceMore?category=' + this.category + '&page=' + data)
                .then(response=>{
                    this.sourceData.data = response.data;
                    this.dataLength = response.data.results.length;
                    this.dataRow = Math.ceil(this.dataLength / 3)
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        },
		components:{
			VsourceCard,
        },
        computed:{
            sourceTypeValue(){
                if (this.sourceCategory[this.$route.params.sourceMoreValue]){
                    this.value = this.$route.params.sourceMoreValue;
                    this.category = this.sourceCategory[this.value].category
                    axios.get('http://127.0.0.1:8000/api/v1/mihonShare/resourceMore?category=' + this.category)
                    .then(response=>{
                        this.sourceData.data = response.data;
                        this.dataLength = response.data.results.length;
                        this.dataRow = Math.ceil(this.dataLength / 3)
                    })
                    .catch(error=>{
                        console.log(error)
                    })
                    return this.$route.params.sourceMoreValue;
                }else if(this.vedioCategory[this.$route.params.sourceMoreValue]){
                    this.value = this.$route.params.sourceMoreValue;
                    this.category = this.vedioCategory[this.value]
                    axios.get('http://127.0.0.1:8000/api/v1/mihonShare/resourceMore?category=' + this.category)
                    .then(response=>{
                        this.sourceData.data = response.data;
                        this.dataLength = response.data.results.length;
                        this.dataRow = Math.ceil(this.dataLength / 3)
                    })
                    .catch(error=>{
                        console.log(error)
                    });
                    return 1;
                }else{
                    this.$router.push('/404');
                }
                
            },
            sourceComputedData(){
                return this.sourceData
            }

        },
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
        margin-bottom: 10px;
    }
    .more-text{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>