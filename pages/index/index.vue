<template>
	<view class="container">
		<view class="bg bg-color-base margin-b20"></view>
		<view class="tab vs-row vs-align-center">
			<view class="vs-row vs-align-center">
				<view class="vs-column vs-align-center margin-r40">
					<text class="font-50 margin-b20">登录</text>
				</view>
			</view>
		</view>

		<view class="login margin-b80">
			<view class="input vs-row vs-align-center margin-b40">
				<input v-model="number" class="vs-flex-item color-base font-30" type="text" value="" :maxlength="11"
					placeholder="请输入您的手机号" placeholder-class="input-placeholder" />
			</view>
			<view class="input vs-row vs-align-center margin-b40">
				<input v-model="pwd" class="vs-flex-item color-base font-30" type="text" password value=""
					placeholder="请输入您的密码" placeholder-class="input-placeholder" />
			</view>
		</view>
		<view class="button bg-color-base vs-row vs-align-center vs-space-center margin-b20">
			<text class="color-white font-34" @click="login">立即登录</text>
		</view>
		<view class="button bg-color-base vs-row vs-align-center vs-space-center margin-b20">
			<text class="color-white font-34" @click="register">去注册?</text>
		</view>
		<view class="agree-list-box">
			<view class="agree-list">
				<view :class="[radioShow ? 'agree-radio-active' : 'agree-radio']" @click="agree"></view>
				<view class="agree-title">我已阅读并同意
					<text style="font-size: 26rpx;color: #428AF6;">《用户协议》</text>以及
					<text style="font-size: 26rpx;color: #428AF6;">《隐私政策》</text>
				</view>
			</view>
		</view>
		<soure :url="url"></soure>
	</view>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				radioShow: true,
				url: 'https://ext.dcloud.net.cn/plugin?id=1931',
				number: "",
				pwd: "",
			}
		},
		onLoad() {

		},
		methods: {
			login() {
				// if (!this.radioShow) {
				// 	this.$tools.toast('用户协议和隐私政策未勾选')
				// } else if (!this.userInfo.number) {
				// 	this.$tools.toast('请填写账号')
				// } else if (!this.userInfo.pwd) {
				// 	this.$tools.toast('请输入密码')
				// } else {
				// console.log(arr);
				const list = uni.getStorageSync('list')
				console.log("注册号", list.iphone);
				console.log("密码", list.pwd);
				if (!this.pwd || !this.number) {
					alert("请正确输入")
				} else {
					let arr = {
						iphone: this.number,
						pwd: this.pwd
					}
					axios({
						url: 'https://testshool.zzgoodqc.cn/index.php/index/User/webLogin',
						method: "post",
						data: arr
					}).then(res => {
						console.log("获取id", res.data.data.webid)
						let web = res.data.data.webid
						uni.setStorage({
							key: 'webid',
							data: web
						});
						if (web === undefined) {
							alert("账号或密码错误")
						} else {
							uni.switchTab({
								url: '/pages/home/home'
							})
						}
					})
				}
			},
			register() {
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},
			agree() {
				this.radioShow = !this.radioShow
			}
		}
	}
</script>

<style lang="scss">
	.registertxt {
		font-size: 18rpx;
	}

	.agree-list {
		display: flex;
		justify-content: center;

		.agree-radio {
			width: 26rpx;
			height: 26rpx;
			border-radius: 50%;
			border: 1px solid #999;
		}

		.agree-radio-active {
			position: relative;
			width: 26rpx;
			height: 26rpx;
			border-radius: 50%;
			border: 1px solid gainsboro;
			background-color: #428AF6;
		}

		.agree-radio-active::after {
			position: absolute;
			content: '';
			left: 8rpx;
			width: 6rpx;
			height: 14rpx;
			top: 50%;
			transform: translateY(-60%) rotate(38deg);
			border: 4rpx solid #fff;
			border-width: 0 4rpx 4rpx 0;
		}

		.agree-title {
			margin-left: 10rpx;
			font-size: 26rpx;
			color: #333;
		}
	}

	.bg-color-base[data-v-57280228] {
		// background-color: #7782cf;
		// background: url('https://cdn.zhoukaiwen.com/head-bg.png');
		// background-size: cover;
	}

	.container {
		position: relative;
	}

	.bg {
		position: relative;
		width: 750rpx;
		height: 400rpx;
	}

	.tab {
		position: absolute;
		top: 250rpx;
		left: 20rpx;
		right: 20rpx;
		height: 150rpx;
		padding: 0 50rpx;
		background-color: #fff;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;

		&-bg {
			position: absolute;
			top: -200rpx;
			right: -50rpx;
			width: 440rpx;
			height: 285rpx;
		}
	}

	.line {
		width: 25rpx;
		height: 7rpx;
	}

	.login,
	.register {
		padding: 0 60rpx;
	}

	.input {
		width: 580rpx;
		height: 90rpx;
		padding: 0 30rpx;
		background-color: rgba(80, 100, 235, 0.1);
		border-radius: 100rpx;

		&-icon {
			width: 30rpx;
			height: 38rpx;
		}

		&-placeholder {
			// color: #5064eb;
		}
	}

	.button {
		width: 630rpx;
		height: 90rpx;
		margin-left: 60rpx;
		border-radius: 100rpx;
		background-color: #428AF6;
	}

	.separator {
		height: 2rpx;
		margin: 0 30rpx;
		background-color: #f5f5f5;
	}

	.other {
		&-items {
			padding: 0 200rpx;
		}

		&-icon {
			width: 50rpx;
			height: 50rpx;
		}
	}

	// 下边距
	.margin-b5 {
		margin-bottom: 5rpx;
	}

	.margin-b10 {
		margin-bottom: 10rpx;
	}

	.margin-b15 {
		margin-bottom: 15rpx;
	}

	.margin-b20 {
		margin-bottom: 20rpx;
	}

	.margin-b25 {
		margin-bottom: 25rpx;
	}

	.margin-b30 {
		margin-bottom: 30rpx;
	}

	.margin-b40 {
		margin-bottom: 40rpx;
	}

	.margin-b60 {
		margin-bottom: 60rpx;
	}

	.margin-b80 {
		margin-bottom: 80rpx;
	}

	.margin-b100 {
		margin-bottom: 100rpx;
	}

	// 右边距
	.margin-r5 {
		margin-right: 5rpx;
	}

	.margin-r10 {
		margin-right: 10rpx;
	}

	.margin-r15 {
		margin-right: 15rpx;
	}

	.margin-r20 {
		margin-right: 20rpx;
	}

	.margin-r25 {
		margin-right: 25rpx;
	}

	.margin-r30 {
		margin-right: 30rpx;
	}

	.margin-r40 {
		margin-right: 40rpx;
	}

	.margin-r60 {
		margin-right: 60rpx;
	}

	// 字体大小
	.font-18 {
		font-style: normal;
		font-size: 18rpx;
		font-family: Droid Sans Fallback;
	}

	.font-20 {
		font-style: normal;
		font-size: 20rpx;
		font-family: Droid Sans Fallback;
	}

	.font-22 {
		font-style: normal;
		font-size: 22rpx;
		font-family: Droid Sans Fallback;
	}

	.font-24 {
		font-style: normal;
		font-size: 24rpx;
		font-family: Droid Sans Fallback;
	}

	.font-26 {
		font-style: normal;
		font-size: 26rpx;
		font-family: Droid Sans Fallback;
	}

	.font-28 {
		font-style: normal;
		font-size: 28rpx;
		font-family: Droid Sans Fallback;
	}

	.font-30 {
		font-style: normal;
		font-size: 30rpx;
		font-family: Droid Sans Fallback;
	}

	.font-32 {
		font-style: normal;
		font-size: 32rpx;
		font-family: Droid Sans Fallback;
	}

	.font-34 {
		font-style: normal;
		font-size: 34rpx;
		font-family: Droid Sans Fallback;
	}

	.font-36 {
		font-style: normal;
		font-size: 36rpx;
		font-family: Droid Sans Fallback;
	}

	.font-38 {
		font-style: normal;
		font-size: 38rpx;
		font-family: Droid Sans Fallback;
	}

	.font-40 {
		font-style: normal;
		font-size: 40rpx;
		font-family: Droid Sans Fallback;
	}

	.font-46 {
		font-style: normal;
		font-size: 46rpx;
		font-family: Droid Sans Fallback;
	}

	.font-50 {
		font-style: normal;
		font-size: 50rpx;
		font-family: Droid Sans Fallback;
	}

	.font-60 {
		font-style: normal;
		font-size: 60rpx;
		font-family: Droid Sans Fallback;
	}

	.font-80 {
		font-style: normal;
		font-size: 80rpx;
		font-family: Droid Sans Fallback;
	}

	// 字体对齐
	.text-left {
		text-align: left;
	}

	.text-center {
		text-align: center;
	}

	.text-right {
		text-align: right;
	}

	// color相关
	.color-white {
		color: #FFFFFF;
	}

	.color-red {
		color: #dc0000;
	}

	// 黑色色阶向下
	.color-black {
		color: #000;
	}

	.color-black-3 {
		color: #333;
	}

	.color-black-6 {
		color: #666;
	}

	.color-black-9 {
		color: #999;
	}

	// 字体宽度
	.font-weight-400 {
		font-weight: 400;
	}

	.font-weight-500 {
		font-weight: bold;
	}

	// 间隔
	.spacing-20 {
		width: 750rpx;
		height: 20rpx;
		background-color: #f8f8f8;
	}

	// 圆角
	.radius-10 {
		border-radius: 10rpx;
	}

	.radius-20 {
		border-radius: 20rpx;
	}

	.radius-30 {
		border-radius: 30rpx;
	}

	.radius-circle {
		border-radius: 50%;
	}

	.radius-height {
		border-radius: 10000px;
	}

	// flex相关
	.vs-flex-item {
		flex: 1;
	}

	.vs-space-between {
		justify-content: space-between;
	}

	.vs-space-around {
		justify-content: space-around;
	}

	.vs-space-center {
		justify-content: center;
	}

	.vs-space-end {
		justify-content: flex-end;
	}

	.vs-row {
		flex-direction: row;
	}

	.vs-column {
		flex-direction: column;
	}

	.vs-align-end {
		align-items: flex-end;
	}

	.vs-align-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.vs-align-start {
		align-items: flex-start;
	}

	.vs-item-hover {
		background-color: rgba(0, 0, 0, 0.05);
	}

	.vs-btn-hover {
		opacity: 0.8;
	}

	.color-base {
		// color: #5064eb;
	}

	.bg-color-base {
		// background-color: #5064eb;
	}
</style>