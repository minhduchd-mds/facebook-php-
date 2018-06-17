$(document).ready(function () {
    var Display = "https://1-dot-grabfood0.appspot.com/_api/v2/restaurants";
    var GetFood = "https://1-dot-grabfood0.appspot.com/_api/v2/foods?r=allfood&page=1&limit=60";
    var Get_ID  = "http://1-dot-grabfood0.appspot.com/_api/v2/foods?r=";
    LoadDisplay();
    Loadidall();
    Silder();
    function LoadDisplay() {
        $.ajax({
            url: Display,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                category ='';
                var categori = response.restaurant;
                for(var i = 0;i<categori.length;i++){
                    var name = categori[i].name;
                    var imagesUrl = categori[i].imagesUrl;
                    if(i <= 5){
                        category +='<div class="col-md-4 col-sm-4 col-xs-12 col-sp-12">' +
                            '                     <div class="card-hover mt-4 mb-4">' +
                            '                         <div class="card img-fluid">' +
                            '                             <a href="#"><img src=" '+ imagesUrl +'" class="card-img card-img-top"></a>' +
                            '                             <div class="card-img-overlay">' +
                            '                                 <h4 class="card-title">'+ name +'</h4>' +
                            '                             </div>' +
                            '                         </div>' +
                            '                     </div>' +
                            '                 </div>';
                    }

                }
                $('#get').html(category);
            },
        });
    }
    function Loadidall() {
        $.ajax({
            url: GetFood,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                categori ='';
                var listfood = response.listFood;
                for(var i = 0;i< listfood.length;i++){
                    var id =  listfood[i].id;
                    var usernameRestaurant =  listfood[i].usernameRestaurant;
                    var name =  listfood[i].name;
                    var unitPrice =  listfood[i].unitPrice;
                    var image =  listfood[i].imagesUrl;
                    categori +='<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-4">' +
                        '                            <div class="card">' +
                        '                                <img class="card-img-top img-fixd" src="'+image+'" alt=" '+ name +'">' +
                        '                                <div class="card-body">' +
                        '                                    <h6 class="card-title">'+name+'</h6>' +
                        '                                    <p class="card-text picer">'+formatNumber (unitPrice) +' đ </p>' +
                        '                                    <a href="#" onclick="showModel('+ id +')" class="btn btn-primary">Đặt giao hàng</a>' +
                        '                                </div>' +
                        '                            </div>' +
                        '                        </div>' ;
                }
                function formatNumber (unitPrice) {
                    return unitPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                }
                $('.shoping').html(categori);
            },
        });
    }
    function Silder() {

    }
});