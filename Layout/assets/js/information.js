(function ($) {
    $.information = {
        presentTime: '.present-time',
        jsHoverIcon: '.box-menu',
        jsIconLogo: '.icon-logo',
        jsIconOpen: '.open-icon',
        jsIconClose: '.close-icon',
        jsIconClick: '.content-information',
        showDetailInfo: '.detail-title',
        iconMenu: '.header-left-mobile',
        jsCloseSideBar: '#btn-click-close',


        _init: function () {
            this.handleEvent();
            this.hoverIcon();
            this.changeIcon();
            this.showSidebarMenu();

        },
        handleEvent: function () {
            var curDate = new Date();
            var curDay = curDate.getDate() < 10 ? "0" + curDate.getDate() : curDate.getDate();
            var curMonth = curDate.getMonth() + 1;
            var curYear = curDate.getFullYear();
            var hours = curDate.getHours() < 10 ? "0" + curDate.getHours() : curDate.getHours();
            var minutes = curDate.getMinutes() < 10 ? "0" + curDate.getMinutes() : curDate.getMinutes();

            $(".present-time").text(curYear + "/" + curMonth + "/" + curDay);
            $(".current-time").text(hours + ":" + minutes);
        },

        hoverIcon: function () {
            var el = this;
            $(el.jsHoverIcon).hover(function () {
                var imgHover = $(this).find('.img-hover').attr("src");
                $(this).find('.img-home').attr("src", imgHover);
            }, function () {
                var imgHover = $(this).find('.img-default').attr("src");
                $(this).find('.img-home').attr("src", imgHover);
            });
        },
        changeIcon: function () {
            var el = this;
            $(el.jsIconClick).click(function () {
                if ($(this).find('.close-icon').is(":hidden")) {
                    $(this).find('.open-icon').css('display', 'none');
                    $(this).find('.close-icon').css('display', 'block');
                    $(this).find('.detail-title').slideDown();
                } else {
                    $(this).find('.close-icon').css('display', 'none');
                    $(this).find('.open-icon').css('display', 'block');
                    $(this).find('.detail-title').slideUp();
                }
            });
        },
        showSidebarMenu: function (){
            var el = this;
            $(el.iconMenu).click(function (){
                console.log('test');
                $('.menu-sidebar').show();
            });
            $(el.jsCloseSideBar).click(function (){
                $('.menu-sidebar').hide();
            })
        }

    }
})(jQuery);
$(document).ready(function () {
    $.information._init();
});
