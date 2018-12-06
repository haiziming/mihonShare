<template>
    <dev>
        <div style="margin-bottom: 5px;">
			<el-card class="box-card">
				<div style="margin-top: 15px;">
					<el-input placeholder="请输入内容" v-model="search" class="input-with-select">
						<el-select v-model="select" slot="prepend" placeholder="请选择">
						    <el-option label="教学视屏" value="1"></el-option>
						    <el-option label="PDF书籍" value="2"></el-option>
						    <el-option label="软件分享" value="3"></el-option>
						</el-select>
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</div>
			</el-card>
		</div>
    </dev>
</template>
<script>
    export default{
        data(){
            return {
                search:'',
                select:'',
            }
        },
        methods:{ 
        }
    }
</script>

<style scoped="scoped">

</style>