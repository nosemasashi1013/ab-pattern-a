import "../stylesheets/main.scss";
import Cookies from "js-cookie";
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
	faCheck,
	faAngleRight,
	faAngleDown,
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
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

$(function () {
	library.add(
		faCheck,
		faAngleRight,
		faAngleDown,
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
		faCaretDown
	);

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

	$(".checkbox__input, .radio__input")
		.filter(":checked")
		.parent()
		.css("background-color", "#008660");

	$("input[name=target]").on("change", function () {
		changeFilterColor("target");
	});

	$("input[name=category]").on("change", function () {
		changeFilterColor("category");
	});
	$("input[name=life-scene]").on("change", function () {
		changeFilterColor("life-scene");
	});
	$("input[name=status]").on("change", function () {
		changeFilterColor("status");
	});
	$("input[name=matters]").on("change", function () {
		changeFilterColor("matters");
	});

	$(".new-info-filter").on("change", function () {
		searchFilter();
	});

	$(".accordion-trigger").on("click", function () {
		if ($(this).attr("aria-expanded") === "true") {
			$(this).attr("aria-expanded", "false");
			$(this)
				.parents(".accordion__list")
				.find(".accordion-panel")
				.attr("aria-hidden", "true");
		} else {
			$(this).attr("aria-expanded", "true");
			$(this)
				.parents(".accordion__list")
				.find(".accordion-panel")
				.attr("aria-hidden", "false");
		}
	});

	$("button[role='tab']").on("click", function () {
		const $this = $(this);
		$this.parent().find("button[role='tab']").attr("aria-selected", "false");

		$this.attr("aria-selected") === "false"
			? $this.attr("aria-selected", "true")
			: $this.attr("aria-selected", "false");

		const $tabPanel = $this.parents(".tabs").find("div[role='tabpanel']");

		$tabPanel.each(function (i, el) {
			$(el).attr("id") === $this.attr("aria-controls")
				? $(el).attr("aria-hidden", "false")
				: $(el).attr("aria-hidden", "true");
		});
	});

	$('a[href^="#"]').on("click", function () {
		$(".anchor-nav-list__item").css("border-bottom", "2px solid transparent");
		$(this)
			.parent(".anchor-nav-list__item")
			.css("border-bottom", "2px solid #008660");

		const adjust = 0;
		const speed = 400;
		var href = $(this).attr("href");
		const target = $(href === "#" || href === "" ? "html" : href);
		const position = target.offset().top + adjust;
		$("body,html").animate({ scrollTop: position }, speed, "swing");
		return false;
	});
	$(".anchor-nav-list__item:first").css("border-bottom", "2px solid #008660");

	$(".alert-trigger__btn").on("click", function () {
		if ($(".section-content__alert").attr("aria-hidden") === "true") {
			$(".section-content__alert").attr("aria-hidden", "false");
			$(".alert-trigger__btn").attr("aria-expanded", "true");
		} else {
			$(".section-content__alert").attr("aria-hidden", "true");
			$(".alert-trigger__btn").attr("aria-expanded", "false");
		}
	});

	dom.i2svg();
});

const hideClass = "is-hide";

/**
 * 新着情報リストの絞り込みを行う
 */
function searchFilter() {
	const $newInfoItems = $(".new-info-item");
	const selectedTarget = $(".target-item")
		.find("input:checked")[0]
		.getAttribute("value");
	const selectedCategories = $(".category-item")
		.find("input:checked")
		.map((_, i) => i.getAttribute("value"));

	$newInfoItems.addClass(hideClass);
	$(".no-info-text").toggleClass(hideClass, selectedCategories.length !== 0);
	$newInfoItems
		.filter((_, item) =>
			selectedTarget === "general" || selectedTarget === "business"
				? $(item).data(`target-${selectedTarget}`)
				: true
		)
		.filter((_, item) =>
			[...selectedCategories].includes($(item).data("category"))
		)
		.removeClass(hideClass);
}

/**
 * 新着フィルターの色を変える
 * @param {string} name 対象にするinputのname属性の値
 */
function changeFilterColor(name) {
	$("input[name=" + name + "]").each(function (i, el) {
		$(el).prop("checked")
			? $(this).parent().css("background-color", "#008660")
			: $(this).parent().removeAttr("style");
	});
}
