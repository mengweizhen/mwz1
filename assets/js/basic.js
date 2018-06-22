//跳转页面
function jump(page) {
	window.location.href = page;
}

//获取token
function getToken() {
	var token = sessionStorage.getItem('token');
	return token;
}

//获取URL参数
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	//	if(r != null) return unescape(r[2]);
	if(r != null) return decodeURI(r[2]);
	return null;
}

function phone(a) {
	window.location.href = 'tel://' + a;
}
//解析时间戳
function timetrans(date) {
	var date = new Date(date); //如果date为10位不需要乘1000
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	return Y + M + D;
}

function timetraned(date) {
	var date = new Date(date); //如果date为10位不需要乘1000
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	return Y + M + D + h + m + s;
}
//分页
function page() {
	$("#page").paging({
		pageNo: 1,
		totalPage: Math.ceil(total / pageSize),
		totalSize: total,
		callback: function(num) {
			pageNum = num;
			lowd();
		}
	});
}