const $menu = $(".menu");
const $navi = $(".header__navi");
const $menuText = $(".menu__text");
export const toggleMenu = () => {
	$menu.on("click", function () {
		if ($(this).attr("aria-expanded") === "false") {
			$(this).attr("aria-expanded", true);
			$navi.attr("aria-hidden", false);
			$(".open").hide();
			$(".close").show();
			$menuText.text("閉じる");
		} else {
			$(this).attr("aria-expanded", false);
			$navi.attr("aria-hidden", true);
			$(".open").show();
			$(".close").hide();
			$menuText.text("メニュー");
		}
	});
};

export const moveFocus = () => {
	if ($menu.attr("aria-expanded") === false) return true;
	$(".global-navi__link:last").on("focusout", function () {
		$menu[0].focus();
	});
};
