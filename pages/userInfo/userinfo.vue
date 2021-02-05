<template>
	<view class="app">
		<view class="cell">
			<text class="tit fill">头像</text>
			<view class="avatar-wrap" @click="chooseImage">
				<image class="avatar" :src="uInfo.avatar || '/static/missing-face.png'" mode="aspectFill"></image>
				<!-- 进度遮盖 -->
				<view 
					class="progress center"
					:class="{
						'no-transtion': uploadProgress === 0,
						show: uploadProgress != 100
					}"
					:style="{
						width: uploadProgress + '%',
						height: uploadProgress + '%',
					}"
				></view>
			</view>
		</view>
		<view class="cell b-b">
			<text class="tit fill">昵称</text>
			<input class="input" v-model="uInfo.nickname" type="text" maxlength="12" placeholder="请输入昵称,不超过16字符" placeholder-class="placeholder">
		</view>
		<view class="cell b-b">
			<text class="tit fill">性别</text>
				<view class="checkbox sex-position-male" @click="changeGender(1)">
					<text v-if="uInfo.gender == 1" class="mix-icon icon-xuanzhong"></text>
					<text v-else class="mix-icon icon-yk_yuanquan"></text>
					<text>男</text>
				</view>
				<view class="checkbox sex-position-female" @click="changeGender(2)">
					<text v-if="uInfo.gender == 2" class="mix-icon icon-xuanzhong"></text>
					<text v-else class="mix-icon icon-yk_yuanquan"></text>
					<text>女</text>
				</view>
		</view>
		<!-- <view class="cell b-b">
			<text class="tit">公开信息</text>
			<text class="tip fill">评价、晒单等 在隐私保护里面</text>
			<switch :checked="!userInfo.anonymous" color="#FF536F" @change="onSwitch" />
		</view> -->
		<view class="cell b-b" @click="changeComment">
			<text class="tit">个人介绍</text>
			<text class="tip fill text-position-right">{{uInfo.comment || '无'}}</text>
		</view>
		<view class="cell b-b">
			<text class="tit">手机号码</text>
			<text class="tip fill text-position-right">{{uInfo.mobile || '未设置'}}</text>
		</view>
		<view class="cell b-b">
			<text class="tit">密码修改</text>
			<text class="tip fill text-position-center">需进行身份验证</text>
		</view>
		<view class="cell b-b">
			<text class="tit">邮箱地址</text>
			<text class="tip fill text-position-right">{{uInfo.email || '未设置'}}</text>
		</view>
		
		<!-- <mix-button ref="confirmBtn" text="保存资料" marginTop="80rpx" @onConfirm="confirm"></mix-button> -->
		<button type="primary" @click="confirm" class="btn-confirm" :loading="isLoading">保存资料</button>
	</view>
</template>

<script>
	import {
	    mapState,  
	    mapMutations  
	} from 'vuex';  
	export default {
		data() {
			return {
				uploadProgress: 100, //头像上传进度
				isLoading:false,
				uInfo:{}
			}
		},
		computed: {
			...mapState({
				userInfo:state=>state.user.userInfo
				}),
			curUserInfo(){
				return this.userInfo;
			}
		},
		/* watch: {
			uInfo:(newInfo,oldInfo){
				//alert("发生变化："+JSON.stringify(newInfo));
				//alert("change"+this.uInfo.gender)
				const {avatar, nickname, gender, mobile,email,comment}  = this.curUserInfo;
				this.uInfo = {avatar, nickname, gender, mobile,email,comment};
				//alert("change"+this.uInfo.gender)
			}
		}, */
		onLoad() {
			const {avatar, nickname, gender, mobile,email,comment}  = this.curUserInfo;
			this.uInfo = {avatar, nickname, gender, mobile,email,comment};
			//alert("加载："+this.curUserInfo.nickname+"/"+this.curUserInfo.eamil);
		},
		methods: {
			//提交修改
			async confirm(){
				this.isLoading=true;
				const {uploadProgress, userInfo, curUserInfo,uInfo} = this;
				let isUpdate = false;
				for(let key in uInfo){
					if(userInfo[key] !== uInfo[key]){
						console.log(userInfo[key]+"/"+uInfo[key])
						isUpdate = true;
						break;
					}
				}
				if(isUpdate === false){
					this.$util.msg('信息未修改');
					//alert(JSON.stringify(curUserInfo));
					this.isLoading=false;
					return;
				}
				if(!uInfo.avatar){
					this.$util.msg('请上传头像');
					this.isLoading=false;
					return;
				}
				if(uploadProgress !== 100){
					this.$util.msg('请等待头像上传完毕');
					this.isLoading=false;
					return;
				}
				if(!uInfo.nickname){
					this.$util.msg('请输入您的昵称');
					this.isLoading=false;
					return;
				}
				if(!uInfo.gender){
					this.$util.msg('请选择您的性别');
					this.isLoading=false;
					return;
				}
				if(!uInfo.comment){
					this.$util.msg('还没有填写介绍哦');
					this.isLoading=false;
					return;
				}
				/* const res = await this.$request('user-center', 'update', userInfo);
				this.isLoading=false;
				this.$util.msg(res.msg);
				if(res.status === 1){
					this.$store.dispatch('getUserInfo'); //刷新用户信息
					setTimeout(()=>{
						uni.navigateBack();
					}, 1000)
				} */
			},
			//选择头像
			chooseImage(){
				uni.chooseImage({
					count: 1,
					success: res=> {
						uni.navigateTo({
							url: `/pages/set/cutImage/cut?src=${res.tempFilePaths[0]}` 
						});
						//alert("路径："+res.tempFilePaths[0])
					}
				});
			}, 
			//裁剪回调
			async setAvatar(filePath){
				//alert("setAvatar:"+filePath);
				this.tempAvatar = filePath;
				this.uploadProgress = 0;
				const result = await uniCloud.uploadFile({
					filePath: filePath,
					cloudPath: + new Date() + ('000000' + Math.floor(Math.random() * 999999)).slice(-6) + '.jpg',
					onUploadProgress: e=> {
						this.uploadProgress = Math.round(
							(e.loaded * 100) / e.total
						);
					}
				});
				//console.log("错误排查："+result.fileID+"/"+result.requestId);
				if(!result.fileID){
					this.$util.msg('头像上传失败');
					return;
				}else{
					this.uInfo.avatar = result.fileID;
				}
				//阿里云返回的fileID为链接形式可以直接使用，腾讯云返回的为cloud://形式，如需展示需要调用getTempFileURL获取链接
				//腾讯云和阿里云存在差异，当前版本阿里云暂不可用
				/* if(typeof uniCloud.getTempFileURL === 'undefined'){
					this.uInfo.avatar = result.fileID;
				}else{
					const tempFiles = await uniCloud.getTempFileURL({
						fileList: [result.fileID]
					})
					const tempFile = tempFiles.fileList[0];
					console.log(tempFile)
					if(tempFile.code === 'SUCCESS'){
						this.uInfo.avatar = tempFile.download_url;
					}else{
						this.$util.msg('头像上传失败');
					}
				} */
			},
			//修改性别
			changeGender(gender){
				this.$set(this.uInfo, 'gender', gender)
			},
			changeComment(){
				alert("com")
			}
			/* //公开信息
			onSwitch(e){
				this.userInfo.anonymous = !e.detail.value;
			} */
		}
	}
</script>

<style scoped lang="scss">
	.app{
		padding-top: 16rpx;
	}
	.cell{
		display: flex;
		align-items: center;
		min-height: 110rpx;
		padding: 0 40rpx;
		
		&:first-child{
			margin-bottom: 10rpx;
		}
		&:after{
			left: 40rpx;
			right: 40rpx;
			border-color: #d8d8d8;
		}
		.tit{
			font-size: 30rpx;
			color: #333;
		}
		.avatar-wrap{
			width: 100rpx;
			height: 100rpx;
			position: absolute;
			border-radius: 100rpx;
			overflow: hidden;
			right: 24px;
			
			.avatar{
				width: 100%;
				height: 100%;
				border-radius: 100rpx;
			}
			.progress{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				width: 100rpx;
				height: 100rpx;
				box-shadow: rgba(0,0,0,.6) 0px 0px 0px 2005px;
				border-radius: 100rpx;
				transition: .5s;
				opacity: 0;
				
				&.no-transtion{
					transition: 0s;
				}
				&.show{
					opacity: 1;
				}
			}
		}
		.input{
			flex: 1;
			text-align: right;
			font-size: 28rpx;
			color: #333;
		}
		.sex-position-male{
			position: absolute;
			right: 60rpx;
			
		}
		.sex-position-female{
			position: absolute;
			right: 160rpx;
			
		}
		switch{
			margin: 0;
			transform: scale(0.8) translateX(10rpx);
			transform-origin: center right;
		}
		.tip{
			margin-left: 20rpx;
			font-size: 28rpx;
			color: #999;
		}
		.checkbox{
			padding: 12rpx 0 12rpx 40rpx;
			font-size: 28rpx;
			color: #333;
			
			.mix-icon{
				margin-right: 12rpx;
				font-size: 36rpx;
				color: #ccc;
			}
			.icon-xuanzhong{
				color: $base-color;
			}
		}
		.text-position-center{
			position: relative;
			left: 50%;
		}
		.text-position-right{
			position: absolute;
			right: 60rpx;

		}
		.text-position-left{
			position: absolute;
			left: 40rpx;
		}
		.btn-confirm{
			
		}
	}
</style>
