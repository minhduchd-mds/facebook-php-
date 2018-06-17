!function ($) {

    "use strict"; // jshint ;_;

    var pluginName = 'portfilter';

    /* PUBLIC CLASS DEFINITION
     * ============================== */

    var PortFilter = function (element) {

        this.$element = $(element)
        this.stuff 	  = $('[data-tag]');
        this.target   = this.$element.data('target') || '';

    }

    PortFilter.prototype.filter = function (params) {
        var items = [],
            target = this.target;
        this.stuff
            .fadeOut('fast').promise().done(function(){
            $(this).each(function(){
                if($(this).data('tag') == target || target == 'all')
                    items.push(this);
            });
            $(items).show()
        });
    }


    /* PLUGIN DEFINITION
     * ======================== */

    var old = $.fn[pluginName]

    $.fn[pluginName] = function (option) {
        return this.each(function () {
            var $this = $(this)
                , data = $this.data(pluginName);

            if(!data) $this.data(pluginName, (data = new PortFilter(this)))

            if (option == 'filter') data.filter()
        })
    }

    // DEFAULTS
    $.fn[pluginName].defaults = {}

    // CONSTRUCTOR CONVENTION
    $.fn[pluginName].Constructor = PortFilter;


    /* PORTFILTER NO CONFLICT
     * ================== */

    $.fn[pluginName].noConflict = function () {
        $.fn[pluginName] = old
        return this
    }

    /* PORTFILTER DATA-API
     * =============== */

    $(document).on('click.portfilter.data-api', '[data-toggle^=portfilter]', function (e) {
        $(this).portfilter('filter')
    })
}(window.jQuery);

    //----------------------------set background-color box-chat

function myFunction(){
    var love = document.getElementById("set-background");
    love.style.backgroundImage = "url('3.gif')";
    love.style.backgroundSize = "100% 100%";

}
function myFunction1(){
    document.getElementById("set-background").style.background= "url('imager/bg/4.jpg')";
    document.getElementById("set-background").style.backgroundSize = "100% 100%";
}
function myFunction2(){
    document.getElementById("set-background").style.background= "url('imager/bg/17.jpg')";
    document.getElementById("set-background").style.backgroundSize = "100% 100%";
}
function myFunction3(){
    document.getElementById("set-background").style.background= "url('imager/bg/18.jpg')";
    document.getElementById("set-background").style.backgroundSize = "100% 100%";
}
function myFunction4(){
    document.getElementById("set-background").style.background= "url('imager/bg/6.jpg')";
    document.getElementById("set-background").style.backgroundSize = "100% 100%";
}
function myFunction5(){
    document.getElementById("set-background").style.background= "url('imager/bg/7.jpg')";
    document.getElementById("set-background").style.backgroundSize = "100% 100%";
}
function myFunction6(){
    document.getElementById("set-background").style.background= "url('imager/bg/8.jpg')";
    document.getElementById("set-background").style.backgroundSize = "100% 100%";
}
function myFunction7(){
    document.getElementById("set-background").style.background= "url('imager/bg/9.jpg')";
    document.getElementById("set-background").style.backgroundSize = "100% 100%";
}
function myFunction8(){
    document.getElementById("set-background").style.background= "url('imager/bg/10.jpg')";
    document.getElementById("set-background").style.backgroundSize = "100% 100%";
}
function myFunction9(){
    document.getElementById("set-background").style.background= "url('imager/bg/16.jpg')";
    document.getElementById("set-background").style.backgroundSize = "100% 100%";
}
function myFunction10(){
    document.getElementById("set-background").style.background= "url('imager/bg/12.jpg')";
    document.getElementById("set-background").style.backgroundSize = "100% 100%";
}
function myFunction11(){
    document.getElementById("set-background").style.background= "url('imager/bg/13.jpg')";
    document.getElementById("set-background").style.backgroundSize = "100% 100%";
}
function myFunction12(){
    document.getElementById("set-background").style.background= "url('imager/bg/14.jpg')";
    document.getElementById("set-background").style.backgroundSize = "100% 100%";
}
function myFunction13(){
    document.getElementById("set-background").style.background= "url('imager/bg/15.jpg')";
    document.getElementById("set-background").style.backgroundSize = "100% 100%";
}
//----------------------------set color box-chat
function edit_1(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var y  = document.querySelectorAll(".hover");
    var z  = document.querySelectorAll("i");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(0, 132, 255)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(0, 132, 255)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(0, 132, 255)";
    }

}
function edit_2(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var y  = document.querySelectorAll(".hover");
    var z  = document.querySelectorAll("i");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(68, 190, 199)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(68, 190, 199)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(68, 190, 199)";
    }
}
function edit_3(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var y  = document.querySelectorAll(".hover");
    var z  = document.querySelectorAll("i");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(255, 195, 0)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(255, 195, 0)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(255, 195, 0)";
    }
}
function edit_4(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var y  = document.querySelectorAll(".hover");
    var z  = document.querySelectorAll("i");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(250, 60, 76)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(250, 60, 76)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(250, 60, 76)";
    }
}
function edit_5(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var y  = document.querySelectorAll(".hover");
    var z  = document.querySelectorAll("i");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(214, 150, 187)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(214, 150, 187)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(214, 150, 187)";
    }
}
function edit_6(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var y  = document.querySelectorAll(".hover");
    var z  = document.querySelectorAll("i");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(102, 153, 204)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(102, 153, 204)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(102, 153, 204)";
    }
}
function edit_7(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var y  = document.querySelectorAll(".hover");
    var z  = document.querySelectorAll("i");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(19, 207, 19)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(19, 207, 19)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(19, 207, 19)";
    }

}
function edit_8(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var y  = document.querySelectorAll(".hover");
    var z  = document.querySelectorAll("i");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(255, 126, 41)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(255, 126, 41)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(255, 126, 41)";
    }
}
function edit_9(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var y  = document.querySelectorAll(".hover");
    var z  = document.querySelectorAll("i");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(230, 133, 133)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(230, 133, 133)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(230, 133, 133)";
    }
}
function edit_10(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var y  = document.querySelectorAll(".hover");
    var z  = document.querySelectorAll("i");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(118, 70, 255)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(118, 70, 255)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(118, 70, 255)";
    }
}
function edit_11(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var y  = document.querySelectorAll(".hover");
    var z  = document.querySelectorAll("i");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(103, 184, 104)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(103, 184, 104)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(103, 184, 104)";
    }
}
function edit_12(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(212, 168, 140)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(212, 168, 140)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(212, 168, 140)";
    }
}
function edit_13(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var y  = document.querySelectorAll(".hover");
    var z  = document.querySelectorAll("i");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(255, 92, 161)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(255, 92, 161)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(255, 92, 161)";
    }
}
function edit_14(){
    var x = document.querySelectorAll(".box-messnger-chat-use");
    var y  = document.querySelectorAll(".hover");
    var z  = document.querySelectorAll("i");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "rgb(166, 149, 199)";
        x[i].style.color ="#ffffff";
    }
    for(i = 0;i <y.length; i++)
    {
        y[i].style.border ="1px solid rgb(166, 149, 199)";
    }
    for(i = 0;i <z.length; i++)
    {
        z[i].style.color ="rgb(166, 149, 199)";
    }
}
//===========================  all left-id-photo ===================
function id_onkich(){
    id_onkich = id = id1 = id2 = id3 = id4;
    var id,id1,id2,id3,id4 = document.getElementById("photo-id").innerHT;
    id.style.backgroundSize = "62px 62px";
    id.style.float="right";
}

//==========================chat text demo=============================
