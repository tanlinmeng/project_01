function resolveData(date){
    var arr = [];
    for( var k in date){
        var str = k + '=' + date[k];
        arr.push(str)
    }
    return arr.join('&')
}
// var text = resolveData({name : '张三',age:13});
// console.log(text);
function itheima(options){
    var xhr = new XMLHttpRequest();
    var qs = resolveData(options.date);
    if(options.method.toUpperCase() === 'GET'){
        xhr.open('get',options.url+ '?'+qs);
        xhr.send();
    }else if(options.method.toUpperCase() === 'POST'){
        xhr.open('post',options.url);
        xhr.setRequestHeader('content-Type','application/x-www-form-urlencoded')
        xhr.send(qs);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}