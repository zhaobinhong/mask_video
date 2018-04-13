var isSub = true;
var ua = navigator.userAgent.toLowerCase();

/* 订单 */
var html_txt = '    <a href="#" id="oder_close" class="close"><span class="close_span">✕</span> &nbsp;关闭</a>\n' +
    '    <div class="body-content">\n' +
    '        <h5><img width="100%" src="img/oder_title.png" alt=""></h5>\n' +
    '        <div class="item">\n' +
    '            <label>姓名</label>\n' +
    '            <input class="xing" name="name" type="text" oninput="limitLength(this.value,10)">\n' +
    '        </div>\n' +
    '        <div class="item">\n' +
    '            <label>称谓</label>\n' +
    '            <input type="radio" name="xing" value="10031001" checked="checked">先生\n' +
    '            <input type="radio" name="xing" value="10031002">女士\n' +
    '        </div>\n' +
    '        <div class="item">\n' +
    '            <label>手机</label>\n' +
    '            <input class="shouji" name="phone" type="text" maxlength="11">\n' +
    '        </div>\n' +
    '        <div class="item">\n' +
    '            <label>省市</label>\n' +
    '            <select class="shenfen" name="prov" placeholder="请选择省份">\n' +
    '\n' +
    '            </select>\n' +
    '            <select class="shi" name="city" placeholder="请选择城市">\n' +
    '\n' +
    '            </select>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="item">\n' +
    '            <label>首选经销商</label>\n' +
    '            <select class="jxs" name="custom" placeholder="请选择省份">\n' +
    '                <option value="">请选择经销商</option>\n' +
    '                <option value="CCN0BVT">新疆天恒基谛艾仕汽车销售服务有限公司</option>\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div class="item check">\n' +
    '            <p>\n' +
    '                <span><i></i></span>\n' +
    '                已阅读并接受\n' +
    '            </p>\n' +
    '            <a id="pzb" data-act="statement" href="#">《数据使用声明》</a>\n' +
    '        </div>\n' +
    '        <div class="desc">\n' +
    '            长安PSA汽车有限公司保证所有个人数据都将按照隐私保护规定进行处理。在您许可的情况下，您在联系表格中所提供的数据将被保留和进行相应处理。\n' +
    '            <br>\n' +
    '            本人在此同意此表格的信息可由长安PSA汽车有限公司及其授权经销商共享，并可由长安PSA汽车有限公司及授权经销商用于其正常的商业活动，包括但不限于根据本人所提供的信息，通过电话，手机，电子邮件，信件及其他合理方式与本人联系。\n' +
    '        </div>\n' +
    '        <div class="item btn">\n' +
    '            <a data-act="order1" class="confirm" href="#">提交资料</a>\n' +
    '        </div>\n' +
    '    </div>';


function order_list() {
    if (document.getElementById('oders')) {
        alert('请勿重复点击');
    } else {
        var oder_box = document.createElement('div');

        var body = document.getElementsByTagName('body')[0];
        body.appendChild(oder_box)
        oder_box.id = 'oders';
        oder_box.className = 'oders';
        oder_box.innerHTML = html_txt;
        dsSelect.init(".shenfen", ".shi", ".jxs");

        $('[data-act=order1]').on("click", method.form);

        var oder_close = document.getElementById('oder_close');
        oder_close.onclick = function () {
            od = document.getElementById('oders');
            body.removeChild(od)
        }

        //阅读声明
        $(".check p span").click(function () {
            if (isSub) {
                $(this).children("i").hide();
            } else {
                $(this).children("i").show();
            }
            isSub = !isSub;
            // console.log(isSub)
        })
    }

}


/*  订单创建end */


// if (/iphone/.test(ua)) {
//     window.location.href = "wap/" + window.location.search
// } else if (/android/.test(ua)) {
//     window.location.href = "wap/" + window.location.search
// } else {


// var _smq = _smq || [];
//
// _smq.push(['_setAccount', '85328ed5', new Date()]);
// _smq.push(['pageview']);
//
// (function () {
//     var sm = document.createElement('script');
//     sm.type = 'text/javascript';
//     sm.async = true;
//     sm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'site.cdnmaster.cn/sitemaster/collect.js';
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(sm, s);
// })();
// // }
// var utm_source = request('utm_source');
// var utm_medium = request('utm_medium');
// if (utm_source) cookieSet('utm_source', utm_source, 864000000);
// if (utm_medium) cookieSet('utm_medium', utm_medium, 864000000);

function request(_para) {
    var tmpstr = '';
    var tpara = _para;
    var tstrers = location.href;
    var tiname, tivalue, ticount;
    var tinum = tstrers.indexOf('?');
    tstrers = tstrers.substr(tinum + 1);
    var tarrtmp = tstrers.split('&');
    for (ticount = 0; ticount < tarrtmp.length; ticount++) {
        tinum = tarrtmp[ticount].indexOf('=');
        if (tinum > 0) {
            tiname = tarrtmp[ticount].substring(0, tinum);
            tivalue = tarrtmp[ticount].substr(tinum + 1);
            if (tpara == tiname) tmpstr += tivalue + ',';
        }
        ;
    }
    ;
    if (tmpstr != '') tmpstr = tmpstr.substr(0, tmpstr.length - 1);
    return tmpstr;
}

function cookieSet(_name, _value, _expire) {
    var tname = _name;
    var tvalue = _value;
    var texpire = _expire;
    var tCookieString = tname + '=' + encodeURIComponent(tvalue);
    if (texpire > 0) {
        var tCurrentDate = new Date();
        tCurrentDate.setTime(tCurrentDate.getTime + texpire);
        tCookieString = tCookieString + "; expires=" + tCurrentDate.toGMTString();
    }
    ;
    document.cookie = tCookieString;
}

function cookieGet(_name) {
    var tname = _name;
    var tCookie = document.cookie;
    var tCookieValue = '';
    var tCookieArray = tCookie.split('; ');
    for (var ti = 0; ti < tCookieArray.length; ti++) {
        var tCookieString = tCookieArray[ti].split('=');
        if (tCookieString.length == 2) {
            if (tname == tCookieString[0]) {
                tCookieValue = decodeURIComponent(tCookieString[1]);
                break;
            }
            ;
        }
        ;
    }
    ;
    return tCookieValue;
}

var $stage = $('#stage');
var $dialog = $('#dialog');
var currentIndex = 0;
var ANIM_TIMER = 500;
var IS_RUN = false;
var sceneNum = $stage.find('.scene').length;
var ismsg = true;
var config = {
    ahead_url: 'https://ds.tmall.com/shop/view_shop.htm'
}

var h = document.documentElement.clientHeight || document.body.clientHeight;

var ua = navigator.userAgent.toLowerCase();

function init() {
    $.fn.run = $.fn.velocity;
    _init.menu();
    _init.event();
    _init.page();
    _init.dialog();
    //page.show(window.location.hash.replace('#', ''));
}

var _init = {
    menu: function () {
        var html = '';
        var count = sceneNum - 3;
        // console.log(count)
        for (var i = 0; i < count; i++) {
            html += '<p></p>';
        }
        $('#menu').html(html);
    },
    event: function () {

        $stage.find('.scene').eq(0).find('.next').on('click', function (e) {
            e.preventDefault();
            page.show(1);
        });

        $stage.find('.scene').eq(1).find('.next').on('click', function (e) {
            e.preventDefault();
            page.show(2);
        });
        $stage.find('.scene').eq(2).find('.next').on('click', function (e) {
            e.preventDefault();
            page.show(3);
        });
        $stage.find('.scene').eq(3).find('.next').on('click', function (e) {
            e.preventDefault();
            page.show(4);
        });
        $stage.find('.scene').eq(4).find('.next').on('click', function (e) {
            e.preventDefault();
            page.show(5);
        });
        $stage.find('.scene').eq(5).find('.next').on('click', function (e) {
            e.preventDefault();
            page.show(6);
        });
        $stage.find('.scene').eq(6).find('.next').on('click', function (e) {
            e.preventDefault();
            page.show(7);
        });
        $stage.find('.scene').eq(7).find('.next').on('click', function (e) {
            e.preventDefault();
            page.show(8);
        });
        $stage.find('.scene').eq(8).find('.next').on('click', function (e) {
            e.preventDefault();
            page.show(9);
        });
        $stage.find('.scene').eq(9).find('.next').on('click', function (e) {
            e.preventDefault();
            page.show(10);
        });

        $('body').bind('touchstart', function (e) {
            startX = e.originalEvent.changedTouches[0].pageX;
            startY = e.originalEvent.changedTouches[0].pageY;
        });

        $(".touch").bind("touchmove", function (e) {
            //获取滑动屏幕时的X,Y
            endX = e.originalEvent.changedTouches[0].pageX;
            endY = e.originalEvent.changedTouches[0].pageY;
            //获取滑动距离
            distanceX = endX - startX;
            distanceY = endY - startY;

            //判断滑动方向
            if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 0) {
                // console.log('往右滑动');
            } else if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX < 0) {
                // console.log('往左滑动');
            } else if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY < 0) {
                // console.log('往上滑动');
                n = currentIndex + 1
                if (n >= 11) {
                    return false
                }
                page.show(n);

            } else if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY > 0) {
                // console.log('往下滑动');
                n = currentIndex - 1
                if (n < 0) {
                    return false
                }
                page.show(n);

            }
        })

        $(document).on('mousewheel keyup', function (e) {
            if (IS_RUN) return;
            if (e.keyCode && (e.keyCode === 38 || e.keyCode === 40)) {
                var next = e.keyCode === 40 ? currentIndex + 1 : currentIndex - 1;
                if (next >= 0 && next < sceneNum) {
                    if (next < currentIndex && next === 1) {
                        next = 0;
                    }
                    page.show(next);
                }
            }
            if (e.deltaY) {
                var next = e.deltaY < 0 ? currentIndex + 1 : currentIndex - 1;
                if (next >= 0 && next < sceneNum) {
                    if (next < currentIndex && next === 1) {
                        next = 0;
                    }
                    page.show(next);
                }
            }
        })
    },
    dialog: function () {
        $('[data-act=order]').on('click', method.order);
        $('[data-act=video]').on('click', method.video);
        $('#dialog .close').on('click', method.close);
        $('[data-act=s2]').on('click', method.s2);
        $('[data-act=s2video]').on('click', method.s2video);
        $('[data-act=s3]').on('click', method.s3);
        $('[data-act=s4]').on('click', method.s4);
        $('[data-act=s4video]').on('click', method.s4video);
        $('[data-act=s5]').on('click', method.s5);
        $('[data-act=s5video]').on('click', method.s5video);
        $('[data-act=s6]').on('click', method.s6);
        $('[data-act=s7]').on('click', method.s7);
        $('[data-act=s7video]').on('click', method.s7video);
        $('[data-act=s8]').on('click', method.s8);
        $('[data-act=s8video]').on('click', method.s8video);
        $('[data-act=s9]').on('click', method.s9);
        $('[data-act=s9video]').on('click', method.s9video);
        $('[data-act=feature]').on('click', method.feature);
        $('[data-act=order1]').on("click", method.form);
        $('#returnTop').on("click", method.returnTop);
        $('.bb-close').on("click", method.bbClose);
        $('.btnLeft').hover(method.menuShow, method.menuHide);
        $("#menu p").on("click", method.anch);
        $(".f-pagination span").on("click", method.pagActive)
        // $('.btnLeft').on("mouseover",".menu-hover",method.menuShow);
        // $('.btnLeft').on("mouseout",method.menuHide);

    },
    page: function () {
        $('[data-act=ahead]').attr('href', config.ahead_url);
        $('[data-cmp=tab]').find('.tab a').on('click', function (e) {
            e.preventDefault();
            var index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $(this).parent().parent().find('>.con >div').eq(index).show().siblings("div").hide();
        });
        $('[data-cmp=tab2]').find('.tab a').on('click', function (e) {
            e.preventDefault();
            var index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $(this).parent().parent().find('>.con >div').eq(index).show().siblings("div").hide();
            if ($(this).parent().hasClass("f-tap1")) {
                $(".f-pagination").eq(0).children("span").eq(index).addClass("active").siblings().removeClass("active")
            }
            if ($(this).parent().hasClass("f-tap2")) {
                $(".f-pagination").eq(1).children("span").eq(index).addClass("active").siblings().removeClass("active")
            }
            if ($(this).parent().hasClass("f-tap3")) {
                $(".f-pagination").eq(2).children("span").eq(index).addClass("active").siblings().removeClass("active")
            }
        })
    }
}

var starBool = false;

var method = {
    pagActive: function () {
        var index = $(this).index();
        if ($(this).parents(".con").hasClass("f1")) {
            $(".f-tap1").children("a").eq(index).addClass("active");
            $(".f-tap1").children("a").eq(index).siblings().removeClass("active");
        }
        if ($(this).parents(".con").hasClass("f2")) {
            $(".f-tap2").children("a").eq(index).addClass("active");
            $(".f-tap2").children("a").eq(index).siblings().removeClass("active");
        }
        if ($(this).parents(".con").hasClass("f3")) {
            $(".f-tap3").children("a").eq(index).addClass("active");
            $(".f-tap3").children("a").eq(index).siblings().removeClass("active");
        }
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents(".con").children("div").eq(index).siblings("div").hide();
        $(this).parents(".con").children("div").eq(index).show();
    },
    anch: function () {
        if (!$(this).hasClass("active")) {
            page.show($(this).index() + 2)
        }
    },
    bbTest: function () {
        event.preventDefault();
        console.log($(this)[0].children[0])
    },
    menuShow: function () {
        console.log($(this))
        $(this).find('.config-nav').slideDown(500);
    },
    menuHide: function () {
        console.log('menuHide', $(this))
        $(this).find('.config-nav').slideUp(50);
    },
    returnTop: function () {
        page.show(0);

    },
    bbClose: function () {
        IS_RUN = false;
        $(".block_box").addClass('none')
    },
    form: function () {

        var name = $(".xing").val();
        var xing = $("input[name='xing']:checked").val();
        var shouji = $(".shouji").val();
        var shi = $(".shi").val();
        var jxs = $(".jxs").val();
        var phonefun = function (pone) {
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(pone)) {
                return false;
            } else {
                return true;
            }
        }
        if (ismsg) {
            if (name == "") {
                alert("请填写姓名")
                return false;
            }
            if (shouji == "") {
                alert("请填写手机")
                return false;
            }
            if (!phonefun(shouji)) {
                alert("请填写正确的手机")
                return false;
            }
            if (jxs == "") {
                alert("请选择经销商");
                return false;
            }
            if (!isSub) {
                alert("请阅读数据使用说明");
                return false;
            }
            ismsg = false;
            $.ajax({
                url: hostname + 'reserve.php',
                type: "post",
                dataType: "json",
                data: {
                    "name": name,
                    "gender": xing,
                    "phone": shouji,
                    "tda_dealer": jxs,
                    "tda_dealer_city": shi,
                    "media_source": cookieGet('utm_source'),
                    "sub_media_source": cookieGet('utm_medium')
                },
                success: function (msg) {
                    console.log(msg)
                    ismsg = true;
                    if (msg.code == 0) {
                        _smq.push(['custom', '即刻预约', '预约试驾', msg.user_id]);
                        setTimeout(function () {
                            alert("预约成功");
                            $(".xing").val(" ");
                            $(".shouji").val(" ");
                            $(".shi").val(" ");
                            $(".jxs").val(" ")
                        }, 1000)
                    } else {
                        alert("提交失败")
                    }
                }
            })
        }
    },
    order: function (e) {
        IS_RUN = true;
        e && e.preventDefault && e.preventDefault();
        $dialog.show();
        $dialog.find('.order').show().siblings().hide();
    },
    video: function (e) {
        IS_RUN = true;

        e && e.preventDefault && e.preventDefault();
        $dialog.fadeIn(300);
        // if (!isWeiXin()) {
        // if (/android/.test(ua)) {
        //     $dialog.style.display = 'block';
        //     $dialog.find('.video video').get(0).style.width = '100%'
        //     $dialog.find('.video.wrap').show().siblings().hide();
        //     $('#dialog').hide()
        //     $dialog.find('.video video').get(0).play();
        // }else {
        //     $dialog.find('.video.wrap').show().siblings().hide();
        //     $('#dialog').hide()
        //     $dialog.find('.video video').get(0).play();
        // }
        // }else {
        $dialog.find('.video.wrap').show().siblings().hide();
        $('#dialog').hide()
        $dialog.find('.video video').get(0).play();
        // }


        _smq.push(['custom', '播放视频', '点击按钮', 'pc-site']);
        // $('.block_box').removeClass('none');
    },
    close: function (e) {
        alert(2222)
        IS_RUN = false;
        e && e.preventDefault && e.preventDefault();
        $dialog.hide();
        $dialog.find('.wrap').hide();
        $("#sm").fadeOut();
        $(".btnLeft").fadeIn();
        $dialog.find('video').each(function (index, item) {
            item.pause();
        });
        if ($(this).data('open')) {
            method[$(this).data('open')]();
        }
    },
    s2: function (e) {
        IS_RUN = true;
        e && e.preventDefault && e.preventDefault();
        $dialog.show();
        $dialog.find('.s2').show().siblings().hide();
    },
    s2video: function () {
        $dialog.find('.wrap.s2 .close').trigger('click');
        $dialog.show();
        $dialog.find('.s2video').show().siblings().hide();
        $dialog.find('.s2video video').get(0).play();
        _smq.push(['custom', '播放视频', '点击按钮', 'pc-LED']);
    },
    s3: function (e) {
        e.preventDefault();
        IS_RUN = true;
        e && e.preventDefault && e.preventDefault();
        $dialog.show();
        $dialog.find('.s3').show().siblings().hide();
    },
    s4: function (e) {
        IS_RUN = true;
        e && e.preventDefault && e.preventDefault();
        $dialog.show();
        $dialog.find('.s4').show().siblings().hide();
    },
    s4video: function () {
        $dialog.find('.wrap.s4 .close').trigger('click');
        $dialog.show();
        $dialog.find('.s4video').show().siblings().hide();
        $dialog.find('.s4video video').get(0).play();
    },
    s5: function (e) {
        IS_RUN = true;
        e && e.preventDefault && e.preventDefault();
        $dialog.show();
        $dialog.find('.s5').show().siblings().hide();
    },
    s5video: function () {
        $dialog.find('.wrap.s5 .close').trigger('click');
        $dialog.show();
        $dialog.find('.s5video').show().siblings().hide();
        $dialog.find('.s5video video').get(0).play();
        _smq.push(['custom', '播放视频', '点击按钮', 'pc-驾驶员注意力辅助']);
    },
    s6: function (e) {
        e.preventDefault();
        IS_RUN = true;
        e && e.preventDefault && e.preventDefault();
        $dialog.show();
        $dialog.find('.s6').show().siblings().hide();
    },
    s7: function (e) {
        IS_RUN = true;
        e && e.preventDefault && e.preventDefault();
        $dialog.show();
        $dialog.find('.s7').show().siblings().hide();
    },
    s7video: function () {
        $dialog.find('.wrap.s7 .close').trigger('click');
        $dialog.show();
        $dialog.find('.s7video').show().siblings().hide();
        $dialog.find('.s7video video').get(0).play();
        _smq.push(['custom', '播放视频', '点击按钮', 'pc-DS魔毯主动液压悬架']);
    },
    s8: function (e) {
        IS_RUN = true;
        e && e.preventDefault && e.preventDefault();
        $dialog.show();
        $dialog.find('.s8').show().siblings().hide();
    },
    s8video: function () {
        $dialog.find('.wrap.s8 .close').trigger('click');
        $dialog.show();
        $dialog.find('.s8video').show().siblings().hide();
        $dialog.find('.s8video video').get(0).play();
        _smq.push(['custom', '播放视频', '点击按钮', 'pc-DS夜视系统']);
    },
    s9: function (e) {
        IS_RUN = true;
        e && e.preventDefault && e.preventDefault();
        $dialog.show();
        $dialog.find('.s9').show().siblings().hide();
    },
    s9video: function () {
        $dialog.find('.wrap.s9 .close').trigger('click');
        $dialog.show();
        $dialog.find('.s9video').show().siblings().hide();
        $dialog.find('.s9video video').get(0).play();
    },
    feature: function (e) {
        IS_RUN = true;
        e && e.preventDefault && e.preventDefault();
        $dialog.show();
        // $(".btnLeft").fadeOut();
        $dialog.find('.feature').show().siblings().hide();
    }
}


var page = {
    show: function (nIdx) {
        if (IS_RUN) return;
        IS_RUN = true;
        // console.log(nIdx);
        var _scale = 1;
        if (nIdx == 0 || nIdx == 10) {
            _scale = 1;
        } else {
            _scale = window.innerHeight < 768 ? ".8" : "1";
        }
        if (nIdx > 0 && nIdx < 4) {

            _scale = 1;
        }
        var $current = $stage.find('.scene').eq(currentIndex);
        var $next = $stage.find('.scene').eq(nIdx);
        $current.removeClass('show').run({
            translateY: nIdx > currentIndex ? '-100%' : '100%',
        }, {
            duration: ANIM_TIMER,
            complete: function () {
                page['hide_' + currentIndex] && page['hide_' + currentIndex]();
            }
        });
        $next.addClass('show').run({
            translateY: nIdx > currentIndex ? '100%' : '-100%',
        }, {
            duration: 0
        }).run({
            translateY: '0',
            scale: _scale
        }, {
            duration: ANIM_TIMER,
            complete: function () {
                page['show_' + nIdx] && page['show_' + nIdx](function () {
                });
            }
        });
        setTimeout(function () {
            IS_RUN = false;
            currentIndex = nIdx;
        }, 1500);
        page.checkPage(nIdx);
    },
    checkPage: function (idx) {
        var current = idx - 2;
        $('#menu').find('p').eq(current).addClass('active').siblings().removeClass('active');
        if (idx > 1 && idx < sceneNum - 1) {
            $('#menu').addClass('show');
        } else {
            $('#menu').removeClass('show');
        }
    },
    show_0: function (next) {
        $('#header').removeClass('show');
        next && next();
    },
    show_1: function (next) {
        $('#header').addClass('show');
        var $page = $stage.find('.scene').eq(1);
        var $t1 = $page.find('.t1');
        // var $t2 = $page.find('.t2');
        var $video = $page.find('video');
        $video.get(0).load();
        var utime = 2000;
        $t1.run('fadeIn', {
            duration: utime,
            delay: utime / 5,
            complete: function () {
                $t1.run('fadeOut', {
                    duration: utime,
                    delay: utime / 2,
                    complete: function () {
                        page.show(2);
                    }
                });
            }
        })
    },
    show_2: function (next) {
        var $page = $stage.find('.scene').eq(2);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        $video.get(0).load();
        var utime = 1500;
        $t1.run({
            opacity: 1,
            marginTop: '-16%'
        }, {
            duration: utime / 2
        });
        $video.on('ended', function () {
            next && next();
            $sign.addClass('show');
        });
        $video.run('fadeIn', {
            duration: utime / 3,
            delay: utime / 3
        }).get(0).play();
    },
    show_3: function (next) {
        if (/ipad|ipod/.test(ua)) {
            t = '-42%';
        } else {
            t = '-18%';
        }
        var $page = $stage.find('.scene').eq(3);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        $video.get(0).load();
        var utime = 1500;
        $t1.run({
            opacity: 1,
            marginTop: t
        }, {
            duration: utime / 2
        });
        $video.on('ended', function () {
            next && next();
            $sign.addClass('show');
        });
        $video.run('fadeIn', {
            duration: utime / 3,
            delay: utime / 3
        }).get(0).play();
    },
    show_4: function (next) {
        if (/ipad|ipod/.test(ua)) {
            t = '-45%';
        } else {
            t = '-25%';
        }
        var $page = $stage.find('.scene').eq(4);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        $video.get(0).load();
        var utime = 1500;
        $t1.run({
            opacity: 1,
            marginTop: t
        }, {
            duration: utime / 2
        });
        $video.on('ended', function () {
            next && next();
            $sign.addClass('show');
        });
        $video.run('fadeIn', {
            duration: utime / 3,
            delay: utime / 3
        }).get(0).play();
    },
    show_5: function (next) {
        if (/ipad|ipod/.test(ua)) {
            t = '-53%';
        } else {
            t = '-30%';
        }
        var $page = $stage.find('.scene').eq(5);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        $video.get(0).load();
        var utime = 1500;
        $t1.run({
            opacity: 1,
            marginTop: t
        }, {
            duration: utime / 2
        });
        $video.on('ended', function () {
            next && next();
            $sign.addClass('show');
        });
        $video.run('fadeIn', {
            duration: utime / 3,
            delay: utime / 3
        }).get(0).play();
    },
    show_6: function (next) {
        if (/ipad|ipod/.test(ua)) {
            t = '-50%';
            // }else if(h <= 821) {
            //     // console.log(h)
            //     // t = '-47%'
            //     // console.log(t)
            //
        } else {
            t = '-30%';
        }


        var $page = $stage.find('.scene').eq(6);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        $video.get(0).load();
        var utime = 1500;
        $t1.run({
            opacity: 1,
            marginTop: t
        }, {
            duration: utime / 2
        });
        $video.on('ended', function () {
            next && next();
            $sign.addClass('show');
        });
        $video.run('fadeIn', {
            duration: utime / 3,
            delay: utime / 3
        }).get(0).play();
    }
    ,
    show_7: function (next) {
        if (/ipad|ipod/.test(ua)) {
            t = '-45%';
        } else {
            t = '-28%';
        }
        var $page = $stage.find('.scene').eq(7);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        $video.get(0).load();
        var utime = 1500;
        $t1.run({
            opacity: 1,
            marginTop: t
        }, {
            duration: utime / 2
        });
        $video.on('ended', function () {
            next && next();
            $sign.addClass('show');
        });
        $video.run('fadeIn', {
            duration: utime / 3,
            delay: utime / 3
        }).get(0).play();
    }
    ,
    show_8: function (next) {
        if (/ipad|ipod/.test(ua)) {
            t = '-45%';
        } else {
            t = '-20%';
        }
        var $page = $stage.find('.scene').eq(8);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        $video.get(0).load();
        var utime = 1500;
        $t1.run({
            opacity: 1,
            marginTop: t
        }, {
            duration: utime / 2
        });
        $video.on('ended', function () {
            next && next();
            $sign.addClass('show');
        });
        $video.run('fadeIn', {
            duration: utime / 3,
            delay: utime / 3
        }).get(0).play();
    }
    ,
    show_9: function (next) {
        var $page = $stage.find('.scene').eq(9);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        $video.get(0).load();
        var utime = 1500;
        $t1.run({
            opacity: 1,
            marginTop: '-20%'
        }, {
            duration: utime / 2
        });
        $video.on('ended', function () {
            next && next();
            $sign.addClass('show');
        });
        $video.run('fadeIn', {
            duration: utime / 3,
            delay: utime / 3
        }).get(0).play();
    }
    ,
    show_10: function (next) {
        next && next();
    }
    ,
    hide_1: function () {
        var $page = $stage.find('.scene').eq(1);
        var $t1 = $page.find('.t1');
        var $t2 = $page.find('.t2');
        var $video = $page.find('video');
        $video.run('stop').run('fadeOut', {
            duration: 0
        }).get(0).pause();
        $t1.run('stop').run('fadeOut', {
            duration: 0
        });
        $t2.run('stop').run('fadeOut', {
            duration: 0
        });
    }
    ,
    hide_2: function () {
        var $page = $stage.find('.scene').eq(2);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        var utime = 1500;
        $t1.run('stop').run({
            opacity: 0,
            marginTop: 0
        }, {
            duration: 0
        });
        $sign.removeClass('show');
        $video.run('stop').run('fadeOut', {
            duration: 0
        }).get(0).pause();
    }
    ,
    hide_3: function () {
        var $page = $stage.find('.scene').eq(3);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        var utime = 1500;
        $t1.run({
            opacity: 0,
            marginTop: '-10%'
        }, {
            duration: 0
        });
        $sign.removeClass('show');
        $video.run('stop').run('fadeOut', {
            duration: 0
        }).get(0).pause();
    }
    ,
    hide_4: function () {
        var $page = $stage.find('.scene').eq(4);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        var utime = 1500;
        $t1.run('stop').run({
            opacity: 0,
            marginTop: '-25%'
        }, {
            duration: 0
        });
        $sign.removeClass('show');
        $video.run('stop').run('fadeOut', {
            duration: 0
        }).get(0).pause();
    }
    ,
    hide_5: function () {
        var $page = $stage.find('.scene').eq(5);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        var utime = 1500;
        $t1.run('stop').run({
            opacity: 0,
            marginTop: '-25%'
        }, {
            duration: 0
        });
        $sign.removeClass('show');
        $video.run('stop').run('fadeOut', {
            duration: 0
        }).get(0).pause();
    }
    ,
    hide_6: function () {
        var $page = $stage.find('.scene').eq(6);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        var utime = 1500;
        $t1.run('stop').run({
            opacity: 0,
            marginTop: '-20%'
        }, {
            duration: 0
        });
        $sign.removeClass('show');
        $video.run('stop').run('fadeOut', {
            duration: 0
        }).get(0).pause();
    }
    ,
    hide_7: function () {
        var $page = $stage.find('.scene').eq(7);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        var utime = 1500;
        $t1.run('stop').run({
            opacity: 0,
            marginTop: '-22%'
        }, {
            duration: 0
        });
        $sign.removeClass('show');
        $video.run('stop').run('fadeOut', {
            duration: 0
        }).get(0).pause();
    }
    ,
    hide_8: function () {
        var $page = $stage.find('.scene').eq(8);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        var utime = 1500;
        $t1.run('stop').run({
            opacity: 0,
            marginTop: '-10%'
        }, {
            duration: 0
        });
        $sign.removeClass('show');
        $video.run('stop').run('fadeOut', {
            duration: 0
        }).get(0).pause();
    }
    ,
    hide_9: function () {
        var $page = $stage.find('.scene').eq(9);
        var $t1 = $page.find('.t1');
        var $sign = $page.find('.sign');
        var $video = $page.find('video');
        var utime = 1500;
        $t1.run('stop').run({
            opacity: 0,
            marginTop: '-10%'
        }, {
            duration: 0
        });
        $sign.removeClass('show');
        $video.run('stop').run('fadeOut', {
            duration: 0
        }).get(0).pause();
    }
}

init();


var hostname = location.host.indexOf("ds.com.cn") == -1 ? 'http://www.ds.com.cn/mp_test/' : '../../';

function dsajax(obj) {
    var that = this;
    this.url = obj.url;
    this.data = obj.data == undefined ? "" : obj.data;
    this.sucfun = obj.success == undefined ? "" : obj.success;
    $.ajax({
        type: "post",
        url: that.url,
        async: true,
        dataType: 'json',
        data: that.data,
        success: that.sucfun
    });
};
var dsSelect = {
    city: "",
    dealers: "",
    //初始化
    init: function (a, b, c) {
        $.getJSON("/json/dealer.json", function (res) {
            dsSelect.dealers = res.dealers;
            $.getJSON("/json/arealist.json", function (res) {
                dsSelect.city = res.city_list;
                // console.log(dsSelect.city);
                dsSelect.rendering(a, b, c);
            });
        });
    },
    //第一次渲染
    rendering: function (a, b, c) {
        $.each(dsSelect.city, function (i, n) {
            var that = i
            var thatname = n.AreaName
            $.each(dsSelect.city[i].city, function (i, n) {
                if (n.IsHot == "1") {
                    var opt = "<option value=" + that + ">" + thatname + "</option>"
                    $(a).append(opt);
                    return false
                }
            })

        });
        $.each(dsSelect.city[$(a).val()].city, function (i, n) {
            if (n.IsHot == "1") {
                var opt = "<option value=" + i + ">" + n.AreaName + "</option>"
                $(b).append(opt)
            }

        });
        $(c).html("<option value=''>请选择经销商</option>");
        $.each(dsSelect.dealers, function (i, n) {
            if (n.city == $(b).val()) {
                var opt = "<option value=" + n.code + ">" + n.fullname + "</option>"
                $(c).append(opt)
            }
        });
        dsSelect.selectChange(a, b, c);
    },
    //change
    selectChange: function (a, b, c) {
        var Sprovince = $(a);
        var Scity = $(b);
        var Sdistributor = $(c);
        Sprovince.on("change", function () {
            Scity.html("");
            $.each(dsSelect.city[$(this).val()].city, function (i, n) {
                if (n.IsHot == "1") {
                    var opt = "<option value=" + i + ">" + n.AreaName + "</option>"
                    Scity.append(opt)
                }
            });
            Sdistributor.html("<option value=''>请选择经销商</option>");
            $.each(dsSelect.dealers, function (i, n) {
                if (n.city == Scity.val()) {
                    // console.log(n.city)
                    var opt = "<option value=" + n.code + ">" + n.fullname + "</option>"
                    Sdistributor.append(opt)
                }

            });
        })
        Scity.on("change", function () {
            Sdistributor.html("<option value=''>请选择经销商</option>");
            $.each(dsSelect.dealers, function (i, n) {
                if (n.city == Scity.val()) {
                    var opt = "<option  value=" + n.code + ">" + n.fullname + "</option>"
                    Sdistributor.append(opt)
                }

            });
        })
    }
};

function limitLength(value, byteLength) {
    var newvalue = value.replace(/[^\x00-\xff]/g, "**");
    var length = newvalue.length;

    //当填写的字节数小于设置的字节数
    if (length * 1 <= byteLength * 1) {
        return;
    }
    var limitDate = newvalue.substr(0, byteLength);
    var count = 0;
    var limitvalue = "";
    for (var i = 0; i < limitDate.length; i++) {
        var flat = limitDate.substr(i, 1);
        if (flat == "*") {
            count++;
        }
    }
    var size = 0;
    var istar = newvalue.substr(byteLength * 1 - 1, 1); //校验点是否为“×”

    //if 基点是×; 判断在基点内有×为偶数还是奇数
    if (count % 2 == 0) {
        //当为偶数时
        size = count / 2 + (byteLength * 1 - count);
        limitvalue = value.substr(0, size);
    } else {
        //当为奇数时
        size = (count - 1) / 2 + (byteLength * 1 - count);
        limitvalue = value.substr(0, size);
    }
    $("input[name='name']").val(limitvalue)
    return;
}

// dsSelect.init(".shenfen", ".shi", ".jxs");


function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}