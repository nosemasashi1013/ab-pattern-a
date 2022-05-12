import Cookies from "js-cookie";

/**
 * 文字色切替
 */
export const setFontColor = () => {
	if (!Cookies.get("font-color")) {
		Cookies.set("font-color", "black", { expires: 1, path: "/" });
	}
	$("body").attr("data-color", Cookies.get("font-color"));

	$(".x-color-trigger").on("click", function () {
		let color = $(this).data("color");
		$("body").attr("data-color", color);
		Cookies.set("font-color", color, { expires: 1, path: "/" });
	});

	$(".x-color-trigger[data-color=" + Cookies.get("font-color") + "]")
		.find("input")
		.map(function (index, dom) {
			$(dom).prop("checked", true);
		});
};

/**
 * 文字サイズ切替
 */
export const setFontSize = () => {
	if (!Cookies.get("font-size")) {
		Cookies.set("font-size", "regular", { expires: 1, path: "/" });
	}
	$("body").attr("data-size", Cookies.get("font-size"));

	$(".x-size-trigger").on("click", function () {
		let size = $(this).data("size");
		$("body").attr("data-size", size);
		Cookies.set("font-size", size, { expires: 1, path: "/" });
	});

	$(".x-size-trigger[data-size=" + Cookies.get("font-size") + "]")
		.find("input")
		.map(function (index, dom) {
			$(dom).prop("checked", true);
		});
};

/**
 * 言語切替
 */
export const selectLanguage = () => {
	$(".x-language-trigger").on("change", function (e) {
		let link = $(e.target).find("option:selected").first().val();

		if (link) {
			e.preventDefault();
			window.location.href = link;
		}
	});
};
