$.fn.popup = function() { 	//функция для открытия всплывающего окна:
    this.css('position', 'fixed').fadeIn();	//задаем абсолютное позиционирование и эффект открытия
    //махинации с положением сверху:учитывается высота самого блока, экрана и позиции на странице:
    this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop() + 'px');
    //слева задается отступ, учитывается ширина самого блока и половина ширины экрана
    this.css('left', ($(window).width() - this.width()) / 2  + 'px');
    //открываем тень с эффектом:
    $('.backpopup').fadeIn();
}
$(document).ready(function(){	//при загрузке страницы:
    $('.backpopup,.close').click(function(){ //событие клик на тень и крестик - закрываем окно и тень:
        $('.popup-window').fadeOut();
        $('.backpopup').fadeOut();
    });
});

$(document).ready(function(){	//при загрузке страницы:
    $('.popup-window').popup();	//открыть всплывающее окно при загрузке сайта
});