import "../stylesheets/main.scss";
import Cookies from "js-cookie";
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
	faCheck,
	faAngleRight,
	faSearch,
	faExclamationCircle,
	faArrowRight,
	faArrowDown,
	faTimes,
	faPhoneAlt,
	faExclamationTriangle,
	faRss,
	faArrowCircleUp,
	faInfoCircle,
	faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import isMobile from "ismobilejs";

$(function () {
	library.add(
		faCheck,
		faAngleRight,
		faSearch,
		faExclamationCircle,
		faArrowRight,
		faArrowDown,
		faTimes,
		faPhoneAlt,
		faExclamationTriangle,
		faRss,
		faArrowCircleUp,
		faInfoCircle,
		faChevronCircleRight
	);

	$(".x-global-mune-trigger").on("click", function () {
		$(".x-header").toggleClass("is-active");
		$(".x-header").hasClass("is-active")
			? $(this).find(".menu-text").text("閉じる")
			: $(this).find(".menu-text").text("メニュー");
	});

	$(".x-search-menu-trigger").on("click", function () {
		$(".x-header").removeClass("search-active");
		$(".search-box-header").attr("placeholder", "検索");
		$(".x-global-mune-trigger").find(".menu-text").text("メニュー");
	});

	$(".search-box-header").on("click", function () {
		$(".x-header").removeClass("is-active");
		$(".x-header").addClass("search-active");
		$(".search-box-header").attr("placeholder", "キーワード検索");
		$(".x-global-mune-trigger").find(".menu-text").text("メニュー");
	});

	$(".x-accordion-trigger").on("click", function () {
		$(this).parents(".section-content").toggleClass("is-active");
		resetFixedPosition();
	});

	$(".section-filter-title").on("click", function () {
		$(this).parents(".section-content").toggleClass("is-active");
	});

	var colorName = Cookies.get("font-color")
		? Cookies.get("font-color")
		: "black";
	var fontSize = Cookies.get("font-size")
		? Cookies.get("font-size")
		: "regular";

	if (!Cookies.get("font-size")) {
		Cookies.set("font-size", "regular", { expires: 1, path: "/" });
	}

	if (!Cookies.get("font-color")) {
		Cookies.set("font-color", "black", { expires: 1, path: "/" });
	}
	$("body").attr("data-color", Cookies.get("font-color"));
	$("body").attr("data-size", Cookies.get("font-size"));

	$(".x-color-trigger[data-color=" + Cookies.get("font-color") + "]")
		.find("input")
		.map(function (index, dom) {
			$(dom).prop("checked", true);
		});

	$(".x-size-trigger[data-size=" + Cookies.get("font-size") + "]")
		.find("input")
		.map(function (index, dom) {
			$(dom).prop("checked", true);
		});

	$(".x-color-trigger").on("click", function () {
		var color = $(this).data("color");
		$("body").attr("data-color", color);
		Cookies.set("font-color", color, { expires: 1, path: "/" });
	});

	$(".x-size-trigger").on("click", function () {
		var size = $(this).data("size");
		$("body").attr("data-size", size);
		Cookies.set("font-size", size, { expires: 1, path: "/" });
		resetFixedPosition();
	});

	$(".x-language-trigger").on("change", function (e) {
		var link = $(e.target).find("option:selected").first().val();

		if (link) {
			e.preventDefault();
			window.location.href = link;
		}
	});

	$(".x-show-all").on("click", function () {
		$(this).remove();
	});

	$(window).on("load", function () {
		console.log("log");
		// log
		if (isMobile(window.navigator).phone) return;
		const afterSearchboxEl = $("body").find(".fix-search-wrapper").next();
		afterSearchboxEl.addClass("after-search-content-wrapper");
	});

	$(window).on("scroll", function () {
		if (!isMobile(window.navigator).phone) {
			fixElement(fixedPosition);
		} else if (isMobile(window.navigator).phone) {
			showSearchboxSp();
		}
	});

	$(".form-header").on("submit", function (e) {
		if ($("header").hasClass("is-active")) {
			$("header").removeClass("is-active");
		}
		if (!$("header").hasClass("search-active")) {
			e.preventDefault();
			$(".search-box-header").attr("placeholder", "キーワード検索");
			$(".x-header").addClass("search-active");
			return;
		}
		changePlaceholder(".search-box-header", e);
	});

	$(".form-main").on("submit", function (e) {
		changePlaceholder(".search-box-main", e);
	});

	$(".form-footer").on("submit", function (e) {
		changePlaceholder(".search-box-footer", e);
	});

	$(".search-box-header").on("keyup", function () {
		changePlaceholder(".search-box-header");
	});

	$(".search-box-main").on("keyup", function () {
		changePlaceholder(".search-box-main");
	});

	$(".search-box-footer").on("keyup", function () {
		changePlaceholder(".search-box-footer");
	});

	$(".new-info-filter").on("change", function () {
		searchFilter();
	});

	$(".top").on("click", function () {
		$("body,html").animate(
			{
				scrollTop: 0,
			},
			500
		);
		return false;
	});

	dom.i2svg();
});

/**
 * 検索BOXを画面上部に固定処理
 */
function fixElement(p) {
	if (window.pageYOffset >= p) {
		$(".fix-search-wrapper").addClass("searchbox-fixed");
		$(".content").css({ paddingTop: $(".fix-search-wrapper").height() });
	} else {
		$(".fix-search-wrapper").removeClass("searchbox-fixed");
		$(".content").css({ paddingTop: 0 });
	}
}

/**
 * 検索ボタン押下時に未入力の場合はplaceholderを「入力してください」に変更
 * 入力されている場合はplaceholderを「キーワード検索」に変更
 * @param {string} el 要素
 * @param {any} event イベント
 */
function changePlaceholder(el, event) {
	const inputVal = $(el).val();
	if ((!inputVal || !inputVal.match(/[^\s\t]/)) && event) {
		event.preventDefault();
		$(el).attr("placeholder", "入力してください");
	} else {
		$(el).attr("placeholder", "キーワード検索");
	}
}

let startPos = 0;

/**
 * SPヘッダー内検索BOXの表示切り替え
 */
function showSearchboxSp() {
	let winScrollTop = $(window).scrollTop();
	let elemTop = $(".content-search-wrapper").offset().top;
	if (elemTop < winScrollTop) {
		$(".content-search").removeClass("display-none");
	} else {
		$(".content-search").addClass("display-none");
		$(".x-header").removeClass("search-active");
		$(".search-box-header").attr("placeholder", "検索");
	}
	startPos = winScrollTop;
}
