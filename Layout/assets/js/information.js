(function ($) {
    $.information = {
        presentTime: '.present-time',

        _init: function () {
            this.handleEvent();
            this.onClickIcon();

        },
        handleEvent: function () {
            var curDate = new Date();
            // Ngày hiện tại
            var curDay =  curDate.getDate() < 10 ? "0" + curDate.getDate() : curDate.getDate();

            // Tháng hiện tại
            var curMonth = curDate.getMonth() + 1;

            // Năm hiện tại
            var curYear = curDate.getFullYear();

            // Giờ hiện tại
            var hours = curDate.getHours() < 10 ? "0" + curDate.getHours() : curDate.getHours();

            //Phút hiện tại
            var minutes =  curDate.getMinutes() < 10 ? "0" + curDate.getMinutes() : curDate.getMinutes();

            $(".present-time").text(curYear + "/" + curMonth + "/" + curDay);
            $(".current-time").text( hours + ":" + minutes);
        },
        onClickIcon: function (){

        }
    }
})(jQuery);
$(document).ready(function () {
    $.information._init();
});
