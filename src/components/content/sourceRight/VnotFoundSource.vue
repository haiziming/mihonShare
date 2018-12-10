<template>
    <div class="item">
        <img :src="imgSrc" alt="没有找到相关资源">
    </div>
</template>
<script>
    import notFoundImgSrc from '../../../assets/notFoundSource02.jpg'
    export default{
        data(){
            return {
                imgSrc:notFoundImgSrc
            }
        },
        methods:{ 
        },
        components:{
            notFoundImgSrc,
        }
    }
</script>

<style scoped="scoped">
    .item{
        text-align: center;
    }
    img{
        height: 1200px;
    }
</style>