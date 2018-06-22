var token = '';
$.ajax({
	url: 'http://139.224.208.224/damei-manager//qiniuyun/getToken.do',
	type: 'get',
	async: false,
	cache: false,
	success: function(data) {
		token = data;
	}
});
function qinius(a, b, c) {
	var uploader = Qiniu.uploader({
		runtimes: 'html5,flash,html4', // 上传模式，依次退化
		browse_button: a, // 上传选择的点选按钮，必需
		uptoken: token, // uptoken是上传凭证，由其他程序生成
		get_new_uptoken: false, // 设置上传文件的时候是否每次都重新获取新的uptoken
		unique_names: true, // 默认false，key为文件名。若开启该选项，JS-SDK会为每个文件自动生成key（文件名）
		domain: 'ou5331fwu.bkt.clouddn.com', // bucket域名，下载资源时用到，必需
		container: b, // 上传区域DOM ID，默认是browser_button的父元素
		max_file_size: '100mb', // 最大文件体积限制
		max_retries: 3, // 上传失败最大重试次数
		dragdrop: true, // 开启可拖曳上传
		drop_element: b, // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
		chunk_size: '4mb', // 分块上传时，每块的体积
		auto_start: true, // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
		init: {
			'FilesAdded': function(up, files) {
				plupload.each(files, function(file) {
					// 文件添加进队列后，处理相关的事情
				});
			},
			'BeforeUpload': function(up, file) {
				// 每个文件上传前，处理相关的事情
			},
			'UploadProgress': function(up, file) {
				// 每个文件上传时，处理相关的事情

			},
			'FileUploaded': function(up, file, info) {
				//  			每个文件上传成功后， 处理相关的事情
				//  			其中info是文件上传成功后， 服务端返回的json， 形式如： {
				//  				"hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
				//  				"key": "gogopher.jpg"
				//  			}
				//  			查看简单反馈
				var domain = up.getOption('domain');
				var res = JSON.parse(info);
				var sourceLink = "http://" + domain + "/" + res.key;
				$('#'+c).attr('src', sourceLink)
				//  			获取上传成功后的文件的Url
			},
			'Error': function(up, err, errTip) {
				//上传出错时，处理相关的事情
				alert("文件上传出错");
			}
		}
	});
}