<template>
	<view class="box">
		<swiper :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<image class="img" src="https://tse1-mm.cn.bing.net/th/id/OIP-C.Vk0v8U2xA-xx9H3min6SQgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image class="img" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.tVleBtaT_SjT9XlWaw0a9wHaEo?w=294&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image class="img" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.DOOxGtkUiW8QevWtAxsRtAHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="">
			这是首页
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
			
		}
	}
</script>

<style>
	swiper{
		width: 100%;
		height: 400rpx;
	}
	.img{
		width: 100%;
		height: 100%;
	}
	.box{
		width: 100vw;
		height: 86vh;
		overflow: hidden;
		/* background-color: antiquewhite; */
	}
	*{
		margin: 0;
		padding: 0;
	}
</style>
