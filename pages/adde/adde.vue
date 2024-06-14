<template>
	<view class="container">
		<uni-section title="添加学生信息" type="line">
			<view class="example">
				<!-- 基础用法，不包含校验规则 -->
				<uni-forms ref="baseForm">
					<uni-forms-item label="姓名" required>
						<uni-easyinput v-model="name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required>
						<uni-easyinput v-model="age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="性别" required>
						<uni-data-checkbox v-model="sex" :localdata="sexs" />
					</uni-forms-item>
					<uni-forms-item label="身份证" required>
						<uni-easyinput v-model="number" placeholder="请输入身份证号码" />
					</uni-forms-item>
					<uni-forms-item label="学历">
						<uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
					</uni-forms-item>
					<uni-forms-item label="手机号" required>
						<uni-easyinput v-model="cellphone" placeholder="请输入手机号码" />
					</uni-forms-item>
					<uni-forms-item label="地址">
						<uni-easyinput v-model="address" placeholder="请输入地址" />
					</uni-forms-item>
					<uni-forms-item label="备注">
						<uni-easyinput v-model="notes" placeholder="请输入备注" />
					</uni-forms-item>
					<button type="primary" @click="submit">提交</button>
				</uni-forms>
			</view>
		</uni-section>
	</view>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				// 基础表单数据
				name: '',
				age: '',
				introduction: '',
				sex: 0,
				value: 1,
				cellphone: '',
				address: '',
				notes: '',
				number: '',

				// 单选数据源
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}],
				range: [{
						value: "初中/小学",
						text: "初中/小学"
					},
					{
						value: "高中/中专",
						text: "高中/中专"
					},
					{
						value: "大专",
						text: "大专"
					},
					{
						value: "本科",
						text: "本科"
					},
				],
			};
		},
		methods: {
			change(e) {
				console.log("e:", e);
			},
			submit() {
				let age = this.age
				if (this.age > 100) {
					uni.showToast({
						title: `年龄不合法`,
						icon: 'none',
						duration: 2000 
					});
				} else if (isNaN(this.age)) {
					uni.showToast({
						title: '请输入有效的年龄',
						icon: 'none',
						duration: 2000
					});
				} else if (!(this.number.length === 18)) {
					uni.showToast({
						title: '请正确输入身份证号',
						icon: 'none',
						duration: 2000 // 提示持续时间，单位为 ms
					});
				} else if (!(this.cellphone.length === 11)) {
					uni.showToast({
						title: '请正确输入手机号',
						icon: 'none',
						duration: 2000 // 提示持续时间，单位为 ms
					});
				} else if (this.name === "" || this.age === "" || this.sex === "" || this.number === "" || this
					.cellphone === "") {
					uni.showToast({
						title: '必填项不能为空！',
						icon: 'none',
						duration: 2000 // 提示持续时间，单位为 ms
					});
				} else {
					let formDataArray = {
						name: this.name,
						age: this.age,
						sex: this.sex,
						idcards: this.number,
						xueli: this.value,
						iphone: this.cellphone,
						address: this.address,
						mark: this.notes,
						webid: uni.getStorageSync('webid')
					};
					console.log(formDataArray);
					axios({
						url: 'https://testshool.zzgoodqc.cn/index.php/index/User/addWxUser',
						method: "post",
						data: formDataArray
					}).then(res => {
						console.log(res)
						uni.switchTab({
							url: '/pages/tabulation/tabulation'
						})
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.example {
		padding: 15px;
		background-color: #fff;
	}
</style>