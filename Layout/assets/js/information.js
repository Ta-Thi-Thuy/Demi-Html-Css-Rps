(function ($) {
    $.information = {
        presentTime: '.present-time',
        jsHoverIcon: '.box-menu',
        jsIconLogo: '.icon-logo',
        jsIconOpen: '.open-icon',
        jsIconClose: '.close-icon',
        jsIconClick: '.content-information',
        showDetailInfo: '.detail-title',

        _init: function () {
            this.handleEvent();
            this.hoverIcon();
            this.changeIcon();

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
                //console.log('test');
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
                $(el.jsIconClose).show();
                $(el.jsIconOpen).hide();
                // var imgOpen = $(this).find('.close-icon').attr("src");
                // console.log(imgOpen,'close');
                // $(this).find('.open-icon').attr("src", imgOpen);
               console.log('open');
                $(this).find('.detail-title').slideDown('show');

            });
                // $(el.jsIconClick).click(function () {
                //     $(el.jsIconClose).hide();
                //     $(el.jsIconOpen).show();
                // console.log('test');
                // // var imgClose = $(this).find('.open-icon-default').attr("src");
                // // $(this).find('.open-icon').attr("src", imgClose);
                // $(this).find('.detail-title').slideUp();
            // });

        }

    }
})(jQuery);
$(document).ready(function () {
    $.information._init();
});
