
//有先后顺序问题 需要传一个集合（无序的集合） 用对象
function sendAjax(url, obj) {
    //给对象设置默认值
    var _default = {
        method: "get",
        data: null,
        success: undefined
    }
    //设置默认值
    for (var key in _default) {
        if (key in obj) {
            _default[key] = obj[key];
        }
    }
    //拼接url
    //先判断地址有没有问号
    _default.method = _default.method.toUpperCase();
    if (_default.method == 'GET') {
        let flag = url.indexOf("?") == -1 ? '?' : '&';
       url+=flag;
        for (var i in _default.data) {
            let keyValue=`${i}=${_default.data[i]}`;
            url+="&"+keyValue;
        }
        url=url.slice(0,url.length-1);
        console.log(url);
        //get请求发送为null
        _default.data=null;
    } else if (_default.method == "POST") {
        _default.data=JSON.stringify(_default.data);
    } else {
        return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open(_default.method, url, true);
    xhr.send(_default.date);
    xhr.onreadystatechange = function () {
        //xhr.readyState==4判断是否结束
        //xhr.status==200  判断是否成功
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = xhr.response;
            console.log(data);
            if (typeof obj.succsee == "function") {
                obj.succsee(date);
            }
        }

    }
}