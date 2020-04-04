$(document).ready(function () {
    svg4everybody({});

    let mainSubnavHover = () => {
        $('.main-subnav__item').hover(
            function () {
                let parentList = $(this).closest('.main-subnav__list');
                if ($(this).children('.main-subnav__list').length) {
                      let catNavHeight = $(this).children('.main-subnav__list').outerHeight();
                      if(parentList.outerHeight() < catNavHeight) {
                          parentList.css('height', catNavHeight)
                      }
                      parentList.css('width', '720')
                }
            }, function () {
                let parentList = $(this).closest('.main-subnav__list');
                parentList.css('height', 'auto');
                parentList.css('width', 'auto');
            }
        )
    };

    let openSearchForm = () =>{
        $(document).on('click', '.search__icon', function () {
            $(this).parent().addClass('search--open')
        })
    };

    let closeSearchForm = () =>{
        $(document).on('click', function (e){
		let div = $(".search--open");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			div.removeClass('search--open');
		}
	});
    };

    let clearSearchForm = () => {
       $(document).on('click', '.search__clear', function () {
            $('.search__input').val('');
        })
    };

    let bannerSlider = () => {
        $('.js-banner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '.banner__navigation--next',
            nextArrow: '.banner__navigation--prev',
            dots: true,
            customPaging: function (slider, i) {
                return '<a class="banner__dots" /></a>';
            },
            appendDots: '.banner__dot'
        })
    };

    let tabs = function () {
        $('.tabs-navigation__item').on('click', function () {
             let tabName = $(this).attr('show-tab');
            $(this).addClass('tabs-navigation__item--active').siblings()
                .removeClass('tabs-navigation__item--active');
            $('.tabs__body .' + tabName).addClass('tab--active').siblings().removeClass('tab--active')
        })
    };

    openSearchForm();
    closeSearchForm();
    mainSubnavHover();
    clearSearchForm();
    bannerSlider();
    tabs();
});


// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}
