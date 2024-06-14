<template>
	<view class="box">
		<view class="details">
			<view class="headsculpture">
				<image
					src="https://tse3-mm.cn.bing.net/th/id/OIP-C.khbwpM_nB0w-T_fIhO9Z_QHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.5&pid=1.7"
					mode=""></image>
				<text>{{name}}</text>
			</view>
		</view>
		<view class="listbox">
			<view class="lister">
				学历：{{xueli}}
			</view>
			<view class="lister">
				手机号：{{iphone}}
				<image @click="phone" src="../../static/dianhua.png" mode=""></image>
			</view>
			<view class="lister">
				年龄：{{age}}
			</view>
			<view class="lister">
				性别：{{sex === 0?"男":"女"}}
			</view>
			<view class="lister">
				身份证：{{idcards}}
			</view>
			<view class="lister">
				籍贯：{{address}}
			</view>
			<view class="lister">
				备注：{{mark}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				atr: [],
				xueli: '',
				iphone: '',
				age: '',
				sex: '',
				idcards: '',
				address: '',
				mark: '',
				name:''
			}
		},
		onLoad() {
			const dataString = this.$mp.query.data;
			const res = JSON.parse(dataString);
			console.log(res.data);
			this.atr = res.data
			this.xueli = res.data.xueli
			this.iphone = res.data.iphone
			this.age = res.data.age
			this.sex = res.data.sex
			this.idcards = res.data.idcards
			this.address = res.data.address
			this.mark = res.data.mark
			this.name = res.data.name
		},
		methods: {
			phone() {
				 window.location.href = 'tel:' + this.iphone;
			}
		}
	}
</script>

<style>
	.lister image {
		width: 40rpx;
		height: 40rpx;
		float: right;
		margin: 30rpx;
	}

	.lister {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 1px solid gainsboro;
	}

	.listbox {
		width: 80%;
		height: 800rpx;
		margin: auto;
		overflow: hidden;
		/* background-color: #a1c4fd; */
	}

	.headsculpture image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.headsculpture {
		width: 150rpx;
		height: 150rpx;
		background-color: #00aaff;
		margin: auto;
		border-radius: 50%;
		margin-top: 50rpx;
		text-align: center;
		color: white;
	}

	.details {
		width: 100%;
		height: 300rpx;
		float: left;
		background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
	}

	.box {
		width: 100vw;
		height: 100vh;
		/* background-color: antiquewhite; */
	}
</style>