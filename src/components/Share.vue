<template>
	<div class="share">		
		<Vheader></Vheader>
		<Vcontent></Vcontent>
		<Vfooter></Vfooter>
	</div>
</template>

<script>
	import Vheader from './header/Vheader'
	import Vcontent from './content/Vcontent'
	import Vfooter from './footer/Vfooter.vue'
	export default{
		name:'Share',
		data() {
	    return {
	        
	      };
    	},
		components:{ 
			Vheader,
			Vcontent,
			Vfooter
		},
    	methods: {

    }
	}
</script>

<style scoped="scoped">

</style>