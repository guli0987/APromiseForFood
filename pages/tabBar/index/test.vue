<template>
	<view>
		<mpvue-picker-best
			:themeColor="picker_themeColor"
			ref="picker_locationPicker"
			:mode="picker_mode"
			:deepLength="picker_deepLength"
			:pickerValueDefault="pickerValueDefault"
			@onConfirm="picker_onConfirm"
			@onCancel="picker_onCancel"
			:pickerValueArray="pickerValueArray"
		></mpvue-picker-best>
		<button @click="picker_showLocationPicker">测试</button>
	</view>
</template>

<script>
	import mpvuePickerBest from '../../../components/mpvue-picker-best/mpvuePickerBest.vue';
	export default{
		components: {
			mpvuePickerBest
		},
		data(){
			return {
				//头部导航
				pickerValueArray:[],
				picker_themeColor: '#007AFF',
				picker_mode: 'multiLinkageSelector',
				picker_deepLength: 4,
				pickerValueDefault: [0,0,0,0]
			}
		},
		onLoad() {
			//加载地点选择器
			this.loadPickerList();
			},
		methods:{
			async loadPickerList(){
				let pickerValueArray = await this.$api.json('pickerArrayF');
				this.pickerValueArray = pickerValueArray;
			},
			//头部导航方法
			picker_showLocationPicker() {
				/* this.mode = 'multiLinkageSelector';//selector，multiLinkageSelector，multiSelector
				this.deepLength = 4;
				this.pickerValueDefault = [0,0,0,0]; */
				this.picker_mode ="multiLinkageSelector";
				this.picker_deepLength = 4;
				this.pickerValueDefault = [0,0,0,0];
				this.$refs.picker_locationPicker.show();
			},
			picker_onChange(e) {
			      console.log(e);
			    },
			picker_onCancel(e) {
			      console.log(e);
			    },
			picker_onConfirm(e) {
			      console.log(e);
				  //alert(e.label);
				  this.picker_setStyle(0, e.label);
			    },
			picker_setStyle(index, text) {
				let pages = getCurrentPages();
				let page = pages[pages.length - 1];
				if (text.length > 3) {
					//text = text.substr(0, 3) + '...';
					text = text.split("-")[text.split("-").length-1];
				}
				//app-plus 配置编译到 App 平台时的特定样式，部分常用配置 H5 平台也支持。
				// #ifdef APP-PLUS
				let currentWebview = page.$getAppWebview();
				let titleNView = currentWebview.getStyle().titleNView;
				// 添加文字过长截取为3个字符，请根据自己业务需求更改
				//alert(titleNView.buttons[0].text);
				titleNView.buttons[1].text = text;//第二个按钮,index=1
				currentWebview.setStyle({
					titleNView: titleNView
				});
				// #endif
				// #ifdef H5
				// h5 临时方案
				document.getElementsByClassName('uni-btn-icon')[2].innerText = text;//原来index为1，实际是第二个按钮
				// #endif
			}
			
			
			}
	}
</script>

<style>
</style>
