;
(function ($) {
    $.fn.extend({
        jQuerySelect: function (param) {
            let ID = "#" + param.id;
            let appendHtmlId = param.id + parseInt(Math.random() * (1000001));
            let options = param.data ? param.data : [{
                    "label": "test1",
                    "value": "1233"
                },
                {
                    "label": "test2",
                    "value": "1234"
                },
                {
                    "label": "test3",
                    "value": "1234"
                },
                {
                    "label": "test4",
                    "value": "1236"
                },
            ];
            $(ID).next("div").remove();
            $(ID).hide();
            

            let str = `<div id='${appendHtmlId}' class='w-full h-full relative'>` 
                +`<div class='items-center justify-start w-full h-full flex public-select-input ${param.id}' >` 
                +`<input placeholder="请选择" readonly="readonly" type='text' class="w-full h-full public-input" style="cursor: pointer;width:100%;background-color: transparent;">` 
                +`<i class='down'><svg t="1655707127099" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="38364" width="200" height="200">`
                +`<path d="M543.744 647.68c-7.168 7.168-16.896 13.824-26.112 11.776-9.216 1.536-17.92-5.632-25.088-11.776L270.848 424.96c-11.264-11.264-11.264-29.696 0-40.96s29.696-11.264 40.96 0l206.336 211.968L724.992 384c11.264-11.264 29.696-11.264 40.96 0s11.264 29.696 0 40.96L543.744 647.68z" fill="" p-id="38365"></path></svg></i></div>`
                +`<ul class='public-select-ul hidden mt-1 absolute w-full'>`;
            options.map(item => {
                str += `<li class='h-6 text-base text-black public-li' data-val='${item.value}'>${item.label}</li>`
            })
            str += '</ul></div>';
            // $("ul.public-select-ul").hide();
            // $("#"+appendHtmlId).find("ul.public-select-ul").show();
            $(ID).after(str);
            if(options.length==0){
                $("#" + appendHtmlId).find("ul").html("<p class='public-select-noData h-5 leading-5 text-center text-slate-300' >暂无数据</p>")
            }
            //切换下拉后面图标和隐下拉内容
            $("#" + appendHtmlId).on("click",".public-select-input", function () {
                $(document).find("ul.public-select-ul").hide(200);
                if ($(this).find("i").hasClass('down')) {
                    $(document).find(".public-select-input i").removeClass("up").addClass("down");
                    $("#" + appendHtmlId).find("i").removeClass('down').addClass('up')
                    $("#" + appendHtmlId).find("ul").show(200);
                } else if($(this).find("i").hasClass('up')) {
                    $(document).find(".public-select-input i").removeClass("up").addClass("down");
                    $("#" + appendHtmlId).find("i").removeClass('up').addClass('down');
                    $("#" + appendHtmlId).find("ul").hide(200)
                }
            })
            // 给input  select 赋值
            $("#" + appendHtmlId).on("click", 'li', function () {
                let val = $(this).data('val');
                let name =  $(this).text();
                $(this).siblings("li").removeClass("hover");
                $(this).addClass("hover");
                $("#" + appendHtmlId).find("input").val($(this).text());
                $("#" + param.id).val($(this).text());
                $("#" + appendHtmlId).find("ul").hide(200);
                $(document).find(".public-select-input i").removeClass("up").addClass("down");
                if(jQuery.type(param.onSelect) === 'function'){
                    param.onSelect(val,name)
                }
            })
            //点击其他关闭
            $("body").click(function (e) {
                if (!$(e.target).closest(".public-select-ul,.public-select-input").length) {
                    $('#' + appendHtmlId).find("ul").hide();
                    $(document).find(".public-select-input i").removeClass("up").addClass("down");
                }
            });

        },
        //弹框
        toolTip: function (param) {
            let title = param.title?param.title:"提示框";
            let isHtml =  param.hasOwnProperty('innerHTML') ? param.innerHTML : false;
            let confirm = document.createElement('div');
            confirm.setAttribute('style', 'position:fixed;top:0;left:0;width: 100%;height: 100%;z-index:99;background-color: rgba(0, 0, 0,0.3);');
            $(confirm).addClass('confirmkuang');
            $(confirm).html(
                `<div class="addson bottom-14" `
                    +`style="`
                    +`opacity:0;`
                    +`position:absolute;`
                    +`top:45%;`
                    +`left:50%;`
                    +`transform: translate(-50%, -50%);`
                    +`z-index: 100;`
                    +`width:${param.width?param.width:'25rem'};`
                    +`height:${param.height?param.height:'25rem'};`
                    +`margin:auto;`
                    +`background:#fff;`
                    +`border-radius:2px;`
                    +`color: #000;`
                    +`-moz-box-shadow:0px 0px 14px #858585;`
                    +`-webkit-box-shadow:0px 0px 14px #858585;`
                    +`box-shadow:0px 0px 14px #858585;">`
                    +`<div class='public-tip-header h-10 pr-9 pl-5 leading-10 text-14 overflow-hidden text-ellipsis whitespace-nowrap relative'`
                        +`style="border-bottom: 1px solid #eee;color: #333;background-color: #F8F8F8;border-radius: 2px 2px 0 0;">`
                        +`<span class="public-tip-title text-16 text-black-percent-85 w-full">提示框</span>`
                        +`<span style="position: absolute;right:1rem;cursor:pointer;font-family:initial" class="text-16 closealter">&#10006</span>`
                    +`</div>`
                    +`<div class="public-tip-content box-border absolute w-full text-16 overflow-x-hidden overflow-y-auto top-10"></div>`
                    +`<div class='public-tip-footer absolute h-12 bottom-0 w-full lg:h-16 lg:leading-normal' style="text-align: right;line-height:3rem">`
                        +`<button class="btn btn-primary mr-4 h-8 lg:h-10 leading-8 lg:leading-10 btn-sm addConfirm">确认</button>`
                        +`<button class="btn btn-secondary mr-4 h-8 lg:h-10 leading-8 lg:leading-10 btn-sm closealter">取消</button>`
                    +`</div>`
                +`</div>`
            )
            $("body").append(confirm);
            let contentHeight = $(".addson").height()-$(".public-tip-footer").height()-$(".public-tip-header").height();
                console.log(contentHeight)
            $(".public-tip-content").height(contentHeight+"px").addClass("p-4")

            if(isHtml){
                $(".public-tip-title").html(param.title)
                $(".public-tip-content").html(param.content)
            }else{
                $(".public-tip-title").text(param.title)
                $(".public-tip-content").text(param.content)
            }
            $('.addson').animate({
                'opacity': '1'
            }, 400)
            $('.addConfirm').on('click', function () {
                $('.addson').animate({
                    'opacity': '0'
                }, 400)
                if (param.confirm) {
                    param.confirm();
                }
                setTimeout(function () {
                    $('.confirmkuang').remove()
                }, 400)
            })
            $('.closealter').on('click', function (event) {
                $('.addson').animate({
                    'opacity': '0'
                }, 400)
                if (param.cancel) {
                    param.cancel();
                }
                setTimeout(function () {
                    $('.confirmkuang').remove()
                }, 400)
            })
        }
    });
})(jQuery);