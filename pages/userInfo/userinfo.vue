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
		<view class="cell b-bs">
			<text class="tit fill">昵称</text>
			<input class="input" v-model="uInfo.nickname" type="text" maxlength="12" placeholder="请输入昵称,不超过16字符" placeholder-class="placeholder">
		</view>
		<view class="cell b-bs">
			<text class="tit fill">性别</text>
				<view class="sex-position">
					<view class="checkbox" @click="changeGender(1)">
						<text v-if="uInfo.gender == 1" class="mix-icon icon-xuanzhong"></text>
						<text v-else class="mix-icon icon-yk_yuanquan"></text>
						<text>男</text>
					</view>
					<view class="checkbox" @click="changeGender(2)">
						<text v-if="uInfo.gender == 2" class="mix-icon icon-xuanzhong"></text>
						<text v-else class="mix-icon icon-yk_yuanquan"></text>
						<text>女</text>
					</view>
				</view>
		</view>
		<view class="cell b-bs" @click="changeComment">
			<text class="tit">个人介绍</text>
			<text class="tip fill text-position-right">{{uInfo.comment ? uInfo.comment.substring(0,12) : '无'}}</text>
			<!-- 提交信息 -->
			<uni-popup ref="dialogInput" type="dialog" @change="change">
				<uni-popup-dialog mode="input" title="个人介绍填写" :value="uInfo.comment" placeholder="简短有力,不失生气 一句话概括你自己" @confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>
		<view class="cell b-bs">
			<text class="tit">手机号码</text>
			<text class="tip fill">{{uInfo.mobile || '未设置'}}</text>
		</view>
		<view class="cell b-bs">
			<text class="tit">密码修改</text>
			<text class="tip fill">需进行身份验证</text>
		</view>
		<view class="cell b-b" @click="changeEmail">
			<text class="tit">邮箱地址</text>
			<text class="tip fill">{{uInfo.email || '未设置'}}</text>
			<uni-popup ref="dialogInputEmail" type="dialog" @change="change">
				<uni-popup-dialog-bt mode="input" title="邮箱绑定" :value="uInfo.eamil" placeholder="" @confirm="dialogInputConfirmEmail"></uni-popup-dialog-bt>
			</uni-popup>
		</view>
		
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
			curUserInfo(curUserInfoBest){//监听计算属性curUserInfo是否发生变化，如果更新信息成功重置uInfo，失败
				const {_id:uid,avatar, nickname, gender, mobile,email,comment}  = this.curUserInfoBest;
				this.uInfo = {uid,avatar, nickname, gender, mobile,email,comment};
			}
		}, */
		onLoad() {
			//alert(JSON.stringify(this.curUserInfo))
			const {_id:uid,avatar, nickname, gender, mobile,email,comment}  = this.curUserInfo;
			this.uInfo = {uid,avatar, nickname, gender, mobile,email,comment};
			//alert(JSON.stringify(this.uInfo))
			//alert("加载："+this.curUserInfo.nickname+"/"+this.curUserInfo.eamil);
		},
		methods: {
			//提交修改
			async confirm(){
				this.isLoading=true;
				const {uploadProgress, curUserInfo,uInfo} = this;
				let isUpdate = false;
				for(let key in uInfo){
					if(key !== 'uid' && uInfo[key] !== curUserInfo[key]){
						console.log(curUserInfo[key]+"/"+uInfo[key])
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
				const res = await this.$request('userCenter', 'updateUser', this.uInfo);
				console.log(JSON.stringify(uInfo)+"-【反馈】-"+JSON.stringify(res))
				if(res.result.code === 0){
					this.$util.msg("修改成功！");
					this.$store.dispatch('getUserInfo'); //刷新用户信息
				}else{
					this.$util.msg("错误信息:"+res.result.msg);
					this.uInfo = curUserInfo;//失败信息“回滚”
				}
				this.isLoading=false;
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
				this.$refs.dialogInput.open();
			},
			changeEmail(){
				this.$refs.dialogInputEmail.open();
			},
			/**
			 * 输入对话框的确定事件
			 */
			dialogInputConfirm(done, val) {
				uni.showLoading({
					title: 'loading...'
				})
				this.uInfo.comment = val;
				uni.hideLoading();
				done();
				//console.log(val);
				/* setTimeout(() => {
					uni.hideLoading()
					// 关闭窗口后，恢复默认内容
					done()
				}, 3000) */
			},
			dialogInputConfirmEmail(done,val){
				alert("test")
			},
			/**
			 * popup 状态发生变化触发
			 * @param {Object} e
			 */
			change(e) {
				console.log('popup ' + e.type + ' 状态', e.show)
			}
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
		
		&:first-child{//父元素的首个子元素
			margin-bottom: 10rpx;
		}
		&:after{//每个元素后面
			left: 40rpx;
			right: 40rpx;
			border-color: #d8d8d8;
		}
		.tit{//左边文本样式
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
		switch{
			margin: 0;
			transform: scale(0.8) translateX(10rpx);
			transform-origin: center right;
		}
		.tip{
			/* margin-left: 20rpx; */
			position: absolute;
			right: 60rpx;
			font-size: 28rpx;
			color: #999;
		}
		.sex-position{
			width: 90%;
			display: flex;
			justify-content: flex-end;
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
		}
	}
	
	.btn-confirm{
		width: 80%;
		margin: 30rpx auto 0rpx;
		border-radius: 50rpx;
	}
</style>
<!--    display: flex;
		flex-direction: row | row-reverse | column | column-reverse;//属性决定主轴的方向（即项目的排列方向）
		flex-wrap: nowrap | wrap | wrap-reverse;//如果一条轴线排不下，如何换行。
		 flex-flow: <flex-direction> || <flex-wrap>;//flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
		justify-content: flex-start | flex-end | center | space-between 靠底 | space-around 左右有空隙，是中间的一半;//属性定义了项目在主轴上的对齐方式。
		align-items: flex-start | flex-end | center | baseline | stretch;//属性定义项目在交叉轴上如何对齐。
		align-content: flex-start | flex-end | center | space-between | space-around | stretch;//定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
		
		order: <integer>;//属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
		flex-grow: <number>;//属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
		flex-shrink: <number>;//定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
		flex-basis: <length> | auto;//定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
		flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]//flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
		align-self: auto | flex-start | flex-end | center | baseline | stretch;//允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
		
 -->
