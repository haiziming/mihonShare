<template>
    <div id="body">
        <div id="mother">
            <div id="errorBox">
                <div id="errorText">
                    <h1>Sorry..页面没有找到！</h1>
                    <p>似乎你所寻找的网页已移动或丢失了。</p>
                    或者也许你只是键入错误了一些东西。
                    <br>
                    请不要担心，这没事。如果该资源对你很重要，请与管理员联系。
                    <p>火星不太安全，我可以免费送你回地球！</p>
                </div>
                <a href="javascript:void(0)" title="mihonShare 首页">
                    <router-link to="/" tag="span">
                        <div class="link" id="home"></div>
                    </router-link>
                </a>
                <a href="http://mihon.cn/" title="联系管理员(在主站的右上角)">
                    <div class="link" id="contact"></div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        methods:{ 
        }
    }
</script>

<style scoped="scoped">
    #body{ 
        margin:0; 
        padding:0; 
        background:#efefef; 
        font-family:Georgia, Times, Verdana, Geneva, Arial, Helvetica, sans-serif; 
        position:fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        }
    div#mother{ 
        margin:0 auto; 
        width:943px; 
        height:572px; 
        position:relative; 
        }
    div#errorBox{ 
        background: url('../assets/icon/404_bg.png') no-repeat top left; 
        width:943px; height:572px; 
        margin:auto; 
        margin-top: 10%;
        }
    div#errorText{ 
        color:#39351e; 
        padding:146px 0 0 446px; 
        }
    div#errorText p{ 
        width:303px; 
        font-size:14px; 
        line-height:26px; 
        }
    div.link{ 
        height:50px; 
        width:145px; 
        float:left; 
        }
    div#home{ 
        margin:20px 0 0 444px;
        }
    div#contact{ 
        margin:20px 0 0 25px;
        }
    h1{ 
        font-size:40px; 
        margin-bottom:35px; 
        }
</style>