<template>
    <div>
        <div class="header" center>
        	<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					
					<el-menu-item index="1">Mihon share</el-menu-item>
					<el-submenu index="2">
					<template slot="title">视频分享</template>
					<el-menu-item index="2-1">电影视频</el-menu-item>
					<el-submenu index="2-2">
					<template slot="title">学习视频</template>
					<el-menu-item index="2-2-1">python</el-menu-item>
					<el-menu-item index="2-2-2">前端相关</el-menu-item>
					<el-menu-item index="2-2-3">其他</el-menu-item>
					</el-submenu>
					</el-submenu>
					<el-menu-item index="3">PDF书籍</el-menu-item>
					<el-menu-item index="4">学习开发软件</el-menu-item>

			</el-menu>
		</div>
    </div>
</template>
<script>
    import Vheader from './Vheader'
    export default{
//  	name:test,
    	data(){
    		return {
    			activeIndex: '1',
        		activeIndex2: '1'
    		}
    	},
        components:{ Vheader },
        methods:{
			handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		    }
        }
    }
</script>
<style>
	.header{
		text-align: center;
	}
	.header ul li{
		margin-left: 30%;
	}
</style>