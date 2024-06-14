<template>
	<view class="box">
		<view class="head">
			<input class="input" v-model="nameval" type="text" @confirm="handleConfirm" />
		</view>
		<view class="center" v-if="imagebox">
				<image src="https://img.51miz.com/Element/00/88/15/67/25bfac53_E881567_42363e1c.png" mode=""></image>
		</view>
		<view class="bne" v-for="(item,index) in attr" :key="index">
			<view class="sculpturebox">
				<image
					src="https://tse3-mm.cn.bing.net/th/id/OIP-C.khbwpM_nB0w-T_fIhO9Z_QHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.5&pid=1.7"
					mode="" class="sculptureimg"></image>
				<text class="name">{{item.name}}</text>
				<image @click="edit(item.id)" src="../../static/bianji.png" class="edit" mode=""></image>
				<view @click="deleat(item.id)" class="dele">×</view>
			</view>
			<view class="information" @click="details(item.id)">
				<text class="size">年龄：{{item.age}}岁</text><br />
				<text class="size">性别：{{item.sex === 0 ? '男':"女"}}</text><br />
				<text class="size">手机号：{{item.iphone}}
					<image class="phone" src="../../static/dianhua.png" mode=""></image>
				</text><br />
			</view>
			<view class="pour">
				注：点击卡片查看详情
			</view>
		</view>
	</view>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				nameval: '',
				attr:[],
				imagebox:true
			}
		},

		methods: {
			handleConfirm() {
				const webid = uni.getStorageSync('webid')
				let arr = {
					name:this.nameval,
					webid:webid
				}
				console.log(arr);
				axios({
					url:'https://testshool.zzgoodqc.cn/index.php/index/User/getWxStudentList',
					method:'post',
					data:arr
				}).then(res=>{
					console.log(res.data.data.data);
					let sde = res.data.data.data
					if(sde == undefined){
						uni.showToast({
							title: "未找到该数据",
							icon: 'none',
							duration: 2000 // 提示持续时间，单位为 ms
						});
					}else{
						this.attr = res.data.data.data
						console.log(this.attr);
						this.imagebox = false
					}
					
				})
			},
			// 详情
			details(id) {
				axios({
					url: 'https://testshool.zzgoodqc.cn/index.php/index/User/getWxUserbyid',
					method: 'post',
					data: {
						id: id
					}
				}).then(res => {
					console.log(res);
					uni.navigateTo({
						url: '/pages/details/details?data=' + JSON.stringify(res.data)
					})
				})
			},
			// 修改
			edit(id) {
			  axios({
			    url: 'https://testshool.zzgoodqc.cn/index.php/index/User/getWxUserbyid',
			    method: 'post',
			    data: {
			      id: id
			    }
			  }).then(res => {
			    console.log("修改",res);
			    uni.navigateTo({
			      url: '/pages/tabulation-edit/tabulation-edit?data=' + JSON.stringify(res.data)
			    });
			  });
			},
			// 删除
			deleat(id) {
				uni.showModal({
					title: '温馨提示',
					content: '你确定要删除这条数据吗？',
					showCancel: true,
					success: (res) => {
						if (res.confirm) {
							axios({
								url: 'https://testshool.zzgoodqc.cn/index.php/index/User/delWxUser',
								method: "post",
								data: {
									id: id
								}
							}).then(res => {
								console.log("ID", id);
								this.getData();
							})
						} else if (res.cancel) {
							console.log('点击了取消按钮');
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.pour {
		width: 90%;
		/* height: 80rpx; */
		/* float: left; */
		margin-top: 60rpx;
		padding-left: 20rpx;
		/* background-color: salmon; */
		color: gray;
		font-size: 20rpx;
		line-height: 30rpx;
	}
	.phone {
		width: 30rpx;
		height: 30rpx;
		float: right;
		margin-right: 100rpx;
	}
	.size {
		margin-top: 30rpx;
		font-size: 25rpx;
		color: gray;
	}
	.information {
		width: 95%;
		/* height: 370rpx; */
		margin: auto;
		/* background-color: antiquewhite; */
	}
	.dele {
		float: right;
		width: 50rpx;
		height: 50rpx;
		background-color: red;
		color: white;
		text-align: center;
		border-radius: 50rpx;
		margin-right: 20rpx;
		margin-top: 25rpx;
		line-height: 45rpx;
	}
	.edit {
		width: 40rpx;
		height: 40rpx;
		float: left;
		margin-left: 200rpx;
		margin-top: 30rpx;
	}
	.name {
		width: 200rpx;
		float: left;
		margin-top: 30rpx;
		/* background-color: antiquewhite; */
		font-size: 30rpx;
		white-space: nowrap;
		/* 防止文字折行 */
		overflow: hidden;
		/* 隐藏超出部分 */
		text-overflow: ellipsis;
	}
	.sculptureimg {
		width: 80rpx;
		height: 80rpx;
		float: left;
		margin: 10rpx;
		border-radius: 10rpx;
	}
	.sculpturebox {
		width: 95%;
		height: 100rpx;
		margin: auto;
		margin-bottom: 20rpx;
		border-bottom: 1px solid gray;
	}
	.bne {
		width: 90%;
		/* height: 400rpx; */
		/* margin-top: 10rpx; */
		/* float: left; */
		margin:100rpx auto;
		padding-bottom: 40rpx;
		margin-bottom: 20rpx;
		border-radius: 20rpx;
		background-color: #ffffff;
		border: 1px solid gray;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
	}
	.input {
		width: 90%;
		margin: auto;
		font-size: 25rpx;
		/* background-color: antiquewhite; */
	}

	.box {
		width: 750rpx;
		height: 70vh;
	}

	.head {
		width: 710rpx;
		height: 60rpx;
		background-color: #efefef;
		margin: auto;
		display: flex;
		border-radius: 10px;
		position: relative;
	}

	.head image {
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		left: 340rpx;
		margin-top: 15rpx;
	}

	.center image {
		width: 750rpx;
		height: 600rpx;
	}
</style>