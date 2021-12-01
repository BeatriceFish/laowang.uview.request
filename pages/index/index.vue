<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<u-button type="success" @click="boom">{{王灿欣}}</u-button>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		async onLoad() {
			const res = await uni.$u.http.post('/api/index/index')
			// console.log(JSON.stringify(res))
		},
		methods: {
			boom(){
				this.$u.toast("让世界感受痛楚吧!")
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
