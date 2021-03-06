
//加下划线,内部使用的方法
var _util = require('util')
var _user = {
	logout:function(success,error){
		_util.request({
			url:'/user/logout',//
			success:success,
			error:error			
		})
	},//
	login:function(data,success,error){
		_util.request({
			method:'post',
			url:'/user/login',//
			data:data,
			success:success,
			error:error			
		})
	},//
	register:function(data,success,error){
		_util.request({
			method:'post',
			url:'/user/register',//
			data:data,
			success:success,
			error:error			
		})
	},//
	getUsername:function(success,error){
		_util.request({
			url:'/user/username',//
			success:success,
			error:error
		})
	},
	getUserInfo:function(success,error){
		_util.request({
			url:'/user/userInfo',//
			success:success,
			error:error			
		})
	},
	updatePassword:function(data,success,error){
		_util.request({
			method:'put',
			url:'/user/updatePassword',//
			data:data,
			success:success,
			error:error			
		})
	},//
	checkedUsername:function(username,success,error){
		_util.request({
			url:'/user/checkedUsername',//
			data:{
				username:username
			},
			success:success,
			error:error			
		})
	}
}

module.exports = _user;