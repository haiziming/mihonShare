<template>
    <div>
        <h1>我是父组件</h1>
        <child ref="child"></child>
    </div>
</template>
<script>
    import child from './child'
    export default{
        components:{ child },
        methods:{
            parent(){
                this.$.refs.child.childFn()
            }
        }
    }
</script>