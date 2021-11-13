var date = [{
    id:1,
    pname:'小米',
    price:3999
},
{
    id:2,
    pname:'oppo',
    price:2999
},
{
    id:3,
    pname:'华为',
    price:1999
},
{
    id:4,
    pname:'荣耀',
    price:999
}];

var tbody = document.querySelector('tbody');
var start = document.querySelector('.start');
var end = document.querySelector('.end');
var product = document.querySelector('.product');
var search_price = document.querySelector('.search-price');
var search_pro = document.querySelector('.search-pro');
//
toDate(date);
//渲染页面
function toDate(myDate){
    tbody.innerHTML = '';
    myDate.forEach(function(value){
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>'+ value.id +'</td><td>'+ value.pname +'</td><td>'+ value.price +'</td>';
        tbody.appendChild(tr);
    });
}

//搜索
search_price.addEventListener('click',function(){
    var newArr = date.filter(function(value){
        return value.price >= start.value && value.price <= end.value;
    })
    toDate(newArr);
});
search_pro.addEventListener('click',function(){
    var arr =[];
    date.some(function(value){
        if(value.pname === product.value){
            arr.push(value);
            return true;
        }
    });
    toDate(arr);
})
