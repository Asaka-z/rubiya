var cat = (function(){
    var $tbody = document.querySelector('.tb');
    console.log($tbody);
    
    return{
        init(){
            this.getData();
            this.event()
        },
        event(){
            var _this = this;
            $tbody.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.className === 'close'){
                    var index = target.parentNode.parentNode.getAttribute('index');
                    console.log(index);
                    _this.data.splice(index,1);
                    _this.setData();
                    _this.insertData(_this.data)
                    

                    
                }
            }
            $tbody.addEventListener('input',function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.className === 'inp'){
                    var index = target.parentNode.parentNode.parentNode.getAttribute('index');
                    _this.data[index].count = target.value;
                    _this.setData();
                    _this.insertData(_this.data);
                    
                    
                }
            },false)
            $tbody.addEventListener('click',function(e){
                e = e || window.event;
                var target  = e.target || e.srcElement;
                if(target.className === 'cut'){
                    var index = target.parentNode.parentNode.parentNode.getAttribute('index');
                    _this.data[index].count --;
                    _this.setData();
                    _this.insertData(_this.data);
                    
                }
                if(target.className === 'add'){
                    var index = target.parentNode.parentNode.parentNode.getAttribute('index');
                    _this.data[index].count ++;
                    _this.setData();
                    _this.insertData(_this.data);
                }
            })
        },
        getData(){
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            console.log(shopList);
            this.insertData(shopList);
        },
        insertData(data){
            this.data =data;
            var $arr = [];
            for(var i = 0; i < data.length;i++){
                var item = data[i];
                $arr.push(`
                <tr index = ${i}>
                    <td><img src="${item.img}"></td>
                    <td class="productname">
                       <a target="_blank" class="pdt-title">${item.ps}</a>
                       
                    </td>
                    <td> ${item.price}</td>
                    <td>
                        <div class="btn-cnts"><span class="cut">-</span> <input class="inp" type="Number" maxlength="2" value = "${item.count}"> <span class="add">+</span></div>
                    </td>
                    <td class="sum" >
                        ${item.price}.00
                        
                    </td>
                    <td><span class="close">×</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td colspan="2" style="text-align: right; line-height: 1.8;">
                        <p>合计(不含运费):</p>
                    </td>
                    <td colspan="2" class="sum" style="text-align: left; line-height: 1.8;">
                        <p style="color: red;">￥${item.price * item.count}</p>
                    </td>
                </tr> 
                `);
            }
            $tbody.innerHTML = $arr.join('');
        },
        setData() {
            localStorage.shopList = JSON.stringify(this.data);
        }
    }
}())
cat.init();