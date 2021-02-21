<template>
	<view>
		<uni-list class="window-list-size">
			<view v-for="(item,index) in 10" :key="index">
				<uni-list-item-best 
					class="window-list-style" 
					title="菜品名称" 
					note="菜品特色概括" 
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png" 
					thumb-size="best" 
					clickable="true"
					@click="clickWindowList" 
					/>
				</view>
		</uni-list>
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				
			}
		},
		computed: {
			
		},
		onLoad() {
			
		},
		methods: {
			clickWindowList(){
				this.navTo('/pages/product/detail/product');
			}
		}
	}
</script>

<style lang="scss">
	.window-list-size{
		width: 100%;
		
		.window-list-style{

		}
	}
	
</style>
