$('.test__in-slider').owlCarousel({
    nav: false,
    dots: false,
    items: 1,
    loop: false,
    margin: 0,
    mouseDrag: false,
    touchDrag: false,
    autoHeight:true
});

$(".js-testSliderNextBtn").on('click', function() {
  setTimeout(
      $('.test__in-slider .owl-next').trigger('click')
      , 1000);
});
$(".js-test-footer__btn").on('click', function() {
     var id  = $(this).attr('data-link'),
     top = $(id).offset().top;
     $('body,html').animate({scrollTop: top}, 900)
  setTimeout(
      $('.test__in-slider .owl-prev').trigger('click')
      , 1000);
});
$(() => {
    $.fn.select2.amd.define('select2/i18n/ru',[],function () {
        // Russian
        return {
            errorLoading: function () {
                return 'Результат не может быть загружен.';
            },
            inputTooLong: function (args) {
                var overChars = args.input.length - args.maximum;
                var message = 'Пожалуйста, удалите ' + overChars + ' символ';
                if (overChars >= 2 && overChars <= 4) {
                    message += 'а';
                } else if (overChars >= 5) {
                    message += 'ов';
                }
                return message;
            },
            inputTooShort: function (args) {
                var remainingChars = args.minimum - args.input.length;

                var message = 'Пожалуйста, введите ' + remainingChars + ' или более символов';

                return message;
            },
            loadingMore: function () {
                return 'Загружаем ещё ресурсы…';
            },
            maximumSelected: function (args) {
                var message = 'Вы можете выбрать ' + args.maximum + ' элемент';

                if (args.maximum  >= 2 && args.maximum <= 4) {
                    message += 'а';
                } else if (args.maximum >= 5) {
                    message += 'ов';
                }

                return message;
            },
            noResults: function () {
                return 'Ничего не найдено';
            },
            searching: function () {
                return 'Поиск…';
            }
        };
    });
    $(".js-select").select2({
        language: "ru",
        minimumResultsForSearch: -1
    });
});