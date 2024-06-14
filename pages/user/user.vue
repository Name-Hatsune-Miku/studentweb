<template>
	<view class="box">
		<view class="header">
			<view class="sculpture">
				<image
					src="https://tse3-mm.cn.bing.net/th/id/OIP-C.khbwpM_nB0w-T_fIhO9Z_QHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.5&pid=1.7"
					mode=""></image>
			</view>
			<view class="names">
				admin
			</view>
		</view>
		<view class="list">
			<view class="manage">
				<text class="person">个人管理</text>
			</view>
			<view class="operatebox">
				<view class="operate">消息通知</view>
				<view class="operate">更多</view>
				<view class="operate">设置</view>
				<view class="operate">关于自己</view>
				<view class="operate" style="border: none;"><button @click="exit">退出登录</button></view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			exit() {
			  uni.showModal({
			    title: '温馨提示',
			    content: '你确定要退出吗？',
			    showCancel: true,
			    success: (res) => {
			      if (res.confirm) {
			        uni.navigateTo({
			          url: '/pages/index/index'
			        })
			      } else if (res.cancel) {
			        
			      }
			    }
			  })
			}
		}
	}
</script>

<style>
	.operate button {
		width: 250rpx;
		background-color: crimson;
		color: white;
		font-size: 30rpx;
	}

	.operatebox {
		width: 90%;
		margin: auto;
		/* background-color: antiquewhite; */
	}

	.operate {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		color: gray;
		font-size: 25rpx;
		margin-top: 20rpx;
		/* float: left; */
		/* margin: auto; */
		border-bottom: 1px solid gainsboro;
	}

	.person {
		float: left;
		margin: 25rpx;
		font-weight: 600;
	}

	.manage {
		width: 100%;
		height: 100rpx;
		/* float: left; */
		border-radius: 50rpx 50rpx 0rpx 0rpx;
		/* margin-top: 50rpx; */
		/* background-color: #536976; */
	}

	.names {
		font-weight: bolder;
		font-size: 36rpx;
		float: left;
		width: 300rpx;
		margin-top: 80rpx;
		color: gray;
	}

	.sculpture image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.sculpture {
		float: left;
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		margin: 50rpx;
		border: 3px solid white;
	}

	.list {
		width: 100%;
		height: 100vh;
		background-color: white;
		border-radius: 50rpx;
		/* overflow: hidden; */
		position: relative;
		float: left;
		margin-top: 300rpx;

	}

	.header {
		width: 100%;
		height: 400rpx;
		float: left;
		position: absolute;
	}

	.box {
		width: 100vw;
		height: 100vh;
		background-color: antiquewhite;
	}
</style>