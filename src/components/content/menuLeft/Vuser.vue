<template>
    <div>
        <div style="margin-bottom: 5px;">
            <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix">
                    <span><i class="icon iconfont icon-ren1 about"></i>关于我   About</span>
                    <el-button class="check-more" type="text" @click="aboutMeDialogTableVisible = true">查看更多</el-button>
                </div>
                <div class="about-me">
                    <h4>个人博客主页：<em><a href="http://mihon.cn" target="_blank">MihonShare</a></em></h4>
                    <h4>站点说明：</h4>
                    <p class="direction-text">
                        学习是一件好事，但不是件容易的事，需要坚持。本着学习共享的精神，共享一些个人学习过程中觉得不错的资料。
                        <i style="color: #756bb1;">希望大伙通过努力，能过上体面的生活！</i>
                    </p>
                </div>
            </el-card>
        </div>

        <div class="about-card">
  		    <el-dialog title="关于本站" :visible.sync="aboutMeDialogTableVisible">
			    <el-card class="box-card" style="font-family: '微软雅黑';">
				    <p>
                        <strong>
                            <h3>声明 ：</h3>
                            <i style="color:#5e6d82;">本站共享的所有资料均不做任何商业用途，仅供参考学习，获得者用于任何商业用途，责任自负！</i> 
                        </strong>
				    </p>
				    <p>
                        <strong>
                            <h3>相关技术 ：</h3>
                            <p>1.这个分享单页是采用前后端分离的。</p>
                            <p>2.前端使用<i style="color:#5e6d82;"> Vue </i>编写，框架使用<i style="color:#5e6d82;"> element-ui </i>，因为是新手并且没有美学功底，界面看起来挺丑的，将就一下不要骂街哈。</p>
                            <p>3.后端API使用<i style="color:#5e6d82;"> Python </i>语言编写，且是<i style="color:#5e6d82;"> Django rest framework </i>框架,这才是本菜鸟的主要方向，虽然接口不多全当练手！</p>
                        </strong>
				    </p>	
				</el-card>
			</el-dialog>
  	    </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                aboutMeDialogTableVisible:false,
            }
        },
        methods:{ 
        }
    }
</script>

<style scoped="scoped">
    .direction-text{
        text-indent: 2em;
        color: #333333;
        font-size: 14px;
        color:#5e6d82;
    }
    .check-more{
        float: right;
         padding: 3px 0;
    }
    .about{
        color: #1296db;
        width: 20px;
        height: 20px;
    }
</style>