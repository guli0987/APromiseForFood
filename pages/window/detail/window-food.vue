<template>
	<view>
		<mescroll-body
				class="mescroll-body-windowfood"
				@init="mescrollInit" 
				@down="downCallback" 
				@up="loadWindowFoodList" 
				:up="upOption"
				:down="downOption">
			<uni-list class="window-food-size">
				
					<view v-for="(item,index) in 12" :key="index">
						<uni-list-item-best 
							class="window-food-style" 
							:title="item"
							note="菜品特色概括" 
							thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png" 
							thumb-size="best" 
							clickable
							@click="clickWindowList" 
							/>
					</view>
			</uni-list>
		</mescroll-body>
	</view>
</template>

<script>
	import windowListMiXin from './window-food.js'
	export default{
		data() {
			return {
				
			}
		},
		mixins: [windowListMiXin],
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
	
/* .mescroll-downwarp .downwarp-content{
		flex-direction: row !important;
		justify-content: center !important;
	} */
	
	/* .mescroll-body-windowfood{
		
		.window-food-size{
				
			.window-food-style{
			
			}
		}
		
	} */
	
</style>
