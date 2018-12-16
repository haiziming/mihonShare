<template>
    <div>
        <div class="share-content">
			<div class="item">
			  	<div style="padding-top: 30px;padding-bottom: 7px;">
			  		<span style="font-size: 20px;">搜索结果: <span v-show="false"> {{sourceTypeValue}}</span></span> 
                </div>
                <div v-for="(currRow, index) in dataRow" :key="index" class="row" >
                    <el-row v-if="currRow < dataRow">
                        <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                                <img :src="'http://127.0.0.1:8000' + sourceComputedData[(currRow-1)*3 + index].img" class="image" 
                                :title="sourceComputedData[(currRow-1)*3 + index].title">
                                <div style="padding: 14px;">
                                    <div class="more-text">{{sourceComputedData[(currRow-1)*3 + index].title}}</div>
                                    <div class="bottom clearfix">
                                        <time class="time">{{sourceComputedData[(currRow-1)*3 + index].ctime}}</time>
                                        <el-button type="text" class="button"  @click="openDialog(sourceComputedData[(currRow-1)*3 + index])">百度网盘获取</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
			        </el-row>
                    <el-row v-else>
                        <el-col :span="6" v-for="(o, index) in dataLength-((currRow-1)*3)" :key="o" :offset="index > 0 ? 2 : 0">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                                <img :src="'http://127.0.0.1:8000' + sourceComputedData[(currRow-1)*3 + index].img" class="image" 
                                :title="sourceComputedData[(currRow-1)*3 + index].title">
                                <div style="padding: 14px;">
                                    <div class="more-text">{{sourceComputedData[(currRow-1)*3 + index].title}}</div>
                                    <div class="bottom clearfix">
                                        <time class="time">{{sourceComputedData[(currRow-1)*3 + index].ctime}}</time>
                                        <el-button type="text" class="button"  @click="openDialog(sourceComputedData[(currRow-1)*3 + index])">百度网盘获取</el-button>
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
                            :total="pageCount">
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
    import store from '../../../vuex/store'
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
                sourceData:{'data':''},
                resourceData:{'data':''},
                pageSize:9,
                count:0,
                search:'',
                category:'',
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
                this.$store.dispatch('addAction',1)
                this.$store.dispatch('getSearchDataAction',{category:this.category,
                search:this.search,page:data});
            }
        },
		components:{
			VsourceCard,
        },
        computed:{
            sourceTypeValue(){
                console.log('这里是Vsearch！')
                console.log(this.$store)
                return this.$store.state.searchData
            },
            sourceComputedData(){
                this.search = this.$store.state.searchItem.search;
                this.category = this.$store.state.searchItem.category;
                console.log(this.category,this.search)
                return this.$store.state.searchData.results;
            },
            pageCount(){
                return this.$store.state.searchData.count;
            },
            dataLength(){
                if (this.pageCount > 0){
                    return this.$store.state.searchData.results.length;
                }else{
                    return 0;
                }
                
            },
            dataRow(){
                if (this.pageCount > 0){
                    return Math.ceil(this.$store.state.searchData.results.length / 3);
                }else{
                    return 0;
                }
                
            },
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
    .more-text{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>